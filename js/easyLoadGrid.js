define("esri/asyn/ExtrudeGridLayer", [
	'dojo/_base/declare',
	'dojo/_base/lang',
	'dojo/on',
	'esri/graphic',
	"esri/layers/FeatureLayer",
], function(declare, lang, on, Graphic, FeatureLayer) {

	/**
	 * 根据经纬度，计算行列号
	 * @x 经度
	 * @y 纬度
	 * @z 层级
	 * */
	function _calGrid(x, y, z) {
		//分辨率
		const resolution = [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125,
			2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226,
			76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508,
			2.388657133579254, 1.194328566789627, 0.5971642833948135, 0.29858214169740677, 0.14929107084870338,
			0.07464553542435169, 0.037322767712175846, 0.018661383856087923, 0.009330691928043961, 0.004665345964021981,
			0.0023326729820109904, 0.0011663364910054952, 5.831682455027476E-4, 2.915841227513738E-4,
			1.457920613756869E-4
		];
		//起始点
		const origin = [-2.003750834E7, 2.003750834E7];
		//切片大小
		const tilesize = 256;
		//列号
		let col = Math.floor(Math.abs(origin[1] - y) / (tilesize * resolution[z]));
		//行号
		let row = Math.floor(Math.abs(origin[0] - x) / (tilesize * resolution[z]));
		return {
			col: col,
			row: row
		}
	}

	/**
	 * 经纬度转墨卡托
	 * @param poi 经纬度
	 * @returns {{}}
	 * @private
	 */
	function _getMercator(poi) {
		var mercator = {};
		var earthRad = 6378137.0;
		mercator.x = poi.lng * Math.PI / 180 * earthRad;
		var a = poi.lat * Math.PI / 180;
		mercator.y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
		return mercator;
	}

	/**
	 * 墨卡托转经纬度
	 * @param poi 墨卡托
	 * @returns {{}}
	 * @private
	 */
	function _getLngLat(poi) {
		var lnglat = {};
		lnglat.lng = poi.x / 20037508.34 * 180;
		var mmy = poi.y / 20037508.34 * 180;
		lnglat.lat = 180 / Math.PI * (2 * Math.atan(Math.exp(mmy * Math.PI / 180)) - Math.PI / 2);
		return lnglat;
	}

	/**
	 * 计算网格的id集合
	 * @view 视图
	 */
	function _getGridIds(view) {
		let _extent = view.extent;
		let minpoi = _getLngLat(_extent.xmin, _extent.ymin); //最小点经纬度
		let maxpoi = _getLngLat(_extent.xmax, _extent.ymax); //最大点经纬度

		let extent = [minpoi.xmin, minpoi.ymin, maxpoi.xmax, maxpoi.ymax]; //范围

		let minrowcol = _calGrid(minpoi.xmin, minpoi.ymin, 18); //最小点所在行列号
		let maxrowcol = _calGrid(maxpoi.xmax, maxpoi.ymax, 18); //最大点所在行列号

		let _camera = view.camera;

		let _zoom = Math.floor(view.zoom);

	}
	/**
	 * 假设对图片上任意点(x, y)， 绕一个坐标点(rx0, ry0) 逆时针旋转a角度后的新的坐标设为(x0, y0)
	 * */
	function unroate(p, p0, a) {
		if(a) {
			a = Math.PI / 180 * a;
		}
		x = (p.x - p0.x) * Math.cos(a) - (p.y - p0.y) * Math.sin(a) + p0.x;
		y = (p.x - p0.x) * Math.sin(a) + (p.y - p0.y) * Math.cos(a) + p0.y;
		return {
			x: x,
			y: y
		}
	}

	/**
	 * （x1，y1）为要转的点，（x2,y2）为中心点，如果是顺时针角度为θ
	 * */
	function roate(p, p0, a) {
		if(a) {
			a = Math.PI / 180 * a;
		}
		x = (p.x - p0.x) * Math.cos(a) - (p.y - p0.y) * Math.sin(a) + p0.x;
		y = (p.y - p0.y) * Math.cos(a) + (p.x - p0.x) * Math.sin(a) + p0.y;
		return {
			x: x,
			y: y
		}
	}

	function applyEdits() {

	}

	declare = declare(FeatureLayer, {
		_view: null,
		_featureLayer: null,
		constructor: function(options) {
			this._view = options.view;

		}
	})
	//applyEdits()

})