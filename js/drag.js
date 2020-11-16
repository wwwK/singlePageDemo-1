
var newdrag = function(bar, target, callback, b) {
	b = b || document.body;
	var d = new Object();
	d.params = {
		left: 0,
		top: 0,
		currentX: 0,
		currentY: 0,
		flag: false
	};
	//获取相关CSS属性
	d.getCss = function(o, key) {
		return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
	};

	//拖拽的实现
	d.startDrag = function() {

		if(d.getCss(target, "left") !== "auto") {
			d.params.left = d.getCss(target, "left");
		}
		if(d.getCss(target, "top") !== "auto") {
			d.params.top = d.getCss(target, "top");
		}
		//o是移动对象
		bar.onmousedown = function(event) {
			d.params.flag = true;
			if(!event) {
				event = window.event;
				//防止IE文字选中
				bar.onselectstart = function() {
					return false;
				}
			}
			var e = event;
			d.params.currentX = e.clientX;
			d.params.currentY = e.clientY;
			document.onmouseup = function() {
				d.params.flag = false;
				if(d.getCss(target, "left") !== "auto") {
					d.params.left = d.getCss(target, "left");
				}
				if(d.getCss(target, "top") !== "auto") {
					d.params.top = d.getCss(target, "top");
				}
			};
			document.onmousemove = function(event) {
				var e = event ? event : window.event;
				if(d.params.flag) {
					var nowX = e.clientX,
						nowY = e.clientY;
					var disX = nowX - d.params.currentX,
						disY = nowY - d.params.currentY;
					var left = parseInt(d.params.left) + disX;
					var top = parseInt(d.params.top) + disY
					if((b.clientWidth - target.clientWidth) > left && left >= 0) {

					} else if(left < 0) {
						left = 0
					} else {
						left = b.clientWidth - target.clientWidth;
					}

					if((b.clientHeight - target.clientHeight) < top && top >= 0) {
						top = b.clientHeight - target.clientHeight;
					} else if(top < 0) {
						top = 0
					} else {}
					target.style.left = left + "px";
					target.style.top = top + "px";

					if(typeof callback == "function") {
						callback((parseInt(d.params.left) || 0) + disX, (parseInt(d.params.top) || 0) + disY);
					}

					if(event.preventDefault) {
						event.preventDefault();
					}
					return false;
				}

			}
		};

	};
	return d;
}