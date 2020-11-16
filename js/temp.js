t.FlyLine = function() {
	function e(t, i) {
		a(this, e), this.viewer = t, this.id = i.id || 0, this.name = i.name || "", this.points = i.points;
		for(var r in c) {
			var o = c[r];
			if(i.hasOwnProperty(r) && "object" === n(i[r]))
				for(var s in o) i[r].hasOwnProperty(s) || (i[r][s] = o[s]);
			else i[r] = o
		}
		this.options = i, this._isStart = !1, this._createLine(), this._createEntity()
	}
	return r(e, [{
		key: "_createLine",
		value: function() {
			var e, t = new Cesium.SampledPositionProperty,
				i = Cesium.JulianDate.fromDate(new Date),
				a = this.points;
			if(a.length < 2) return void console.log("路线无坐标数据，无法漫游！");
			var n = this.options.speed,
				r = !haoutil.isutil.isNumber(n);
			if(2 == a.length) {
				var o = this.getPointForLineAlong(a[0], a[1], 0, .5);
				a.splice(1, 0, o), n && r && n.splice(1, 0, n[0])
			}
			for(var s, l = 0, u = 0, c = [], d = 0, h = a.length; d < h; d++) {
				var f = a[d],
					p = Cesium.Cartesian3.fromDegrees(f[0], f[1], f[2] || 0);
				if(p.lonlat = f, 0 == d) {
					var m = Cesium.JulianDate.addSeconds(i, l, new Cesium.JulianDate);
					p.time = m, p.second = l, t.addSample(m, p)
				} else {
					var g = r ? n ? n[d - 1] : 100 : n || 100,
						v = Cesium.Cartesian3.distance(p, s);
					l += Math.round(v / g * 3.6), u += v;
					var m = Cesium.JulianDate.addSeconds(i, l, new Cesium.JulianDate);
					p.time = m, p.second = l, t.addSample(m, p)
				}
				s = p, c.push(p)
			}
			this.arrLinePoint = c, e = Cesium.JulianDate.addSeconds(i, l, new Cesium.JulianDate), this.alllen = u, this.alltimes = l, this.startTime = i, this.stopTime = e, this.property = t, this.property.setInterpolationOptions({
				interpolationDegree: 2,
				interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
			})
		}
	}, {
		key: "_createEntity",
		value: function() {
			this.options.label.text = this.name;
			var e = mars3d.draw.attr.model.style2Entity(this.options.model),
				t = mars3d.draw.attr.label.style2Entity(this.options.label),
				i = mars3d.draw.attr.polyline.style2Entity(this.options.path, {});
			i.leadTime = 0, i.trailTime = this.alltimes;
			var a = new Cesium.VelocityOrientationProperty(this.property);
			this.velocityOrientation = a, this.entity = this.viewer.entities.add({
				id: this.id,
				availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
					start: this.startTime,
					stop: this.stopTime
				})]),
				position: this.property,
				orientation: a,
				model: e,
				label: t,
				path: i,
				point: {
					show: !e.show,
					color: new Cesium.Color.fromCssColorString("#ffffff").withAlpha(.01),
					pixelSize: 1
				}
			})
		}
	}, {
		key: "updateStyle",
		value: function(e) {
			for(var t in e)
				if("object" === n(e[t]) && this.options[t])
					for(var i in e[t]) this.options[t][i] = e[t][i];
				else this.options[t] = e[t]
		}
	}, {
		key: "updateAngle",
		value: function(e, t) {
			if(e) this.entity.orientation = this.velocityOrientation;
			else {
				t = t || {};
				var i = Cesium.Property.getValueOrUndefined(this.property, this.viewer.clock.currentTime, l),
					a = Cesium.Property.getValueOrUndefined(this.velocityOrientation, this.viewer.clock.currentTime, u),
					n = mars3d.matrix.getHeadingPitchRollByOrientation(i, a),
					r = n.heading,
					o = Cesium.Math.toRadians(Number(t.pitch || 0)),
					s = Cesium.Math.toRadians(Number(t.roll || 0));
				this.entity.orientation = Cesium.Transforms.headingPitchRollQuaternion(i, new Cesium.HeadingPitchRoll(r, o, s))
			}
		}
	}, {
		key: "start",
		value: function() {
			this._isStart && this.stop(), this._isStart = !0, this.viewer.clock.startTime = this.startTime.clone(), this.viewer.clock.stopTime = this.stopTime.clone(), this.viewer.clock.currentTime = this.startTime.clone(), this.viewer.clock.multiplier = 1, this.viewer.clock.shouldAnimate = !0, this.options.clockRange ? this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP : this.viewer.clock.clockRange = Cesium.ClockRange.CLAMPED, this.viewer.flyTo(this.entity), this.viewer.trackedEntity = this.entity, this.options.shadow.show && ("wall" == this.options.shadow.type ? this.addWallShading() : "cylinder" == this.options.shadow.type && this.addCylinderShading()), this.viewer.scene.preRender.addEventListener(this.preRender_eventHandler, this)
		}
	}, {
		key: "preRender_eventHandler",
		value: function(e) {
			if(this._isStart && null != this.entity) {
				switch(this.options.camera.type) {
					default: void 0 != this.viewer.trackedEntity && (this.viewer.trackedEntity = void 0);
					break;
					case "gs":
							this.viewer.trackedEntity != this.entity && (this.viewer.trackedEntity = this.entity);
						break;
					case "dy":
							this.viewer.trackedEntity != this.entity && (this.viewer.trackedEntity = this.entity),
						this.getModelMatrix(this.viewer.trackedEntity, this.viewer.clock.currentTime, o);
						var t = this.options.camera.followedX,
							i = this.options.camera.followedZ;
							this.viewer.scene.camera.lookAtTransform(o, new Cesium.Cartesian3(-t, 0, i));
						break;
					case "sd":
							this.viewer.trackedEntity != this.entity && (this.viewer.trackedEntity = this.entity),
						this.getModelMatrix(this.viewer.trackedEntity, this.viewer.clock.currentTime, o);
						var i = this.options.camera.followedZ;this.viewer.scene.camera.lookAtTransform(o, new Cesium.Cartesian3(-1, 0, i))
				}
				var a = Cesium.Property.getValueOrUndefined(this.entity.position, this.viewer.clock.currentTime, l);
				a && this.realTime(a)
			}
		}
	}, {
		key: "realTime",
		value: function(e) {
			var t = Cesium.JulianDate.secondsDifference(this.viewer.clock.currentTime, this.viewer.clock.startTime),
				i = mars3d.point.formatPositon(e),
				a = this.getFlyOkPoints(e);
			this.timeinfo = {
				time: t,
				len: a.len,
				x: i.x,
				y: i.y,
				z: i.z
			}, this.options.shadow.show && "wall" == this.options.shadow.type && this.updateWallShading(a.positions);
			var n = Cesium.Cartographic.fromCartesian(e),
				r = this.viewer.scene.globe.getHeight(n);
			if(null != r && r > 0 && (this.timeinfo.hbgd = r, this.timeinfo.ldgd = i.z - r), this.options.showGroundHeight) {
				var o = this;
				mars3d.util.terrainPolyline({
					viewer: o.viewer,
					positions: [e, e],
					calback: function(e, t) {
						if(null != e && 0 != e.length && !t) {
							var a = mars3d.point.formatPositon(e[0]).z,
								n = i.z - a;
							if(this.timeinfo.hbgd = a, this.timeinfo.ldgd = n, this.entity.label) {
								var r = haoutil.str.formatLength(this.timeinfo.z),
									o = haoutil.str.formatLength(this.timeinfo.ldgd);
								this.entity.label.text = this.name + "\n漫游高程：" + r + "\n离地距离：" + o
							}
						}
					}
				})
			}
		}
	}, {
		key: "getFlyOkPoints",
		value: function(e) {
			for(var t = [], i = 0, a = this.viewer.clock.currentTime, n = this.arrLinePoint, r = 0, o = n.length; r < o; r++) {
				var s = n[r];
				if(Cesium.JulianDate.compare(a, s.time) < 0) {
					var l = Cesium.Cartesian3.distance(e, 0 == r ? s : n[r - 1]);
					i += l;
					break
				}
				if(r > 0) {
					var l = Cesium.Cartesian3.distance(s, n[r - 1]);
					i += l
				}
				t.push(s)
			}
			return t.push(e), {
				positions: t,
				len: i
			}
		}
	}, {
		key: "getModelMatrix",
		value: function(e, t, i) {
			if(null == e) return i;
			var a = Cesium.Property.getValueOrUndefined(e.position, t, l);
			if(Cesium.defined(a)) {
				var n = Cesium.Property.getValueOrUndefined(e.orientation, t, u);
				return i = Cesium.defined(n) ? Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(n, s), a, i) : Cesium.Transforms.eastNorthUpToFixedFrame(a, void 0, i)
			}
		}
	}, {
		key: "addWallShading",
		value: function() {
			this._wall_positions = [], this._wall_minimumHeights = [], this._wall_maximumHeights = [];
			var e = this,
				t = mars3d.draw.attr.wall.style2Entity(this.options.shadow);
			t.minimumHeights = new Cesium.CallbackProperty(function(t) {
				return e._wall_minimumHeights
			}, !1), t.maximumHeights = new Cesium.CallbackProperty(function(t) {
				return e._wall_maximumHeights
			}, !1), t.positions = new Cesium.CallbackProperty(function(t) {
				var i = Cesium.Property.getValueOrUndefined(e.entity.position, e.viewer.clock.currentTime, l);
				return e._wall_positions[e._wall_positions.length - 1] = i, e._wall_positions
			}, !1), this.wallEntity = this.viewer.entities.add({
				wall: t
			})
		}
	}, {
		key: "updateWallShading",
		value: function(e) {
			for(var t = [], i = [], a = [], n = 0; n < e.length; n++) {
				t.push(e[n].clone());
				var r = Cesium.Cartographic.fromCartesian(e[n]);
				i.push(0), a.push(r.height)
			}
			this._wall_positions = t, this._wall_minimumHeights = i, this._wall_maximumHeights = a
		}
	}, {
		key: "addCylinderShading",
		value: function() {
			var e = 100,
				t = 100,
				i = this.property,
				a = mars3d.draw.attr.wall.style2Entity(this.options.shadow);
			a.length = new Cesium.CallbackProperty(function(e) {
				return t
			}, !1), a.topRadius = 0, a.bottomRadius = new Cesium.CallbackProperty(function(t) {
				return e
			}, !1), a.numberOfVerticalLines = 0, this.cylinderEntity = viewer.entities.add({
				position: new Cesium.CallbackProperty(function(a) {
					var n = Cesium.Property.getValueOrUndefined(i, a, new Cesium.Cartesian3),
						r = Cesium.Cartographic.fromCartesian(n),
						o = Cesium.Cartesian3.fromRadians(r.longitude, r.latitude, r.height / 2);
					return t = r.height, e = .3 * t, o
				}, !1),
				cylinder: a
			})
		}
	}, {
		key: "getTerrainHeight",
		value: function(e) {
			function t() {
				u++;
				var c = [a[u - 1], a[u]];
				mars3d.util.terrainPolyline({
					viewer: i.viewer,
					positions: c,
					calback: function(i, c) {
						for(var d = a[u - 1].lonlat[2], h = a[u].lonlat[2], f = (h - d) / i.length, p = 0; p < i.length; p++) {
							0 != p && (n += Cesium.Cartesian3.distance(i[p], i[p - 1])), r.push(Number(n.toFixed(1)));
							var m = mars3d.point.formatPositon(i[p]);
							l.push(m);
							var g = c ? 0 : m.z;
							o.push(g);
							var v = Number((d + f * p).toFixed(1));
							s.push(v)
						}
						u >= a.length - 1 ? e({
							arrLength: r,
							arrFxgd: s,
							arrHbgd: o,
							arrPoint: l
						}) : t()
					}
				})
			}
			var i = this,
				a = this.arrLinePoint,
				n = 0,
				r = [],
				o = [],
				s = [],
				l = [],
				u = 0;
			t()
		}
	}, {
		key: "toGeoJSON",
		value: function() {
			return this.options
		}
	}, {
		key: "toCZML",
		value: function() {
			for(var e = (this.options, this.startTime.toString()), t = this.stopTime.toString(), i = [], a = this.arrLinePoint, n = 0, r = a.length; n < r; n++) {
				var o = a[n];
				i.push(o.second), i = i.concat(o.lonlat)
			}
			var s = {
				id: this.name,
				description: this.options.remark,
				availability: e + "/" + t,
				orientation: {
					velocityReference: "#position"
				},
				position: {
					epoch: e,
					cartographicDegrees: i,
					interpolationAlgorithm: "LAGRANGE",
					interpolationDegree: 2
				}
			};
			return this.options.label.show && (s.label = {
				show: !0,
				outlineWidth: 2,
				text: this.name,
				font: "12pt 微软雅黑 Console",
				outlineColor: {
					rgba: [0, 0, 0, 255]
				},
				horizontalOrigin: "LEFT",
				fillColor: {
					rgba: [213, 255, 0, 255]
				}
			}), this.options.path.show && (s.path = {
				show: !0,
				material: {
					solidColor: {
						color: {
							rgba: [255, 0, 0, 255]
						}
					}
				},
				width: 5,
				resolution: 1,
				leadTime: 0,
				trailTime: this.alltimes
			}), this.options.model.show && (s.model = this.options.model), [{
				version: "1.0",
				id: "document",
				clock: {
					interval: e + "/" + t,
					currentTime: e,
					multiplier: 1
				}
			}, s]
		}
	}, {
		key: "stop",
		value: function() {
			this.viewer.trackedEntity = void 0, this.viewer.scene.preRender.removeEventListener(this.preRender_eventHandler, this), this._isStart = !1
		}
	}, {
		key: "destroy",
		value: function() {
			this.stop(), this.entity && (this.viewer.entities.remove(this.entity), delete this.entity), this.wallEntity && (this.viewer.entities.remove(this.wallEntity), delete this.wallEntity), this.cylinderEntity && (this.viewer.entities.remove(this.cylinderEntity), delete this.cylinderEntity)
		}
	}]), e
}()