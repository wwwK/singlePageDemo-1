var isoBand = (function() {
	var isoBand = {};
	var colorRank = [];

	/*idw算法
	 * @geoSamplePoints 采样点[[104,30,255]]
	 * @geoGridPoints 返回格网[[104,30,255]]
	 */
	var idwComputer = function(samplePoints, gridPoints, noData) {
		if(samplePoints.lenght < 3) return gridPoints;
		
		var m1 = gridPoints.length;
		//过滤noData值
		var tempPoints = [];
		for(var i = 0; i < samplePoints.length; i++) {
			if(samplePoints[i][2] === noData) continue;
			tempPoints.push(samplePoints[i]);
		}
		samplePoints = tempPoints;
		
		var m0 = samplePoints.length;
		//距离列表
		var r = [];
		for(var i = 0; i < m1; i++) {
			for(var j = 0; j < m0; j++) {
				var tmpDis = Math.sqrt(Math.pow(gridPoints[i][0] - samplePoints[j][0], 2) + Math.pow(gridPoints[i][1] - samplePoints[j][1], 2));
				r.push(tmpDis);
			}
		}
		//插值函数
		for(var i = 0; i < m1; i++) {
			//查找重复
			var ifFind = false;
			for(var j = m0 * i; j < m0 * i + m0; j++) {
				if(Math.abs(r[j]) < 0.0001) {
					gridPoints[i][2] = samplePoints[j - m0 * i][2];
					ifFind = true;
					break;
				}
			}
			if(ifFind) continue;
			var numerator = 0;
			var denominator = 0;

			for(var j = m0 * i; j < m0 * i + m0; j++) {
				numerator += samplePoints[j - m0 * i][2] / (r[j] * r[j]);
				denominator += 1 / (r[j] * r[j]);
			}
			gridPoints[i][2] = numerator / denominator;
		}
		return gridPoints;
	}
	/*计算格网
	 * * @polygn 裁剪面esri.geometry.Polygon类型
	 */
	var extentComputer = function(polygn) {
		var extent = turf.bbox(polygn);
		var cellSize = cellSizeComputer(extent);
		var yNum = Math.ceil((extent[3] - extent[1]) / cellSize);
		var xNum = Math.ceil((extent[2] - extent[0]) / cellSize);
		var grids = [];
		for(var i = -1; i < xNum + 1; i++) {
			for(var j = -1; j < yNum + 1; j++) {
				grids.push([extent[0] + cellSize * i, extent[1] + cellSize * j])
			}
		}
		return grids;
	}
	/*计算像元大小
	 * @extent 范围
	 */
	var cellSizeComputer = function(extent) {
		var height = extent[3] - extent[1];
		var length = extent[2] - extent[0];
		var cellSize = 0.0001;
		if(length >= height) {
			cellSize = (length / 100).toFixed(4);
		} else {
			cellSize = (height / 100).toFixed(4);
		}
		if(cellSize < 0.0001) cellSize = 0.0001;
		return cellSize;
	}
	/*裁剪多边形
	 * @targetPolygon 被裁剪面
	 * @sourcePolygon 基准面
	 */
	var clipPolygonComputer = function(targetPolygon, sourcePolygon) {
		var intersection = null;
		try {
			intersection = turf.intersect(targetPolygon, sourcePolygon);
		} catch(error) {
			//intersection = turf.intersect(judgePolygon(targetPolygon), sourcePolygon);
			var baseintersection = null;
			try {
				baseintersection = turf.intersect(turf.polygon([targetPolygon.geometry.coordinates[0]]), sourcePolygon);
			} catch(er) {
				baseintersection = turf.intersect(turf.polygon([targetPolygon.geometry.coordinates[0].reverse()]), sourcePolygon);
			}
			intersection = judgePolygon(targetPolygon, baseintersection);
		}
		return intersection;
	}
	/*
	 * 判断是否为合格的多边形（注意path的方向为逆时针）
	 */
	var judgePolygon = function(geojson, basepolygon) {
		var paths = [basepolygon.geometry.coordinates[0]];
		var coordinates = geojson.geometry.coordinates;
		for(var i = 1; i < coordinates.length; i++) {
			try {
				var polygon = turf.intersect(turf.polygon([coordinates[i]]), basepolygon);
				if(!polygon) continue;
				if(polygon.geometry.type == "MultiPolygon") {
					for(var j = 0; j < polygon.geometry.coordinates.length; j++) {
						for(var k = 0; k < polygon.geometry.coordinates[j].length; k++) {
							paths.push(polygon.geometry.coordinates[j][k]);
						}
					}
				} else {
					paths.push(polygon.geometry.coordinates[0]);
				}
			} catch(error) {
				var polygon = turf.intersect(turf.polygon([coordinates[i].reverse()]), basepolygon);
				if(!polygon) continue;
				if(polygon.geometry.type == "MultiPolygon") {
					for(var j = 0; j < polygon.geometry.coordinates.length; j++) {
						for(var k = 0; k < polygon.geometry.coordinates[j].length; k++) {
							paths.push(polygon.geometry.coordinates[j][k]);
						}
					}
				} else {
					paths.push(polygon.geometry.coordinates[0]);
				}
			}
		}
		return turf.polygon(paths);
	}
	/*裁剪线
	 * @targetPolygon 被裁剪面
	 * @sourcePolygon 基准面
	 */
	var clipLineComputer = function(targetLine, sourcePolygon) {
		//var sourceLine = turf.lineString(sourcePolygon.geometry.coordinates[0]);
		var split = turf.lineSplit(targetLine, sourcePolygon);
		if(!split.features.length) {
			if(turf.booleanContains(sourcePolygon, targetLine)) {
				return [targetLine];
			}
		}
		var lines = [];
		for(var i = 0; i < split.features.length; i++) {
			if(turf.booleanContains(sourcePolygon, split.features[i])) {
				lines.push(split.features[i])
			}
		}
		return lines;
	}
	/*采样点数值标注
	 * @sampleData 采样点
	 * @noData 无效值
	 */
	isoBand.labelComputer = function(sampleData, noData) {
		var graphics = [];
		var pictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB6klEQVRYR82Xz1HCUBDGv8UZ8nISO8AKhAqUCsQK1JvBg1qBUIF4EI5qBcYKxA5IBWIHcOLPgXU2mQBBEl5IIHBj5u3b33672bdLiPNrjasgnANcBKMAQsk1Z3RB6APUA8HGjfGpey2tPfjKBYwmT2AW54W15z2gPohsqPwDrqkfZRMN0B7WwXSn7XjZkwfShGU0wiBWA0jUw/HXTGKtsCMOSYpMo7JKjf8AL5MSaCrO9eTWhRM1OFfBbb67aBIE8CL/Sd353GMPyigvKhEEaI+E7kQ3qI3OSTpqquzbzgGk4ECPG10a24gbsMy6mHkA25c+iCj1YBrHkgoPoDV8A9Fl7ECSGDC/o2ZeeQDtkTSLwyT3xbYVFWrqiOC2V/6IfUEaBkwXlIn8c/hnAeiA6DSNgGLfwfxN2MW3H0bG6AoAxyZP0WAvALbffsMVc/agCLPogsHPMOtGlFUrBgawVGFPHiN38h33dvggDaCM4vw5dtOQ5UDiV+Vu2rIDS3kLzWwi8v9tOxXMvzBVKXwoFRAZy3PTTur1IM75oBo9lgeVEIi0JmQHyjjTW0wW+7ZXmPcJ1BgA3PQn4FVPgt5yOhw1QVSNATIAsw1T3SdbTpeRZX7EVECKIJLVzU+RA2ZZRLtg6qBm2Lojwx94bcWPjSBzagAAAABJRU5ErkJggg==', 8, 8);

		for(var i = 0; i < sampleData.length; i++) {
			if(sampleData[i][2] == noData) continue;
			var point = new esri.geometry.Point([sampleData[i][0], sampleData[i][1]]);
			var graphic = new esri.Graphic(point, pictureMarkerSymbol);
			var textSymbol = new esri.symbol.TextSymbol(sampleData[i][2]).setColor(
				new esri.Color([60, 94, 191])).setAlign(esri.symbol.TextSymbol.ALIGN_MIDDLE).setVerticalAlignment('bottom').setFont(
				new esri.symbol.Font("10pt").setWeight(esri.symbol.Font.WEIGHT_BOLD));
			var labelGraphic = new esri.Graphic(point, textSymbol);
			graphics.push(graphic);
			graphics.push(labelGraphic)
		}
		return graphics;
	}
	/*返回插值格点
	 * @sampleData 采样点
	 * @noData 无效值
	 * @coordinates 色斑图范围
	 * @renderData 分级
	 */
	isoBand.isobandGrid = function(sampleData, noData, coordinates) {
		var polygon = turf.polygon(coordinates);
		var gridData = extentComputer(polygon);
		var idwedGrids = idwComputer(sampleData, gridData, noData);
		return idwedGrids;
	}
	
	/*采样点生成色斑图
	 * @sampleData 采样点
	 * @noData 无效值
	 * @coordinates 色斑图范围
	 * @renderData 分级
	 */
	isoBand.isobandComputer = function(sampleData, noData, coordinates, renderData) {
		var polygon = turf.polygon(coordinates);
		var gridData = extentComputer(polygon);
		var idwedGrids = idwComputer(sampleData, gridData, noData);

		var features = [];
		for(var i = 0; i < idwedGrids.length; i++) {
			features.push(turf.point([idwedGrids[i][0], idwedGrids[i][1]], {
				v: idwedGrids[i][2]
			}))
		}
		var featureCollection = turf.featureCollection(features);
		var isopolygons = turf.isobands(featureCollection, breakComputer(renderData), {
			zProperty: 'v'
		});
		var graphics = [];
		for(var i = 0; i < isopolygons.features.length; i++) {
			for(var j = 0; j < isopolygons.features[i].geometry.coordinates.length; j++) {
				try {
					var clipedPolygon = clipPolygonComputer(turf.polygon(isopolygons.features[i].geometry.coordinates[j]), polygon);
					var simpleFillSymbol = new esri.symbol.SimpleFillSymbol();
					simpleFillSymbol.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL, new esri.Color([255, 0, 0]), 2));
					simpleFillSymbol.setColor(new esri.Color(breakRender(isopolygons.features[i].properties.v, renderData)));
					if(clipedPolygon) {
						if(clipedPolygon.geometry.type == 'Polygon') {
							var graphic = new esri.Graphic(new esri.geometry.Polygon(clipedPolygon.geometry.coordinates), simpleFillSymbol, {
								v: isopolygons.features[i].properties.v
							});
							graphics.push(graphic);
						} else if(clipedPolygon.geometry.type == 'MultiPolygon') {
							for(var k = 0; k < clipedPolygon.geometry.coordinates.length; k++) {
								var graphic = new esri.Graphic(new esri.geometry.Polygon(clipedPolygon.geometry.coordinates[k]), simpleFillSymbol, {
									v: isopolygons.features[i].properties.v
								});
								graphics.push(graphic);
							}
						}

					}
				} catch(error) {
					console.log('intersect failed!')
				}
			}
		}
		colorRank = [];
		return graphics;
	}
	/*采样点生成等值线
	 * @sampleData 采样点
	 * @noData 无效值
	 * @coordinates 色斑图范围
	 * @renderData 分级
	 */
	isoBand.isolineComputer = function(sampleData, noData, coordinates, renderData) {
		var polygon = turf.polygon(coordinates);
		var gridData = extentComputer(polygon);
		var idwedGrids = idwComputer(sampleData, gridData, noData);

		var features = [];
		for(var i = 0; i < idwedGrids.length; i++) {
			features.push(turf.point([idwedGrids[i][0], idwedGrids[i][1]], {
				v: idwedGrids[i][2]
			}))
		}
		var featureCollection = turf.featureCollection(features);
		var isolines = turf.isolines(featureCollection, breakComputer(renderData), {
			zProperty: 'v'
		});
		var graphics = [];
		var simpleLineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([169, 125, 86]), 1);
		for(var i = 0; i < isolines.features.length; i++) {
			for(var j = 0; j < isolines.features[i].geometry.coordinates.length; j++) {
				var clipedLine = clipLineComputer(turf.lineString(isolines.features[i].geometry.coordinates[j]), polygon);
				for(var k = 0; k < clipedLine.length; k++) {
					if(clipedLine[k]) {
						if(clipedLine[k].geometry.coordinates.length < 2) continue;

						var graphic = new esri.Graphic(new esri.geometry.Polyline(clipedLine[k].geometry.coordinates), simpleLineSymbol, {
							v: isolines.features[i].properties.v
						});

						graphics.push(graphic);
						var labels = textSymbolComputer(clipedLine[k].geometry.coordinates, isolines.features[i].properties.v);
						//graphics.push(labels[0]);
						graphics.push(labels[1]);
					}
				}

				//				var graphic = new esri.Graphic(new esri.geometry.Polyline(isolines.features[i].geometry.coordinates[j]), simpleLineSymbol, {
				//					v: isolines.features[i].properties.v
				//				});
				//
				//				graphics.push(graphic);
				//				var labels = textSymbolComputer(isolines.features[i].geometry.coordinates[j], isolines.features[i].properties.v);
				//				//graphics.push(labels[0]);
				//				graphics.push(labels[1]);
			}
		}
		return graphics;
	}
	/*等值线标注
	 * @path 线
	 * @label 显示值
	 */
	var textSymbolComputer = function(path, label) {
		if(path.length == 1) {
			return path[0];
		}
		if(path.length == 2) {
			var second = path[1];
			path[2] = path[1];
			path[1] = [(path[0][0] + second[0]) / 2, (path[0][1] + second[1]) / 2]
		}
		var halfLen = parseInt(path.length / 2);
		var angle = angleComputer(path[halfLen - 1], path[halfLen]);

		var textSymbol = new esri.symbol.TextSymbol(label).setColor(
			new esri.Color([0, 0, 0])).setAlign(esri.symbol.TextSymbol.ALIGN_MIDDLE).setVerticalAlignment('middle').setAngle(angle).setFont(
			new esri.symbol.Font("10pt").setWeight(esri.symbol.Font.WEIGHT_BOLD));

		var labels = [];
		var bggraphic = new esri.Graphic(new esri.geometry.Point(path[halfLen]), pathSymbolComputer(label, angle));
		var labelgraphic = new esri.Graphic(new esri.geometry.Point(path[halfLen]), textSymbol);
		labels.push(bggraphic);
		labels.push(labelgraphic);
		return labels;
	}
	/*等值线标注（创建白色背景）
	 * @label 显示值
	 * @angle 旋转角度
	 */
	var pathSymbolComputer = function(label, angle) {
		var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
		var size = 16 + label.toString().length * 8;
		var iconPath = "M0 0 L0 100 L200 100 L200 0 Z";
		markerSymbol.setPath(iconPath);
		markerSymbol.setColor(new esri.Color([255, 255, 255]));
		markerSymbol.setOutline(null);
		markerSymbol.setSize(size);
		markerSymbol.setAngle(angle);
		return markerSymbol;
	}
	/*计算两点之间斜率
	 * @p1 起点
	 * @p2 终点
	 */
	var angleComputer = function(p1, p2) {
		var x = p2[0] - p1[0];
		var y = p2[1] - p1[1];
		var hypotenuse = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
		//斜边长度
		var cos = x / hypotenuse;
		var radian = Math.acos(cos);
		//求出弧度
		angle = 180 / (Math.PI / radian);
		//用弧度算出角度
		if(y < 0) {
			angle = 360 - angle;
		} else if((y == 0) && (x < 0)) {
			angle = 180;
		}
		if(angle < 0) {
			angle = 360 + angle;
		}
		return 360 - angle;
	}
	/*等值面分级
	 * @renderData 分级
	 */
	var breakComputer = function(renderData) {
		var breaks = [];
		for(var i = 0; i < renderData.length; i++) {
			breaks.push(renderData[i].rank);
		}
		return breaks;
	}
	/*等值面着色
	 * @rank 当前值
	 * @renderData 分级
	 */
	var breakRender = function(rank, renderData) {
		if(!colorRank.length) {
			for(var i = 0; i < renderData.length - 1; i++) {
				colorRank.push({
					value: renderData[i].rank.toString() + '-' + renderData[i + 1].rank.toString(),
					color: renderData[i].color
				});
			}
		}
		for(var i = 0; i < colorRank.length; i++) {
			if(rank === colorRank[i].value) {
				return colorRank[i].color;
			}
		}
	}
	return isoBand;
})()