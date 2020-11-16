var isoBand = (function() {
	'use strict';
	var isoBand = {};
	var colorRank = [];

	var gridExtent = [];
	var gridCellSize = 0;
	var gridWidth = 0;
	var gridHeight = 0;
	/*idw算法
	 * @geoSamplePoints 采样点[[104,30,255]]
	 * @geoGridPoints 返回格网[[104,30,255]]
	 */
	var idwComputer = function(samplePoints, gridPoints, noData) {
		if(samplePoints.lenght < 3) return gridPoints;
		var m = samplePoints.length;
		var m1 = gridPoints.length;
		//过滤noData值
		var tempPoints = [];
		for(var i = 0; i < m; i++) {
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

		gridExtent = extent;
		gridCellSize = cellSize;
		gridWidth = xNum + 3;
		gridHeight = yNum + 3;
		var grids = [];
		//		for(var i = -1; i < xNum + 2; i++) {
		//			for(var j = -1; j < yNum + 2; j++) {
		//				grids.push([extent[0] + cellSize * i, extent[1] + cellSize * j])
		//			}
		//		}
		//		for(var i = -1; i < yNum + 2; i++) {
		//			for(var j = xNum + 1; j > -2; j--) {
		//				grids.push([extent[0] + cellSize * j, extent[1] + cellSize * i])
		//			}
		//		}
		for(var i = yNum + 1; i > -2; i--) {
			for(var j = -1; j < xNum + 2; j++) {
				grids.push([extent[0] + cellSize * j, extent[1] + cellSize * i])
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
	 * 多面裁剪多面
	 */
	var multiPolygonClip = function(multiPolygonA, multiPolygonB) {
		var difference = turf.difference(turf.multiPolygon(multiPolygonA), turf.multiPolygon(multiPolygonB));
		return difference;
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

		var gridValues = [];
		for(var i = 0; i < idwedGrids.length; i++) {
			gridValues.push(idwedGrids[i][2])
		}
		var breakClass = [];
		for(var i = 0; i < renderData.length; i++) {
			breakClass.push(renderData[i].rank);
		}

		var multipolygons = d3.contours().size([gridWidth, gridHeight]).thresholds(breakClass)(gridValues)

		var isomultipolygons = [];
		multipolygons.forEach(function(item) {
			if(item.coordinates.length) {
				isomultipolygons.push(item);
			}
		})
		var realpolygons = [];
		var minv = Math.min.apply(null, gridValues);

		if(!isomultipolygons.length) return [];
		if(minv <= isomultipolygons[0].value) {
			realpolygons = isomultipolygons;
		} else if(minv > isomultipolygons[isomultipolygons.length - 1].value) {
			realpolygons = [];
		} else {
			for(var i = 0; i < isomultipolygons.length; i++) {
				if(isomultipolygons[i].value > minv) {
					realpolygons.push(isomultipolygons[i - 1]);
				}
			}
			realpolygons.push(isomultipolygons[isomultipolygons.length - 1])
		}

		for(var i = 0; i < realpolygons.length; i++) {
			var coordinates = realpolygons[i].coordinates;
			for(var j = 0; j < coordinates.length; j++) {
				var firt = coordinates[j];
				for(var k = 0; k < firt.length; k++) {
					var second = firt[k];
					for(var l = 0; l < second.length; l++) {
						var x = gridExtent[0] + (second[l][0] - 1.5) * gridCellSize;
						var y = gridExtent[3] - (second[l][1] - 2.5) * gridCellSize;
						realpolygons[i].coordinates[j][k][l] = [x, y]
					}
				}
			}
		}
		var isobandPolygons = [];
		var graphics = [];
		for(var i = 0; i < realpolygons.length; i++) {
			isobandPolygons[i] = {
				value: realpolygons[i].value,
				geometry: []
			};
			for(var j = 0; j < realpolygons[i].coordinates.length; j++) {
				try {
					var clipedPolygon = clipPolygonComputer(turf.polygon(realpolygons[i].coordinates[j]), polygon);
					if(clipedPolygon) {
						if(clipedPolygon.geometry.type == 'Polygon') {
							isobandPolygons[i].geometry.push(clipedPolygon.geometry.coordinates);
						} else if(clipedPolygon.geometry.type == 'MultiPolygon') {
							isobandPolygons[i].geometry = isobandPolygons[i].geometry.concat(clipedPolygon.geometry.coordinates);
						}
					}
				} catch(error) {
					console.log('intersect failed!')
				}
			}
		}
		for(var i = 0; i < isobandPolygons.length; i++) {
			var simpleFillSymbol = new esri.symbol.SimpleFillSymbol();
			simpleFillSymbol.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL, new esri.Color([255, 0, 0]), 2));
			simpleFillSymbol.setColor(new esri.Color(breakRender(isobandPolygons[i].value, renderData)));
			if(i != isobandPolygons.length - 1) {
				var differencePolygon = multiPolygonClip(isobandPolygons[i].geometry, isobandPolygons[i + 1].geometry);
				if(!differencePolygon) continue;
				if(differencePolygon.geometry.type == 'Polygon') {
					var graphic = new esri.Graphic(new esri.geometry.Polygon(differencePolygon.geometry.coordinates), simpleFillSymbol, {
						v: isobandPolygons[i].value
					});
					graphics.push(graphic);
				} else if(differencePolygon.geometry.type == 'MultiPolygon') {
					for(var j = 0; j < differencePolygon.geometry.coordinates.length; j++) {
						var graphic = new esri.Graphic(new esri.geometry.Polygon(differencePolygon.geometry.coordinates[j]), simpleFillSymbol, {
							v: isobandPolygons[i].value
						});
						graphics.push(graphic);
					}
				}
			} else {
				for(var j = 0; j < isobandPolygons[i].geometry.length; j++) {
					var graphic = new esri.Graphic(new esri.geometry.Polygon(isobandPolygons[i].geometry[j]), simpleFillSymbol, {
						v: isobandPolygons[i].value
					});
					graphics.push(graphic);
				}
			}
		}
		colorRank = [];
		return graphics;
	}
	/*采样点生成色斑图片
	 * @sampleData 采样点
	 * @noData 无效值
	 * @coordinates 色斑图范围
	 * @renderData 分级
	 */
	isoBand.isobandPicture = function(sampleData, noData, coordinates, renderData) {
		var polygon = turf.polygon(coordinates);
		//生成网格点
		var gridData = extentComputer(polygon);
		//idw插值
		var idwedGrids = idwComputer(sampleData, gridData, noData);

		var gridValues = [];
		for(var i = 0; i < idwedGrids.length; i++) {
			gridValues.push(idwedGrids[i][2])
		}
		var breakClass = [];
		for(var i = 0; i < renderData.length; i++) {
			breakClass.push(renderData[i].rank);
		}
		//提取等值面
		var multipolygons = d3.contours().size([gridWidth, gridHeight]).thresholds(breakClass)(gridValues)

		var isomultipolygons = [];
		multipolygons.forEach(function(item) {
			if(item.coordinates.length) {
				isomultipolygons.push(item);
			}
		})

		var realpolygons = [];
		var minv = Math.min.apply(null, gridValues);

		if(!isomultipolygons.length) return [];
		if(minv <= isomultipolygons[0].value) {
			realpolygons = isomultipolygons;
		} else if(minv > isomultipolygons[isomultipolygons.length - 1].value) {
			realpolygons = [];
		} else {
			for(var i = 0; i < isomultipolygons.length; i++) {
				if(isomultipolygons[i].value > minv) {
					realpolygons.push(isomultipolygons[i - 1]);
				}
			}
			realpolygons.push(isomultipolygons[isomultipolygons.length - 1])
		}
		for(var i = 0; i < realpolygons.length; i++) {
			var coordinate = realpolygons[i].coordinates;
			for(var j = 0; j < coordinate.length; j++) {
				var firt = coordinate[j];
				for(var k = 0; k < firt.length; k++) {
					var second = firt[k];
					for(var l = 0; l < second.length; l++) {
						var x = gridExtent[0] + (second[l][0] - 1.5) * gridCellSize;
						var y = gridExtent[3] - (second[l][1] - 2.5) * gridCellSize;
						realpolygons[i].coordinates[j][k][l] = [x, y]
					}
				}
			}
		}
		
		//裁剪视图区域
		var polygon = new esri.geometry.Polygon(coordinates);
		var extent = polygon.getExtent();
		var canvas = document.createElement("canvas");
		canvas.id = "cursorLayer";
		var originX = Math.floor(extent.xmin) * 100;
		var originY = Math.floor(extent.ymin) * 100;
		var width = (Math.ceil(extent.xmax) - Math.floor(extent.xmin)) * 100;
		var height = (Math.ceil(extent.ymax) - Math.floor(extent.ymin)) * 100;
		canvas.width = width;
		canvas.height = height;
		var context = canvas.getContext("2d");
		context.beginPath();
		context.moveTo(coordinates[0][0][0] * 100 - originX, height - (coordinates[0][0][1] * 100 - originY));
		for(var i = 1; i < coordinates[0].length; i++) {
			context.lineTo(coordinates[0][i][0] * 100 - originX, height - (coordinates[0][i][1] * 100 - originY));
		}
		context.closePath();
		context.clip();
		
		for(var i = 0; i < realpolygons.length; i++) {
			for(var j = 0; j < realpolygons[i].coordinates.length; j++) {
				for(var k = 0; k < realpolygons[i].coordinates[j].length; k++) {
					var color = breakRender(realpolygons[i].value, renderData);
					context.fillStyle = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",1)"; // 内部使用白色，如不指定，默认为黑色
					context.lineWidth = 0;
					context.beginPath();
					var coordinate=realpolygons[i].coordinates[j][k];
					context.moveTo(coordinate[0][0]*100 - originX, height - (coordinate[0][1] * 100 - originY));
					for(var l = 1; l < coordinate.length; l++) {
						context.lineTo(coordinate[l][0]*100 - originX, height - (coordinate[l][1] * 100 - originY) );
					}
					context.closePath();
					context.fill();
				}
			}
		}
		var image = new Image();
		image.src = canvas.toDataURL("image/png");
		return image.src;
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

		var gridValues = [];
		for(var i = 0; i < idwedGrids.length; i++) {
			gridValues.push(idwedGrids[i][2])
		}
		var breakClass = [];
		for(var i = 0; i < renderData.length; i++) {
			breakClass.push(renderData[i].rank);
		}

		var multipolygons = d3.contours().size([gridWidth, gridHeight]).thresholds(breakClass)(gridValues)

		var isomultipolygons = [];
		multipolygons.forEach(function(item) {
			if(item.coordinates.length) {
				isomultipolygons.push(item);
			}
		})
		var realpolygons = [];
		var minv = Math.min.apply(null, gridValues);

		if(!isomultipolygons.length) return [];
		if(minv <= isomultipolygons[0].value) {
			realpolygons = isomultipolygons;
		} else if(minv > isomultipolygons[isomultipolygons.length - 1].value) {
			realpolygons = [];
		} else {
			for(var i = 0; i < isomultipolygons.length; i++) {
				if(isomultipolygons[i].value > minv) {
					realpolygons.push(isomultipolygons[i - 1]);
				}
			}
			realpolygons.push(isomultipolygons[isomultipolygons.length - 1])
		}

		for(var i = 0; i < realpolygons.length; i++) {
			var coordinates = realpolygons[i].coordinates;
			for(var j = 0; j < coordinates.length; j++) {
				var firt = coordinates[j];
				for(var k = 0; k < firt.length; k++) {
					var second = firt[k];
					for(var l = 0; l < second.length; l++) {
						var x = gridExtent[0] + (second[l][0] - 1.5) * gridCellSize;
						var y = gridExtent[3] - (second[l][1] - 2.5) * gridCellSize;
						realpolygons[i].coordinates[j][k][l] = [x, y]
					}
				}
			}
		}

		var isobandPolygons = [];
		var graphics = [];
		for(var i = 0; i < realpolygons.length; i++) {
			isobandPolygons[i] = {
				value: realpolygons[i].value,
				geometry: []
			};
			for(var j = 0; j < realpolygons[i].coordinates.length; j++) {
				try {
					var clipedPolygon = clipPolygonComputer(turf.polygon(realpolygons[i].coordinates[j]), polygon);
					if(clipedPolygon) {
						if(clipedPolygon.geometry.type == 'Polygon') {
							isobandPolygons[i].geometry.push(clipedPolygon.geometry.coordinates);
						} else if(clipedPolygon.geometry.type == 'MultiPolygon') {
							isobandPolygons[i].geometry = isobandPolygons[i].geometry.concat(clipedPolygon.geometry.coordinates);
						}
					}
				} catch(error) {
					console.log('intersect failed!')
				}
			}
		}

		for(var i = 0; i < isobandPolygons.length; i++) {
			var simpleLineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new esri.Color([169, 125, 86]), 1);
			if(i != isobandPolygons.length - 1) {
				var differencePolygon = multiPolygonClip(isobandPolygons[i].geometry, isobandPolygons[i + 1].geometry);
				if(!differencePolygon) continue;
				if(differencePolygon.geometry.type == 'Polygon') {
					var graphic = new esri.Graphic(new esri.geometry.Polyline(differencePolygon.geometry.coordinates[0]), simpleLineSymbol, {
						v: isobandPolygons[i].value
					});
					graphics.push(graphic);
					var labels = textSymbolComputer(differencePolygon.geometry.coordinates[0], isobandPolygons[i].value);
					graphics.push(labels[1]);
				} else if(differencePolygon.geometry.type == 'MultiPolygon') {
					for(var j = 0; j < differencePolygon.geometry.coordinates.length; j++) {
						var graphic = new esri.Graphic(new esri.geometry.Polyline(differencePolygon.geometry.coordinates[j][0]), simpleLineSymbol, {
							v: isobandPolygons[i].value
						});
						graphics.push(graphic);
						var labels = textSymbolComputer(differencePolygon.geometry.coordinates[j][0], isobandPolygons[i].value);
						graphics.push(labels[1]);
					}
				}
			} else {
				for(var j = 0; j < isobandPolygons[i].geometry.length; j++) {
					var graphic = new esri.Graphic(new esri.geometry.Polyline(isobandPolygons[i].geometry[j][0]), simpleLineSymbol, {
						v: isobandPolygons[i].value
					});
					graphics.push(graphic);
					var labels = textSymbolComputer(isobandPolygons[i].geometry[j][0], isobandPolygons[i].value);
					graphics.push(labels[1]);
				}
			}
		}
		colorRank = [];
		return graphics;
	}
	/*数值预报
	 * @sampleData 相对点位数值
	 * @startPoint 开始位置
	 * @longCount 横向数量
	 * @longStep 经度方向步长
	 * @latCount 纵向数量
	 * @latStep 纬度方向步长
	 * @noData 无效值
	 * @renderData 渲染色带
	 */
	isoBand.numericalForecast = function(sampleData, startPoint, longCount, longStep, latCount, latStep, noData, renderData) {
		if(!sampleData || !sampleData.length) return [];
		if(!renderData) {
			renderData = [{
					rank: 0,
					color: [255, 255, 255, 0.5]
				},
				{
					rank: 10,
					color: [1, 160, 246, 0.5]
				},
				{
					rank: 15,
					color: [0, 236, 236, 0.5]
				},
				{
					rank: 20,
					color: [0, 216, 0, 0.5]
				},
				{
					rank: 25,
					color: [1, 144, 0, 0.5]
				},
				{
					rank: 30,
					color: [255, 255, 0, 0.5]
				},
				{
					rank: 35,
					color: [231, 192, 0, 0.5]
				},
				{
					rank: 40,
					color: [255, 144, 0, 0.5]
				},
				{
					rank: 45,
					color: [255, 0, 0, 0.5]
				},
				{
					rank: 50,
					color: [214, 0, 0, 0.5]
				},
				{
					rank: 55,
					color: [192, 0, 0, 0.5]
				},
				{
					rank: 60,
					color: [255, 0, 240, 0.5]
				},
				{
					rank: 65,
					color: [150, 0, 180, 0.5]
				},
				{
					rank: 70,
					color: [173, 144, 240, 0.5]
				}
			];
		}
		if(noData == undefined || noData == null) noData = 0;

		var features = [];
		if((typeof sampleData[0]) == 'object' && sampleData[0].constructor == Array) {
			longCount = !longCount ? sampleData.length : longCount;
			latCount = !latCount ? sampleData[0].length : latCount;
			for(var i = 0; i < longCount; i++) {
				for(var j = 0; j < latCount; j++) {
					features.push({
						x: startPoint.x + i * longStep,
						y: startPoint.y + j * latStep,
						z: sampleData[i][j]
					})
				}
			}
		} else {
			longCount = !longCount ? 0.1 : longCount;
			latCount = !latCount ? 0.1 : latCount;
			for(var i = 0; i < sampleData; i++) {
				features.push({
					x: sampleData[i][0],
					y: sampleData[i][1],
					z: sampleData[i][2]
				})
			}
		}

		var graphics = [];
		for(var i = 0; i < features.length; i++) {
			var x = features[i].x;
			var y = features[i].y;
			var coordinates = [
				[x, y],
				[x + longStep, y],
				[x + longStep, y + latStep],
				[x, y + latStep],
				[x, y]
			];
			var color = getValueFromRibbon(renderData, features[i].z);
			var simpleFillSymbol = new esri.symbol.SimpleFillSymbol();
			simpleFillSymbol.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_NULL, new esri.Color([255, 0, 0]), 0.00001));
			simpleFillSymbol.setColor(new esri.Color(color));
			var graphic = new esri.Graphic(new esri.geometry.Polyline(coordinates), simpleFillSymbol, {
				v: features[i].z
			});
			graphics.push(graphic);
		}
		return graphics;
	}

	/*从色带种获取颜色
	 * @renderData 色带
	 * @value 值
	 */
	var getValueFromRibbon = function(renderData, value) {
		var defaultColor = [255, 255, 255, 0];

		if(!renderData || !renderData.length) return defaultColor;

		if(value < renderData[0].rank) return renderData[0].color;

		if(value >= renderData[renderData.length - 1].rank) return renderData[renderData.length - 1].color;

		for(var i = 0; i < renderData.length; i++) {
			if(value >= renderData[i].rank && value < renderData[i + 1].rank) {
				defaultColor = renderData[i].color;
				break;
			}
		}
		return defaultColor;
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
		var angle = 180 / (Math.PI / radian);
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
		for(var i = 0; i < renderData.length; i++) {
			if(rank === renderData[i].rank) {
				return renderData[i].color;
			}
		}
	}
	/*深拷贝
	 * @obj 对象
	 * 
	 */
	var cloneobj = function(obj) {
		var str, newobj = obj.constructor === Array ? [] : {};
		if(typeof obj !== 'object') {
			return;
		} else if(window.JSON) {
			str = JSON.stringify(obj), //系列化对象
				newobj = JSON.parse(str); //还原
		} else {
			for(var i in obj) {
				newobj[i] = typeof obj[i] === 'object' ?
					cloneObj(obj[i]) : obj[i];
			}
		}
		return newobj;
	}
	return isoBand;
})()