window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20191119"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20191119"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20191119"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20191119"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20191119"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20191119"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20191119"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20191119"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20191119"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20191119"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20191119"
        }
    }
};
window.MSV = {
    "mapstyle": {
        "updateDate": "20191009",
        "version": "001"
    }
};
window.BMAP_AUTHENTIC_KEY = "DklrpDC5om7fPL4MqsrHszHLISmZzuNu";
window.BMapGL = window.BMapGL || {};
(function(aI, cY) {
    var x = x || {
        version: "20150702",
        emptyFn: function() {}
    };
    (function() {
        x._log = [];
        var i = 0;
        var fk = {};
        x.BaseClass = function(fl) {
            fk[(this.hashCode = (fl || x.BaseClass.guid()))] = this
        }
        ;
        x.BaseClass.guid = function() {
            return "mz_" + (i++).toString(36)
        }
        ;
        x.BaseClass.create = function() {
            var fl = new x.BaseClass();
            fl.decontrol();
            return fl
        }
        ;
        var e = x.instance = x.I = function(fl) {
            return fk[fl]
        }
        ;
        x.BaseClass.prototype.dispose = function() {
            if (this.hashCode) {
                delete fk[this.hashCode]
            }
            for (var fl in this) {
                if (typeof this[fl] != "function") {
                    delete this[fl]
                }
            }
        }
        ;
        x.BaseClass.prototype.getHashCode = function() {
            if (!this.hashCode) {
                fk[(this.hashCode = x.BaseClass.guid())] = this
            }
            return this.hashCode
        }
        ;
        x.BaseClass.prototype.decontrol = function() {
            delete fk[this.hashCode]
        }
        ;
        x.BaseClass.prototype.toString = function() {
            return "[object " + (this._className || "Object") + "]"
        }
        ;
        x.BaseClass.prototype._wlog = function(fm, fn) {
            var fl = x._log;
            if (fl.length > 100) {
                fl.reverse().length = 50;
                fl.reverse()
            }
            fl[fl.length] = "[" + fm + "][" + (this._className || "Object") + " " + this.hashCode + "] " + fn
        }
    }
    )();
    Function.prototype.inherits = function(fl, fk) {
        var e, fm, fo = this.prototype, fn = function() {};
        fn.prototype = fl.prototype;
        fm = this.prototype = new fn();
        if (typeof (fk) == "string") {
            fm._className = fk
        }
        for (e in fo) {
            fm[e] = fo[e]
        }
        this.prototype.constructor = fo.constructor;
        fo = fn = null;
        return fm
    }
    ;
    x.BaseEvent = function(e, i) {
        this.type = e;
        this.returnValue = true;
        this.target = i || null;
        this.currentTarget = this.srcElement = null;
        this.cancelBubble = false;
        this.domEvent = null
    }
    ;
    x.BaseClass.prototype.on = x.BaseClass.prototype.addEventListener = function(fk, i) {
        if (typeof i !== "function") {
            return this._wlog("error", "addEventListener:" + i + " is not a function")
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        var e = this._listeners;
        if (fk.indexOf("on") !== 0) {
            fk = "on" + fk
        }
        if (typeof e[fk] !== "object") {
            e[fk] = {}
        }
        var fl = i.hashCode || x.BaseClass.guid();
        i.hashCode = fl;
        if (e[fk][fl]) {
            this._wlog("warning", "repeat key:" + fl)
        }
        e[fk][fl] = i
    }
    ;
    x.BaseClass.prototype.off = x.BaseClass.prototype.removeEventListener = function(fk, i) {
        if (typeof i == "function") {
            i = i.hashCode
        } else {
            if (typeof i != "string") {
                return
            }
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        if (fk.indexOf("on") != 0) {
            fk = "on" + fk
        }
        var e = this._listeners;
        if (!e[fk]) {
            return
        }
        if (e[fk][i]) {
            delete e[fk][i]
        }
    }
    ;
    x.BaseClass.prototype.fire = x.BaseClass.prototype.dispatchEvent = function(fl) {
        if (!this._listeners) {
            this._listeners = {}
        }
        var fk, e = this._listeners, fm = fl.type;
        fl.target = fl.srcElement = fl.target || fl.srcElement || this;
        fl.currentTarget = this;
        if (typeof this[fm] == "function") {
            this[fm](fl)
        }
        if (typeof e[fm] == "object") {
            for (fk in e[fm]) {
                if (typeof e[fm][fk] == "function") {
                    e[fm][fk].call(this, fl)
                }
            }
        }
        return fl.returnValue
    }
    ;
    x.BaseEvent.prototype.inherit = function(fk) {
        var i = this;
        this.domEvent = fk = window.event || fk;
        i.clientX = fk.clientX || fk.pageX;
        i.clientY = fk.clientY || fk.pageY;
        i.offsetX = fk.offsetX || fk.layerX;
        i.offsetY = fk.offsetY || fk.layerY;
        i.screenX = fk.screenX;
        i.screenY = fk.screenY;
        i.ctrlKey = fk.ctrlKey || fk.metaKey;
        i.shiftKey = fk.shiftKey;
        i.altKey = fk.altKey;
        return i
    }
    ;
    x.Browser = (function() {
        var fk = navigator.userAgent;
        var fm = 0;
        var e = 0;
        var fn = 0;
        var i = 0;
        var fr = 0;
        var fp = 0;
        var fq = 0;
        var fo = 0;
        var fl = 0;
        var fs = 0;
        if (typeof window.opera === "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(fk)) {
            fn = parseFloat(RegExp.$2)
        } else {
            if (/OPR(\/(\d+)(\..?)?)/.test(fk)) {
                fn = parseInt(RegExp.$2, 10)
            } else {
                if (/Edge\/((\d+)\.\d+)/.test(fk)) {
                    fm = parseInt(RegExp.$2, 10)
                } else {
                    if (/MSIE (\d+(\.\d+)?)/.test(fk)) {
                        e = parseFloat(RegExp.$1)
                    } else {
                        if (fk.indexOf("Trident") > -1 && /rv:(\d+(\.\d+)?)/.test(fk)) {
                            e = parseInt(RegExp.$1, 10)
                        } else {
                            if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(fk)) {
                                fr = parseFloat(RegExp.$2)
                            } else {
                                if (navigator.vendor === "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(fk)) {
                                    fq = parseFloat(RegExp.$2)
                                } else {
                                    if (fk.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(fk)) {
                                        i = parseFloat(RegExp.$1)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (fk.indexOf("Trident") > -1 && /Trident\/(\d+(\.\d+)?)/.test(fk)) {
            fo = parseInt(RegExp.$1, 10)
        } else {
            if (!e && !fm && fk.indexOf("Gecko") > -1 && fk.indexOf("KHTML") === -1 && /rv\:(\d+(\.\d+)?)/.test(fk)) {
                fl = parseFloat(RegExp.$1)
            } else {
                if (!fm && /chrome\/(\d+(\.\d+)?)/i.test(fk)) {
                    fp = parseFloat(RegExp.$1)
                } else {
                    if (!fm && /AppleWebKit\/(\d+(\.\d+)?)/.test(fk)) {
                        fs = parseInt(RegExp.$1, 10)
                    }
                }
            }
        }
        var ft = {
            edge: fm,
            ie: e,
            firefox: fr,
            netscape: fq,
            opera: fn,
            safari: i,
            chrome: fp,
            gecko: fl,
            trident: fo,
            webkit: fs
        };
        return ft
    }
    )();
    window.FeBrowser = x.Browser;
    x.Dom = {};
    x.Dom.createDom = function(i, e) {
        if (x.isIE && e && e.name) {
            i = "<" + i + ' name="' + x.String.escapeHTML(e.name) + '">'
        }
        var fk = document.createElement(i);
        if (e) {
            x.Dom.setProperties(fk, e)
        }
        return fk
    }
    ;
    x.Dom.getOffset = function(fl) {
        var fo = x.Dom.getOwnerDocument(fl);
        var fn = x.isGecko > 0 && fo.getBoxObjectFor && x.Dom.getStyle(fl, "position") == "absolute" && (fl.style.top === "" || fl.style.left === "");
        var fp = {
            left: 0,
            top: 0
        };
        var i = (x.isIE && !x.isStrict) ? fo.body : fo.documentElement;
        if (fl == i) {
            return fp
        }
        var fk = null;
        var fm;
        if (fl.getBoundingClientRect) {
            fm = fl.getBoundingClientRect();
            fp.left = fm.left + Math.max(fo.documentElement.scrollLeft, fo.body.scrollLeft);
            fp.top = fm.top + Math.max(fo.documentElement.scrollTop, fo.body.scrollTop);
            fp.left -= fo.documentElement.clientLeft;
            fp.top -= fo.documentElement.clientTop;
            if (x.isIE && !x.isStrict) {
                fp.left -= 2;
                fp.top -= 2
            }
        } else {
            if (fo.getBoxObjectFor && !fn) {
                fm = fo.getBoxObjectFor(fl);
                var e = fo.getBoxObjectFor(i);
                fp.left = fm.screenX - e.screenX;
                fp.top = fm.screenY - e.screenY
            } else {
                fk = fl;
                do {
                    fp.left += fk.offsetLeft;
                    fp.top += fk.offsetTop;
                    if (x.isWebkit > 0 && x.Dom.getStyle(fk, "position") == "fixed") {
                        fp.left += fo.body.scrollLeft;
                        fp.top += fo.body.scrollTop;
                        break
                    }
                    fk = fk.offsetParent
                } while (fk && fk != fl);if (x.isOpera > 0 || (x.isWebkit > 0 && x.Dom.getStyle(fl, "position") == "absolute")) {
                    fp.top -= fo.body.offsetTop
                }
                fk = fl.offsetParent;
                while (fk && fk != fo.body) {
                    fp.left -= fk.scrollLeft;
                    if (!x.isOpera || fk.tagName != "TR") {
                        fp.top -= fk.scrollTop
                    }
                    fk = fk.offsetParent
                }
            }
        }
        return fp
    }
    ;
    x.Dom.getOwnerDocument = function(e) {
        return e.nodeType == 9 ? e : e.ownerDocument || e.document
    }
    ;
    x.Dom.setProperties = function(i, e) {
        x.each(e, function(fl, fk) {
            x.Dom._setProperty(i, fk, fl)
        })
    }
    ;
    x.Dom._setProperty = function(i, e, fk) {
        if (e == "style") {
            i.style.cssText = fk
        } else {
            if (e == "class") {
                i.className = fk
            } else {
                if (e == "for") {
                    i.htmlFor = fk
                } else {
                    if (e in x.Dom._DIRECT_ATTRIBUTE_MAP) {
                        i.setAttribute(x.Dom._DIRECT_ATTRIBUTE_MAP[e], fk)
                    } else {
                        i[e] = fk
                    }
                }
            }
        }
    }
    ;
    x.Dom._DIRECT_ATTRIBUTE_MAP = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    x.G = function() {
        for (var fk = [], fl = arguments.length - 1; fl > -1; fl--) {
            var fm = arguments[fl];
            fk[fl] = null;
            if (typeof fm == "object" && fm && fm.dom) {
                fk[fl] = fm.dom
            } else {
                if ((typeof fm == "object" && fm && fm.tagName) || fm == window || fm == document) {
                    fk[fl] = fm
                } else {
                    if (typeof fm == "string" && (fm = document.getElementById(fm))) {
                        fk[fl] = fm
                    }
                }
            }
        }
        return fk.length < 2 ? fk[0] : fk
    }
    ;
    x.ac = function(e, i) {
        if (!(e = this.G(e))) {
            return
        }
        i = this.trim(i);
        if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
            e.className = e.className.split(/\s+/).concat(i).join(" ")
        }
    }
    ;
    x.addClassName = x.ac;
    x.each = function(fn, e) {
        if (typeof e != "function") {
            return fn
        }
        if (fn) {
            if (fn.length === undefined) {
                for (var fk in fn) {
                    e.call(fn[fk], fn[fk], fk)
                }
            } else {
                for (var fl = 0, fm = fn.length; fl < fm; fl++) {
                    e.call(fn[fl], fn[fl], fl)
                }
            }
        }
        return fn
    }
    ;
    x.extend = function(fn, fl) {
        if (fn && fl && typeof (fl) == "object") {
            for (var fm in fl) {
                fn[fm] = fl[fm]
            }
            var fk = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            for (var e = 0, i; e < fk.length; e++) {
                i = fk[e];
                if (Object.prototype.hasOwnProperty.call(fl, i)) {
                    fn[i] = fl[i]
                }
            }
        }
        return fn
    }
    ;
    x.hide = function() {
        x.each(arguments, function(e) {
            if (e = x.G(e)) {
                e.style.display = "none"
            }
        })
    }
    ;
    x.inherit = function(fp, fl, fk) {
        var fo = fp.prototype;
        var fn = function() {};
        fn.prototype = fl.prototype;
        var fm = fp.prototype = new fn();
        if (typeof fk == "string") {
            fm._className = fk
        }
        for (var e in fo) {
            fm[e] = fo[e]
        }
        fp.prototype.constructor = fo.constructor;
        fo = null;
        return fm
    }
    ;
    x.isIE = 0;
    (function() {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
            /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
            x.isIE = parseFloat(RegExp.$1)
        }
    }
    )();
    x.rc = function(e, i) {
        if (!(e = this.G(e))) {
            return
        }
        i = this.trim(i);
        var fk = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)","g"), "$2");
        if (e.className != fk) {
            e.className = fk
        }
    }
    ;
    x.removeClassName = x.rc;
    x.show = function() {
        this.each(arguments, function(e) {
            if (e = x.G(e)) {
                e.style.display = ""
            }
        })
    }
    ;
    x.trim = function(e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    }
    ;
    if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
        try {
            HTMLElement.prototype.__defineGetter__("children", function() {
                for (var fk = [], fl = 0, fn, fm = 0, e = this.childNodes.length; fm < e; fm++) {
                    fn = this.childNodes[fm];
                    if (fn.nodeType == 1) {
                        fk[fl++] = fn;
                        if (fn.name) {
                            if (!fk[fn.name]) {
                                fk[fn.name] = []
                            }
                            fk[fn.name][fk[fn.name].length] = fn
                        }
                        if (fn.id) {
                            fk[fn.id] = fn
                        }
                    }
                }
                return fk
            })
        } catch (er) {}
    }
    if (typeof (HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
        HTMLElement.prototype.insertAdjacentHTML = function(i, fk) {
            var fl = this.ownerDocument.createRange();
            fl.setStartBefore(this);
            fl = fl.createContextualFragment(fk);
            switch (i) {
            case "beforeBegin":
                this.parentNode.insertBefore(fl, this);
                break;
            case "afterBegin":
                this.insertBefore(fl, this.firstChild);
                break;
            case "beforeEnd":
                this.appendChild(fl);
                break;
            case "afterEnd":
                if (!this.nextSibling) {
                    this.parentNode.appendChild(fl)
                } else {
                    this.parentNode.insertBefore(fl, this.nextSibling)
                }
                break
            }
        }
    }
    if (typeof HTMLElement != "undefined" && !window.opera) {
        HTMLElement.prototype.contains = function(e) {
            if (e == this) {
                return true
            }
            while (e = e.parentNode) {
                if (e == this) {
                    return true
                }
            }
            return false
        }
    }
    if (!x.Browser.ie && typeof Event != "undefined" && !window.opera) {
        Event.prototype.__defineSetter__("returnValue", function(e) {
            if (!e) {
                this.preventDefault()
            }
            return e
        });
        Event.prototype.__defineSetter__("cancelBubble", function(e) {
            if (e) {
                this.stopPropagation()
            }
            return e
        })
    }
    x.each = function(fm, fl) {
        if (a7(fl)) {
            for (var fk = 0, e = fm.length; fk < e; fk++) {
                if (fl.call(fm, fm[fk], fk) === false) {
                    break
                }
            }
        }
        return fm
    }
    ;
    x.Platform = {
        x11: 0,
        macintosh: 0,
        windows: 0,
        android: 0,
        iphone: 0,
        ipad: 0
    };
    for (var em in x.Platform) {
        if (x.Platform.hasOwnProperty(em)) {
            x.Platform[em] = new RegExp(em,"i").test(window.navigator.userAgent) ? 1 : 0
        }
    }
    if (typeof (x.Dom) === "undefined") {
        x.Dom = {}
    }
    x.Dom.getComputedStyle = function(i, e) {
        var fl = i.nodeType == 9 ? i : i.ownerDocument || i.document, fk;
        if (fl.defaultView && fl.defaultView.getComputedStyle) {
            fk = fl.defaultView.getComputedStyle(i, null);
            if (fk) {
                return fk[e] || fk.getPropertyValue(e)
            }
        } else {
            if (i.currentStyle) {
                return i.currentStyle[e] || ""
            }
        }
        return ""
    }
    ;
    var aB = x.BaseEvent;
    var cI = x.BaseClass;
    cI.prototype.toString = function() {
        return this._className || ""
    }
    ;
    x.on = function(fk, i, e) {
        if (!(fk = x.G(fk))) {
            return fk
        }
        i = i.replace(/^on/, "");
        if (fk.addEventListener) {
            fk.addEventListener(i, e, false)
        } else {
            if (fk.attachEvent) {
                fk.attachEvent("on" + i, e)
            }
        }
        return fk
    }
    ;
    x.un = function(fk, i, e) {
        if (!(fk = x.G(fk))) {
            return fk
        }
        i = i.replace(/^on/, "");
        if (fk.removeEventListener) {
            fk.removeEventListener(i, e, false)
        } else {
            if (fk.detachEvent) {
                fk.detachEvent("on" + i, e)
            }
        }
        return fk
    }
    ;
    x.hc = function(fl, fk) {
        if (!fl || !fl.className || typeof fl.className != "string") {
            return false
        }
        var i = -1;
        try {
            i = fl.className == fk || fl.className.search(new RegExp("(\\s|^)" + fk + "(\\s|$)"))
        } catch (fm) {
            return false
        }
        return i > -1
    }
    ;
    x.isEmptyObject = function(fk) {
        if (Object.prototype.toString.call(fk) === "[object Object]") {
            for (var e in fk) {
                return false
            }
            return true
        } else {
            return false
        }
    }
    ;
    var df = {
        mapStyleNameIdPair: {
            "default": 0,
            "grayed-out": 1
        },
        mapHost: "https://map.baidu.com",
        apiHost: "https://api.map.baidu.com",
        staticHost: "//webmap0.bdimg.com",
        imgPath: "//webmap0.bdimg.com/image/api/",
        tileDomain: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", 
        "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", 
        "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", 
        "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv"],
        optDomain: "http://10.120.25.45:8017",
        rasterTilePath: "/tile/",
        vectorTilePath: "/pvd/",
        originTilePath: ["https://pcor.baidu.com"],
        getIconSetPath: function(e) {
            var i = "map_icons2x/";
            if (typeof e === "string" && this.mapStyleNameIdPair[e] > 0) {
                i = "map_icons2x_" + (this.mapStyleNameIdPair[e] - 1) + "/"
            }
            return "https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/" + i
        },
        getMapStyleFiles: function(fk) {
            var fm = true;
            if (typeof fk === "string" && fk !== "default") {
                fm = false
            }
            var fn = fm ? "" : "_" + (this.mapStyleNameIdPair[fk] - 1);
            var i = dI();
            var fl = "udt=" + i.udt + "&v=" + i.ver;
            var e = "https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/";
            return [e + "icons_2x" + fn + ".js?" + fl, e + "fs" + fn + ".js?" + fl, e + "indoor_fs.js?" + fl]
        },
        tvc: {
            ditu: {
                normal: {
                    version: "088",
                    updateDate: "20190618"
                },
                satellite: {
                    version: "009",
                    updateDate: "20190618"
                },
                normalTraffic: {
                    version: "081",
                    updateDate: "20190618"
                },
                satelliteTraffic: {
                    version: "083",
                    updateDate: "20190618"
                },
                mapJS: {
                    version: "104",
                    updateDate: "20190618"
                },
                satelliteStreet: {
                    version: "083",
                    updateDate: "20190618"
                },
                panoClick: {
                    version: "1033",
                    updateDate: "20180108"
                },
                panoUdt: {
                    version: "20180108",
                    updateDate: "20180108"
                },
                panoSwfAPI: {
                    version: "20150123",
                    updateDate: "20150123"
                },
                panoSwfPlace: {
                    version: "20141112",
                    updateDate: "20141112"
                },
                earthVector: {
                    version: "001",
                    updateDate: "20190618"
                }
            }
        },
        msv: {
            mapstyle: {
                updateDate: "20190108",
                version: "001"
            }
        }
    };
    df.imgResources = {
        blankGIF: df.staticHost + "/res/litemapapi/v1d1/images/blank.gif?20170501",
        markerPng: df.staticHost + "/res/litemapapi/v1d1/images/marker.png?20170501",
        locPng: df.staticHost + "/res/litemapapi/v1d1/images/loc.png?20180918",
        locNewPng: df.staticHost + "/res/litemapapi/v1d1/images/loc_new.png?20190314",
        zoomPng: df.staticHost + "/res/litemapapi/v1d1/images/zoombtn.png?20180918",
        mapLogoPng: df.staticHost + "/res/litemapapi/v1d1/images/logo-2x.png?20190226"
    };
    var dm = df;
    var av = "ruler.cur";
    if (x.Browser.ie || x.Browser.edge) {
        x.extend(dm, {
            distCursor: "url(" + dm.imgPath + av + "),crosshair",
            defaultCursor: "url(" + dm.imgPath + "openhand.cur),default",
            draggingCursor: "url(" + dm.imgPath + "closedhand.cur),move"
        })
    } else {
        if (x.Browser.firefox) {
            x.extend(dm, {
                distCursor: "url(" + dm.imgPath + av + "),crosshair",
                defaultCursor: "-moz-grab",
                draggingCursor: "-moz-grabbing"
            })
        } else {
            if (x.Browser.chrome || x.Browser.safari) {
                x.extend(dm, {
                    distCursor: "url(" + dm.imgPath + av + ") 2 6,crosshair",
                    defaultCursor: "url(" + dm.imgPath + "openhand.cur) 8 8,default",
                    draggingCursor: "url(" + dm.imgPath + "closedhand.cur) 8 8,move"
                });
                if (x.Platform.macintosh) {
                    dm.defaultCursor = "-webkit-grab";
                    dm.draggingCursor = "-webkit-grabbing"
                }
            } else {
                x.extend(dm, {
                    distCursor: "url(" + dm.imgPath + av + "),crosshair",
                    defaultCursor: "url(" + dm.imgPath + "openhand.cur),default",
                    draggingCursor: "url(" + dm.imgPath + "closedhand.cur),move"
                })
            }
        }
    }
    aI = aI || {};
    aI.version = "3.0";
    aI._register = [];
    aI.register = function(e) {
        this._register[this._register.length] = e
    }
    ;
    aI.guid = 1;
    aI.getGUID = function(e) {
        return (e || "") + aI.guid++
    }
    ;
    var ed = window.BMAP_AUTHENTIC_KEY || "";
    aI.bmapVerifyCbk = function(e) {
        if (e && e.error !== 0) {
            if (typeof map !== "undefined") {
                map.getContainer().innerHTML = "";
                map.__listeners = {}
            }
            aI = null;
            var i = "百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度LBS开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
            switch (e.error) {
            case 101:
                i = "开发者禁用了该ak的jsapi服务权限。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
                break;
            case 102:
                i = "开发者Referer不正确。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。";
                break
            }
            alert(i)
        }
    }
    ;
    aI.verify = function() {
        var e = dm.apiHost + "/?qt=verify&ak=" + ed + "&callback=" + cY + ".bmapVerifyCbk";
        eX.load(e)
    }
    ;
    aI.apiLoad = aI.apiLoad || function() {}
    ;
    function dR(i, e) {
        this._size = i;
        this._cache = [];
        this._totalGetTimes = 0;
        this._totalHitTimes = 0;
        this._options = {
            clearCallback: null,
            removeOldCallback: null
        };
        e = e || {};
        for (var fk in e) {
            if (e.hasOwnProperty(fk)) {
                this._options[fk] = e[fk]
            }
        }
    }
    dR.prototype.setData = function(fk, fl) {
        var e = this._cache;
        var i = this._size;
        if (i === 0) {
            return
        }
        if (e.length > i) {
            this._removeOld()
        }
        if (!e[fk]) {
            e.push(fl)
        }
        e[fk] = fl;
        fl._key_ = fk
    }
    ;
    dR.prototype.getHitRate = function() {
        return Math.round(this._totalHitTimes / this._totalGetTimes * 1000) / 1000
    }
    ;
    dR.prototype.getData = function(i) {
        var e = this._cache[i];
        if (e) {
            this._totalHitTimes++
        }
        this._totalGetTimes++;
        return e
    }
    ;
    dR.prototype.removeData = function(fm) {
        if (this._options.clearCallback) {
            this._options.clearCallback(this._cache[fm])
        }
        var fk = this._cache;
        var fn = fk[fm];
        for (var fl = 0, e = fk.length; fl < e; fl++) {
            if (fk[fl] === fn) {
                fk.splice(fl, 1);
                break
            }
        }
        delete fk[fm]
    }
    ;
    dR.prototype._removeOld = function() {
        var e = this._cache;
        var fm = Math.round(this._size * 0.6);
        for (var fl = 0; fl < fm; fl++) {
            var fk = e[fl]._key_;
            if (this._options.clearCallback) {
                this._options.clearCallback(e[fk])
            }
            delete e[fk]
        }
        e.splice(0, fm);
        if (this._options.removeOldCallback) {
            this._options.removeOldCallback()
        }
    }
    ;
    dR.prototype.clear = function() {
        var fk = this._cache;
        for (var fm = 0, e = fk.length; fm < e; fm++) {
            var fl = fk[fm]._key_;
            if (this._options.clearCallback) {
                this._options.clearCallback(fk[fl])
            }
            delete fk[fl]
        }
        this._cache = fk = []
    }
    ;
    dR.prototype.forEach = function(fl) {
        var fk = this._cache;
        for (var fn = 0, e = fk.length; fn < e; fn++) {
            var fm = fk[fn]._key_;
            fl(fk[fm])
        }
    }
    ;
    dR.prototype.getBatch = function(fm) {
        var e = [];
        for (var fl = 0, fk = fm.length; fl < fk; fl++) {
            if (this.getData(fm[fl])) {
                e[e.length] = this.getData(fm[fl])
            }
        }
        return e
    }
    ;
    dR.prototype.clearExcept = function(fn) {
        var fk = this._cache;
        for (var e = fk.length, fm = e - 1; fm >= 0; fm--) {
            var fl = this._cache[fm]._key_;
            if (!fn[fl]) {
                fk.splice(fm, 1);
                if (this._options.clearCallback) {
                    this._options.clearCallback(fk[fl])
                }
                delete fk[fl]
            }
        }
    }
    ;
    dR.prototype.getDataCount = function() {
        return this._cache.length
    }
    ;
    function V() {}
    x.extend(V.prototype, {
        centerAndZoomIn: function(fq, fk, fr) {
            var fo = this;
            if (!fq && !fk) {
                return
            }
            fq = fq || this.centerPoint;
            fk = fk || this.zoomLevel;
            fk = this._getProperZoom(fk).zoom;
            if (this.mapType === BMAP_EARTH_MAP) {
                if (!this._earth) {
                    this.mapType = BMAP_NORMAL_MAP;
                    this.temp.originMapType = BMAP_EARTH_MAP;
                    function fp() {
                        fo._earth = new aI.Earth(fo,{
                            showRealSunlight: fo.config.showRealSunlight,
                            showMilkyway: fo.config.showMilkyway,
                            earthBackground: fo.config.earthBackground
                        });
                        fo._proxyEarthEvents();
                        fo._changeEarthMapType(BMAP_EARTH_MAP);
                        x.extend(fo, aI.EarthView.prototype);
                        if (!fo._navigationCtrl && fo.config.showControls) {
                            fo._navigationCtrl = new aI.NavigationControl3D(fo)
                        }
                        delete fo.temp.originMapType
                    }
                    cG.load("earth", function() {
                        if (aI["FeatureStyle" + fo.config.style]) {
                            fp()
                        } else {
                            fo.loadMapStyleFiles(function() {
                                fp()
                            })
                        }
                    })
                }
            }
            this.lastLevel = this.zoomLevel || fk;
            this.zoomLevel = fk;
            var fm = new aB("onload");
            fm.point = fq;
            fm.zoom = fk;
            this.centerPoint = this.restrictCenter(new e2(fq.lng,fq.lat));
            if (this.centerPoint.zoom) {
                this.zoomLevel = this.centerPoint.zoom
            }
            this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
            this.defaultCenter = this.defaultCenter || this.centerPoint;
            if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
                var i = this.config.defaultMaxBounds;
                var fn = new bS(i,"baidu",this.mapType);
                var fl = new bH({
                    mapType: this.mapType,
                    copyright: fn,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "web"
                });
                fl._isInnerLayer = true;
                this.addTileLayer(fl);
                if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
                    this._addHybirdMap()
                }
            }
            this.dispatchEvent(fm);
            this.loaded = true;
            fr = fr || {};
            fr.callback && fr.callback()
        },
        _setPlatformPosition: function(fr, fq, fu) {
            fu = fu || {};
            if (fr === 0 && fq === 0 && !fu.point) {
                return
            }
            if (isNaN(fu.initMapOffsetX)) {
                fu.initMapOffsetX = this.offsetX
            }
            if (isNaN(fu.initMapOffsetY)) {
                fu.initMapOffsetY = this.offsetY
            }
            var fs = fr + fu.initMapOffsetX;
            var fp = fq + fu.initMapOffsetY;
            if (fu.point) {
                var i = this.restrictCenter(fu.point);
                if (!i.equals(this.centerPoint)) {
                    this.centerPoint = i.clone();
                    this.fire(new aB("oncenter_changed"))
                }
            } else {
                var fl = this.offsetX - fs;
                var e = this.offsetY - fp;
                var fk = this.getZoomUnits();
                var fo = this.centerPoint.lng;
                var fn = this.centerPoint.lat;
                var fm = new e2(fo,fn);
                this.centerPoint = this.restrictCenter(new e2(fm.lng + fl * fk,fm.lat - e * fk), fk);
                this.fire(new aB("oncenter_changed"));
                if (this.zoomLevel < 10) {
                    fs = this.offsetX - (this.centerPoint.lng - fm.lng) / fk;
                    fp = this.offsetY + (this.centerPoint.lat - fm.lat) / fk
                }
            }
            this.offsetX = fs;
            this.offsetY = fp;
            var ft = this.platform.style;
            ft.left = fs + "px";
            ft.top = fp + "px";
            this.maskLayer.style.left = -fs + "px";
            this.maskLayer.style.top = -fp + "px";
            if (fu.dispatchEvent !== false) {
                this.dispatchEvent(new aB("onmoving"))
            }
        },
        zoomTo: function(e, fo, fs) {
            fs = fs || {};
            fs.zoomCenter = fo;
            if (fs.noAnimation !== true) {
                this.deepZoomTo(e, fs);
                return
            }
            if (typeof e !== "number") {
                return
            }
            var fm = be[this.mapType];
            if (!fm) {
                return
            }
            var fk = e;
            e = this._getProperZoom(e).zoom;
            if (e === this.zoomLevel) {
                var fp = new aB("onzoomexceeded");
                fp.targetZoom = fk;
                this.dispatchEvent(fp);
                fs.callback && fs.callback();
                return
            }
            this.lastLevel = this.zoomLevel;
            if (fo) {
                this.temp._cPoint = fo;
                this.temp._cPixel = this.pointToPixelIn(fo)
            } else {
                if (this.getInfoWindow()) {
                    var fr = this.getInfoWindow().getPoint();
                    this.temp._cPixel = this.pointToPixelIn(fr);
                    this.temp._cPoint = fr
                }
            }
            if (this.config.zoomCenter) {
                fo = this.config.zoomCenter;
                this.temp._cPoint = fo;
                this.temp._cPixel = this.pointToPixelIn(fo)
            }
            if (fo || this.temp.infoWin && this.temp.infoWin.isOpen()) {
                var i = this.temp._cPoint;
                var fq = this.temp._cPixel;
                var fl = this.getZoomUnits(e);
                var fn = new e2(i.lng + fl * (this.width / 2 - fq.x),i.lat - fl * (this.height / 2 - fq.y));
                this.centerPoint = this.restrictCenter(fn, fl, e);
                if (this.centerPoint.zoom) {
                    e = this.centerPoint.zoom
                }
            }
            if (fs.fireEvent !== false) {
                this.dispatchEvent(new aB("onzoomstart"))
            }
            if (e !== this.zoomLevel) {
                this.zoomLevel = e;
                this.dispatchEvent(new aB("onzooming"));
                this.dispatchEvent(new aB("onzoomstartcode"))
            }
            if (fs.fireEvent !== false) {
                this.dispatchEvent(new aB("onzoomend"))
            }
            if (fs.callback) {
                fs.callback()
            }
        },
        deepZoomMedia: function(e) {
            var i = this;
            if (!i.temp.isStdCtrlBusy) {
                i.temp.isStdCtrlBusy = true;
                i.deepZoomTo(i.zoomLevel + e);
                setTimeout(function() {
                    i.temp.isStdCtrlBusy = false
                }, 400)
            }
        },
        deepZoomTo: function(fp, fl) {
            fl = fl || {};
            var fn = fp - this.zoomLevel;
            var fm = this._getProperZoom(fp);
            if (fm.exceeded) {
                var e = new aB("onzoomexceeded");
                e.targetZoom = fp;
                this.dispatchEvent(e);
                return
            }
            var i;
            if (fl.zoomCenter) {
                i = this.pointToPixelIn(fl.zoomCenter)
            } else {
                if (this.getInfoWindow()) {
                    i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {
                        zoom: this.lastLevel
                    })
                } else {
                    var i = new cN(this.width / 2,this.height / 2)
                }
            }
            this.lastLevel = this.zoomLevel;
            var fo = this.deepZoom || new aV(this);
            var fk = fn > 0 ? 1 : -1;
            fo.zoomMap(i, fn, fk, null, fl)
        },
        flyToIn: function(fq, e) {
            if (e === this.zoomLevel) {
                this.panToIn(fq);
                return
            }
            var fn = this._getProperZoom(e);
            if (fn.exceeded) {
                var fr = new aB("onzoomexceeded");
                fr.targetZoom = e;
                this.dispatchEvent(fr);
                return
            }
            var fp = e - this.zoomLevel;
            var fk = new cN(this.width / 2,this.height / 2);
            var i = this.pointToPixelIn(fq);
            var fo = new cF(i.x - fk.x,i.y - fk.y);
            this.lastLevel = this.zoomLevel;
            if (Math.abs(fp) >= 4 || Math.abs(fo.width) > this.width || Math.abs(fo.height) > this.height) {
                this.centerAndZoomIn(fq, e);
                return
            }
            var fm = this.deepZoom || new aV(this);
            var fl = fp > 0 ? 1 : -1;
            fm.zoomMap(i, fp, fl, fo)
        },
        panToIn: function(i, fk) {
            fk = fk || {};
            if (!i || i.equals(this.centerPoint)) {
                fk.callback && fk.callback();
                return
            }
            var fl = this.pointToPixelIn(i);
            var e = Math.round(this.width / 2);
            var fm = Math.round(this.height / 2);
            if (Math.abs(e - fl.x) > this.width || Math.abs(fm - fl.y) > this.height || fk.noAnimation === true) {
                this._panToIn(e - fl.x, fm - fl.y, i);
                fk.callback && fk.callback()
            } else {
                this._panBy(e - fl.x, fm - fl.y, fk)
            }
        },
        _panToIn: function(i, e, fl) {
            var fk = this.temp;
            if (fk.operating === true) {
                return
            }
            if (fk.dragAni) {
                fk.dragAni.stop();
                fk.dragAni = null;
                this.dispatchEvent(new aB("onmoveend"))
            }
            this.dispatchEvent(new aB("onmovestart"));
            this._setPlatformPosition(i, e, {
                point: fl
            });
            this.dispatchEvent(new aB("onmoveend"))
        },
        panBy: function(i, e, fk) {
            fk = fk || {};
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && fk.noAnimation !== true) {
                this._panBy(i, e, fk)
            } else {
                this._panToIn(i, e);
                fk.callback && fk.callback()
            }
        },
        _panBy: function(i, e, fm) {
            if (this.temp.operating === true) {
                return
            }
            fm = fm || {};
            this.dispatchEvent(new aB("onmovestart"));
            var fl = this;
            var fk = fl.temp;
            fk.pl = fl.offsetX;
            fk.pt = fl.offsetY;
            if (fk.tlPan) {
                fk.tlPan.cancel()
            }
            if (fk.dragAni) {
                fk.dragAni.stop();
                fk.dragAni = null;
                this.dispatchEvent(new aB("onmoveend"))
            }
            fk.tlPan = new l({
                fps: fm.fps || fl.config.fps,
                duration: fm.duration || fl.config.actionDuration,
                transition: fm.transition || bq.easeInOutQuad,
                render: function(fn) {
                    this.terminative = fl.temp.operating;
                    if (fl.temp.operating) {
                        return
                    }
                    fl._setPlatformPosition(Math.ceil(i * fn), Math.ceil(e * fn), {
                        initMapOffsetX: fk.pl,
                        initMapOffsetY: fk.pt
                    })
                },
                finish: function(fn) {
                    fl.dispatchEvent(new aB("onmoveend"));
                    fl.temp.tlPan = false;
                    if (fl.temp.stopArrow === true) {
                        fl.temp.stopArrow = false;
                        if (fl.temp.arrow !== 0) {
                            fl._arrow()
                        }
                    }
                    fm.callback && fm.callback()
                }
            })
        },
        getCenterIn: function() {
            return this.centerPoint
        },
        getZoom: function() {
            return this.zoomLevel
        },
        setTilt: function() {},
        getTilt: function() {
            return this._tilt
        },
        setHeading: function() {},
        getHeading: function() {
            return this._heading
        },
        restrictCenter: function(fp, fm, fq) {
            this.isRestrict = false;
            fm = fm || this.getZoomUnits();
            fq = fq || this.zoomLevel;
            var fk = this.pixelToPointIn(new cN(0,0), {
                center: fp,
                zoom: fq
            });
            var fn = this.pixelToPointIn(new cN(0,this.height), {
                center: fp,
                zoom: fq
            });
            if (this.zoomLevel < 5) {
                if (fk.lat > bU.MAX_LAT && fn.lat < bU.MIN_LAT) {
                    this.isRestrict = true;
                    var i = bU.MAX_LAT - fp.lat;
                    var e = fp.lat - bU.MIN_LAT;
                    var fo;
                    if (i < e) {
                        fo = i / (this.height / 2)
                    } else {
                        fo = e / (this.height / 2)
                    }
                    var fl = 18 - c0(fo);
                    this.zoomLevel = Math.ceil(fl);
                    fp.zoom = Math.ceil(fl);
                    return fp
                }
            }
            if (fk.lat > bU.MAX_LAT) {
                this.isRestrict = true;
                fp.lat = bU.MAX_LAT - this.height / 2 * fm
            } else {
                if (fn.lat < bU.MIN_LAT) {
                    this.isRestrict = true;
                    fp.lat = bU.MIN_LAT + this.height / 2 * fm
                }
            }
            return fp
        }
    });
    function bU(e, fk) {
        if (typeof e === "string") {
            e = document.getElementById(e)
        }
        cI.call(this);
        this.container = e;
        this.width = e.clientWidth;
        this.height = e.clientHeight;
        this.offsetX = 0;
        this.offsetY = 0;
        this._setStyle(e);
        e.unselectable = "on";
        e.innerHTML = "";
        x.ac(e, "bmap-container");
        e.appendChild(this.render());
        this._initDate = new Date();
        this.platform = e.children[0];
        this.maskLayer = this.platform.children[0];
        this._panes = {};
        this.centerPoint = new e2(0,0);
        this.zoomLevel = 0;
        this._heading = 0;
        this._tilt = 0;
        this._bounds = new cv();
        this.lastLevel = 0;
        this._lock = false;
        this._enableTiltZoom = 7;
        this._enableHeadingZoom = 7;
        this.defaultZoomLevel = null;
        this.defaultCenter = null;
        this.zoomEventStatus = "idle";
        this.currentOperation = cx.idle;
        this._setConfig(fk);
        this._initMapRenderType();
        this._animationInfo = {};
        this._animationInfoUnstopable = {};
        this.suspendLoad = false;
        this._customTileLabels = [];
        if (this._renderType === "webgl") {
            this._workerMgr = new ea(this);
            this._featureMgr = new bY();
            x.extend(this, bT.prototype);
            this.jobScheduler = new dT(this);
            this.benchmark = new M();
            this._setupWebGLMap();
            this.deviceInfo = {
                hardwareInfo: {
                    renderer: "",
                    vendor: ""
                }
            };
            if (aA.ifSupportWebGL._renderer) {
                this.deviceInfo.hardwareInfo.renderer = aA.ifSupportWebGL._renderer;
                this.deviceInfo.hardwareInfo.vendor = aA.ifSupportWebGL._vendor
            }
        } else {
            x.extend(this, V.prototype)
        }
        if (!be[this.config.mapType]) {
            this.config.mapType = BMAP_NORMAL_MAP
        }
        if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
            if (this.forceEnableEarth() === false) {
                this.config.mapType = BMAP_NORMAL_MAP
            }
        }
        this.mapType = this.config.mapType;
        this.preMapType = null;
        if (this.config.enableEarth) {
            var fn = this.maskLayer.style;
            fn.opacity = 0;
            fn.background = "#000";
            if (this.config.mapType === BMAP_EARTH_MAP) {
                fn.opacity = 1
            }
            setTimeout(function() {
                fn.WebkitTransition = fn.transition = "opacity .4s"
            }, 100)
        }
        this._isHybridShow = this.config.showStreetLayer;
        this.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            I: function(i) {
                return x.I(i)
            },
            curSpots: [],
            curSpotsArray: [],
            curAreaSpot: null,
            spotsGuid: 1,
            registerIndex: -1,
            hoverOnSpot: null,
            isStdCtrlBusy: false
        };
        window.InstanceCore = this.temp.I;
        this.platform.style.cursor = this.config.defaultCursor;
        this._bind();
        for (var fl = 0; fl < aI._register.length; fl++) {
            aI._register[fl](this)
        }
        this.temp.registerIndex = fl;
        var fm = this;
        if (this._renderType === "webgl") {
            cG.load("oppcgl", function() {
                fm._asyncRegister()
            })
        } else {
            cG.load("oppc", function() {
                fm._asyncRegister()
            })
        }
        if (this.config.mapType === "B_EARTH_MAP") {
            if (!aI.Earth) {
                cG.load("earth", function() {})
            } else {
                fm._syncAndChangeMapType("B_EARTH_MAP")
            }
        }
    }
    bU.MAX_TILT = 87;
    bU.MAX_DRAG_TILT = 73;
    bU.MAX_DRAG_TILT_L2 = 50;
    bU.MIN_TILT = 0;
    bU.MAX_LAT = 19431424;
    bU.MIN_LAT = -16023552;
    bU.WORLD_SIZE_MC_HALF = 20037726.372307256;
    bU.WORLD_SIZE_MC = bU.WORLD_SIZE_MC_HALF * 2;
    bU.RIGHT_EDGE_POINT = new e2(bU.WORLD_SIZE_MC_HALF,0);
    bU.LEFT_EDGE_POINT = new e2(-bU.WORLD_SIZE_MC_HALF,0);
    bU.inherits(cI, "Map");
    x.extend(bU.prototype, {
        render: function() {
            var e = H("div", {
                id: "platform"
            });
            var fl = e.style;
            fl.overflow = "visible";
            fl.position = "absolute";
            fl.zIndex = 5;
            fl.top = fl.left = "0px";
            var i = H("div", {
                id: "mask",
                "class": "BMap_mask"
            });
            var fk = i.style;
            fk.position = "absolute";
            fk.top = fk.left = "0px";
            fk.zIndex = "9";
            fk.overflow = "hidden";
            fk.WebkitUserSelect = "none";
            fk.width = this.width + "px";
            fk.height = this.height + "px";
            e.appendChild(i);
            return e
        },
        _initMapRenderType: function() {
            var e = this.config.forceRenderType;
            if (e === "dom") {
                this._renderType = "dom";
                return
            } else {
                if (e === "canvas") {
                    if (aA.isModernBrowser) {
                        this._renderType = "canvas";
                        return
                    }
                } else {
                    if (e === "webgl") {
                        if (aA.ifSupportWebGL()) {
                            this._renderType = "webgl";
                            return
                        }
                    }
                }
            }
            if (aA.ifSupportWebGL() && aA.ifEnableWebGLMap()) {
                this._renderType = "webgl";
                return
            }
            if (aA.isModernBrowser && aA.ifEnableCanvas2dMap()) {
                this._renderType = "canvas";
                return
            }
            this._renderType = "dom"
        },
        _setConfig: function(i) {
            i = i || {};
            this.config = {
                bottomOffset: 0,
                clickInterval: 200,
                enableDragging: true,
                enableKeyboard: false,
                enableDblclickZoom: true,
                enableContinuousZoom: true,
                enableWheelZoom: false,
                enablePinchZoom: true,
                enableRotateGestures: true,
                enableTiltGestures: true,
                fixCenterWhenPinch: false,
                enableAutoResize: true,
                zoomCenter: null,
                fps: 60,
                zoomerDuration: 240,
                actionDuration: 450,
                defaultCursor: dm.defaultCursor,
                draggingCursor: dm.draggingCursor,
                coordType: BMAP_COORD_MERCATOR,
                mapType: BMAP_NORMAL_MAP,
                drawer: BMAP_SYS_DRAWER,
                enableInertialDragging: true,
                drawMargin: 500,
                drawMarginGL: 500,
                enableFulltimeSpotClick: false,
                enableResizeOnCenter: false,
                isModernBrowser: aA.isModernBrowser,
                forceRenderType: "",
                textRenderType: d6() ? "canvas" : "image",
                ratio: ay() >= 1.5 ? 2 : 1,
                enableEarth: aA.ifEnableEarth(),
                defaultMaxBounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
                showControls: false,
                showRealSunlight: true,
                showMilkyway: true,
                earthBackground: null,
                showStreetLayer: true,
                minZoom: null,
                maxZoom: null,
                style: "default",
                enableIconClick: false,
                autoSafeArea: false,
                ak: null,
                restrictCenter: true
            };
            for (var fk in i) {
                if (i.hasOwnProperty(fk)) {
                    this.config[fk] = i[fk];
                    if (fk === "fixCenterWhenResize") {
                        this.config.enableResizeOnCenter = i[fk]
                    }
                }
            }
            if (i.style) {
                if (i.style["styleId"]) {
                    this.config.style = i.style["styleId"]
                } else {
                    this.config.style = i.style["styleJson"]
                }
            }
            this._setTextRenderType();
            this._displayOptions = {
                poi: true,
                poiText: true,
                poiIcon: true,
                overlay: true,
                layer: true,
                building: true,
                indoor: true,
                street: true,
                skyColors: ["rgb(226, 237, 248)", "rgb(186, 211, 252)"],
                isFlat: false
            };
            if (i.displayOptions) {
                for (var e in i.displayOptions) {
                    if (i.displayOptions.hasOwnProperty(e)) {
                        this._displayOptions[e] = i.displayOptions[e]
                    }
                }
            }
            if (this.config.restrictCenter === false) {
                this._enableTiltZoom = 0;
                this._enableHeadingZoom = 0
            }
        },
        getMinZoom: function() {
            var fk;
            if (be[this.mapType][this._renderType]) {
                fk = be[this.mapType][this._renderType].minZoom
            } else {
                fk = be[this.mapType].minZoom
            }
            if (this.config.minZoom !== null && this.config.minZoom >= fk) {
                fk = this.config.minZoom
            }
            if (this.mapType === "B_EARTH_MAP") {
                return fk
            }
            var i = this.getSize();
            var e = this.worldSize(fk);
            while (e < i.width) {
                fk++;
                e = this.worldSize(fk)
            }
            return fk
        },
        getMaxZoom: function() {
            var e;
            if (be[this.mapType][this._renderType]) {
                e = be[this.mapType][this._renderType].maxZoom
            } else {
                e = be[this.mapType].maxZoom
            }
            if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
                e = this.config.maxZoom
            }
            return e
        },
        _drawFrame: function() {
            this._webglMapScene._painter.draw()
        },
        _setupWebGLMap: function() {
            var e = this;
            cG.load("mapgl", function() {
                e._asyncRegister()
            })
        },
        _setStyle: function(i) {
            var e = i.style;
            e.overflow = "hidden";
            if (d0(i).position !== "absolute") {
                e.position = "relative"
            }
            e.backgroundImage = "url(" + dm.imgPath + "bg.png)";
            e.textAlign = "left";
            e.touchAction = e.MSTouchAction = "none"
        },
        _bind: function() {
            var e = this;
            if (e._renderType !== "webgl") {
                e._watchSize = function() {
                    var fk = e.getContainerSize();
                    if (e.width !== fk.width || e.height !== fk.height) {
                        var fo = (fk.width - e.width) / 2;
                        var fq = (fk.height - e.height) / 2;
                        var fl = e.getZoomUnits();
                        var fn = e.centerPoint;
                        if (fn && !e.config.enableResizeOnCenter) {
                            e.centerPoint = new e2(fn.lng + fo * fl,fn.lat - fq * fl)
                        }
                        e.maskLayer.style.width = (e.width = fk.width) + "px";
                        e.maskLayer.style.height = (e.height = fk.height) + "px";
                        var fm = new aB("onresize");
                        fm.size = fk;
                        e.dispatchEvent(fm);
                        e.fire(new aB("onsize_changed"));
                        var i = parseInt(e.platform.style.left, 10) || 0;
                        var fp = parseInt(e.platform.style.top, 10) || 0;
                        if (e.currentOperation !== "undefined" && e.currentOperation !== cx.idle && (e.offsetX !== i || e.offsetY !== fp)) {
                            e._setPlatformPosition(i, fp)
                        }
                    }
                }
            } else {
                e._watchSize = function() {
                    var i = e.getContainerSize();
                    if (e.width !== i.width || e.height !== i.height) {
                        var fl = e.getSize();
                        e.maskLayer.style.width = (e.width = i.width) + "px";
                        e.maskLayer.style.height = (e.height = i.height) + "px";
                        if (ay() !== e.config.ratio) {
                            e.config.ratio = ay()
                        }
                        var fm = new aB("onresize");
                        fm.size = i;
                        e.dispatchEvent(fm);
                        var fk = new aB("onsize_changed");
                        fk.size = i;
                        fk.oldSize = fl;
                        e.fire(fk)
                    }
                }
            }
            if (e.config.enableAutoResize) {
                e.temp.autoResizeTimer = setInterval(e._watchSize, 16)
            }
            this.on("size_changed", function() {
                var i = e.getMinZoom();
                if (e.zoomLevel < i) {
                    e.setZoomIn(i, {
                        noAnimation: true
                    })
                }
            });
            this.on("zoom_changed", function() {
                this.dispatchEvent(new aB("onzooming"))
            })
        },
        addControl: function(e) {
            if (e && a7(e._i)) {
                e._i(this);
                this.dispatchEvent(new aB("onaddcontrol",e))
            }
        },
        removeControl: function(e) {
            if (e && a7(e.remove)) {
                e.remove();
                this.dispatchEvent(new aB("onremovecontrol",e))
            }
        },
        addContextMenu: function(e) {
            if (e) {
                e.initialize(this);
                this.dispatchEvent(new aB("onaddcontextmenu",e))
            }
        },
        removeContextMenu: function(e) {
            if (e) {
                this.dispatchEvent(new aB("onremovecontextmenu",e));
                e.remove()
            }
        },
        addOverlay: function(i) {
            if (i && a7(i._i)) {
                var fk = new aB("onbeforeaddoverlay",i);
                fk.overlay = i;
                this.dispatchEvent(fk);
                i._i(this);
                fk = new aB("onaddoverlay",i);
                fk.overlay = i;
                this.dispatchEvent(fk)
            }
        },
        removeOverlay: function(i) {
            if (i && a7(i.remove)) {
                var fk = new aB("onremoveoverlay",i);
                fk.overlay = i;
                i.remove();
                this.dispatchEvent(fk)
            }
        },
        clearOverlays: function() {
            this.dispatchEvent(new aB("onclearoverlays"))
        },
        addTileLayer: function(fm) {
            if (!fm) {
                return
            }
            for (var fl = 0, e = this.tileMgr.tileLayers.length; fl < e; fl++) {
                var fk = this.tileMgr.tileLayers[fl];
                if (fk === fm || fk.getMapType() === fm.getMapType()) {
                    return
                }
            }
            fm.initialize(this);
            this.dispatchEvent(new aB("onaddtilelayer",fm))
        },
        removeTileLayer: function(e) {
            if (e) {
                e.remove();
                this.dispatchEvent(new aB("onremovetilelayer",e))
            }
        },
        getTileLayer: function(e) {
            if (this.tileMgr) {
                return this.tileMgr.getTileLayer(e)
            }
            return null
        },
        setMapType: function(e) {
            var i = this;
            if (this.mapType === e || this._mapTypeChanging) {
                return
            }
            if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
                return
            }
            if (this._earth && this._earth.getLock()) {
                return
            }
            this._mapTypeChanging = true;
            this.preMapType = this.mapType;
            this._boundsInPreMapType = this.getBoundsIn();
            if (this.preMapType === BMAP_SATELLITE_MAP) {
                this._preStreetLayerShow = this._isHybridShow
            }
            if (e === BMAP_EARTH_MAP) {
                if (!aI.Earth) {
                    cG.load("earth", function() {
                        i._syncAndChangeMapType(e)
                    });
                    return
                }
                i._syncAndChangeMapType(e)
            } else {
                if (this.preMapType !== BMAP_EARTH_MAP) {
                    this._changeFlatMapType(e);
                    this._mapTypeChanging = false
                } else {
                    this._setMapTypeStatus(e, function(fk, fl) {
                        var fm = i._earth.getEarthCanvas();
                        i._changeFlatMapType(e, this.preMapType);
                        if (i._mapTypeChangAni) {
                            i._mapTypeChangAni.stop()
                        }
                        i._mapTypeChangAni = dz.start({
                            el: fm,
                            style: "opacity",
                            startValue: 1,
                            endValue: 0,
                            duration: 200,
                            callback: function() {
                                i._mapTypeChangAni = null;
                                i._mapTypeChanging = false
                            }
                        });
                        fk = cP.convertLL2MC(fk);
                        if (i._renderType === "webgl") {
                            x.extend(i, bT.prototype);
                            i.setCenterIn(fk, {
                                noAnimation: true
                            });
                            i.setZoomIn(fl, {
                                noAnimation: true
                            })
                        } else {
                            x.extend(i, V.prototype);
                            i.centerAndZoomIn(fk, fl)
                        }
                    })
                }
            }
        },
        _changeFlatMapType: function(fo) {
            if (!fo || !be[fo]) {
                return
            }
            var fw = this.preMapType;
            this.mapType = fo;
            var fl = this.getTileLayer(fw);
            if (fl) {
                this.removeTileLayer(fl)
            }
            if (fw !== BMAP_EARTH_MAP || this._renderType !== "webgl" || this.baseLayerAdded !== true) {
                var fk = new cv(new e2(-21364736,-10616832),new e2(23855104,15859712));
                var ft = new bS(fk,"baidu",fo);
                var fv = this._renderType === "webgl" ? 2 : 1;
                var fm = new bH({
                    mapType: fo,
                    copyright: ft,
                    dataType: fv,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "na"
                });
                fm._isInnerLayer = true;
                this.addTileLayer(fm);
                if (this._renderType === "webgl" && !this.baseLayerAdded) {
                    this.baseLayerAdded = true
                }
            }
            if (fw === BMAP_SATELLITE_MAP) {
                this._preStreetLayerShow = this._isHybridShow;
                this._removeHybirdMap()
            } else {
                if (fo === BMAP_SATELLITE_MAP) {
                    if (this._preStreetLayerShow === true || typeof this._preStreetLayerShow === "undefined") {
                        this._addHybirdMap()
                    }
                }
            }
            var fq = this.tileMgr.tileLayers;
            for (var fp = 0, fn = fq.length; fp < fn; fp++) {
                var fr = fq[fp];
                var fu = fr.tilesDiv;
                if (!fu) {
                    continue
                }
                if (!fr._isInnerLayer && fu.style.visibility === "hidden") {
                    fu.style.visibility = ""
                }
            }
            var fs = new aB("onmaptypechange");
            fs.zoomLevel = this.zoomLevel;
            fs.mapType = fo;
            fs.exMapType = fw;
            this.dispatchEvent(fs)
        },
        showStreetLayer: function(e) {
            e ? this._addHybirdMap() : this._removeHybirdMap()
        },
        hideStreetLayer: function(e) {
            this._hideStreetLayerOptions = e;
            this._removeHybirdMap(e)
        },
        _addHybirdMap: function() {
            this._isHybridShow = true;
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth) {
                    this._earth.showStreetLayer()
                }
                return
            }
            if (this._hybridTileLayer) {
                this.addTileLayer(this._hybridTileLayer);
                var fn = new aB("onstreetlayer_show");
                this.dispatchEvent(fn);
                return
            }
            var fm = new cv(new e2(-21364736,-10616832),new e2(23855104,15859712));
            var fk = new bS(fm,"",BMAP_HYBRID_MAP);
            var i = new bH({
                copyright: fk,
                transparentPng: true,
                tileTypeName: "web"
            });
            i._isInnerLayer = true;
            var fl = this.isCanvasMap();
            i.getTilesUrl = function(fo, ft) {
                var fr = be.B_STREET_MAP;
                var fs = ad("ditu", "satelliteStreet");
                var fp = fs.ver;
                var e = fs.udt;
                var fq = fr.tileUrls[Math.abs(fo.x + fo.y) % fr.tileUrls.length] + "?qt=vtile&x=" + (fo.x + "").replace(/-/gi, "M") + "&y=" + (fo.y + "").replace(/-/gi, "M") + "&z=" + ft + "&styles=sl&v=" + fp + "&udt=" + e + "$scaler=" + ay() + "&showtext=" + (fl ? 0 : 1);
                return fq
            }
            ;
            this._isHybridShow = true;
            this.addTileLayer(i);
            this._hybridTileLayer = i;
            var fn = new aB("onstreetlayer_show");
            this.dispatchEvent(fn)
        },
        _removeHybirdMap: function(i) {
            this._isHybridShow = false;
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth) {
                    this._earth.hideStreetLayer(i)
                }
                return
            }
            if (this._hybridTileLayer) {
                this.removeTileLayer(this._hybridTileLayer);
                var fk = new aB("onstreetlayer_hide");
                this.dispatchEvent(fk)
            }
        },
        isStreetLayerShow: function() {
            return this._isHybridShow
        },
        getTileId: function(e, fn) {
            var fl = be[this.mapType];
            if (typeof fl !== "object") {
                return null
            }
            var fk = fl.baseUnits * Math.pow(2, (fl.zoomLevelBase - fn));
            var fm = parseInt(e.lng / fk, 10);
            var i = parseInt(e.lat / fk, 10);
            return {
                row: fm,
                column: i,
                level: fn
            }
        },
        reset: function() {
            this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true)
        },
        setOptions: function(e) {
            e = e || {};
            for (var fk in e) {
                if (e.hasOwnProperty(fk)) {
                    var i = true;
                    if (typeof e[fk] !== "object") {
                        i = e[fk] !== this.config[fk]
                    }
                    this.config[fk] = e[fk];
                    if (fk === "fixCenterWhenResize") {
                        this.config.enableResizeOnCenter = e[fk]
                    }
                    if (!i) {
                        continue
                    }
                    switch (fk) {
                    case "style":
                        this.fire(new aB("onstyle_willchange"));
                        var fl = this;
                        this.loadMapStyleFiles(function() {
                            fl.fire(new aB("onstyle_changed"))
                        });
                        break;
                    case "enableAutoResize":
                        if (e[fk] === true) {
                            this.enableAutoResize()
                        } else {
                            this.disableAutoResize()
                        }
                        break;
                    case "displayOptions":
                        this.setDisplayOptions(e[fk]);
                        break
                    }
                }
            }
        },
        enableDragging: function() {
            this.config.enableDragging = true
        },
        disableDragging: function() {
            this.config.enableDragging = false
        },
        enableInertialDragging: function() {
            this.config.enableInertialDragging = true
        },
        disableInertialDragging: function() {
            this.config.enableInertialDragging = false
        },
        enableScrollWheelZoom: function() {
            this.config.enableWheelZoom = true
        },
        disableScrollWheelZoom: function() {
            this.config.enableWheelZoom = false
        },
        enableContinuousZoom: function() {
            this.config.enableContinuousZoom = true
        },
        disableContinuousZoom: function() {
            this.config.enableContinuousZoom = false
        },
        enableResizeOnCenter: function() {
            this.config.enableResizeOnCenter = true
        },
        disableResizeOnCenter: function() {
            this.config.enableResizeOnCenter = false
        },
        enableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = true
        },
        disableDoubleClickZoom: function() {
            this.config.enableDblclickZoom = false
        },
        enableKeyboard: function() {
            this.config.enableKeyboard = true
        },
        disableKeyboard: function() {
            this.config.enableKeyboard = false
        },
        getSize: function() {
            return new cF(this.width,this.height)
        },
        enablePinchToZoom: function() {
            this.config.enablePinchZoom = true
        },
        disablePinchToZoom: function() {
            this.config.enablePinchZoom = false
        },
        enableAutoResize: function() {
            this.config.enableAutoResize = true;
            this._watchSize();
            if (!this.temp.autoResizeTimer) {
                this.temp.autoResizeTimer = setInterval(this._watchSize, 16)
            }
        },
        disableAutoResize: function() {
            this.config.enableAutoResize = false;
            if (this.temp.autoResizeTimer) {
                clearInterval(this.temp.autoResizeTimer);
                this.temp.autoResizeTimer = null
            }
        },
        checkResize: function() {
            this._watchSize()
        },
        resize: function() {
            this._watchSize()
        },
        getContainerSize: function() {
            return new cF(this.container.clientWidth,this.container.clientHeight)
        },
        _getProperZoom: function(fk) {
            if (!fk) {
                fk = this.zoomLevel
            }
            var i = this.getMinZoom();
            var e = this.getMaxZoom();
            var fl = false;
            if (fk < i) {
                fl = true;
                fk = i
            }
            if (fk > e) {
                fl = true;
                fk = e
            }
            if (this._renderType !== "webgl") {
                fk = Math.round(fk)
            }
            return {
                zoom: fk,
                exceeded: fl
            }
        },
        getContainer: function() {
            return this.container
        },
        getZoomUnits: function(fk) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return Math.pow(2, 18 - this._earth.getImageZoom())
            }
            var e = be[this.mapType];
            if (typeof e !== "object") {
                return null
            }
            var i = fk || this.zoomLevel;
            return Math.pow(2, (e.zoomLevelBase - i))
        },
        pointToPixelIn: function(fu, fw) {
            if (!fu) {
                return
            }
            fw = fw || {};
            if (this.mapType === BMAP_EARTH_MAP) {
                var fl;
                if (!fu._llPt) {
                    fl = cP.convertMC2LL(fu);
                    fu._llPt = fl
                }
                fl = fu._llPt;
                var fq = null;
                var fk = null;
                if (typeof fw.zoom === "number") {
                    var ft = this._earth;
                    var fv = ft._getEarthZoomByImgZoom(fw.zoom);
                    if (fv <= 3) {
                        fq = ft._generateTmpPMatrix(fv)
                    }
                    fk = ft._generateTmpMVMatrix(ft.getCenter(), fv)
                }
                var fm = this._earth.fromLatLngToPixel(fl, {
                    useRound: false,
                    isCalcOnBack: true,
                    matrixInfo: {
                        modelViewMatrix: fk,
                        projectionMatrix: fq
                    }
                });
                return fm
            }
            if ((this._heading % 360 === 0 && this._tilt === 0) || !this._webglMapCamera) {
                var fs = this.getZoomUnits(fw.zoom);
                var fo = fw.center || this.centerPoint;
                var i = this.width / 2;
                var fn = this.height / 2;
                var fr = (fu.lng - fo.lng) / fs + i;
                var fp = (fo.lat - fu.lat) / fs + fn;
                if (fw.useRound !== false) {
                    fr = Math.round(fr);
                    fp = Math.round(fp)
                }
                return new cN(fr,fp)
            }
            var e = this._webglMapCamera.fromMCToScreenPixel(fu.lng, fu.lat, fw);
            if (fw.useRound === false) {
                return e
            }
            e.x = Math.round(e.x);
            e.y = Math.round(e.y);
            return e
        },
        pixelToPointIn: function(e, fs) {
            if (!e) {
                return
            }
            fs = fs || {};
            if (this.mapType === BMAP_EARTH_MAP) {
                if (typeof fs.zoom === "number") {
                    var fq = this._earth;
                    var fn = null;
                    var fk = null;
                    var fr = fq._getEarthZoomByImgZoom(fs.zoom);
                    if (fr <= 3) {
                        fn = fq._generateTmpPMatrix(fr)
                    }
                    fk = fq._generateTmpMVMatrix(fq.getCenter(), fr)
                }
                var i = this._earth.fromPixelToLatLng(e, {
                    matrixInfo: {
                        modelViewMatrix: fk,
                        projectionMatrix: fn
                    }
                });
                if (i === null) {
                    return null
                }
                return cP.convertLL2MC(i)
            }
            if ((this._heading % 360 !== 0 || this._tilt > 0) && this._webglMapCamera) {
                return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, fs)
            }
            var fo = fs.center || this.centerPoint;
            var fp = this.getZoomUnits(fs.zoom);
            var fm = fo.lng + fp * (e.x - this.width / 2);
            var fl = fo.lat - fp * (e.y - this.height / 2);
            return new e2(fm,fl)
        },
        pointToOverlayPixelIn: function(e, fl) {
            fl = fl || {};
            var fk = this.pointToPixelIn(e, {
                zoom: fl.zoom,
                center: fl.center,
                forLabel: true,
                frustumTest: true
            });
            if (!fk) {
                return
            }
            if (fl.fixPosition && this.mapType !== "B_EARTH_MAP") {
                var fm = this.getSize();
                var i = this.worldSize(fl.zoom);
                if (fk.x > fm.width) {
                    while (fk.x > fm.width) {
                        fk.x -= i
                    }
                } else {
                    if (fk.x < 0) {
                        while (fk.x < 0) {
                            fk.x += i
                        }
                    }
                }
            }
            if (this._renderType === "webgl") {
                return fk
            }
            fk.x -= this.offsetX;
            fk.y -= this.offsetY;
            return fk
        },
        overlayPixelToPointIn: function(i, e) {
            if (!i) {
                return
            }
            var fk = i.clone();
            if (this._renderType !== "webgl") {
                fk.x += this.offsetX;
                fk.y += this.offsetY
            }
            return this.pixelToPointIn(fk, e)
        },
        lnglatToMercator: function(e, fl) {
            var i = new e2(e,fl);
            var fk = cP.convertLL2MC(i);
            return [fk.lng, fk.lat]
        },
        mercatorToLnglat: function(i, e) {
            if (isNaN(i) || isNaN(e)) {
                return []
            }
            i = parseFloat(i);
            e = parseFloat(e);
            var fl = new e2(i,e);
            var fk = cP.convertMC2LL(fl);
            return [fk.lng, fk.lat]
        },
        getBoundsIn: function() {
            var fy = arguments[0];
            if (this.mapType === BMAP_EARTH_MAP && this._earth) {
                var fs = this._earth.getCustomBounds();
                if (!fs) {
                    return this.config.defaultMaxBounds
                }
                var fr = fs.getSouthWest();
                var e = fs.getNorthEast();
                if (fr.lng > e.lng) {
                    e.lng = 180
                }
                var fP = cP.convertLL2MC(fr);
                var fF = cP.convertLL2MC(e);
                var fv = this.config.defaultMaxBounds;
                var fE = Math.max(fP.lng, fv.sw.lng);
                var fD = Math.max(fP.lat, fv.sw.lat);
                var fx = Math.min(fF.lng, fv.ne.lng);
                var fw = Math.min(fF.lat, fv.ne.lat);
                var fA = new cv(new e2(fE,fD),new e2(fx,fw));
                fA.pointBottomLeft = new e2(fE,fD);
                fA.pointBottomRight = new e2(fx,fD);
                fA.pointTopLeft = new e2(fE,fw);
                fA.pointTopRight = new e2(fx,fw);
                fA.setMinMax();
                fA.makeNormalizedPoint();
                return fA
            }
            fy = fy || {};
            var fm = fy.margins || [0, 0, 0, 0];
            var fK = this.pixelToPointIn({
                x: fm[3],
                y: this.height - fm[2]
            }, fy);
            var fO = this.pixelToPointIn({
                x: this.width - fm[1],
                y: fm[0]
            }, fy);
            var fC = typeof fy.heading === "number" ? fy.heading : (this._heading % 360);
            var fk = typeof fy.tilt === "number" ? fy.tilt : this._tilt;
            var fu = this._webglMapCamera;
            if ((fC === 0 && fk === 0) || !fu) {
                this._bounds.setSouthWest(fK);
                this._bounds.setNorthEast(fO);
                this._bounds.pointBottomLeft = fK;
                this._bounds.pointBottomRight = new e2(fO.lng,fK.lat);
                this._bounds.pointTopRight = fO;
                this._bounds.pointTopLeft = new e2(fK.lng,fO.lat);
                this._bounds.setMinMax();
                this._bounds.makeNormalizedPoint();
                return this._bounds
            }
            var fB = this.pixelToPointIn({
                x: fm[3],
                y: fm[0]
            }, fy);
            var fl = fu.getPosition();
            var fQ = Math.sqrt(Math.pow(fB.lng - fl[0], 2) + Math.pow(fB.lat - fl[1], 2));
            var fL = this.getZoomUnits();
            var fS = fQ / fL;
            var fI = fu._frustumSideLen;
            var fq = fu._fovy;
            if (fS > fI || (90 - fk) < fq / 2) {
                var fR = [fB.lng - fl[0], fB.lat - fl[1]];
                if ((90 - fk) < fq / 2) {
                    fR[0] = -fR[0];
                    fR[1] = -fR[1]
                }
                var fJ = fI * fL;
                var fp = [fR[0] / fQ * fJ + fl[0], fR[1] / fQ * fJ + fl[1]];
                var fG = [fO.lng - fl[0], fO.lat - fl[1]];
                if ((90 - fk) < fq / 2) {
                    fG[0] = -fG[0];
                    fG[1] = -fG[1]
                }
                var fn = [fG[0] / fQ * fJ + fl[0], fG[1] / fQ * fJ + fl[1]];
                fB.lng = fp[0];
                fB.lat = fp[1];
                fO.lng = fn[0];
                fO.lat = fn[1]
            }
            var fz = this.pixelToPointIn({
                x: this.width - fm[1],
                y: this.height - fm[2]
            }, fy);
            var fH = [fK, fO, fB, fz];
            var fN = fH[0].lng;
            var fT = fH[0].lat;
            var fo = fH[0].lng;
            var ft = fH[0].lat;
            for (var fM = 1; fM < 4; fM++) {
                if (fH[fM].lng < fN) {
                    fN = fH[fM].lng
                }
                if (fH[fM].lng > fo) {
                    fo = fH[fM].lng
                }
                if (fH[fM].lat < fT) {
                    fT = fH[fM].lat
                }
                if (fH[fM].lat > ft) {
                    ft = fH[fM].lat
                }
            }
            this._bounds.setSouthWest(new e2(fN,fT));
            this._bounds.setNorthEast(new e2(fo,ft));
            this._bounds.pointTopLeft = fB;
            this._bounds.pointTopRight = fO;
            this._bounds.pointBottomRight = fz;
            this._bounds.pointBottomLeft = fK;
            this._bounds.makeNormalizedPoint();
            this._bounds.setMinMax();
            return this._bounds
        },
        isLoaded: function() {
            return !!this.loaded
        },
        _getBestLevel: function(i, fu) {
            var fn = 0;
            if (this._renderType === "webgl" && !d6()) {
                fn = 100
            }
            var fo = fu.margins || [10, 10, 10, 10];
            var fl = fu.zoomFactor || 0;
            var fp = fo[1] + fo[3];
            var fm = fo[0] + fo[2];
            var e = this.getMinZoom();
            var ft = this.getMaxZoom();
            var fs = i.toSpan();
            var fr = fs.width / (this.width - fp - fn);
            var fq = fs.height / (this.height - fm - fn);
            var fk = 18 - c0(Math.max(fr, fq));
            if (fk < e) {
                fk = e
            }
            if (fk > ft) {
                fk = ft
            }
            fk += fl;
            if (this._renderType !== "webgl") {
                fk = Math.floor(fk)
            }
            return fk
        },
        getViewportIn: function(fw, fz) {
            if (this.mapType === BMAP_EARTH_MAP) {
                fw = fw || [];
                var fv = [];
                for (var fm = 0; fm < fw.length; fm++) {
                    if (!fw[fm]) {
                        continue
                    }
                    fv.push(cP.convertMC2LL(fw[fm]))
                }
                var fu = this._earth.getViewportIn(fv, fz);
                var fn = fu.center;
                var fo = fu.zoom;
                var fs = cP.convertLL2MC(fn);
                return {
                    center: fs,
                    zoom: fo
                }
            }
            var fy = {
                center: this.getCenterIn(),
                zoom: this.getZoom()
            };
            if (!fw || fw.length === 0) {
                return fy
            }
            fz = fz || {};
            var fk;
            if (fw instanceof cv) {
                fk = fw
            } else {
                var fr = fw;
                fk = new cv();
                for (var fm = fr.length - 1; fm >= 0; fm--) {
                    fk.extend(fr[fm])
                }
                if (fk.isEmpty()) {
                    return fy
                }
            }
            var e = fk.getCenter();
            var fx = this._getBestLevel(fk, fz);
            if (fz.margins) {
                var fq = fz.margins;
                var fp = (fq[1] - fq[3]) / 2;
                var ft = (fq[0] - fq[2]) / 2;
                var fl = this.getZoomUnits(fx);
                e.lng = e.lng + fl * fp;
                e.lat = e.lat + fl * ft
            }
            return {
                center: e,
                zoom: fx
            }
        },
        setViewportIn: function(fl, fm) {
            if (this.mapType === BMAP_EARTH_MAP) {
                var fq;
                if (fl && fl.center) {
                    var fk = cP.convertMC2LL(fl.center);
                    var fo = this._earth._getEarthZoomByImgZoom(fl.zoom, fk);
                    fq = {
                        center: fk,
                        zoom: fo
                    }
                } else {
                    fq = [];
                    for (var fn = 0; fn < fl.length; fn++) {
                        var fp = cP.convertMC2LL(fl[fn]);
                        fq[fn] = new bR(fp.lat,fp.lng)
                    }
                }
                this._earth.setViewportIn(fq, fm);
                return
            }
            var e;
            if (fl && fl.center) {
                e = fl
            } else {
                e = this.getViewportIn(fl, fm)
            }
            fm = fm || {};
            if (this._renderType === "webgl") {
                this.centerAndZoomIn(e.center, e.zoom, fm);
                return
            }
            if (e.zoom === this.zoomLevel && fm.enableAnimation !== false) {
                this.panToIn(e.center, {
                    duration: 200,
                    callback: fm.callback
                })
            } else {
                this.centerAndZoomIn(e.center, e.zoom, fm)
            }
        },
        addSpots: function(fk, i) {
            if (!fk || fk.length === 0) {
                return
            }
            i = i || {};
            var fn = i.zIndex || 0;
            var fm = typeof i.enableMultiResponse === "undefined" ? true : !!i.enableMultiResponse;
            this.spotsPool = this.spotsPool || {};
            var e = "sp" + (this.temp.spotsGuid++);
            this.spotsPool[e] = {
                spots: fk.slice(0),
                zIndex: fn,
                enableMultiResponse: fm
            };
            var fl = this;
            cG.load("hotspot", function() {
                fl._asyncRegister()
            });
            return e
        },
        getSpots: function(e) {
            return this.spotsPool[e] && this.spotsPool[e].spots || []
        },
        removeSpots: function(e) {
            if (!e || !this.spotsPool[e]) {
                return
            }
            delete this.spotsPool[e]
        },
        clearSpots: function() {
            delete this.spotsPool
        },
        getIconByClickPosition: function(i) {
            if (!this.config.enableIconClick || !this._spotsMgr) {
                return null
            }
            var e = this._spotsMgr.getSpotsByScreenPosition(i);
            if (e[0] && e[0].userdata) {
                var fk = e[0].userdata;
                return {
                    name: fk.name,
                    uid: fk.uid,
                    position: fk.iconPoint || e[0].pt
                }
            }
            return null
        },
        setBounds: function(e) {
            be[this.mapType].bounds = e.clone()
        },
        getCoordType: function() {
            return this.config.coordType
        },
        getPanes: function() {
            return this._panes
        },
        getInfoWindow: function() {
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                return this.temp.infoWin
            }
            return null
        },
        getDistanceIn: function(fm, e) {
            if (!fm || !e) {
                return
            }
            if (this.mapType === BMAP_EARTH_MAP) {
                var fl = cP.convertMC2LL(fm);
                var fk = cP.convertMC2LL(e);
                return this._earth.getDistance(fl, fk)
            }
            var i = cP.getDistanceByMC(fm, e);
            return i
        },
        getOverlays: function() {
            var fm = [];
            var fn = this._overlays;
            var fl = this._customOverlays;
            if (fn) {
                for (var fk in fn) {
                    if (fn[fk]instanceof bJ) {
                        fm.push(fn[fk])
                    }
                }
            }
            if (fl) {
                for (var fk = 0, e = fl.length; fk < e; fk++) {
                    fm.push(fl[fk])
                }
            }
            return fm
        },
        getMapType: function() {
            return this.mapType
        },
        _asyncRegister: function() {
            for (var e = this.temp.registerIndex; e < aI._register.length; e++) {
                aI._register[e](this)
            }
            this.temp.registerIndex = e
        },
        setDefaultCursor: function(e) {
            this.config.defaultCursor = e;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function() {
            return this.config.defaultCursor
        },
        setDraggingCursor: function(e) {
            this.config.draggingCursor = e
        },
        getDraggingCursor: function() {
            return this.config.draggingCursor
        },
        _syncAndChangeMapType: function(e) {
            var i = this;
            if (i._renderType === "webgl" && i.getTilt() > bU.MAX_DRAG_TILT_L2) {
                i.setTilt(bU.MAX_DRAG_TILT_L2, {
                    callback: function() {
                        i._changeEarthMapType(e)
                    }
                })
            } else {
                i._changeEarthMapType(e)
            }
        },
        _changeEarthMapType: function(fk) {
            var fl = this;
            var fo = fl.tileMgr.tileLayers;
            if (this._mapTypeChangAni) {
                this._mapTypeChangAni.stop()
            }
            var fn;
            if (this._earth) {
                fn = this._earth.getEarthCanvas()
            }
            if (!this._earth) {
                this.maskLayer.style.opacity = 1;
                this.maskLayer.style.zIndex = 999;
                this.maskLayer.style.background = "#000"
            }
            this._mapTypeChangAni = new l({
                duration: 400,
                render: function(e) {
                    if (!fl._earth) {
                        return
                    }
                    fn.style.opacity = e
                },
                finish: function() {
                    for (var e = fo.length - 1, fp = e; fp >= 0; fp--) {
                        var fr = fo[fp].tilesDiv;
                        if (fr) {
                            fr.style.visibility = "hidden"
                        }
                        if (fo[fp]._isInnerLayer && fl._renderType !== "webgl") {
                            fl.removeTileLayer(fo[fp])
                        }
                    }
                    fl._mapTypeChangAni = null;
                    fl._mapTypeChanging = false;
                    function fq() {
                        var fv = fl.getZoom() - 2;
                        var fw = fl.getCenterIn();
                        var ft = cP.convertMC2LL(fw);
                        fl._earth = new aI.Earth(fl,{
                            center: ft,
                            zoom: fv,
                            showRealSunlight: fl.config.showRealSunlight,
                            showMilkyway: fl.config.showMilkyway,
                            earthBackground: fl.config.earthBackground
                        });
                        fl._proxyEarthEvents();
                        var fs = fl.mapType;
                        fl.mapType = fk;
                        var fu = new aB("onmaptypechange");
                        fu.zoomLevel = this.zoomLevel;
                        fu.mapType = fk;
                        fu.exMapType = fs;
                        fl.dispatchEvent(fu);
                        fl._setMapTypeStatus(fk);
                        x.extend(fl, aI.EarthView.prototype);
                        if (!fl._navigationCtrl && fl.config.showControls) {
                            fl._navigationCtrl = new de(fl)
                        }
                    }
                    if (!fl._earth) {
                        if (aI["FeatureStyle" + fl.config.style]) {
                            fq()
                        } else {
                            fl.loadMapStyleFiles(function() {
                                fq()
                            })
                        }
                    }
                    if (parseInt(fl.maskLayer.style.opacity, 10) === 1) {
                        setTimeout(function() {
                            fl.maskLayer.style.zIndex = 9;
                            fl.maskLayer.style.opacity = 0
                        }, 1000)
                    }
                }
            });
            if (!this._earth) {
                return
            }
            var i = this.mapType;
            this.mapType = fk;
            var fm = new aB("onmaptypechange");
            fm.zoomLevel = this.zoomLevel;
            fm.mapType = fk;
            fm.exMapType = i;
            this.dispatchEvent(fm);
            fl._setMapTypeStatus(fk);
            x.extend(fl, aI.EarthView.prototype)
        },
        getMapStyleId: function() {
            if (typeof this.config.style === "string") {
                return this.config.style
            }
            return this.config.mapStyleId || "custom"
        },
        _setMapTypeStatus: function(fk) {
            var fp = arguments[1];
            if (fk === BMAP_EARTH_MAP) {
                var fn = this._earth.getEarthCanvas();
                if (fn) {
                    fn.style.display = ""
                }
                var fq = {
                    noAnimation: true
                };
                this._earth.setCenter(cP.convertMC2LL(this.centerPoint), fq);
                this._earth.setImageZoom(this.zoomLevel, fq);
                this._earth.setTilt(this.getTilt(), fq);
                this._earth.setHeading(this.getHeading(), fq)
            } else {
                if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
                    var fo = this._earth;
                    var fl = fo.getMapZoom();
                    var fm = fo._imageRawZoom || fl;
                    var i = fm - fl;
                    var e = fo.getCenter();
                    if (this._renderType === "webgl") {
                        this._tilt = fo.getTilt();
                        if (this.zoomLevel > 7) {
                            this._heading = fo.getHeading();
                            fp && fp(e, fl);
                            return
                        }
                        if (fo.getHeading() !== 0) {
                            fo.setTilt(this.getTilt());
                            fo.setHeading(this.getHeading(), {
                                callback: function() {
                                    fp && fp(e, fl)
                                }
                            })
                        } else {
                            fp && fp(e, fl)
                        }
                        return
                    }
                    if (i < 0.1 && fo.getTilt() === 0 && fo.getHeading() === 0) {
                        fp && fp(e, fl);
                        return
                    }
                    fo.setTilt(0);
                    fo.setHeading(0);
                    fo.setZoom(fo.getZoom() - i, {
                        callback: function() {
                            fp && fp(e, fl)
                        }
                    })
                }
            }
        },
        _proxyEarthEvents: function() {
            var fn = this;
            var fo = this._earth;
            var e = false;
            fo.on("tilesload", function(i) {
                fn.fire(i)
            });
            fo.on("centerandzoom", function(i) {
                fn.dispatchEvent(new aB("onmoveend"));
                fn.dispatchEvent(new aB("onzoomend"))
            });
            function fm(i) {
                fn.fire(i)
            }
            var fk = ["zoomstart", "zoomend", "tilesload", "sunlighttime_change", "sunlighttime_clear", "centerandzoom", "animation_start", "animation_stop", "movestart", "moveend", "moving", "dragstart", "dragend", "dragging"];
            for (var fl = 0; fl < fk.length; fl++) {
                fo.on(fk[fl], fm)
            }
        },
        forceEnableEarth: function() {
            this.config.forceEnableEarth = true;
            this.config.enableEarth = aA.ifEnableEarth(true);
            this.dispatchEvent(new aB("forceenableearth"));
            return this.config.enableEarth
        },
        setLock: function(e) {
            if (this.mapType === BMAP_EARTH_MAP) {
                this._earth.setLock(e)
            }
            this._lock = e
        },
        getLock: function() {
            if (this.mapType === BMAP_EARTH_MAP) {
                return this._earth.getLock()
            }
            return this._lock
        },
        getEarth: function() {
            return this._earth
        },
        isSupportEarth: function() {
            return this.config.enableEarth
        },
        isCanvasMap: function() {
            return !!(this._renderType === "canvas" && this.getMapType() !== "B_EARTH_MAP")
        },
        getCanvasMapCoordByUid: function(fm) {
            if (this._renderType === "webgl") {
                var fn = this.tileMgr.tileLayers;
                for (var fl = 0; fl < fn.length; fl++) {
                    if (fn[fl].labelProcessor) {
                        return fn[fl].labelProcessor.getLabelByUid(fm, "")
                    }
                }
                return null
            }
            var e = this.canvas2dMapMgr._labelClick;
            var fk = e.findLabelByUid(fm);
            return fk ? new e2(fk.iconPos.geoX,fk.iconPos.geoY) : null
        },
        loadBizData: function(i) {
            var e = new aB("onloadbizdata");
            e.data = i;
            this.dispatchEvent(e)
        },
        unloadBizData: function() {
            var e = new aB("onunloadbizdata");
            this.dispatchEvent(e)
        },
        zoomIn: function(e) {
            this.setZoomIn(this.zoomLevel + 1, {
                zoomCenter: e
            })
        },
        zoomOut: function(e) {
            this.setZoomIn(this.zoomLevel - 1, {
                zoomCenter: e
            })
        },
        setCenterIn: function(e, i) {
            this.panToIn(e, i)
        },
        getRenderType: function() {
            return this._renderType
        },
        getSolarInfo: function(fl) {
            fl = fl || this._initDate;
            var fk = aQ(fl);
            var e = cP.convertLL2MC(new e2(fk[0],fk[1]));
            var ft = e.latLng;
            var fo = aI.Projection.convertMC2LL(this.centerPoint);
            var fq = fl.getUTCHours();
            var fs = fq + 24 * fo.lng / 360;
            var fr = fs - 12;
            var fp = fr * 60 * 0.25;
            var fn = Math.asin(Math.sin(cq(fo.lat)) * Math.sin(cq(ft.lat)) + Math.cos(cq(fo.lat)) * Math.cos(cq(ft.lat)) * Math.cos(cq(fp)));
            var fm = Math.asin(Math.sin(cq(fp)) * Math.cos(cq(ft.lat)) / Math.cos(fn));
            var i = "north";
            if (fo.lat < ft.lat) {
                i = "south"
            }
            return {
                zenith: e,
                solarAltitude: fn,
                solarAzimuth: fm,
                centerPosition: i,
                position: e
            }
        },
        setDisplayOptions: function(fk) {
            if (!fk) {
                return
            }
            for (var e in this._displayOptions) {
                if (this._displayOptions.hasOwnProperty(e)) {
                    if (typeof fk[e] === "boolean" || (e === "skyColors" && typeof fk.skyColors === "object")) {
                        this._displayOptions[e] = fk[e]
                    }
                }
            }
            var i = this.getMapType();
            if (i === bW.NORMAL) {
                this.fire(new aB("ondisplayoptions_changed"))
            } else {
                if (i === bW.EARTH && this._earth) {
                    this._earth.fire(new aB("ondisplayoptions_changed"))
                }
            }
        },
        getHorizonPosY: function(e) {
            if (!e || !this._webglMapCamera) {
                return null
            }
            var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {
                heading: 0
            });
            return i.y
        },
        getIndoorInfo: function() {
            if (!this._indoorMgr) {
                return
            }
            return this._indoorMgr.getData()
        },
        showIndoor: function(e, fk) {
            var i = new aB("onindoor_status_changed");
            i.uid = e;
            i.floor = fk;
            this.fire(i)
        },
        addAreaSpot: function(e, fk) {
            if (!e || e.length === 0) {
                return
            }
            fk = fk || {};
            this.areaSpots = this.areaSpots || {};
            var i = fk.id || ("sp" + (this.temp.spotsGuid++));
            this.areaSpots[i] = {
                spot: e,
                userData: fk.userData
            };
            return i
        },
        getAreaSpot: function(e) {
            if (this.areaSpots && this.areaSpots[e]) {
                return this.areaSpots[e]
            }
            return null
        },
        removeAreaSpot: function(e) {
            if (!e || !this.areaSpots[e]) {
                return
            }
            delete this.areaSpots[e]
        },
        clearAreaSpots: function() {
            this.areaSpots = {}
        },
        resetSpotStatus: function() {
            this.fire(new aB("onspot_status_reset"))
        },
        hightlightSpotByUid: function(e, fk) {
            var i = new aB("onspot_highlight");
            i.uid = e;
            i.tilePosStr = fk;
            this.fire(i)
        },
        setZoomIn: function(i, e) {
            e = e || {};
            this.zoomTo(i, e.zoomCenter || null, e)
        },
        getCurrentMaxTilt: function() {
            var e = this.zoomLevel;
            if (this.mapType === "B_EARTH_MAP") {
                return bU.MAX_DRAG_TILT_L2
            }
            if (this.config.restrictCenter === false) {
                return bU.MAX_DRAG_TILT
            }
            if (e >= 19) {
                return bU.MAX_DRAG_TILT
            } else {
                if (e <= 18) {
                    if (e < this._enableTiltZoom) {
                        if (e >= this._enableTiltZoom - 2) {
                            return (1 - (this._enableTiltZoom - e) / 2) * bU.MAX_DRAG_TILT_L2
                        }
                        return 0
                    }
                    return bU.MAX_DRAG_TILT_L2
                } else {
                    return (bU.MAX_DRAG_TILT - bU.MAX_DRAG_TILT_L2) * (e - 18) + bU.MAX_DRAG_TILT_L2
                }
            }
        },
        worldSize: function(i) {
            var e = i || this.zoomLevel;
            return bU.WORLD_SIZE_MC / Math.pow(2, 18 - e)
        },
        setTrafficOn: function() {
            this.addTileLayer(bk)
        },
        setTrafficOff: function() {
            this.removeTileLayer(bk)
        },
        showOverlayContainer: function() {
            this.setDisplayOptions({
                overlay: true
            })
        },
        hideOverlayContainer: function() {
            this.setDisplayOptions({
                overlay: false
            })
        },
        addLabelsToMapTile: function(fk) {
            for (var e = 0; e < fk.length; e++) {
                if (typeof fk[e].type === "undefined") {
                    fk[e].type = "fixed"
                }
                if (typeof fk[e].rank !== "number") {
                    fk[e].rank = 50000
                }
                fk[e].pt = fk[e].position;
                fk[e].custom = true;
                fk[e].processedInZoom = 0;
                this._customTileLabels.push(fk[e])
            }
            this.dispatchEvent(new aB("onadd_tile_labels"))
        },
        removeLabelsFromMapTile: function(fk) {
            for (var fl = 0; fl < fk.length; fl++) {
                for (var e = 0; e < this._customTileLabels.length; e++) {
                    if (this._customTileLabels[e].uid === fk[fl]) {
                        this._customTileLabels.splice(e, 1)
                    }
                }
            }
            this.dispatchEvent(new aB("onremove_tile_labels"))
        },
        clearLabels: function() {
            this._customTileLabels.length = 0;
            this.dispatchEvent(new aB("onclear_labels"))
        },
        loadMapStyleFiles: function(fq) {
            var fl = this.config.style;
            var fn = this;
            this._setTextRenderType();
            if (typeof fl === "string") {
                if (aI["FeatureStyle" + fl]) {
                    fn.fire(new aB("onstyle_loaded"));
                    fq();
                    return
                }
                eX.load(dm.getMapStyleFiles(fl), function() {
                    aI["FeatureStyle" + fl] = window.FeatureStyle;
                    aI["iconSetInfo" + fl] = window.iconSetInfo_high;
                    aI.indoorStyle = window.indoorStyle;
                    fn.fire(new aB("onstyle_loaded"));
                    fq()
                })
            } else {
                var fm = ed;
                var fp = aI.getGUID("custom");
                this.config.mapStyleId = fp;
                var fk = {};
                var fn = this;
                x.extend(fk, fl);
                window.styleCbk = function(fr) {
                    var fs = Math.floor(fn.getZoom());
                    f.onStyleDataBack(fr, fs, fp, fk, fm);
                    aI.customStyleLoaded = true;
                    fn.fire(new aB("onstyle_loaded"));
                    fq()
                }
                ;
                aI.customStyleInfo = {
                    zoomRegion: {},
                    zoomStyleBody: [],
                    zoomFrontStyle: {}
                };
                var e = Math.floor(this.getZoom());
                var fo = f.getStyleUrl(fl, fm, "styleCbk", e);
                if (!aI.iconSetInfoCustom) {
                    var i = dm.getMapStyleFiles("default");
                    i.splice(1, 1);
                    eX.load(i, function() {
                        aI.iconSetInfoCustom = window.iconSetInfo_high;
                        aI.indoorStyle = window.indoorStyle;
                        eX.load(fo)
                    })
                } else {
                    eX.load(fo)
                }
            }
        },
        _setTextRenderType: function() {
            if (d6()) {
                this.config.textRenderType = "canvas"
            } else {
                if (typeof this.config.style === "string") {
                    this.config.textRenderType = "image"
                } else {
                    this.config.textRenderType = "canvas"
                }
            }
        },
        destroy: function() {
            this.fire(new aB("ondestroy"))
        },
        centerAndZoom: function(e, fl, fk) {
            var i = cP.convertLL2MC(e);
            this.centerAndZoomIn(i, fl, fk)
        },
        pointToPixel: function(e, fk) {
            var i = cP.convertLL2MC(e);
            var fl = {};
            x.extend(fl, fk);
            if (fl && fl.center) {
                fl.center = cP.convertLL2MC(fl.center)
            }
            this.pointToPixelIn(i, fl)
        },
        pixelToPoint: function(fk, i) {
            var fl = {};
            x.extend(fl, i);
            if (fl && fl.center) {
                fl.center = cP.convertLL2MC(fl.center)
            }
            var e = this.pixelToPointIn(fk, fl);
            return cP.convertMC2LL(e)
        },
        pointToOverlayPixel: function(e, fk) {
            var i = cP.convertLL2MC(e);
            var fl = {};
            x.extend(fl, fk);
            if (fl && fl.center) {
                fl.center = cP.convertLL2MC(fl.center)
            }
            this.pointToOverlayPixelIn(i, fl)
        },
        overlayPixelToPoint: function(fk, i) {
            var fl = {};
            x.extend(fl, i);
            if (fl && fl.center) {
                fl.center = cP.convertLL2MC(fl.center)
            }
            var e = this.overlayPixelToPointIn(fk, fl);
            return cP.convertMC2LL(e)
        },
        setViewport: function(fk, fl) {
            var e;
            if (fk && fk.center) {
                e = {};
                x.extend(e, fk);
                e.center = cP.convertLL2MC(e.center)
            } else {
                e = [];
                for (var fm = 0; fm < fk.length; fm++) {
                    e[fm] = cP.convertLL2MC(fk[fm])
                }
            }
            this.setViewportIn(e, fl)
        },
        getViewport: function(fn, fl) {
            var fk;
            if (fn && fn.length) {
                fk = [];
                for (var fm = 0; fm < fn.length; fm++) {
                    fk[fm] = cP.convertLL2MC(fn[fm])
                }
            }
            var e = this.getViewportIn(fk, fl);
            e.center = cP.convertMC2LL(e.center);
            return e
        },
        getDistance: function(fm, fk) {
            var i = cP.convertLL2MC(fm);
            var fl = cP.convertLL2MC(fk);
            var e = this.getDistanceIn(i, fl);
            return e
        },
        setCenter: function(e, fk) {
            var i = cP.convertLL2MC(e);
            this.setCenterIn(i, fk)
        },
        setZoom: function(fk, e) {
            var i = {};
            x.extend(i, e);
            if (i && i.zoomCenter) {
                i.zoomCenter = cP.convertLL2MC(i.zoomCenter)
            }
            this.setZoomIn(fk, i)
        },
        flyTo: function(e, fk) {
            var i = cP.convertLL2MC(e);
            this.flyToIn(i, fk)
        },
        panTo: function(e, fk) {
            var i = cP.convertLL2MC(e);
            this.panToIn(i, fk)
        },
        getCenter: function() {
            var e = this.getCenterIn();
            return cP.convertMC2LL(e)
        },
        getBounds: function() {
            var e = this.getBoundsIn();
            var i = new cv(cP.convertMC2LL(e.getSouthWest()),cP.convertMC2LL(e.getNorthEast()));
            return i
        },
        setMapStyleV2: function(e) {
            this.setOptions({
                style: e.styleJson
            })
        }
    });
    var bW = {
        NORMAL: "B_NORMAL_MAP",
        EARTH: "B_EARTH_MAP",
        SATELLITE: "B_STREET_MAP"
    };
    aI.MapTypeId = bW;
    window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAP_SATELLITE_MAP = "B_SATELLITE_MAP";
    window.BMAP_HYBRID_MAP = "B_STREET_MAP";
    window.BMAP_EARTH_MAP = "B_EARTH_MAP";
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    var f = {
        getStyleUrl: function(fk, fm, fl, e) {
            this.styleJson = fk;
            var i = dm.apiHost + "/custom/v2/mapstyle?ak=" + fm + "&callback=" + fl + "&";
            i += "is_all=true&is_new=1&";
            i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(fk, e));
            return i
        },
        styleJson2styleStringV2: function(fl, fv) {
            var fw = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            };
            var fx = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i"
            };
            var fy = [];
            var fq = false;
            var fs = false;
            var fk = false;
            var fr = false;
            var e = false;
            aI.customStyleInfo.zoomFrontStyle[fv] = {};
            for (var fm = 0; !!fl[fm]; fm++) {
                var fu = fl[fm];
                if (this.isOnlyZoomStyler(fu)) {
                    continue
                }
                aI.customStyleInfo.zoomRegion = this.getZoomRegion(fu, aI.customStyleInfo.zoomRegion);
                if (!this.isSelectZoom(fu, fv)) {
                    continue
                }
                if ((fu.featureType === "land" || fu.featureType === "all" || fu.featureType === "background") && typeof fu.elementType === "string" && (fu.elementType === "geometry" || fu.elementType === "geometry.fill" || fu.elementType === "all") && fu.stylers) {
                    if (fu.stylers["color"]) {
                        aI.customStyleInfo.zoomFrontStyle[fv]["bmapLandColor"] = fu.stylers["color"];
                        aI.customStyleInfo.zoomFrontStyle[fv].landColor = true;
                        aI.bmapLandColor = fu.stylers["color"];
                        fq = true
                    }
                    if (fu.stylers["visibility"] && fu.stylers["visibility"] === "off") {
                        aI.customStyleInfo.zoomFrontStyle[fv]["bmapLandColor"] = "#00000000";
                        aI.customStyleInfo.zoomFrontStyle[fv].landColor = true;
                        aI.bmapLandColor = "#00000000";
                        fq = true
                    }
                }
                if (fu.featureType === "railway" && typeof fu.elementType === "string" && fu.stylers) {
                    if (fu.stylers["color"]) {
                        if (fu.elementType === "geometry") {
                            aI.bmapRailwayFillColor = fu.stylers["color"];
                            fs = true;
                            aI.bmapRailwayStrokeColor = fu.stylers["color"];
                            fk = true;
                            aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayFillColor"] = fu.stylers["color"];
                            aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayStrokeColor"] = fu.stylers["color"];
                            aI.customStyleInfo.zoomFrontStyle[fv].railwayFillColor = true;
                            aI.customStyleInfo.zoomFrontStyle[fv].railwayStrokeColor = true
                        }
                        if (fu.elementType === "geometry.fill") {
                            aI.bmapRailwayFillColor = fu.stylers["color"];
                            fs = true;
                            aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayFillColor"] = fu.stylers["color"];
                            aI.customStyleInfo.zoomFrontStyle[fv].railwayFillColor = true
                        }
                        if (fu.elementType === "geometry.stroke") {
                            aI.bmapRailwayStrokeColor = fu.stylers["color"];
                            fk = true;
                            aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayStrokeColor"] = fu.stylers["color"];
                            aI.customStyleInfo.zoomFrontStyle[fv].railwayStrokeColor = true
                        }
                    }
                    if (fu.stylers["visibility"]) {
                        aI.bmapRailwayVisibility = fu.stylers["visibility"];
                        fr = true;
                        aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayVisibility"] = fu.stylers["visibility"];
                        aI.customStyleInfo.zoomFrontStyle[fv].railwayVisibility = true
                    }
                }
                if (fu.featureType === "roadarrow" && fu.elementType === "labels.icon" && fu.stylers) {
                    aI.bmapRoadarrowVisibility = fu.stylers["visibility"];
                    aI.customStyleInfo.zoomFrontStyle[fv]["bmapRoadarrowVisibility"] = fu.stylers["visibility"];
                    aI.customStyleInfo.zoomFrontStyle[fv].roadarrowVisibility = true;
                    e = true
                }
                var fn = {};
                x.extend(fn, fu);
                var fp = fn.stylers;
                delete fn.stylers;
                x.extend(fn, fp);
                var fo = [];
                for (var ft in fw) {
                    if (fn[ft]) {
                        if (this.isEditorZoomKeys(ft)) {
                            continue
                        }
                        if (ft === "elementType") {
                            fo.push(fw[ft] + ":" + fx[fn[ft]])
                        } else {
                            switch (fn[ft]) {
                            case "poilabel":
                                fn[ft] = "poi";
                                break;
                            case "districtlabel":
                                fn[ft] = "label";
                                break
                            }
                            fo.push(fw[ft] + ":" + fn[ft])
                        }
                    }
                }
                if (fo.length > 2) {
                    fy.push(fo.join("|"))
                }
            }
            if (!aI.customStyleInfo.zoomFrontStyle[fv].landColor && aI.customStyleInfo.zoomFrontStyle[fv]["bmapLandColor"]) {
                delete aI.customStyleInfo.zoomFrontStyle[fv]["bmapLandColor"]
            }
            if (!aI.customStyleInfo.zoomFrontStyle[fv].railwayFillColor && aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayFillColor"]) {
                delete aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayFillColor"]
            }
            if (!aI.customStyleInfo.zoomFrontStyle[fv].railwayStrokeColor && aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayStrokeColor"]) {
                delete aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayStrokeColor"]
            }
            if (!aI.customStyleInfo.zoomFrontStyle[fv].railwayVisibility && aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayVisibility"]) {
                delete aI.customStyleInfo.zoomFrontStyle[fv]["bmapRailwayVisibility"]
            }
            if (!aI.customStyleInfo.zoomFrontStyle[fv].roadarrowVisibility && aI.customStyleInfo.zoomFrontStyle[fv]["bmapRoadarrowVisibility"]) {
                delete aI.customStyleInfo.zoomFrontStyle[fv]["bmapRoadarrowVisibility"]
            }
            return fy.join(",")
        },
        isOnlyZoomStyler: function(e) {
            var i = {};
            x.extend(i, e.stylers);
            delete i.curZoomRegionId;
            delete i.curZoomRegion;
            delete i.level;
            if (x.isEmptyObject(i)) {
                return true
            } else {
                return false
            }
        },
        isSelectZoom: function(i, e) {
            var fk = i.stylers["level"];
            if (fk === undefined) {
                return true
            } else {
                if (fk === e + "") {
                    return true
                } else {
                    return false
                }
            }
        },
        isEditorZoomKeys: function(e) {
            var i = {
                curZoomRegionId: true,
                curZoomRegion: true
            };
            if (i[e]) {
                return true
            } else {
                return false
            }
        },
        getZoomRegion: function(e, i) {
            var fl = e.stylers["level"];
            var fk = {};
            x.extend(fk, i);
            if (fl === undefined) {
                return fk
            } else {
                fk[parseInt(fl, 10)] = true;
                return fk
            }
        },
        onStyleDataBack: function(fm, fr, fq, e, fo) {
            if (fm.status !== 0) {
                return
            }
            if (fm.data.style.length === 3) {
                if (!aI.customStyleInfo.baseFs) {
                    aI.customStyleInfo.baseFs = fm.data.style
                }
                aI.StyleBody = fm.data.style[2]
            } else {
                aI.StyleBody = fm.data.style
            }
            var fp = aI.customStyleInfo.baseFs;
            if (!x.isEmptyObject(aI.customStyleInfo.zoomRegion)) {
                this.updateZoomFeatureStyle(aI.StyleBody, fr);
                this.updateFrontFeatureStyle(fr);
                var fk = this.calcuOtherZoomRegion(aI.customStyleInfo.zoomRegion, fr);
                for (var fn in fk) {
                    var fl = {};
                    x.extend(fl, e);
                    this.getOtherZoomStyles(fn, fo, fl)
                }
            } else {
                aI["FeatureStyle" + fq] = fp;
                this.updateFrontFeatureStyle(fr)
            }
        },
        updateZoomFeatureStyle: function(fn, fm) {
            aI.customStyleInfo.zoomStyleBody[fm] = fn;
            if (!aI.customStyleInfo.zoomRegion[fm]) {
                var fl = 3;
                var e = 21;
                for (var fk = fl; fk <= e; fk++) {
                    if (!aI.customStyleInfo.zoomRegion[fk]) {
                        aI.customStyleInfo.zoomStyleBody[fk] = fn
                    }
                }
            }
        },
        getOtherZoomStyles: function(fn, fo, fm) {
            var fl = this;
            var fk = fn;
            var e = (Math.random() * 100000).toFixed(0);
            window["_cbk" + e] = function(fp) {
                if (fp.data.style.length === 3) {
                    fp = fp.data.style[2]
                } else {
                    fp = fp.data.style
                }
                fl.updateZoomFeatureStyle(fp, fk);
                fl.updateFrontFeatureStyle(fk);
                delete window["_cbk" + e]
            }
            ;
            var i = dm.apiHost + "/custom/v2/mapstyle?ak=" + fo + "&callback=_cbk" + e + "&";
            i += "is_all=true&is_new=1&";
            if (fm.styleJson) {
                i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(fm.styleJson, fk))
            } else {
                if (fm.styleId) {
                    i += "styles=" + encodeURIComponent(this.styleJson2styleStringV2(fl.styleJson, fk))
                }
            }
            eX.load(i)
        },
        updateFrontFeatureStyle: function(fm) {
            if (!aI.customStyleInfo.zoomRegion[fm]) {
                var fl = 3;
                var e = 21;
                for (var fk = fl; fk <= e; fk++) {
                    if (!aI.customStyleInfo.zoomRegion[fk]) {
                        if (!aI.customStyleInfo.zoomFrontStyle[fk]) {
                            aI.customStyleInfo.zoomFrontStyle[fk] = {}
                        }
                        aI.customStyleInfo.zoomFrontStyle[fk]["bmapLandColor"] = aI.customStyleInfo.zoomFrontStyle[fm]["bmapLandColor"];
                        aI.customStyleInfo.zoomFrontStyle[fk]["bmapRailwayFillColor"] = aI.customStyleInfo.zoomFrontStyle[fm]["bmapRailwayFillColor"];
                        aI.customStyleInfo.zoomFrontStyle[fk]["bmapRailwayStrokeColor"] = aI.customStyleInfo.zoomFrontStyle[fm]["bmapRailwayStrokeColor"]
                    }
                }
            }
        },
        calcuOtherZoomRegion: function(fo, fn) {
            var fk = {};
            x.extend(fk, fo);
            if (fk[fn]) {
                var fm = 3;
                var e = 21;
                for (var fl = fm; fl <= e; fl++) {
                    if (!fk[fl]) {
                        fk[fl] = true;
                        break
                    }
                }
                delete fk[fn]
            } else {}
            return fk
        }
    };
    function a4(i, e, fl, fk) {
        this.cx = 3 * i;
        this.bx = 3 * (fl - i) - this.cx;
        this.ax = 1 - this.cx - this.bx;
        this.cy = 3 * e;
        this.by = 3 * (fk - e) - this.cy;
        this.ay = 1 - this.cy - this.by;
        this.p1x = i;
        this.p1y = fk;
        this.p2x = fl;
        this.p2y = fk
    }
    a4.prototype.sampleCurveX = function(e) {
        return ((this.ax * e + this.bx) * e + this.cx) * e
    }
    ;
    a4.prototype.sampleCurveY = function(e) {
        return ((this.ay * e + this.by) * e + this.cy) * e
    }
    ;
    a4.prototype.sampleCurveDerivativeX = function(e) {
        return (3 * this.ax * e + 2 * this.bx) * e + this.cx
    }
    ;
    a4.prototype.solveCurveX = function(e, fq) {
        if (typeof fq === "undefined") {
            fq = 0.000001
        }
        var fp;
        var fo;
        var fm;
        var fk;
        var fl;
        for (fm = e,
        fl = 0; fl < 8; fl++) {
            fk = this.sampleCurveX(fm) - e;
            if (Math.abs(fk) < fq) {
                return fm
            }
            var fn = this.sampleCurveDerivativeX(fm);
            if (Math.abs(fn) < 0.000001) {
                break
            }
            fm = fm - fk / fn
        }
        fp = 0;
        fo = 1;
        fm = e;
        if (fm < fp) {
            return fp
        }
        if (fm > fo) {
            return fo
        }
        while (fp < fo) {
            fk = this.sampleCurveX(fm);
            if (Math.abs(fk - e) < fq) {
                return fm
            }
            if (e > fk) {
                fp = fm
            } else {
                fo = fm
            }
            fm = (fo - fp) * 0.5 + fp
        }
        return fm
    }
    ;
    a4.prototype.solve = function(e, i) {
        return this.sampleCurveY(this.solveCurveX(e, i))
    }
    ;
    var bq = {};
    function l(fk) {
        var e = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: bq.linear,
            dropLastAnimation: false
        };
        if (fk) {
            for (var fl in fk) {
                e[fl] = fk[fl]
            }
        }
        if (fk.beginTime) {
            this._beginTime = fk.beginTime
        }
        this._callbacks = [];
        this._options = e;
        if (e.delay) {
            var fm = this;
            setTimeout(function() {
                fm._doStart()
            }, e.delay)
        } else {
            this._doStart()
        }
    }
    l.INFINITE = "INFINITE";
    l.prototype._doStart = function() {
        if (window.requestAnimationFrame) {
            var e = this;
            e._timer = window.requestAnimationFrame(function(i) {
                e._loop(i)
            })
        } else {
            this._beginTime = new Date().getTime();
            if (this._options.duration === l.INFINITE) {
                this._endTime = null
            } else {
                this._endTime = this._beginTime + this._options.duration
            }
            this._loop()
        }
    }
    ;
    l.prototype._loop = function(fl) {
        var fo = this;
        fl = fl || new Date().getTime();
        if (!this._beginTime) {
            this._beginTime = fl
        }
        if (!this._endTime && typeof this._options.duration === "number") {
            this._endTime = this._beginTime + this._options.duration
        }
        if (fo._endTime !== null && fl >= fo._endTime) {
            if (fo._options.dropLastAnimation === false) {
                fo._options.render(fo._options.transition(1), 1, fl)
            }
            if (typeof fo._options.finish === "function") {
                fo._options.finish(fl)
            }
            for (var fn = 0, e = fo._callbacks.length; fn < e; fn++) {
                fo._callbacks[fn]()
            }
            return
        }
        var fm;
        if (typeof fo._options.duration === "number") {
            fm = (fl - fo._beginTime) / fo._options.duration;
            fo.schedule = fo._options.transition(fm)
        } else {
            fm = fl - fo._beginTime;
            fo.schedule = 0
        }
        fo._options.render(fo.schedule, fm, fl);
        if (!fo.terminative) {
            if (window.requestAnimationFrame) {
                fo._timer = requestAnimationFrame(function fk(i) {
                    fo._loop(i)
                })
            } else {
                fo._timer = setTimeout(function() {
                    fo._loop()
                }, 1000 / fo._options.fps)
            }
        }
    }
    ;
    l.prototype.stop = function(i, e) {
        this.terminative = true;
        if (this._timer) {
            if (window.cancelAnimationFrame) {
                cancelAnimationFrame(this._timer)
            } else {
                clearTimeout(this._timer)
            }
            this._timer = null;
            if (typeof this._options.onStop === "function") {
                this._options.onStop(e)
            }
        }
        if (i) {
            this._endTime = this._beginTime;
            this._loop()
        }
    }
    ;
    l.prototype.cancel = function() {
        this.stop()
    }
    ;
    l.prototype.append = function(e) {
        this._callbacks.push(e);
        return this
    }
    ;
    bq = {
        _p1: 1,
        _p2: 1 * 1.525,
        linear: function(e) {
            return e
        },
        reverse: function(e) {
            return 1 - e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeInCubic: function(e) {
            return Math.pow(e, 3)
        },
        easeInBiquad: function(e) {
            return Math.pow(e, 4)
        },
        easeInBack: function(e) {
            return e * e * ((bq._p1 + 1) * e - bq._p1)
        },
        easeOutQuad: function(e) {
            return -(e * (e - 2))
        },
        easeOutCubic: function(e) {
            return Math.pow((e - 1), 3) + 1
        },
        easeOutBiquad: function(e) {
            return 1 - Math.pow((e - 1), 4)
        },
        easeOutBack: function(e) {
            return ((e = e - 1) * e * ((bq._p1 + 1) * e + bq._p1) + 1)
        },
        easeInOutQuad: function(e) {
            if (e < 0.5) {
                return e * e * 2
            } else {
                return -2 * (e - 2) * e - 1
            }
        },
        easeInOutCubic: function(e) {
            if (e < 0.5) {
                return Math.pow(e, 3) * 4
            } else {
                return Math.pow(e - 1, 3) * 4 + 1
            }
        },
        easeInOutBiquad: function(e) {
            if (e < 0.5) {
                return Math.pow(e, 4) * 8
            } else {
                return 1 - (Math.pow(e - 1, 4) * 8)
            }
        },
        easeInOutSine: function(e) {
            return (1 - Math.cos(Math.PI * e)) / 2
        }
    };
    bq.ease = (function() {
        var e = new a4(0.4,0,0.6,1);
        return function(i) {
            return e.solve(i)
        }
    }
    )();
    bq["ease-in"] = bq.easeInQuad;
    bq["ease-out"] = bq.easeOutQuad;
    var dz = {
        start: function(fr) {
            var fl = fr.el;
            var e = fr.style;
            var i = fr.startValue;
            var fo = fr.endValue;
            var fm = fr.duration || 1400;
            var fn = fr.transition || bq.linear;
            var fq = fr.callback;
            var fp = fo - i;
            var fk = fr.unit || "";
            return new l({
                fps: 60,
                duration: fm,
                transition: fn,
                render: function(fs) {
                    fl.style[e] = i + fp * fs + fk
                },
                finish: function() {
                    fq && fq()
                }
            })
        }
    };
    var cV = undefined;
    var bO = {
        is64Bit: function() {
            if (/Windows/.test(navigator.userAgent)) {
                if (/Win64; x64/.test(navigator.userAgent)) {
                    return true
                } else {
                    if (/WOW64/.test(navigator.userAgent)) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            return true
        },
        isIOS112: function bG(e) {
            return /11_2/.test(navigator.userAgent)
        },
        canUseWebAssembly: function(i) {
            if (cV !== undefined) {
                i && i(cV);
                return
            }
            if (window.WebAssembly && this.is64Bit()) {
            	
                if (!aN()) {
                    cV = true;
                    i && i(cV)
                } else {
                    if (this.isIOS112()) {
                        cV = false;
                        i && i(cV)
                    } else {
                        var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127, 3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0, 5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145, 128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97, 105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0, 65, 42, 11]);
                        WebAssembly.instantiate(e).then(function(fk) {
                            cV = true;
                            i && i(cV)
                        }, function(fk) {
                            cV = false;
                            i && i(cV)
                        })
                    }
                }
            } else {
                cV = false;
                i && i(cV)
            }
        }
    };
    var cd = {};
    aI.Utils = cd;
    function bZ(e) {
        return e.style
    }
    function b5(i) {
        if (x.Browser.ie > 0) {
            i.unselectable = "on";
            i.selectstart = function() {
                return false
            }
            ;
            i.onmousedown = function(fk) {
                fk.preventDefault();
                return false
            }
        } else {
            var e = bZ(i);
            e.MozUserSelect = "none";
            e.WebkitUserSelect = "none";
            i.addEventListener("mousedown", function(fk) {
                fk.preventDefault()
            }, false)
        }
    }
    function eQ(e) {
        return e && e.parentNode && e.parentNode.nodeType !== 11
    }
    function cp(i, e) {
        i.insertAdjacentHTML("beforeEnd", e);
        return i.lastChild
    }
    function e9(fk, i) {
        var fl = document.createElement("div");
        fl.innerHTML = i;
        var e = fl.childNodes[0];
        return fk.parentNode.insertBefore(e, fk)
    }
    function g(i) {
        i = i || window.event;
        i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
    }
    function a6(i) {
        i = i || window.event;
        i.preventDefault ? i.preventDefault() : i.returnValue = false;
        return false
    }
    function bX(i) {
        g(i);
        return a6(i)
    }
    function dQ() {
        var e = document.documentElement;
        var i = document.body;
        if (e && (e.scrollTop || e.scrollLeft)) {
            return [e.scrollTop, e.scrollLeft]
        } else {
            if (i) {
                return [i.scrollTop, i.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function dD(fm) {
        if (!fm) {
            return
        }
        fm.onload = fm.onerror = null;
        var fk = fm.attributes, fl, e, fn;
        if (fk) {
            e = fk.length;
            for (fl = 0; fl < e; fl += 1) {
                fn = fk[fl].name;
                if (typeof fm[fn] === "function") {
                    fm[fn] = null
                }
            }
        }
        fk = fm.children;
        if (fk) {
            e = fk.length;
            for (fl = 0; fl < e; fl += 1) {
                dD(fm.children[fl])
            }
        }
    }
    function aX(i, fo, fn) {
        var fm = fo.lng - fn.lng;
        var fl = fo.lat - fn.lat;
        if (fm === 0) {
            return Math.abs(i.lng - fo.lng)
        }
        if (fl === 0) {
            return Math.abs(i.lat - fo.lat)
        }
        var fk = fl / fm;
        var e = fo.lat - fk * fo.lng;
        return Math.abs(fk * i.lng - i.lat + e) / Math.sqrt(fk * fk + 1)
    }
    function eG(i, e) {
        if (!i || !e) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
    }
    function a2(i, e) {
        if (!i || !e) {
            return 0
        }
        return Math.round(Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2)))
    }
    function bP(fk, i) {
        var e = Math.round((fk.x + i.x) / 2);
        var fl = Math.round((fk.y + i.y) / 2);
        return new cN(e,fl)
    }
    function eV(e, fk) {
        var i = [];
        fk = fk || function(fm) {
            return fm
        }
        ;
        for (var fl in e) {
            i.push(fl + "=" + fk(e[fl]))
        }
        return i.join("&")
    }
    function H(fk, i, fn) {
        var fo = document.createElement(fk);
        if (fn) {
            fo = document.createElementNS(fn, fk)
        }
        i = i || {};
        for (var fl in i) {
            var fm = {
                "for": "htmlFor",
                "class": "cssClass"
            }[fl] || fl;
            if (fl === "style") {
                fo.style.cssText = i[fl];
                continue
            }
            if (fl === "class") {
                x.ac(fo, i[fl]);
                continue
            }
            if (fo.setAttribute) {
                fo.setAttribute(fm, i[fl])
            } else {
                try {
                    fo[fm] = i[fl]
                } catch (fo) {}
            }
        }
        return fo
    }
    function d0(e) {
        if (e.currentStyle) {
            return e.currentStyle
        } else {
            if (e.ownerDocument && e.ownerDocument.defaultView) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }
        }
    }
    function a7(e) {
        return typeof e === "function"
    }
    var eY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function eL(fm) {
        var fk = "";
        var ft;
        var fr;
        var fp = "";
        var fs;
        var fq;
        var fo;
        var fn = "";
        var fl = 0;
        var e = /[^A-Za-z0-9+/=]/g;
        if (!fm || e.exec(fm)) {
            return fm
        }
        fm = fm.replace(/[^A-Za-z0-9+/=]/g, "");
        do {
            fs = eY.indexOf(fm.charAt(fl++));
            fq = eY.indexOf(fm.charAt(fl++));
            fo = eY.indexOf(fm.charAt(fl++));
            fn = eY.indexOf(fm.charAt(fl++));
            ft = (fs << 2) | (fq >> 4);
            fr = ((fq & 15) << 4) | (fo >> 2);
            fp = ((fo & 3) << 6) | fn;
            fk = fk + String.fromCharCode(ft);
            if (fo !== 64) {
                fk = fk + String.fromCharCode(fr)
            }
            if (fn !== 64) {
                fk = fk + String.fromCharCode(fp)
            }
            ft = fr = fp = "";
            fs = fq = fo = fn = ""
        } while (fl < fm.length);
        debugger
        return fk
    }
    (function(e) {
        if (!e.Utils) {
            e.Utils = {}
        }
        var i = e.Utils;
        i.format = (function() {
            function fk(fo, fn, fp) {
                var fm = fp[+fn];
                return typeof (fm) === "function" ? fm(fn) : fm
            }
            function fl(fp, fo, fq) {
                var fs = fo;
                var ft = [];
                var fm = fo.split(":");
                if (fm.length === 2) {
                    fs = fm[0];
                    ft.push(fm[1])
                }
                var fr = typeof (fq[fs]);
                if (fr === "function") {
                    return fq[fs].apply(undefined, ft)
                } else {
                    if (fr === "undefined") {
                        return fp
                    } else {
                        return String(fq[fs])
                    }
                }
            }
            return function(fm, fn) {
                var fp = fn.splice ? fk : fl;
                var fo = fm.splice ? fm.join("") : fm;
                return fo.replace(/{([a-zA-Z0-9_$:.]+)}/g, function(fr, fq) {
                    return fp(fr, fq, fn)
                })
            }
        }
        )();
        i.ErrorMonitor = function(fl, fk, fm) {}
        ;
        bO.canUseWebAssembly(function(fk) {
            i.canUseWebAssembly = fk
        })
    }
    )(aI);
    function d6() {
        return (aN() || cZ())
    }
    function aN() {
        var e = navigator.userAgent;
        if (e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) {
            return true
        }
        return false
    }
    function cZ() {
        var e = navigator.userAgent;
        if (e.indexOf("Android") > -1) {
            return true
        }
        return false
    }
    function cq(e) {
        return e * Math.PI / 180
    }
    function b0(e) {
        return e / Math.PI * 180
    }
    function cs(e, fm) {
        var fl = Math.pow(10, fm);
        if (typeof e === "number") {
            return Math.round(e * fl) / fl
        }
        for (var fk = 0; fk < e.length; fk++) {
            e[fk] = cs(e[fk], fm)
        }
        return e
    }
    function dM(fk, i, e) {
        if (fk < i) {
            fk = i
        } else {
            if (fk > e) {
                fk = e
            }
        }
        return fk
    }
    function d1(e, i) {
        while (e < 0) {
            e += i
        }
        return e % i
    }
    function cE(i, e) {
        return (i >= 0 && e >= 0) || (i < 0 && e < 0)
    }
    function ax(i) {
        if (i._gl) {
            return i._gl
        }
        var e = {
            alpha: true,
            antialias: false,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            stencil: false
        };
        var fk = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
        i._gl = fk;
        return fk
    }
    function c4(fl, fk) {
        for (var e = 0; e < fk.length; e++) {
            x.on(fl, fk[e], g)
        }
    }
    function fj(i, fk, e) {
        fk[e] = i.getUniformLocation(fk, e)
    }
    function dk(fm, fn, e, fk, i) {
        var fl = "";
        switch (i) {
        case "mat4":
            fm.uniformMatrix4fv(fn[e], false, fk);
            return;
        case "v3":
            fl = "uniform3fv";
            break;
        case "f":
            fl = "uniform1f";
            break;
        case "i":
            fl = "uniform1i";
            break
        }
        if (fl === "") {
            throw "error"
        }
        fm[fl](fn[e], fk)
    }
    function D(ft, e) {
        while (ft < 0) {
            ft += 360
        }
        ft = ft % 360;
        var fl = e.width;
        var fs = e.height;
        var fo = fl;
        var fk = fs;
        if (ft < 90) {
            var i = Math.sin(cq(ft)) * fl;
            var fq = Math.sin(cq(ft)) * fs;
            var fr = Math.cos(cq(ft)) * fl;
            var fn = Math.cos(cq(ft)) * fs;
            var fo = Math.ceil(fr + fq);
            var fk = Math.ceil(i + fn)
        } else {
            if (ft < 180) {
                var ft = ft - 90;
                var i = Math.sin(cq(ft)) * fl;
                var fq = Math.sin(cq(ft)) * fs;
                var fr = Math.cos(cq(ft)) * fl;
                var fn = Math.cos(cq(ft)) * fs;
                var fo = Math.ceil(i + fn);
                var fk = Math.ceil(fr + fq)
            } else {
                if (ft < 270) {
                    var ft = ft - 180;
                    var i = Math.sin(cq(ft)) * fl;
                    var fq = Math.sin(cq(ft)) * fs;
                    var fr = Math.cos(cq(ft)) * fl;
                    var fn = Math.cos(cq(ft)) * fs;
                    var fo = Math.ceil(fr + fq);
                    var fk = Math.ceil(i + fn)
                } else {
                    var ft = ft - 270;
                    var i = Math.sin(cq(ft)) * fl;
                    var fq = Math.sin(cq(ft)) * fs;
                    var fr = Math.cos(cq(ft)) * fl;
                    var fn = Math.cos(cq(ft)) * fs;
                    var fo = Math.ceil(i + fn);
                    var fk = Math.ceil(fr + fq)
                }
            }
        }
        var fp = fo - fl;
        var fm = fk - fs;
        return [0 - fp / 2, 0 - fm / 2, fl + fp / 2, fs + fm / 2]
    }
    function ex(e) {
        if (e.toDataURL() === ex._blankData) {
            return true
        }
        return false
    }
    function eq(fm, fl, fk) {
        var i = [fk.lng - fm.lng, fk.lat - fm.lat];
        var e = [fl.lng - fm.lng, fl.lat - fm.lat];
        return i[0] * e[1] - i[1] * e[0]
    }
    function bm(fn, fm, fk) {
        var e;
        var fo;
        var fl;
        var i;
        if (fn.lng < fm.lng) {
            e = fn.lng;
            fl = fm.lng
        } else {
            e = fm.lng;
            fl = fn.lng
        }
        if (fn.lat < fm.lat) {
            fo = fn.lat;
            i = fm.lat
        } else {
            fo = fm.lat;
            i = fn.lat
        }
        if (fk.lng < e || fk.lng > fl || fk.lat < fo || fk.lat > i) {
            return false
        }
        return true
    }
    function es(fp, fo, fn, fl) {
        var fm = eq(fn, fl, fp);
        var fk = eq(fn, fl, fo);
        var i = eq(fp, fo, fn);
        var e = eq(fp, fo, fl);
        if (fm * fk < 0 && i * e < 0) {
            return true
        } else {
            if (fm === 0 && bm(fn, fl, fp)) {
                return true
            } else {
                if (fk === 0 && bm(fn, fl, fo)) {
                    return true
                } else {
                    if (i === 0 && bm(fp, fo, fn)) {
                        return true
                    } else {
                        if (e === 0 && bm(fp, fo, fl)) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            }
        }
    }
    function e7(fk, i) {
        var e = i.parentNode;
        if (e.lastChild === i) {
            e.appendChild(fk)
        } else {
            e.insertBefore(fk, i.nextSibling)
        }
    }
    function fb(fr, fs) {
        if (fs === 0) {
            return fr
        }
        var fq = 0;
        var fo = 0;
        if (!fr) {
            throw "异常"
        }
        if (fr.length === 0) {
            return []
        }
        for (var fm = 1, fk = fr.length - 1; fm < fk; fm++) {
            var fp = aX(fr[fm], fr[0], fr[fr.length - 1]);
            if (fp > fq) {
                fo = fm;
                fq = fp
            }
        }
        var e = [];
        if (fq >= fs) {
            var fu = fr.slice(0, fo);
            var ft = fr.slice(fo, fr.length);
            var fn = fb(fu, fs);
            var fl = fb(ft, fs);
            for (var fm = 0, fk = fn.length; fm < fk; fm++) {
                e.push(fn[fm])
            }
            for (var fm = 0, fk = fl.length; fm < fk; fm++) {
                e.push(fl[fm])
            }
        } else {
            e.push(fr[0]);
            e.push(fr[fr.length - 1])
        }
        return e
    }
    function c0(e) {
        if (Math.log2) {
            return Math.log2(e)
        }
        return Math.log(e) / Math.LN2
    }
    function aK(fk, i, e) {
        return Math.min(e, Math.max(i, fk))
    }
    function bE(e, i) {
        if (!i) {
            return e
        }
        var fn = i[0];
        var fm = i[1];
        var fl = i[2];
        var fk = i[3];
        var fp = [];
        var fo = [];
        fp[0] = fk * e[0] + fl * e[2];
        fp[1] = e[1];
        fp[2] = -fl * e[0] + fk * e[2];
        fo[0] = fp[0];
        fo[1] = fm * fp[1] - fn * fp[2];
        fo[2] = fn * fp[1] + fm * fp[2];
        return fo
    }
    var ak = Math.PI / 180;
    var y = 180 / Math.PI;
    function aQ(fk) {
        var i = (fk - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
        var e = (d3.utcDay.floor(fk) - fk) / 86400000 * 360 - 180;
        return [e - I(i) * y, eu(i) * y]
    }
    function I(fl) {
        var fm = d8(fl);
        var i = cr(fl);
        var fk = S(fl);
        var fn = Math.tan(d5(fl) / 2);
        fn *= fn;
        return fn * Math.sin(2 * fk) - 2 * fm * Math.sin(i) + 4 * fm * fn * Math.sin(i) * Math.cos(2 * fk) - 0.5 * fn * fn * Math.sin(4 * fk) - 1.25 * fm * fm * Math.sin(2 * i)
    }
    function eu(e) {
        return Math.asin(Math.sin(d5(e)) * Math.sin(eJ(e)))
    }
    function eJ(e) {
        return aD(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * ak)) * ak
    }
    function aD(e) {
        return S(e) + ct(e)
    }
    function cr(e) {
        return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * ak
    }
    function S(i) {
        var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
        return (e < 0 ? e + 360 : e) / 180 * Math.PI
    }
    function ct(i) {
        var e = cr(i);
        return (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) + Math.sin(e + e) * (0.019993 - 0.000101 * i) + Math.sin(e + e + e) * 0.000289) * ak
    }
    function d5(e) {
        return dt(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * ak) * ak
    }
    function dt(e) {
        return (23 + (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) / 60) * ak
    }
    function d8(e) {
        return 0.016708634 - e * (0.000042037 + 1.267e-7 * e)
    }
    function ay() {
        return window.devicePixelRatio || 1
    }
    function ae(fk) {
        var i;
        var e;
        var fl;
        if (fk >= 0) {
            fl = Math.floor(fk / 65536) * 65536;
            i = fl;
            e = fk - fl
        } else {
            fl = Math.floor(-fk / 65536) * 65536;
            i = -fl;
            e = fk + fl
        }
        return [i, e]
    }
    function A(e) {
        if (e.lng >= 0 && e.lat >= 0) {
            return new e2(e.lng - 10000000,e.lat - 6000000)
        }
        if (e.lng >= 0 && e.lat < 0) {
            return new e2(e.lng - 10000000,e.lat + 6000000)
        }
        if (e.lng < 0 && e.lat >= 0) {
            return new e2(e.lng + 10000000,e.lat - 6000000)
        }
        if (e.lng < 0 && e.lat < 0) {
            return new e2(e.lng + 10000000,e.lat + 6000000)
        }
    }
    var dJ = null;
    if (window.performance && window.performance.now) {
        dJ = function() {
            return performance.now()
        }
    } else {
        if (Date.now) {
            dJ = function() {
                return Date.now()
            }
        } else {
            dJ = function() {
                return (new Date).getTime()
            }
        }
    }
    function aZ(fl, e, i) {
        var fk = "mouseWheel";
        if (x.Platform.macintosh) {
            if (!isNaN(fl) && (fl < 10 || fl !== 120) && (e % 1 === 0 && e < 5)) {
                fk = "padScroll"
            }
            if (x.Browser.firefox && (e % 1 === 0 && e < 5 && i === 0)) {
                fk = "padScroll"
            }
        }
        if (x.Browser.safari && fl === 12) {
            fk = "mouseWheel"
        }
        return fk
    }
    function b1(fu, fp) {
        var ft = fu[0];
        var fs = fu[1];
        var fl = false;
        for (var fo = 0, fn = fp.length - 2; fo < fp.length; fo += 2) {
            var fr = fp[fo];
            var fm = fp[fo + 1];
            var fq = fp[fn];
            var fk = fp[fn + 1];
            var e = ((fm > fs) !== (fk > fs)) && (ft < (fq - fr) * (fs - fm) / (fk - fm) + fr);
            if (e) {
                fl = !fl
            }
            fn = fo
        }
        return fl
    }
    function bB(fk, e, i, fl) {
        fl = fl || 0.4;
        if (fk > i) {
            fk = Math.pow(fk - i + 1, fl) + i - 1
        } else {
            if (fk < e) {
                fk = e - Math.pow(e - fk + 1, fl) + 1
            }
        }
        return fk
    }
    function ei(fp) {
        var fn = "";
        for (var fk = 0; fk < fp.length; fk++) {
            var fq = fp.charCodeAt(fk) << 1;
            var e = fq.toString(2);
            var fm = e.length;
            var ft = e;
            if (fm < 8) {
                ft = "00000000" + e;
                ft = ft.substr(e.length, 8)
            }
            fn += ft
        }
        var fr = 5 - fn.length % 5;
        var fl = [];
        for (var fk = 0; fk < fr; fk++) {
            fl[fk] = "0"
        }
        fn = fl.join("") + fn;
        var fs = [];
        for (var fk = 0; fk < fn.length / 5; fk++) {
            var fq = fn.substr(fk * 5, 5);
            var fo = parseInt(fq, 2) + 50;
            fs.push(String.fromCharCode(fo))
        }
        return fs.join("") + fr.toString()
    }
    function ad(fk, i) {
        var e = aI.TILE_VERSION || window.TILE_VERSION;
        if (!e || !e[fk] || !e[fk][i] || !e[fk][i].version || !e[fk][i].updateDate) {
            e = dm.tvc
        }
        return {
            ver: e[fk][i].version,
            udt: e[fk][i].updateDate
        }
    }
    function dI() {
        var e = aI.MSV || window.MSV;
        if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
            e = dm.msv
        }
        return {
            ver: e.mapstyle.version,
            udt: e.mapstyle.updateDate
        }
    }
    function cS(e, fm) {
        var fl = e.slice(0);
        for (var fk = 0; fk < fl.length; fk++) {
            fl[fk] += fm
        }
        return fl
    }
    var aw = null;
    function aP(e) {
        if (aw) {
            return
        }
        e.fire(new aB("onloadtile"));
        aw = setTimeout(function() {
            aw = null
        }, 1000)
    }
    function dj() {
        if (bs("//map.baidu.com") || bs("//maps.baidu.com") || bs("//ditu.baidu.com")) {
            return true
        }
        return false
    }
    cd.inMapHost = dj();
    if (typeof window._inMapHost === "boolean") {
        cd.inMapHost = window._inMapHost
    }
    function bs(i) {
        var fk = window.location;
        var e = document.createElement("a");
        e.href = i;
        return e.hostname === fk.hostname && e.port === fk.port && e.protocol === fk.protocol
    }
    function cG() {}
    x.extend(cG, {
        Request: {
            INITIAL: -1,
            WAITING: 0,
            LOADED: 1,
            COMPLETED: 2
        },
        Dependency: {
            poly: ["marker"],
            infowindow: ["marker"],
            simpleInfowindow: ["marker"],
            hotspot: ["poly"],
            tools: ["marker", "poly"],
            mapgl: ["glcommon", "poly"],
            earth: ["glcommon"]
        },
        MD5Mapping: {
            control: "dkq3fi",
            marker: "p3gnve",
            poly: "rq23v1",
            infowindow: "2cl1c5",
            simpleInfowindow: "ppwyah",
            hotspot: "hl2gow",
            menu: "m5mfrw",
            tools: "fldqec",
            oppc: "cfgnrd",
            oppcgl: "eoatiy",
            mapgl: "urskax",
            markeranimation: "vbpjvy",
            earth: "bbetvm",
            glcommon: "mj0hvj"
        },
        Config: {
            baseUrl: dm.apiHost + "/getmodules?v=1.0&type=webgl",
            jsModPath: (cd.inMapHost ? "" : dm.mapHost) + "/res/newui/",
            timeout: 5000
        },
        delayFlag: false,
        Module: {
            modules: {},
            modulesNeedToLoad: []
        },
        _getMd5ModsStr: function(fn) {
            var fm = [];
            for (var fp = 0, fk = fn.length; fp < fk; fp++) {
                var fo = fn[fp];
                var e = this.MD5Mapping[fo];
                var fl = "$" + fo + "$";
                if (e !== fl) {
                    fm.push(fo + "_" + e)
                }
            }
            return fm.join(",")
        },
        load: function(i, fn, fl) {
            var e = this.getModuleInfo(i);
            if (e.status === this.Request.COMPLETED) {
                if (fl === true) {
                    fn()
                }
            } else {
                if (e.status === this.Request.INITIAL) {
                    this.combine(i);
                    this.addToLoadQueue(i);
                    var fk = this;
                    if (fk.delayFlag === false) {
                        fk.delayFlag = true;
                        setTimeout(function() {
                            var fo = fk.Config.baseUrl + "&mod=" + fk._getMd5ModsStr(fk.Module.modulesNeedToLoad);
                            eX.load(fo);
                            fk.Module.modulesNeedToLoad.length = 0;
                            fk.delayFlag = false
                        }, 1)
                    }
                    e.status = this.Request.WAITING;
                    function fm(fq) {
                        var fp = fk.getModuleInfo(i);
                        if (fp.status !== fk.Request.COMPLETED) {
                            if (window.map) {
                                var fo = new aB("onmod_timeout");
                                fo.timeout = fq / 1000;
                                fo.moduleName = i;
                                window.map.fire(fo)
                            }
                        }
                    }
                    setTimeout(fm, this.Config.timeout, this.Config.timeout);
                    setTimeout(fm, this.Config.timeout * 2, this.Config.timeout * 2)
                }
                e.callbacks.push(fn)
            }
        },
        combine: function(e) {
            if (e && this.Dependency[e]) {
                var fl = this.Dependency[e];
                for (var fk = 0; fk < fl.length; fk++) {
                    this.combine(fl[fk]);
                    if (!this.Module.modules[fl[fk]]) {
                        this.addToLoadQueue(fl[fk])
                    }
                }
            }
        },
        addToLoadQueue: function(e) {
            var i = this.getModuleInfo(e);
            if (i.status === this.Request.INITIAL) {
                i.status = this.Request.WAITING;
                this.Module.modulesNeedToLoad.push(e)
            }
        },
        run: function(fk, fl) {
            var fp = this.getModuleInfo(fk);
            var fs = this.Dependency[fk];
            if (fs) {
                for (var fn = 0; fn < fs.length; fn++) {
                    var fo = this.getModuleInfo(fs[fn]);
                    if (fo.status !== this.Request.COMPLETED) {
                        fo.modsNeedToRun.push({
                            name: fk,
                            code: fl
                        });
                        return
                    }
                }
            }
            try {
                eval(fl)
            } catch (fq) {
                return
            }
            fp.status = this.Request.COMPLETED;
            for (var fn = 0, fm = fp.callbacks.length; fn < fm; fn++) {
                fp.callbacks[fn]()
            }
            fp.callbacks.length = 0;
            for (fn = 0; fn < fp.modsNeedToRun.length; fn++) {
                var fr = fp.modsNeedToRun[fn];
                this.run(fr.name, fr.code)
            }
            fp.modsNeedToRun.length = 0
        },
        getModuleInfo: function(i) {
            var e;
            if (!this.Module.modules[i]) {
                this.Module.modules[i] = {
                    status: this.Request.INITIAL,
                    callbacks: [],
                    modsNeedToRun: []
                }
            }
            e = this.Module.modules[i];
            return e
        }
    });
    window._jsload = function(fm, fn) {
        var i = cG.getModuleInfo(fm);
        i.status = cG.Request.LOADED;
        if (fn !== "") {
            cG.run(fm, fn)
        } else {
            if (window.map) {
                var e = new aB("ongetmodules_fail");
                e.moduleName = fm;
                window.map.fire(e)
            }
            var fk = document.createElement("script");
            var fl = cG.MD5Mapping[fm];
            fk.src = cG.Config.jsModPath + fm + "_" + fl + ".js";
            document.getElementsByTagName("head")[0].appendChild(fk)
        }
    }
    ;
    function M() {
        this._timeData = {}
    }
    var ds;
    if (typeof window !== "undefined") {
        ds = window
    } else {
        ds = self
    }
    M.prototype.mark = function(e) {
        this._timeData[e] = this._getTime()
    }
    ;
    M.prototype.getMark = function(e) {
        return this._timeData[e]
    }
    ;
    M.prototype.getTime = function(i, e) {
        return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2))
    }
    ;
    M.prototype.print = function() {}
    ;
    M.prototype.clear = function() {
        this._timeData = {}
    }
    ;
    if (ds.performance && ds.performance.now) {
        M.prototype._getTime = function() {
            return performance.now()
        }
    } else {
        M.prototype._getTime = function() {
            return Date.now()
        }
    }
    !function(i, fk) {
        fk(i.d3 = i.d3 || {})
    }(window, function(fX) {
        function gf(gn, go, gl, gm) {
            function e(i) {
                return gn(i = new Date(+i)),
                i
            }
            return e.floor = e,
            e.ceil = function(i) {
                return gn(i = new Date(i - 1)),
                go(i, 1),
                gn(i),
                i
            }
            ,
            e.round = function(i) {
                var gp = e(i)
                  , gq = e.ceil(i);
                return gq - i > i - gp ? gp : gq
            }
            ,
            e.offset = function(i, gp) {
                return go(i = new Date(+i), null == gp ? 1 : Math.floor(gp)),
                i
            }
            ,
            e.range = function(gq, i, gp) {
                var gr = [];
                if (gq = e.ceil(gq),
                gp = null == gp ? 1 : Math.floor(gp),
                !(i > gq && gp > 0)) {
                    return gr
                }
                do {
                    gr.push(new Date(+gq))
                } while (go(gq, gp),
                gn(gq),
                i > gq);return gr
            }
            ,
            e.filter = function(i) {
                return gf(function(gp) {
                    for (; gn(gp),
                    !i(gp); ) {
                        gp.setTime(gp - 1)
                    }
                }, function(gp, gq) {
                    for (; --gq >= 0; ) {
                        for (; go(gp, 1),
                        !i(gp); ) {}
                    }
                })
            }
            ,
            gl && (e.count = function(i, gp) {
                return fZ.setTime(+i),
                f3.setTime(+gp),
                gn(fZ),
                gn(f3),
                Math.floor(gl(fZ, f3))
            }
            ,
            e.every = function(i) {
                return i = Math.floor(i),
                isFinite(i) && i > 0 ? i > 1 ? e.filter(gm ? function(gp) {
                    return gm(gp) % i === 0
                }
                : function(gp) {
                    return e.count(0, gp) % i === 0
                }
                ) : e : null
            }
            ),
            e
        }
        function f4(e) {
            return gf(function(i) {
                i.setDate(i.getDate() - (i.getDay() + 7 - e) % 7),
                i.setHours(0, 0, 0, 0)
            }, function(i, gl) {
                i.setDate(i.getDate() + 7 * gl)
            }, function(i, gl) {
                return (gl - i - (gl.getTimezoneOffset() - i.getTimezoneOffset()) * fY) / gc
            })
        }
        function fW(e) {
            return gf(function(i) {
                i.setUTCDate(i.getUTCDate() - (i.getUTCDay() + 7 - e) % 7),
                i.setUTCHours(0, 0, 0, 0)
            }, function(i, gl) {
                i.setUTCDate(i.getUTCDate() + 7 * gl)
            }, function(i, gl) {
                return (gl - i) / gc
            })
        }
        var fZ = new Date
          , f3 = new Date
          , ga = gf(function() {}, function(i, gl) {
            i.setTime(+i + gl)
        }, function(i, gl) {
            return gl - i
        });
        ga.every = function(e) {
            return e = Math.floor(e),
            isFinite(e) && e > 0 ? e > 1 ? gf(function(i) {
                i.setTime(Math.floor(i / e) * e)
            }, function(i, gl) {
                i.setTime(+i + gl * e)
            }, function(i, gl) {
                return (gl - i) / e
            }) : ga : null
        }
        ;
        var gj = ga.range
          , gh = 1000
          , fY = 60000
          , ge = 3600000
          , f6 = 86400000
          , gc = 604800000
          , fq = gf(function(e) {
            e.setTime(Math.floor(e / gh) * gh)
        }, function(i, gl) {
            i.setTime(+i + gl * gh)
        }, function(i, gl) {
            return (gl - i) / gh
        }, function(e) {
            return e.getUTCSeconds()
        })
          , gg = fq.range
          , f5 = gf(function(e) {
            e.setTime(Math.floor(e / fY) * fY)
        }, function(i, gl) {
            i.setTime(+i + gl * fY)
        }, function(i, gl) {
            return (gl - i) / fY
        }, function(e) {
            return e.getMinutes()
        })
          , fy = f5.range
          , fS = gf(function(i) {
            var gl = i.getTimezoneOffset() * fY % ge;
            0 > gl && (gl += ge),
            i.setTime(Math.floor((+i - gl) / ge) * ge + gl)
        }, function(i, gl) {
            i.setTime(+i + gl * ge)
        }, function(i, gl) {
            return (gl - i) / ge
        }, function(e) {
            return e.getHours()
        })
          , gb = fS.range
          , fI = gf(function(e) {
            e.setHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setDate(i.getDate() + gl)
        }, function(i, gl) {
            return (gl - i - (gl.getTimezoneOffset() - i.getTimezoneOffset()) * fY) / f6
        }, function(e) {
            return e.getDate() - 1
        })
          , fp = fI.range
          , fF = f4(0)
          , fH = f4(1)
          , fl = f4(2)
          , fD = f4(3)
          , fs = f4(4)
          , fV = f4(5)
          , f2 = f4(6)
          , fn = fF.range
          , fU = fH.range
          , fw = fl.range
          , fR = fD.range
          , f7 = fs.range
          , fT = fV.range
          , gi = f2.range
          , f9 = gf(function(e) {
            e.setDate(1),
            e.setHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setMonth(i.getMonth() + gl)
        }, function(i, gl) {
            return gl.getMonth() - i.getMonth() + 12 * (gl.getFullYear() - i.getFullYear())
        }, function(e) {
            return e.getMonth()
        })
          , gk = f9.range
          , fC = gf(function(e) {
            e.setMonth(0, 1),
            e.setHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setFullYear(i.getFullYear() + gl)
        }, function(i, gl) {
            return gl.getFullYear() - i.getFullYear()
        }, function(e) {
            return e.getFullYear()
        });
        fC.every = function(e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? gf(function(i) {
                i.setFullYear(Math.floor(i.getFullYear() / e) * e),
                i.setMonth(0, 1),
                i.setHours(0, 0, 0, 0)
            }, function(i, gl) {
                i.setFullYear(i.getFullYear() + gl * e)
            }) : null
        }
        ;
        var fv = fC.range
          , f0 = gf(function(e) {
            e.setUTCSeconds(0, 0)
        }, function(i, gl) {
            i.setTime(+i + gl * fY)
        }, function(i, gl) {
            return (gl - i) / fY
        }, function(e) {
            return e.getUTCMinutes()
        })
          , fK = f0.range
          , fJ = gf(function(e) {
            e.setUTCMinutes(0, 0, 0)
        }, function(i, gl) {
            i.setTime(+i + gl * ge)
        }, function(i, gl) {
            return (gl - i) / ge
        }, function(e) {
            return e.getUTCHours()
        })
          , fG = fJ.range
          , fE = gf(function(e) {
            e.setUTCHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setUTCDate(i.getUTCDate() + gl)
        }, function(i, gl) {
            return (gl - i) / f6
        }, function(e) {
            return e.getUTCDate() - 1
        })
          , fB = fE.range
          , fA = fW(0)
          , fz = fW(1)
          , fx = fW(2)
          , fu = fW(3)
          , ft = fW(4)
          , fo = fW(5)
          , fm = fW(6)
          , fk = fA.range
          , fQ = fz.range
          , gd = fx.range
          , f1 = fu.range
          , f8 = ft.range
          , fP = fo.range
          , fO = fm.range
          , fN = gf(function(e) {
            e.setUTCDate(1),
            e.setUTCHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setUTCMonth(i.getUTCMonth() + gl)
        }, function(i, gl) {
            return gl.getUTCMonth() - i.getUTCMonth() + 12 * (gl.getUTCFullYear() - i.getUTCFullYear())
        }, function(e) {
            return e.getUTCMonth()
        })
          , fM = fN.range
          , fr = gf(function(e) {
            e.setUTCMonth(0, 1),
            e.setUTCHours(0, 0, 0, 0)
        }, function(i, gl) {
            i.setUTCFullYear(i.getUTCFullYear() + gl)
        }, function(i, gl) {
            return gl.getUTCFullYear() - i.getUTCFullYear()
        }, function(e) {
            return e.getUTCFullYear()
        });
        fr.every = function(e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? gf(function(i) {
                i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e),
                i.setUTCMonth(0, 1),
                i.setUTCHours(0, 0, 0, 0)
            }, function(i, gl) {
                i.setUTCFullYear(i.getUTCFullYear() + gl * e)
            }) : null
        }
        ;
        var fL = fr.range;
        fX.timeInterval = gf,
        fX.timeMillisecond = ga,
        fX.timeMilliseconds = gj,
        fX.utcMillisecond = ga,
        fX.utcMilliseconds = gj,
        fX.timeSecond = fq,
        fX.timeSeconds = gg,
        fX.utcSecond = fq,
        fX.utcSeconds = gg,
        fX.timeMinute = f5,
        fX.timeMinutes = fy,
        fX.timeHour = fS,
        fX.timeHours = gb,
        fX.timeDay = fI,
        fX.timeDays = fp,
        fX.timeWeek = fF,
        fX.timeWeeks = fn,
        fX.timeSunday = fF,
        fX.timeSundays = fn,
        fX.timeMonday = fH,
        fX.timeMondays = fU,
        fX.timeTuesday = fl,
        fX.timeTuesdays = fw,
        fX.timeWednesday = fD,
        fX.timeWednesdays = fR,
        fX.timeThursday = fs,
        fX.timeThursdays = f7,
        fX.timeFriday = fV,
        fX.timeFridays = fT,
        fX.timeSaturday = f2,
        fX.timeSaturdays = gi,
        fX.timeMonth = f9,
        fX.timeMonths = gk,
        fX.timeYear = fC,
        fX.timeYears = fv,
        fX.utcMinute = f0,
        fX.utcMinutes = fK,
        fX.utcHour = fJ,
        fX.utcHours = fG,
        fX.utcDay = fE,
        fX.utcDays = fB,
        fX.utcWeek = fA,
        fX.utcWeeks = fk,
        fX.utcSunday = fA,
        fX.utcSundays = fk,
        fX.utcMonday = fz,
        fX.utcMondays = fQ,
        fX.utcTuesday = fx,
        fX.utcTuesdays = gd,
        fX.utcWednesday = fu,
        fX.utcWednesdays = f1,
        fX.utcThursday = ft,
        fX.utcThursdays = f8,
        fX.utcFriday = fo,
        fX.utcFridays = fP,
        fX.utcSaturday = fm,
        fX.utcSaturdays = fO,
        fX.utcMonth = fN,
        fX.utcMonths = fM,
        fX.utcYear = fr,
        fX.utcYears = fL,
        Object.defineProperty(fX, "__esModule", {
            value: !0
        })
    });
    function ej(e) {
        this._elemType = e;
        this._objCollection = {}
    }
    ej.prototype.get = function() {
        var i = null;
        for (var e in this._objCollection) {
            if (this._objCollection[e] && this._objCollection[e]._free === true) {
                this._objCollection[e]._free = false;
                return this._objCollection[e]
            }
        }
        i = H(this._elemType);
        e = aI.getGUID("obj_pool_");
        this._objCollection[e] = i;
        return i
    }
    ;
    ej.prototype.free = function(e) {
        if (!e) {
            return
        }
        e._free = true;
        if (e.tagName.toLowerCase() === "img") {
            e.src = "";
            e.crossOrigin = null;
            e.onload = e.onerror = null
        }
    }
    ;
    ej.prototype.clear = function() {
        for (var e in this._objCollection) {
            if (this._objCollection[e] && this._objCollection[e].tagName.toLowerCase === "img") {
                this._objCollection[e].onload = this._objCollection[e].onerror = null
            }
        }
        this._objCollection = {}
    }
    ;
    var eX = (function(e) {
        function i(fn, fk, fm) {
            var fl = H("script", {
                src: fn,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (fl.addEventListener) {
                fl.addEventListener("load", function(fp) {
                    var fo = fp.target;
                    fo.parentNode.removeChild(fo);
                    fk && fk()
                }, false);
                fl.addEventListener("error", function(fo) {
                    fm && fm(null)
                }, false)
            } else {
                if (fl.attachEvent) {
                    fl.attachEvent("onreadystatechange", function(fp) {
                        var fo = window.event.srcElement;
                        if (fo && (fo.readyState === "loaded" || fo.readyState === "complete")) {
                            fo.parentNode.removeChild(fo)
                        }
                        fk && fk()
                    })
                }
            }
            e.getElementsByTagName("head")[0].appendChild(fl)
        }
        return {
            load: function(fo, fk, fl) {
                if (typeof fo === "string") {
                    i(fo, fk, fl)
                } else {
                    if (fo.length > 0) {
                        var fn = fo.length;
                        for (var fm = 0; fm < fn; fm++) {
                            i(fo[fm], function() {
                                fn--;
                                if (fn === 0 && fk) {
                                    fk()
                                }
                            })
                        }
                    }
                }
            }
        }
    }
    )(window.document);
    function bF() {}
    bF.instances = {};
    bF.getInstance = function(i, fk) {
        if (bF.instances[i]) {
            return bF.instances[i]
        }
        var e = new b3(i,fk);
        bF.instances[i] = e;
        return e
    }
    ;
    function b3(e, i) {
        this._name = e;
        this._baseZoom = 18;
        this._opts = {
            tileSize: 256
        };
        x.extend(this._opts, i || {})
    }
    b3.mapZoomBaseIndex = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0];
    b3.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
    b3.baseScaleZoomMercatorSize = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608];
    b3.mapZoomBaseZoomMapping = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19];
    b3.mapZoomStartZoomMapping = [0, 0, 0, 3, 4, 4, 6, 6, 8, 8, 10, 11, 11, 11, 14, 14, 16, 16, 18, 18, 18, 18];
    b3.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
    b3.mapZoomTileSize = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    b3.baseZoomInfo = {
        "3": [3],
        "5": [4, 5],
        "7": [6, 7],
        "9": [8, 9],
        "10": [10],
        "12": [11, 12, 13],
        "15": [14, 15],
        "17": [16, 17],
        "19": [18, 19, 20, 21]
    };
    b3.prototype = {
        getName: function() {
            return this._name
        },
        getTileSize: function(e) {
            e = Math.floor(e);
            if (e < 3) {
                e = 3
            }
            if (this._name === "na") {
                return b3.mapZoomTileSize[e]
            }
            return this._opts.tileSize
        },
        getBaseTileSize: function(i) {
            i = Math.floor(i);
            if (this._name === "na") {
                var e = b3.mapZoomBaseZoomMapping[i];
                return b3.mapZoomTileSize[e]
            }
            return this._opts.tileSize
        },
        getDataZoom: function(e) {
            e = Math.floor(e);
            if (this._name === "na") {
                return b3.mapZoomBaseZoomMapping[e]
            }
            return e
        },
        getZoomUnits: function(e) {
            return Math.pow(2, (this._baseZoom - e))
        },
        getMercatorSize: function(fk, i) {
            if (this._name === "na") {
                fk = Math.floor(fk);
                var e = b3.mapZoomBaseIndex[fk];
                return b3.baseScaleZoomMercatorSize[e]
            }
            return this._opts.tileSize * this.getZoomUnits(i)
        },
        getBaseZoom: function() {
            return this._baseZoom
        },
        getParentTile: function(fl, fr, fq, fk, i) {
            if (this._name === "na") {
                var fm = b3.baseZoomInfo[fq];
                fk--;
                if (fm.indexOf(fk) > -1) {
                    return {
                        col: fl,
                        row: fr,
                        zoom: fq,
                        useZoom: fk
                    }
                } else {
                    var fo = b3.mapZoomBaseIndex[fq];
                    var fn = b3.baseScaleZoom[fo + 1];
                    if (!fn) {
                        return null
                    }
                    var fp = this.getFactorByZooms(fn, fq);
                    var e = b3.baseZoomInfo[fn];
                    return {
                        col: Math.floor(fl / fp),
                        row: Math.floor(fr / fp),
                        zoom: fn,
                        useZoom: e[e.length - 1]
                    }
                }
                return null
            }
            if (fq - 1 < i) {
                return null
            }
            return {
                col: Math.floor(fl / 2),
                row: Math.floor(fr / 2),
                zoom: fq - 1,
                useZoom: fq - 1
            }
        },
        getChildTiles: function(fm, fo, e, fk, fv, fB) {
            if (this._name === "na") {
                var fl = b3.baseZoomInfo[e];
                fk += fB;
                if (fl.indexOf(fk) > -1) {
                    return [{
                        col: fm,
                        row: fo,
                        zoom: e,
                        useZoom: fk
                    }]
                } else {
                    var fz = 0;
                    var fw = e;
                    while (fz < fB) {
                        var fA = b3.mapZoomBaseIndex[fw];
                        var fq = b3.baseScaleZoom[fA - 1];
                        if (!fq) {
                            return null
                        }
                        var fr = b3.baseZoomInfo[fq];
                        if (fr[fB - 1]) {
                            var fs = [];
                            var fu = this.getFactorByZooms(e, fq);
                            var i = fm * fu;
                            var ft = fo * fu;
                            for (var fy = 0; fy < fu; fy++) {
                                var fn = i + fy;
                                for (var fx = 0; fx < fu; fx++) {
                                    var fp = ft + fx;
                                    fs.push({
                                        col: fn,
                                        row: fp,
                                        zoom: fq,
                                        useZoom: fr[fB - 1]
                                    })
                                }
                            }
                            return fs
                        }
                        fz += fr.length;
                        if (fB === fr.length) {
                            fw = fq
                        }
                    }
                }
                return null
            }
            var fs = [];
            if (e + fB > fv) {
                return null
            }
            var fu = Math.pow(2, fB);
            var i = fm * fu;
            var ft = fo * fu;
            var fq = e + fB;
            var fs = [];
            for (var fy = 0; fy < 2; fy++) {
                var fn = i + fy;
                for (var fx = 0; fx < 2; fx++) {
                    var fp = ft + fx;
                    fs.push({
                        col: fn,
                        row: fp,
                        zoom: fq,
                        useZoom: fq
                    })
                }
            }
            return fs
        },
        getFactorByZooms: function(i, fl) {
            var fk = b3.mapZoomBaseIndex[i];
            var fm = b3.mapZoomBaseIndex[fl];
            var e = b3.baseScaleZoomMercatorSize[fk];
            var fn = b3.baseScaleZoomMercatorSize[fm];
            return e / fn
        }
    };
    var aA = {};
    var P = ["swiftshader", "microsoft basic render driver"];
    var bp = ["intel", "nvidia", "amd", "apple", "geforce"];
    function cc(e) {
        e = e.toLowerCase();
        if (P.indexOf(e) >= 0) {
            return true
        }
        if (e.indexOf("mobile") >= 0) {
            return true
        }
        return false
    }
    function dL(fk) {
        fk = fk.toLowerCase();
        for (var e = 0; e < bp.length; e++) {
            if (fk.indexOf(bp[e]) >= 0) {
                return true
            }
        }
        return false
    }
    function cA(e) {
        if (!e) {
            return false
        }
        if (cc(e)) {
            return false
        }
        if (dL(e)) {
            return true
        }
        return false
    }
    aA.ifEnableEarth = function(i) {
        var e = aA.ifEnableEarth;
        if (!i && typeof e._enable === "boolean") {
            return e._enable
        }
        if (aA.ifSupportWebGL()) {
            e._enable = true;
            return true
        }
        e._enable = false;
        return false
    }
    ;
    aA.ifEnableWebGLMap = function(i) {
        var e = aA.ifEnableWebGLMap;
        if (!i && typeof e._enable === "boolean") {
            return e._enable
        }
        if (aA.ifSupportWebGL()) {
            if (cd.inMapHost) {
                e._enable = true;
                return true
            } else {
                if (window.Blob || window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder) {
                    e._enable = true;
                    return true
                } else {
                    e._enable = false;
                    return false
                }
            }
        }
        e._enable = false;
        return false
    }
    ;
    aA.params = {};
    aA.ifSupportWebGL = function() {
        var i = aA.ifSupportWebGL;
        if (typeof i._supportWebGL === "boolean") {
            return i._supportWebGL
        }
        if (!window.WebGLRenderingContext) {
            i._supportWebGL = false;
            return false
        }
        var fk = document.createElement("canvas");
        fk.width = 300;
        fk.height = 150;
        var fm = null;
        var fs = {
            alpha: false,
            antialias: false,
            failIfMajorPerformanceCaveat: true,
            preserveDrawingBuffer: false,
            stencil: false
        };
        try {
            fm = fk.getContext("webgl", fs) || fk.getContext("experimental-webgl", fs)
        } catch (fo) {
            i._supportWebGL = false
        }
        if (fm === null) {
            i._supportWebGL = false
        } else {
            i._supportWebGL = true;
            var fq = fm.getExtension("WEBGL_debug_renderer_info");
            if (fq) {
                var fp = fm.getParameter(fq.UNMASKED_RENDERER_WEBGL);
                if (cA(fp) === true) {
                    i._supportWebGL = true
                }
                var fr = fm.getParameter(fq.UNMASKED_VENDOR_WEBGL);
                i._renderer = fp;
                i._vendor = fr
            }
            if (!fq && x.Browser.firefox) {
                i._supportWebGL = true
            }
            if (!fq && x.Platform.macintosh) {
                i._supportWebGL = true
            }
            if (fm.drawingBufferWidth !== fk.width || fm.drawingBufferHeight !== fk.height) {
                i._supportWebGL = false
            }
            if (fm.getParameter(fm.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
                i._supportWebGL = false
            }
            var fl = fm.getParameter(fm.MAX_TEXTURE_SIZE);
            aA.params.maxTextureSize = fl;
            if (fl < 4096) {
                i._supportWebGL = false
            }
            var fn = fm.getParameter(fm.MAX_TEXTURE_IMAGE_UNITS);
            if (fn < 8) {
                i._supportWebGL = false
            }
            if (!fm.getShaderPrecisionFormat || fm.getShaderPrecisionFormat(fm.FRAGMENT_SHADER, fm.HIGH_FLOAT).precision < 23) {
                i._supportWebGL = false
            }
        }
        return i._supportWebGL
    }
    ;
    aA.ifSupportCanvas2d = function() {
        var fm = aA.ifSupportCanvas2d;
        if (typeof fm.supportCanvas2d === "boolean") {
            return fm.supportCanvas2d
        }
        var fk = document.createElement("canvas");
        var i = null;
        try {
            i = fk.getContext("2d")
        } catch (fl) {
            fm.supportCanvas2d = false
        }
        if (i === null) {
            fm.supportCanvas2d = false
        } else {
            fm.supportCanvas2d = true
        }
        return fm.supportCanvas2d
    }
    ;
    aA.ifEnableCanvas2dMap = function() {
        var i = navigator.userAgent;
        var e = 0;
        var fl = 0;
        var fm = 0;
        if (/macintosh/ig.test(i)) {
            var fk = 0;
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) && !/chrome/i.test(i)) {
                fk = parseInt((RegExp["\x241"] || RegExp["\x242"]), 10)
            }
            if (fk > 0) {
                return false
            }
            return true
        }
        if (/windows nt (\d+\.\d)/ig.test(i)) {
            fl = parseFloat(RegExp.$1);
            if (fl >= 6.1) {
                if (/chrome\/(\d+\.\d)/i.test(i)) {
                    e = parseFloat(RegExp.$1);
                    if (e >= 31) {
                        return true
                    }
                }
                if (/MSIE (\d+(\.\d+)?)/.test(i)) {
                    fm = parseFloat(RegExp.$1);
                    if (fm >= 10) {
                        return true
                    }
                }
                if (/Firefox/.test(i)) {
                    return true
                }
                if (/rv:11.0/ig.test(i)) {
                    return true
                }
                if (/edge/ig.test(i)) {
                    return true
                }
            }
        }
        return false
    }
    ;
    aA.ifSupportCSS3 = function(fp, i) {
        var fo = document.createElement("div");
        var fn = "Webkit Moz O ms".split(" ");
        var e = fn.length;
        var fk = "";
        var fl = fo.style;
        if (fp in fl) {
            fk = fp
        }
        fp = fp.replace(/^[a-z]/, function(fq) {
            return fq.toUpperCase()
        });
        while (e--) {
            var fm = fn[e] + fp;
            if (fm in fl) {
                fk = fm;
                break
            }
        }
        if (i) {
            return fk
        } else {
            return fk.length > 0 ? true : false
        }
    }
    ;
    aA.isModernBrowser = aA.ifSupportCanvas2d() && aA.ifSupportCSS3("transform");
    function di(i, e) {
        this._size = i;
        this._curSize = 0;
        this._cache = {};
        this._least = null;
        this._most = null;
        this._options = {
            clearCallback: null,
            removeOldCallback: null
        };
        e = e || {};
        for (var fk in e) {
            this._options[fk] = e[fk]
        }
        this._getDataTimes = 0;
        this._hitTimes = 0
    }
    di.prototype.setData = function(fl, fn) {
        var i = this._cache;
        var fk = this._size;
        if (fk === 0) {
            return
        }
        var e = this._curSize;
        if (e === fk) {
            this._removeOld()
        }
        var fm;
        if (!i[fl]) {
            fm = {
                key: fl,
                data: fn,
                older: null,
                newwer: null
            };
            i[fl] = fm;
            if (this._least === null) {
                this._least = fm
            }
            if (this._most === null) {
                this._most = fm
            }
            this._curSize++
        } else {
            fm = i[fl];
            fm.data = fn;
            if (this._most === fm) {
                return
            }
            fm.older && (fm.older.newer = fm.newer);
            fm.newer && (fm.newer.older = fm.older);
            if (this._least === fm) {
                this._least = fm.newer
            }
        }
        if (this._most && this._most !== fm) {
            this._most.newer = fm;
            fm.older = this._most;
            this._most = fm;
            fm.newer = null
        }
    }
    ;
    di.prototype.getData = function(e) {
        var i = this._cache[e];
        this._getDataTimes++;
        if (i) {
            this._hitTimes++;
            var fk = i.data;
            if (this._most === i) {
                return fk
            }
            i.older && (i.older.newer = i.newer);
            i.newer && (i.newer.older = i.older);
            if (this._least === i) {
                this._least = i.newer
            }
            this._most.newer = i;
            i.older = this._most;
            i.newer = null;
            this._most = i;
            return fk
        }
        return null
    }
    ;
    di.prototype.getAllData = function() {
        return this._cache
    }
    ;
    di.prototype.getHitRate = function() {
        return this._hitTimes / this._getDataTimes
    }
    ;
    di.prototype.removeData = function(i) {
        var e = this._cache;
        var fk = e[i];
        if (!fk) {
            return
        }
        if (this._options.clearCallback) {
            this._options.clearCallback(fk.data, fk.key)
        }
        fk.older && (fk.older.newer = fk.newer);
        fk.newer && (fk.newer.older = fk.older);
        if (this._least === fk) {
            this._least = fk.newer
        }
        if (this._most === fk) {
            this._most = fk.older
        }
        delete e[i];
        this._curSize--
    }
    ;
    di.prototype._removeOld = function() {
        var e = this._cache;
        var fl = Math.round(this._size * 0.6);
        var fk = 0;
        while (this._least && fk < fl) {
            var i = this._least;
            this._least = i.newer;
            i.newer && (i.newer.older = null);
            if (this._options.clearCallback) {
                this._options.clearCallback(i.data, i.key)
            }
            delete e[i.key];
            fk++
        }
        this._curSize -= fk;
        if (this._options.removeOldCallback) {
            this._options.removeOldCallback()
        }
    }
    ;
    di.prototype.clear = function() {
        var e = this._cache;
        var i = this._least;
        if (this._options.clearCallback) {
            while (i) {
                this._options.clearCallback(i.data, i.key);
                i = i.newer
            }
        }
        this._least = this._most = null;
        this._cache = {};
        this._curSize = 0
    }
    ;
    di.prototype.forEach = function(e) {
        var i = this._least;
        while (i) {
            e(i.data);
            i = i.newer
        }
    }
    ;
    di.prototype.clearExcept = function(i) {
        var e = this._cache;
        var fk = this._least;
        while (fk) {
            if (!i[fk.key]) {
                if (this._options.clearCallback) {
                    this._options.clearCallback(fk.data, fk.key)
                }
                fk.older && (fk.older.newer = fk.newer);
                fk.newer && (fk.newer.older = fk.older);
                if (this._least === fk) {
                    this._least = fk.newer
                }
                if (this._most === fk) {
                    this._most = fk.older
                }
                delete e[fk.key];
                this._curSize--
            }
            fk = fk.newer
        }
    }
    ;
    var bA = {
        request: function(fo, fl, i, fq, fk) {
            var fm = (Math.random() * 100000).toFixed(0);
            aI._rd["_cbk" + fm] = function(fr) {
                if (fr.result && fr.result["error"] && fr.result["error"] === 202) {
                    alert("该AK因为恶意行为已经被管理员封禁！");
                    return
                }
                i = i || {};
                fo && fo(fr, i);
                delete aI._rd["_cbk" + fm]
            }
            ;
            fq = fq || "";
            var fp;
            if (i && i.useEncodeURI) {
                fp = eV(fl, encodeURI)
            } else {
                fp = eV(fl, encodeURIComponent)
            }
            var fn = this;
            var e = dm.apiHost + "/" + fq + "?" + fp + "&ie=utf-8&oue=1&fromproduct=jsapi";
            if (!fk) {
                e += "&res=api"
            }
            e += "&callback=" + cY + "._rd._cbk" + fm;
            e += "&ak=" + ed;
            eX.load(e)
        }
    };
    aI._rd = {};
    function az() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    az.inherits(cI, "Control");
    x.extend(az.prototype, {
        initialize: function(e) {
            this._map = e;
            if (this._container) {
                if (this._opts && this._opts.container) {
                    this._opts.container.appendChild(this._container)
                } else {
                    e.container.appendChild(this._container)
                }
                return this._container
            }
            return
        },
        _i: function(e) {
            if (!this._container && this.initialize && a7(this.initialize)) {
                this._container = this.initialize(e)
            }
            this._opts = this._opts || {
                printable: false
            };
            this._setStyle();
            this._setPosition();
            if (this._container) {
                this._container._jsobj = this
            }
        },
        _setStyle: function() {
            var i = this._container;
            if (i) {
                var e = i.style;
                e.position = "absolute";
                e.zIndex = this._cZIndex || "10";
                e.MozUserSelect = "none";
                if (!this._opts.printable) {
                    x.ac(i, "BMap_noprint")
                }
                x.on(i, "contextmenu", bX)
            }
        },
        remove: function() {
            this._map = null;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container._jsobj = null;
            this._container = null
        },
        _render: function(e) {
            if (this._opts && this._opts.container) {
                this._container = cp(this._opts.container, '<div unselectable="on"></div>')
            } else {
                var i = '<div unselectable="on"></div>';
                if (e && e.config.autoSafeArea && aN()) {
                    this._safeAreaContainer = cp(this._map.container, i);
                    this._safeAreaContainer.style.position = "absolute";
                    this._safeAreaContainer.style.bottom = "env(safe-area-inset-bottom)";
                    this._container = cp(this._safeAreaContainer, i)
                } else {
                    this._container = cp(this._map.container, i)
                }
            }
            if (this._visible === false) {
                this._container.style.display = "none"
            }
            return this._container
        },
        _setPosition: function() {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function(fl) {
            if (this.anchorFixed || typeof fl !== "number" || isNaN(fl) || fl < BMAP_ANCHOR_TOP_LEFT || fl > BMAP_ANCHOR_BOTTOM_RIGHT) {
                fl = this.defaultAnchor
            }
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var fk = this._opts.anchor;
            this._opts.anchor = fl;
            if (!this._container) {
                return
            }
            var fn = this._container;
            var e = this._opts.offset.width;
            var fm = this._opts.offset.height;
            fn.style.left = fn.style.top = fn.style.right = fn.style.bottom = "auto";
            switch (fl) {
            case BMAP_ANCHOR_TOP_LEFT:
                fn.style.top = fm + "px";
                fn.style.left = e + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                fn.style.top = fm + "px";
                fn.style.right = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                fn.style.bottom = fm + "px";
                fn.style.left = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                fn.style.bottom = fm + "px";
                fn.style.right = e + "px";
                break;
            default:
                break
            }
            var i = ["TL", "TR", "BL", "BR"];
            x.rc(this._container, "anchor" + i[fk]);
            x.ac(this._container, "anchor" + i[fl])
        },
        getAnchor: function() {
            return this._opts.anchor
        },
        setOffset: function(e) {
            if (!e) {
                return
            }
            this._opts = this._opts || {};
            this._opts.offset = new cF(e.width,e.height);
            if (!this._container) {
                return
            }
            this.setAnchor(this._opts.anchor)
        },
        getOffset: function() {
            return this._opts.offset
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._visible === true) {
                return
            }
            this._visible = true;
            if (this._container) {
                this._container.style.display = ""
            }
            this.dispatchEvent(new aB("onshow"))
        },
        hide: function() {
            if (this._visible === false) {
                return
            }
            this._visible = false;
            if (this._container) {
                this._container.style.display = "none"
            }
            this.dispatchEvent(new aB("onhide"))
        },
        isPrintable: function() {
            return !!this._opts.printable
        },
        isVisible: function() {
            if (!this._container && !this._map) {
                return false
            }
            return !!this._visible
        },
        _asyncLoadCode: function() {
            var e = this;
            cG.load("control", function() {
                if (e._asyncDraw) {
                    e._asyncDraw()
                }
            })
        }
    });
    var fa = {
        TOP_LEFT: 0,
        TOP_RIGHT: 1,
        BOTTOM_LEFT: 2,
        BOTTOM_RIGHT: 3
    };
    aI.ControlAnchor = fa;
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    function co(e) {
        az.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        x.extend(this._opts, e);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new cF(5,2);
        this.setAnchor(e.anchor);
        this._canShow = true;
        this.sateMapStyle = false;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    co.inherits(az, "CopyrightControl");
    x.extend(co.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        addCopyright: function(fl) {
            var e = {
                minZoom: 0,
                bounds: null,
                content: "",
                mapType: ""
            };
            for (var fk in fl) {
                e[fk] = fl[fk]
            }
            if (this._map) {
                var fo = e.minZoom;
                if (fo === -1 || fo < this._map.getMinZoom() || fo > this._map.getMaxZoom()) {
                    e.minZoom = this._map.getMinZoom()
                }
                if (e.mapType !== "" && !be[e.mapType]) {
                    e.mapType = BMAP_NORMAL_MAP
                }
            }
            var fm = this.getCopyright(fl.id);
            if (fm) {
                for (var fn in e) {
                    fm[fn] = e[fn]
                }
            } else {
                this._copyrightCollection.push(e)
            }
        },
        getCopyright: function(fl) {
            for (var fk = 0, e = this._copyrightCollection.length; fk < e; fk++) {
                if (this._copyrightCollection[fk].id === fl) {
                    return this._copyrightCollection[fk]
                }
            }
        },
        addSateMapStyle: function() {
            this.sateMapStyle = true;
            if (this._container) {
                x.ac(this._container, "BMap_cpyCtrl_w")
            }
        },
        removeSateMapStyle: function() {
            this.sateMapStyle = false;
            if (this._container) {
                x.rc(this._container, "BMap_cpyCtrl_w")
            }
        }
    });
    function eT(e) {
        az.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = x.extend(x.extend(this._opts, {
            unit: "metric"
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new cF(81,18);
        if (d6()) {
            this.defaultOffset = new cF(75,10)
        }
        this.setAnchor(e.anchor);
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5280,
                u1: "英尺",
                u2: "英里"
            }
        };
        this.sateMapStyle = false;
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {};
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    eT.inherits(az, "ScaleControl");
    x.extend(eT.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setUnit: function(e) {
            this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
        },
        getUnit: function() {
            return this._opts.unit
        },
        addSateMapStyle: function() {
            this.sateMapStyle = true;
            var e = this._container;
            if (e) {
                x.ac(e.children[0], "dark")
            }
        },
        removeSateMapStyle: function() {
            this.sateMapStyle = false;
            var e = this._container;
            if (e) {
                x.rc(e.children[0], "dark")
            }
        }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
    window.BMAP_NAVIGATION_CONTROL_ANIM = 4;
    function ca(e) {
        az.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        x.extend(this._opts, e);
        this.controlHeight = [{
            width: 65,
            height: 227,
            zoomHeight: 227,
            zoomWidth: 37,
            sliderHeight: 180
        }, {
            width: 65,
            height: 47,
            zoomHeight: (this._opts.forceNew === true) ? 56 : 47,
            zoomWidth: 37,
            sliderHeight: 0
        }, {
            width: 37,
            height: 57,
            zoomHeight: 0,
            zoomWidth: 0,
            sliderHeight: 0
        }, {
            width: 26,
            height: 56,
            zoomHeight: 56,
            zoomWidth: 6,
            sliderHeight: 0
        }, {
            width: 56,
            height: 47,
            zoomHeight: 47,
            zoomWidth: 37,
            sliderHeight: 180
        }];
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new cF(10,10);
        this.setAnchor(e.anchor);
        this.setType(e.type);
        this._maxTotalZoomLv = 19;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._totalZoomLv = -1;
        this._sliderInterval = 10;
        this._sliderHeight = 180;
        this._minBarY = 1;
        this._maxBarY = -1;
        this._curBarY = -1;
        this._zoomDom = null;
        this._zoomBtnDom = null;
        this._sliderDom = null;
        this._sliderBaseDom = null;
        this._cZIndex = "1100";
        this._asyncLoadCode()
    }
    ca.inherits(az, "NavigationControl");
    x.extend(ca.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        setType: function(e) {
            if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ANIM) {
                this._opts.type = e
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function() {
            return this._opts.type
        }
    });
    function aT(i) {
        az.call(this);
        i = i || {};
        this._opts = {
            printable: false
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new cF(10,10);
        this.setAnchor(i.anchor);
        this._opts = x.extend(x.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), i);
        var e = this;
        cG.load("control", function() {
            e._asyncDraw()
        })
    }
    aT.inherits(az, "MapTypeControl");
    x.extend(aT.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        showStreetLayer: function(e) {
            this._map.showStreetLayer(e)
        }
    });
    function by(e) {
        az.call(this);
        e = e || {};
        this._opts = {};
        this._opts = x.extend(this._opts, e);
        this._zoomInDisabled = false;
        this._zoomOutDisabled = false;
        this._zoomInTapped = false;
        this._zoomOutTapped = false;
        this.defaultAnchor = fa.BOTTOM_RIGHT;
        this.defaultOffset = new cF(10,50);
        this.setAnchor(e.anchor);
        this._asyncLoadCode()
    }
    by.inherits(az, "ZoomControl");
    x.extend(by.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        }
    });
    function aR(e) {
        az.call(this);
        e = e || {};
        this._opts = {
            autoZoom: true,
            autoViewport: true
        };
        this._opts = x.extend(this._opts, e);
        this.defaultAnchor = fa.BOTTOM_LEFT;
        this.defaultOffset = new cF(10,50);
        this.watchPosition = this._opts.watchPosition || false;
        this.useCompass = this._opts.useCompass || false;
        this.locMarker = null;
        this.locLevel = 16;
        this.setAnchor(this._opts.anchor);
        this.onLocationStart = e.onLocationStart || null;
        this._asyncLoadCode()
    }
    aR.inherits(az, "LocationControl");
    x.extend(aR.prototype, {
        initialize: function(e) {
            this._map = e;
            return this._container
        },
        startLocation: function() {
            this._startLocationCalled = true
        },
        stopLocationTrace: function() {},
        setOptions: function(e) {
            e = e || {};
            x.extend(this._opts, e)
        }
    });
    function O(e) {
        az.call(this);
        e = e || {};
        this._opts = {};
        this._opts = x.extend(this._opts, e);
        this.defaultAnchor = fa.BOTTOM_LEFT;
        this.defaultOffset = new cF(1,15);
        if (d6()) {
            this.defaultOffset = new cF(1,1)
        }
        this.setAnchor(e.anchor)
    }
    O.inherits(az, "LogoControl");
    x.extend(O.prototype, {
        initialize: function(i) {
            this._map = i;
            var e = this._container = document.createElement("div");
            e.innerHTML = '<img src="' + dm.apiHost + '/images/copyright_logo.png" />';
            i.getContainer().appendChild(e);
            return e
        }
    });
    function et(e, i) {
        this._map = e;
        this._indoorInfo = i;
        this._visible = true;
        this._adjustVisible = true;
        this._isMobile = d6();
        this._sizeConfig = {
            FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
            SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15
        };
        this._init()
    }
    et.prototype._init = function() {
        this._render();
        this._bindDom();
        this._bind();
        this._adjustDisplayHeight();
        var e = new aB("onindoor_bar_show");
        e.uid = this._indoorInfo.uid;
        this._map.dispatchEvent(e)
    }
    ;
    et.prototype._render = function() {
        if (!this._indoorInfo) {
            return
        }
        var fp = this._isMobile;
        var e = this._div = H("div");
        x.ac(e, "floor-select-container");
        fp && x.ac(e, "mobile");
        fp && x.ac(e, "all-border-radius");
        var i = this._btnTop = H("button");
        x.ac(i, "floor-switch-top");
        x.ac(i, "top-border-radius");
        var fn = H("div");
        x.ac(fn, "floor-switch-top-icon");
        i.appendChild(fn);
        var fm = this._btnBottom = H("button");
        var fk = H("div");
        x.ac(fk, "floor-switch-bottom-icon");
        fm.appendChild(fk);
        x.ac(fm, "floor-switch-bottom");
        x.ac(fm, "bottom-border-radius");
        var fl = this._floorsContainer = H("div");
        x.ac(fl, "floors-container");
        fl.appendChild(this._createFloorsDom());
        this._div.appendChild(i);
        this._div.appendChild(fl);
        this._div.appendChild(fm);
        var fq = 0;
        if (this._btnTop.style.display === "") {
            fq = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT
        }
        this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + fq + "px";
        this._map.getContainer().appendChild(this._div);
        if (!fp) {
            var fo = this;
            setTimeout(function() {
                fo._div.style.right = "20px"
            }, 20)
        }
    }
    ;
    et.prototype._createFloorsDom = function() {
        if (!this._indoorInfo) {
            return
        }
        var fk = this._ol = H("ol");
        var fn = this._indoorInfo.currentFloor;
        for (var fm = this._indoorInfo.floors.length - 1; fm >= 0; fm--) {
            var fo = this._indoorInfo.floors[fm].floorName;
            var e = H("li");
            var fl = H("button");
            x.ac(fl, "btn-select-floor");
            if (fm === fn) {
                x.ac(fl, "selected")
            }
            fl.setAttribute("data-floor", fm);
            fl.innerHTML = fo;
            e.appendChild(fl);
            fk.appendChild(e)
        }
        return fk
    }
    ;
    et.prototype._updateUI = function() {
        if (!this._ol) {
            this._render();
            this._bind();
            this._adjustDisplayHeight();
            return
        }
        this._ol = null;
        this._ol = this._createFloorsDom();
        this._floorsContainer.innerHTML = "";
        this._floorsContainer.appendChild(this._ol);
        this._adjustDisplayHeight()
    }
    ;
    et.prototype._bindDom = function() {
        var e = this;
        x.on(this._floorsContainer, "click", function(fl) {
            var fk = fl.target || fl.srcElement;
            if (fk.tagName.toLowerCase() === "button") {
                e._map.showIndoor(e._indoorInfo.uid, parseInt(fk.getAttribute("data-floor"), 10));
                var i = new aB("onindoor_bar_click");
                i.uid = e._indoorInfo.uid;
                e._map.dispatchEvent(i)
            }
        });
        x.on(this._floorsContainer, "mouseover", function(fk) {
            var i = fk.target;
            if (i.tagName.toLowerCase() === "button") {
                x.ac(i, "hover")
            }
        });
        x.on(this._floorsContainer, "mouseout", function(fk) {
            var i = fk.target;
            if (i.tagName.toLowerCase() === "button") {
                x.rc(i, "hover")
            }
        });
        x.on(this._floorsContainer, "touchstart", function(fk) {
            var i = fk.target;
            if (i.tagName.toLowerCase() === "button") {
                x.ac(i, "onmousedown")
            }
        });
        x.on(this._floorsContainer, "touchend", function(fk) {
            var i = fk.target;
            if (i.tagName.toLowerCase() === "button") {
                x.rc(i, "onmousedown")
            }
        });
        x.on(this._btnTop, "mouseover", function(i) {
            if (this._disable) {
                return
            }
            x.ac(this, "hover")
        });
        x.on(this._btnTop, "mouseout", function(i) {
            x.rc(this, "hover")
        });
        x.on(this._btnBottom, "mouseover", function(i) {
            if (this._disable) {
                return
            }
            x.ac(this, "hover")
        });
        x.on(this._btnBottom, "mouseout", function(i) {
            x.rc(this, "hover")
        });
        x.on(this._btnTop, "touchstart", function(i) {
            if (this.className.indexOf("disable") > -1) {
                return
            }
            x.ac(this, "onmousedown")
        });
        x.on(this._btnTop, "touchend", function(i) {
            x.rc(this, "onmousedown")
        });
        x.on(this._btnBottom, "touchstart", function(i) {
            if (this.className.indexOf("disable") > -1) {
                return
            }
            x.ac(this, "onmousedown")
        });
        x.on(this._btnBottom, "touchend", function(i) {
            x.rc(this, "onmousedown")
        });
        x.on(this._btnTop, "click", function(i) {
            e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26)
        });
        x.on(this._btnBottom, "click", function(i) {
            e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26)
        });
        x.on(this._div, "mousemove", g);
        x.on(this._div, "wheel", bX);
        x.on(this._div, "mousewheel", bX);
        this._map.addEventListener("resize", function() {
            e._adjustDisplayHeight()
        })
    }
    ;
    et.prototype._adjustDisplayHeight = function() {
        if (!this._indoorInfo) {
            return
        }
        var fn = this._map.getSize().height;
        var fo = this._sizeConfig.FLOOR_BTN_HEIGHT;
        var fp = fn - 291 - 100;
        if (this._isMobile) {
            fp = fn - 12 - 108 - this._map.config.bottomOffset
        }
        var e = this._indoorInfo.floors.length;
        var fk = e * fo;
        var fl = e;
        var fr = 0;
        var fs = this._floorsContainer.children[0];
        if (fk > fp) {
            this._showArrow = true;
            x.rc(fs.children[0].children[0], "top-border-radius");
            x.rc(fs.children[e - 1].children[0], "bottom-border-radius")
        } else {
            this._showArrow = false;
            x.ac(fs.children[0].children[0], "top-border-radius");
            x.ac(fs.children[e - 1].children[0], "bottom-border-radius")
        }
        while (fk > fp) {
            if (fl === 0) {
                break
            }
            fl--;
            fr = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
            fk = fl * fo + fr
        }
        this._currentDisplayHeight = fk;
        if (fl < 3) {
            this._setAdjustVisbile(false)
        } else {
            this._setAdjustVisbile(true)
        }
        this._floorsContainer.style.height = fl * fo + "px";
        var fm = this._indoorInfo.currentFloor;
        var i = e - fm;
        var fq = fm - 1;
        this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + fr + "px";
        var ft = -(e - (fm + Math.round(fl / 2))) * fo;
        this._setBarSliderTop(ft);
        if (fl < e) {
            x.show(this._btnTop);
            x.show(this._btnBottom)
        } else {
            x.hide(this._btnTop);
            x.hide(this._btnBottom);
            this._setBarSliderTop(0)
        }
        if (this._isMobile) {
            this._div.style.bottom = 108 + this._map.config.bottomOffset + "px"
        }
    }
    ;
    et.prototype._setBarSliderTop = function(fl) {
        var fk = 26;
        var i = this._indoorInfo.floors.length;
        var e = i * fk;
        if (this._currentDisplayHeight) {
            if (this._showArrow) {
                e = this._currentDisplayHeight - 30
            } else {
                e = this._currentDisplayHeight
            }
        }
        if (e - fl >= i * fk) {
            fl = e - i * fk;
            x.ac(this._btnBottom, "disable");
            x.rc(this._btnBottom, "hover");
            this._btnBottom._disable = true
        } else {
            x.rc(this._btnBottom, "disable");
            this._btnBottom._disable = false
        }
        if (fl >= 0) {
            fl = 0;
            x.ac(this._btnTop, "disable");
            x.rc(this._btnTop, "hover");
            this._btnTop._disable = true
        } else {
            x.rc(this._btnTop, "disable");
            this._btnTop._disable = false
        }
        this._ol.style.top = fl + "px"
    }
    ;
    et.prototype._setAdjustVisbile = function(e) {
        if (this._adjustVisible === e) {
            return
        }
        this._adjustVisible = e;
        if (e && this._visible) {
            this._div.style.right = "20px"
        } else {
            this._div.style.right = "-30px"
        }
    }
    ;
    et.prototype._bind = function() {
        var i = this._map;
        var e = this;
        i.on("indoor_status_changed", function(fp) {
            if (e._visible === false) {
                return
            }
            var fk = e._ol;
            var fn = fp.uid;
            if (!fn) {
                return
            }
            var fo = fp.floor;
            for (var fm = 0; fm < fk.children.length; fm++) {
                var fl = fk.children[fm].children[0];
                if (parseInt(fl.getAttribute("data-floor"), 10) === fo) {
                    x.ac(fl, "selected")
                } else {
                    x.rc(fl, "selected")
                }
            }
        });
        i.on("zoomend", function(fk) {
            if (this.getZoom() < 17) {
                e._setAdjustVisbile(false)
            } else {
                e._setAdjustVisbile(true)
            }
        })
    }
    ;
    et.prototype.setInfo = function(e) {
        if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
            return
        }
        this._indoorInfo = e;
        this._updateUI()
    }
    ;
    et.prototype.show = function() {
        if (this._visible === true) {
            return
        }
        this._visible = true;
        if (!this._isMobile) {
            this._div.style.right = "20px"
        } else {
            this._div.style.display = ""
        }
        var e = new aB("onindoor_bar_show");
        e.uid = this._indoorInfo.uid;
        this._map.dispatchEvent(e)
    }
    ;
    et.prototype.hide = function() {
        if (this._visible === false) {
            return
        }
        this._visible = false;
        if (!this._isMobile) {
            this._div.style.right = "-30px"
        } else {
            this._div.style.display = "none"
        }
    }
    ;
    function de(e) {
        this._map = e;
        e._navigationCtrl = this;
        this._firstAnimation = true;
        this._init()
    }
    x.extend(de.prototype, {
        _init: function() {
            this._createDom();
            this._bindDom();
            this._bind();
            if (!d6()) {
                this._headingControl = new fc(this._map,this._div)
            }
            this._tiltControl = new cT(this._map,this._div);
            this._render();
            var i = this._map.getMapType();
            var e = this;
            if (i === "B_EARTH_MAP" || this._map._renderType === "webgl") {
                e._div.style.opacity = "1";
                e._div.style.visibility = "visible"
            } else {
                e._div.style.opacity = "0";
                e._div.style.visibility = "hidden"
            }
        },
        _createDom: function() {
            var i = this._div = H("div");
            var e = i.style;
            e.position = "absolute";
            e.zIndex = 5;
            e.width = "52px";
            e.height = "82px";
            e.right = "-3px";
            e.bottom = "79px";
            e.opacity = "0";
            e.visibility = "hidden";
            e.WebkitTransition = e.transition = "opacity .3s ease-out,visibility .3s ease-out"
        },
        _render: function() {
            var e = document.getElementById("map-operate");
            if (e) {
                e.appendChild(this._div)
            } else {
                this._map.getContainer().appendChild(this._div)
            }
        },
        _bindDom: function() {
            this._div.addEventListener("mousemove", g)
        },
        _bind: function() {
            if (this._map._renderType === "webgl") {
                return
            }
            var e = this;
            this._map.on("maptypechange", function() {
                if (this.mapType === "B_EARTH_MAP") {
                    if (e._firstAnimation) {
                        e._firstAnimation = false;
                        setTimeout(function() {
                            e._div.style.opacity = "1";
                            e._div.style.visibility = "visible"
                        }, 300)
                    } else {
                        e._div.style.opacity = "1";
                        e._div.style.visibility = "visible"
                    }
                } else {
                    e._div.style.opacity = "0";
                    e._div.style.visibility = "hidden"
                }
            })
        }
    });
    function fc(fk, i) {
        this._map = fk;
        this._target = fk;
        var fl = fk.temp.originMapType || fk.mapType;
        if (fl === "B_EARTH_MAP" && fk._earth) {
            this._target = fk._earth
        }
        this._outContainer = i || fk.getContainer();
        this._imgRatio = ay() >= 1.5 ? 2 : 1;
        this._imgPath = dm.imgPath + "earth-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
        this._enabled = true;
        var e = this;
        this._setHeadingOptions = {
            callback: function() {
                e._target.setLock(false)
            }
        };
        this._init()
    }
    x.extend(fc.prototype, {
        _init: function() {
            this._createDom();
            this._render();
            this._bindDom();
            this._bind();
            this._updateUI();
            this._checkEnable()
        },
        _checkEnable: function() {
            if (this._target.getZoom() >= this._target._enableHeadingZoom) {
                this.enable()
            } else {
                this.disable()
            }
        },
        _createDom: function() {
            var i = this._div = H("div");
            var e = i.style;
            e.position = "absolute";
            e.zIndex = 5;
            e.top = "0";
            e.left = "0";
            e.width = "52px";
            e.height = "54px";
            e.background = "url(" + this._imgPath + ") no-repeat";
            e.backgroundSize = "266px auto";
            this._rotateCCW = this._createButton();
            this._rotateCCW.title = "逆时针转动";
            e = this._rotateCCW.style;
            e.left = "2px";
            e.top = "5px";
            e.zIndex = "1";
            e.width = "15px";
            e.height = "42px";
            e.backgroundPosition = "-75px -5px";
            this._rotateCW = this._createButton();
            this._rotateCW.title = "顺时针转动";
            e = this._rotateCW.style;
            e.right = "2px";
            e.top = "5px";
            e.zIndex = "1";
            e.width = "15px";
            e.height = "42px";
            e.backgroundPosition = "-75px -5px";
            e.WebkitTransform = e.transform = "scaleX(-1)";
            this._compass = this._createButton();
            this._compass.title = "恢复正北方向";
            e = this._compass.style;
            e.left = "19px";
            e.top = "4px";
            e.width = "14px";
            e.height = "44px";
            e.backgroundPosition = "-56px -4px";
            e.WebkitTransform = e.transform = "rotate(0deg)";
            this._div.appendChild(this._rotateCCW);
            this._div.appendChild(this._compass);
            this._div.appendChild(this._rotateCW);
            this._domRendered = true
        },
        _createButton: function() {
            var e = H("button");
            var i = e.style;
            i.position = "absolute";
            i.outline = "none";
            i.border = "none";
            i.background = "url(" + this._imgPath + ") no-repeat";
            i.backgroundSize = "266px auto";
            i.cursor = "pointer";
            return e
        },
        _render: function() {
            this._outContainer.appendChild(this._div)
        },
        enable: function() {
            this._enabled = true;
            if (this._domRendered) {
                this._rotateCCW.style.cursor = "pointer";
                this._rotateCCW.style.opacity = 1;
                this._rotateCW.style.cursor = "pointer";
                this._rotateCW.style.opacity = 1;
                this._compass.style.cursor = "pointer";
                this._compass.style.opacity = 1
            }
        },
        disable: function() {
            this._enabled = false;
            if (this._domRendered) {
                this._rotateCCW.style.cursor = "";
                this._rotateCCW.style.opacity = 0.4;
                this._rotateCW.style.cursor = "";
                this._rotateCW.style.opacity = 0.4;
                this._compass.style.cursor = "";
                this._compass.style.opacity = 0.4
            }
        },
        _bindDom: function() {
            c4(this._div, ["mousedown", "click", "dblclick"]);
            var i = this._map;
            var e = this;
            this._rotateCW.addEventListener("click", function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                if (e._target.getHeading() === 360) {
                    e._target.setHeading(0)
                }
                e._target.setLock(true);
                e._target.setHeading(e._target.getHeading() + 90, e._setHeadingOptions);
                i.fire(new aB("onrotatecwclick"))
            }, false);
            this._rotateCCW.addEventListener("click", function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                if (e._target.getHeading() === -360) {
                    e._target.setHeading(0)
                }
                e._target.setLock(true);
                e._target.setHeading(e._target.getHeading() - 90, e._setHeadingOptions);
                i.fire(new aB("onrotateccwclick"))
            }, false);
            this._rotateCW.addEventListener("mouseover", function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-89px -5px"
            }, false);
            this._rotateCW.addEventListener("mouseout", function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-75px -5px"
            }, false);
            this._rotateCCW.addEventListener("mouseover", function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-89px -5px"
            }, false);
            this._rotateCCW.addEventListener("mouseout", function() {
                if (e._enabled === false) {
                    return
                }
                this.style.backgroundPosition = "-75px -5px"
            }, false);
            this._compass.addEventListener("click", function() {
                if (e._isOperating || e._enabled === false) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                e._target.setLock(true);
                var fk = false;
                if (e._target.getTilt() !== 0) {
                    fk = true;
                    e._target.setTilt(0, e._setHeadingOptions)
                }
                if (e._target.getHeading() % 360 !== 0) {
                    fk = true;
                    e._target.resetHeading(e._setHeadingOptions)
                }
                if (!fk) {
                    e._target.setLock(false)
                }
                i.fire(new aB("oncompassclick"))
            }, false)
        },
        _bind: function() {
            var e = this;
            this._bindTarget(this._target);
            if (this._map._renderType === "webgl") {
                this._map.addEventListener("maptypechange", function(i) {
                    if (this.mapType === "B_EARTH_MAP") {
                        e._target = e._map._earth
                    } else {
                        e._target = e._map
                    }
                    e._bindTarget(e._target);
                    e._checkEnable()
                })
            }
        },
        _bindTarget: function(i) {
            if (i === this._map && this._mapBinded) {
                return
            }
            if (i === this._map._earth && this._earthBinded) {
                return
            }
            var e = this;
            i.addEventListener("heading_changed", function(fk) {
                e._updateUI()
            });
            i.addEventListener("animation_start", function(fk) {
                e._isOperating = true
            });
            i.addEventListener("animation_end", function(fk) {
                e._isOperating = false
            });
            i.on("load", function() {
                e._checkEnable()
            });
            i.on("zoom_changed", function() {
                e._checkEnable()
            });
            if (i === this._map) {
                this._mapBinded = true
            } else {
                this._earthBinded = true
            }
        },
        _updateUI: function() {
            var e = this._target.getHeading();
            var i = this._compass.style;
            i.WebkitTransform = i.transform = "rotate(" + e + "deg)"
        },
        hide: function() {
            this._div.style.display = "none"
        },
        show: function() {
            this._div.style.display = "block"
        }
    });
    function cT(fk, i) {
        this._map = fk;
        this._target = fk;
        var fl = fk.temp.originMapType || fk.mapType;
        if (fl === "B_EARTH_MAP" && fk._earth) {
            this._target = fk._earth
        }
        this._outContainer = i || fk.getContainer();
        this._imgRatio = ay() >= 1.5 ? 2 : 1;
        this._imgPath = dm.imgPath + "gl-navi-control-pc4" + (this._imgRatio === 2 ? "-2x.png" : ".png");
        this._enabled = true;
        var e = this;
        this._setTiltOptions = {
            callback: function() {
                e._target.setLock(false)
            }
        };
        this._init()
    }
    x.extend(cT.prototype, {
        _init: function() {
            this._createDom();
            this._render();
            this._bindDom();
            this._bind();
            this._checkEnable()
        },
        _checkEnable: function() {
            if (this._target.getZoom() >= this._target._enableTiltZoom) {
                this.enable()
            } else {
                this.disable()
            }
        },
        _createDom: function() {
            var e = this._div = H("button");
            e.title = "倾斜";
            var i = e.style;
            i.position = "absolute";
            i.zIndex = 5;
            i.outline = "none";
            i.border = "none";
            i.cursor = "pointer";
            i.width = "26px";
            i.height = "26px";
            i.top = "56px";
            i.right = "13px";
            i.background = "url(" + this._imgPath + ") no-repeat #fff";
            i.backgroundSize = "266px auto";
            i.backgroundPosition = "-110px 1px";
            i.boxShadow = "1px 2px 1px rgba(0, 0, 0, 0.15)"
        },
        enable: function() {
            this._enabled = true;
            if (this._div) {
                this._div.style.cursor = "pointer"
            }
            this._updateUI()
        },
        disable: function() {
            this._enabled = false;
            if (this._div) {
                this._div.style.cursor = ""
            }
            this._updateUI()
        },
        _render: function() {
            this._outContainer.appendChild(this._div)
        },
        _bindDom: function() {
            var e = this;
            this._div.addEventListener("mousedown", function(fl) {
                if (!e._enabled) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                var i = e._target.getTilt();
                var fk;
                if (i === e._map.getCurrentMaxTilt()) {
                    fk = "out"
                } else {
                    if (i === 0) {
                        fk = "in"
                    } else {
                        fk = e._preTrend ? e._preTrend : "in"
                    }
                }
                e._curTrend = fk;
                e._clickTimer = setTimeout(function() {
                    e._map.fire(new aB("ontiltmsdown"));
                    e._tiltAni = new l({
                        duration: 9999999,
                        render: function(fm) {
                            i = e._target.getTilt();
                            if (fk === "in" && i < e._map.getCurrentMaxTilt()) {
                                e._target.setTilt(i + 1, {
                                    noAnimation: true
                                })
                            } else {
                                if (fk === "out" && i > 0) {
                                    e._target.setTilt(i - 1, {
                                        noAnimation: true
                                    })
                                }
                            }
                        },
                        finish: function() {
                            e._tiltAni = null
                        }
                    });
                    e._clickTimer = null
                }, 200);
                fl.stopPropagation()
            }, false);
            this._div.addEventListener("mouseup", function(i) {
                if (!e._enabled) {
                    return
                }
                if (e._tiltAni) {
                    e._tiltAni.stop()
                }
                e._preTrend = e._curTrend
            }, false);
            this._div.addEventListener("click", function(fl) {
                if (!e._enabled) {
                    return
                }
                if (!e._clickTimer) {
                    return
                }
                if (e._target.getLock()) {
                    return
                }
                clearTimeout(e._clickTimer);
                e._map.fire(new aB("ontiltclick"));
                var i = e._target.getTilt();
                e._target.setLock(true);
                fl.stopPropagation();
                var fk = e._map.getCurrentMaxTilt();
                if (e._curTrend === "in") {
                    e._target.setTilt(fk, e._setTiltOptions)
                } else {
                    if (e._curTrend === "out") {
                        e._target.setTilt(0, e._setTiltOptions)
                    } else {
                        if (i < fk) {
                            e._target.setTilt(fk, e._setTiltOptions)
                        } else {
                            e._target.setTilt(0, e._setTiltOptions)
                        }
                    }
                }
            }, false);
            this._div.addEventListener("mouseover", function(i) {
                if (!e._enabled) {
                    return
                }
                e._mouseOver = true;
                e._updateUI()
            }, false);
            this._div.addEventListener("mouseout", function(i) {
                if (!e._enabled) {
                    return
                }
                e._mouseOver = false;
                e._updateUI()
            }, false);
            c4(this._div, ["mousedown", "click", "dblclick"])
        },
        _bind: function() {
            var e = this;
            var i = this._map;
            this._bindTarget(this._target);
            if (this._map._renderType === "webgl") {
                this._map.addEventListener("maptypechange", function(fk) {
                    if (this.mapType === "B_EARTH_MAP") {
                        e._target = e._map._earth
                    } else {
                        e._target = e._map
                    }
                    e._bindTarget(e._target);
                    e._checkEnable()
                })
            }
        },
        _bindTarget: function(i) {
            if (i === this._map && this._mapBinded) {
                return
            }
            if (i === this._map._earth && this._earthBinded) {
                return
            }
            var e = this;
            i.on("load", function() {
                e._checkEnable()
            });
            i.on("zoom_changed", function() {
                e._checkEnable()
            });
            i.on("tilt_changed", function() {
                e._updateUI()
            });
            if (i === this._map) {
                this._mapBinded = true
            } else {
                this._earthBinded = true
            }
        },
        _updateUI: function() {
            var fk = this._target.getTilt();
            var i = 0;
            var fl = 0;
            var e = 0;
            if (fk > 0) {
                i = 78
            }
            if (this._mouseOver) {
                e = 52
            }
            if (this._enabled === false) {
                fl = 26;
                e = 0;
                i = 0
            }
            var fm = "-" + (110 + i + fl + e) + "px 1px";
            this._div && (this._div.style.backgroundPosition = fm);
            if (this._enabled) {
                if (fk > 0) {
                    this._div && (this._div.title = "恢复")
                } else {
                    this._div && (this._div.title = "倾斜")
                }
            } else {
                this._div && (this._div.title = "请放大地图后操作")
            }
        },
        hide: function() {
            this._div.style.display = "none"
        },
        show: function() {
            this._div.style.display = "block"
        }
    });
    function bl(i) {
        cI.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = x.extend(this._opts, i);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this._enable = true;
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var e = this;
        cG.load("menu", function() {
            e._draw()
        })
    }
    bl.inherits(cI, "ContextMenu");
    x.extend(bl.prototype, {
        initialize: function(e) {
            this._map = e
        },
        remove: function() {
            this._map = null
        },
        addItem: function(fm, e) {
            if (!fm || fm._type != "menuitem" || fm._text == "" || fm._width <= 0) {
                return
            }
            for (var fl = 0, fk = this._items.length; fl < fk; fl++) {
                if (this._items[fl] === fm) {
                    return
                }
            }
            if (e === undefined || e > this._items.length - 1) {
                e = -1
            }
            fm._insertIndex = e;
            if (e === -1) {
                this._items.push(fm);
                this._rItems.push(fm)
            } else {
                this._items.splice(e, 0, fm);
                this._rItems.splice(e, 0, fm)
            }
        },
        removeItem: function(fl) {
            if (!fl || fl._type != "menuitem") {
                return
            }
            for (var fk = 0, e = this._items.length; fk < e; fk++) {
                if (this._items[fk] === fl) {
                    this._items[fk].remove();
                    this._items.splice(fk, 1);
                    delete fl._insertIndex;
                    e--
                }
            }
            for (var fk = 0, e = this._rItems.length; fk < e; fk++) {
                if (this._rItems[fk] === fl) {
                    this._rItems[fk].remove();
                    this._rItems.splice(fk, 1);
                    delete fl._insertIndex;
                    e--
                }
            }
        },
        addSeparator: function(e) {
            if (e === undefined || e > this._items.length - 1) {
                e = -1
            }
            var i = {
                _type: "divider",
                _dIndex: this._dividers.length,
                _insertIndex: e
            };
            this._dividers.push({
                dom: null
            });
            if (e === -1) {
                this._items.push(i)
            } else {
                this._items.splice(e, 0, i)
            }
        },
        removeSeparator: function(fk) {
            if (!this._dividers[fk]) {
                return
            }
            for (var fl = 0, e = this._items.length; fl < e; fl++) {
                if (this._items[fl] && this._items[fl]._type == "divider" && this._items[fl]._dIndex == fk) {
                    this._items.splice(fl, 1);
                    e--
                }
                if (this._items[fl] && this._items[fl]._type == "divider" && this._items[fl]._dIndex > fk) {
                    this._items[fl]._dIndex--
                }
            }
            this._dividers.splice(fk, 1)
        },
        getDom: function() {
            return this._container
        },
        show: function() {
            if (this._isOpen == true) {
                return
            }
            this._isOpen = true
        },
        hide: function() {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false
        },
        setCursor: function(e) {
            if (!e) {
                return
            }
            this._opts.cursor = e
        },
        getItem: function(e) {
            return this._rItems[e]
        },
        enable: function() {
            this._enable = true
        },
        disable: function() {
            this._enable = false
        }
    });
    function dH(fk, fl, i) {
        if (!fk || !fl || typeof fl != "function") {
            return
        }
        cI.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        i = i || {};
        this._opts.width = (i.width * 1) ? i.width : 100;
        this._opts.id = i.id ? i.id : "";
        this._text = fk + "";
        this._callback = fl;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var e = this;
        cG.load("menu", function() {
            e._draw()
        })
    }
    dH.inherits(cI, "MenuItem");
    x.extend(dH.prototype, {
        initialize: function(e, i) {
            this._map = e;
            this._contextmenu = i
        },
        remove: function() {
            this._contextmenu = null;
            this._map = null
        },
        setText: function(e) {
            if (!e) {
                return
            }
            this._text = e + ""
        },
        getDom: function() {
            return this._container
        },
        enable: function() {
            this._enabled = true
        },
        disable: function() {
            this._enabled = false
        }
    });
    function cv(e, i) {
        this.setSouthWest(e);
        this.setNorthEast(i)
    }
    x.extend(cv.prototype, {
        isEmpty: function() {
            return this.sw === null && this.ne === null
        },
        equals: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return false
            }
            return this.sw.equals(e.sw) && this.ne.equals(e.ne)
        },
        containsBounds: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return false
            }
            return (e.sw.lng > this.sw.lng && e.ne.lng < this.ne.lng && e.sw.lat > this.sw.lat && e.ne.lat < this.ne.lat)
        },
        getCenter: function() {
            if (this.isEmpty()) {
                return null
            }
            return new e2((this.sw.lng + this.ne.lng) / 2,(this.sw.lat + this.ne.lat) / 2)
        },
        intersects: function(fk) {
            if (!fk || fk.isEmpty() || this.isEmpty()) {
                return null
            }
            if (Math.max(fk.sw.lng, fk.ne.lng) < Math.min(this.sw.lng, this.ne.lng) || Math.min(fk.sw.lng, fk.ne.lng) > Math.max(this.sw.lng, this.ne.lng) || Math.max(fk.sw.lat, fk.ne.lat) < Math.min(this.sw.lat, this.ne.lat) || Math.min(fk.sw.lat, fk.ne.lat) > Math.max(this.sw.lat, this.ne.lat)) {
                return null
            }
            var fm = Math.max(this.sw.lng, fk.sw.lng);
            var i = Math.min(this.ne.lng, fk.ne.lng);
            var fl = Math.max(this.sw.lat, fk.sw.lat);
            var e = Math.min(this.ne.lat, fk.ne.lat);
            return new cv(new e2(fm,fl),new e2(i,e))
        },
        setMinMax: function() {
            this.minX = this.sw ? this.sw.lng : null;
            this.minY = this.sw ? this.sw.lat : null;
            this.maxX = this.ne ? this.ne.lng : null;
            this.maxY = this.ne ? this.ne.lat : null
        },
        containsPoint: function(e) {
            if (!e) {
                return
            }
            return (e.lng >= this.sw.lng && e.lng <= this.ne.lng && e.lat >= this.sw.lat && e.lat <= this.ne.lat)
        },
        extend: function(e) {
            if (!e) {
                return
            }
            var i = e.lng;
            var fk = e.lat;
            if (!this.sw) {
                this.sw = e.clone()
            }
            if (!this.ne) {
                this.ne = e.clone()
            }
            if (this.sw.lng > i) {
                this.sw.lng = i
            }
            if (this.ne.lng < i) {
                this.ne.lng = i
            }
            if (this.sw.lat > fk) {
                this.sw.lat = fk
            }
            if (this.ne.lat < fk) {
                this.ne.lat = fk
            }
        },
        getMin: function() {
            return this.sw
        },
        getMax: function() {
            return this.ne
        },
        getSouthWest: function() {
            return this.sw
        },
        getNorthEast: function() {
            return this.ne
        },
        setSouthWest: function(e) {
            this.sw = e ? e.clone() : null
        },
        setNorthEast: function(e) {
            this.ne = e ? e.clone() : null
        },
        clone: function() {
            return new cv(this.sw,this.ne)
        },
        toSpan: function() {
            if (this.isEmpty()) {
                return new cF(0,0)
            }
            return new cF(Math.abs(this.ne.lng - this.sw.lng),Math.abs(this.ne.lat - this.sw.lat))
        },
        div: function(e) {
            if (!e || e.isEmpty() || this.isEmpty()) {
                return 0
            }
            return ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) / ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
        },
        makeNormalizedPoint: function() {
            this.normalizedTopLeft = this.pointTopLeft.clone();
            this.normalizedTopRight = this.pointTopRight.clone();
            this.normalizedBottomRight = this.pointBottomRight.clone();
            this.normalizedBottomLeft = this.pointBottomLeft.clone();
            if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
                this.normalizedTopRight.lng += bU.WORLD_SIZE_MC
            }
            if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
                this.normalizedBottomRight.lng += bU.WORLD_SIZE_MC
            }
        },
        toString: function() {
            return "Bounds"
        }
    });
    function e2(e, i) {
        if (isNaN(e)) {
            e = eL(e);
            e = isNaN(e) ? 0 : e
        }
        if (typeof e === "string") {
            e = parseFloat(e)
        }
        if (isNaN(i)) {
            i = eL(i);
            i = isNaN(i) ? 0 : i
        }
        if (typeof i === "string") {
            i = parseFloat(i)
        }
        this.lng = e;
        this.lat = i
    }
    e2.prototype.equals = function(i) {
        if (!i) {
            return false
        }
        var fl = Math.abs(this.lat - i.lat);
        var fk = Math.abs(this.lng - i.lng);
        var e = 1e-8;
        if (fl < e && fk < e) {
            return true
        }
        return false
    }
    ;
    e2.prototype.clone = function() {
        return new e2(this.lng,this.lat)
    }
    ;
    e2.prototype.add = function(e) {
        return new e2(this.lng + e.lng,this.lat + e.lat)
    }
    ;
    e2.prototype.sub = function(e) {
        return new e2(this.lng - e.lng,this.lat - e.lat)
    }
    ;
    e2.prototype.mult = function(e) {
        return new e2(this.lng * e,this.lat * e)
    }
    ;
    e2.prototype.div = function(e) {
        return new e2(this.lng / e,this.lat / e)
    }
    ;
    e2.prototype.mag = function() {
        return Math.sqrt(this.lng * this.lng + this.lat * this.lat)
    }
    ;
    e2.prototype.toString = function() {
        return "Point"
    }
    ;
    function cP() {}
    x.extend(cP, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [86, 60, 45, 30, 15, 0],
        MC2LL: [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]],
        LL2MC: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        getDistanceByMC: function(fn, fl) {
            if (!fn || !fl) {
                return 0
            }
            var i;
            var fm;
            var e;
            var fk;
            fn = this.convertMC2LL(fn);
            if (!fn) {
                return 0
            }
            i = cq(fn.lng);
            fm = cq(fn.lat);
            fl = this.convertMC2LL(fl);
            if (!fl) {
                return 0
            }
            e = cq(fl.lng);
            fk = cq(fl.lat);
            return this.getDistance(i, e, fm, fk)
        },
        getDistanceByLL: function(fn, fl) {
            if (!fn || !fl) {
                return 0
            }
            fn.lng = this.getLoop(fn.lng, -180, 180);
            fn.lat = this.getRange(fn.lat, -80, 84);
            fl.lng = this.getLoop(fl.lng, -180, 180);
            fl.lat = this.getRange(fl.lat, -80, 84);
            var i;
            var e;
            var fm;
            var fk;
            i = cq(fn.lng);
            fm = cq(fn.lat);
            e = cq(fl.lng);
            fk = cq(fl.lat);
            return this.getDistance(i, e, fm, fk)
        },
        convertMC2LL: function(e) {
            if (e === null) {
                return e
            }
            if (!e) {
                return new e2(0,0)
            }
            var fk;
            var fm;
            fk = new e2(Math.abs(e.lng),Math.abs(e.lat));
            for (var fl = 0; fl < this.MCBAND.length; fl++) {
                if (fk.lat >= this.MCBAND[fl]) {
                    fm = this.MC2LL[fl];
                    break
                }
            }
            var fn = this.convertor(e, fm);
            return new bR(fn.lat,fn.lng)
        },
        convertLL2MC: function(fo) {
            if (!fo) {
                return new e2(0,0)
            }
            var fq = fo.lat;
            var fl = fo.lng;
            fl = this.getLoop(fo.lng, -180, 180);
            fq = dM(fq, -85, 85);
            var fn;
            for (var fm = 0; fm < this.LLBAND.length; fm++) {
                if (fq >= this.LLBAND[fm]) {
                    fn = this.LL2MC[fm];
                    break
                }
            }
            if (!fn) {
                for (fm = 0; fm < this.LLBAND.length; fm++) {
                    if (fq <= -this.LLBAND[fm]) {
                        fn = this.LL2MC[fm];
                        break
                    }
                }
            }
            var fk = new e2(fl,fq);
            var fp = this.convertor(fk, fn);
            var e = new e2(fp.lng,fp.lat);
            e.latLng = fo.clone();
            return e
        },
        convertor: function(fk, fl) {
            if (!fk || !fl) {
                return
            }
            var e = fl[0] + fl[1] * Math.abs(fk.lng);
            var i = Math.abs(fk.lat) / fl[9];
            var fm = fl[2] + fl[3] * i + fl[4] * i * i + fl[5] * i * i * i + fl[6] * i * i * i * i + fl[7] * i * i * i * i * i + fl[8] * i * i * i * i * i * i;
            e *= (fk.lng < 0 ? -1 : 1);
            fm *= (fk.lat < 0 ? -1 : 1);
            return new e2(e,fm)
        },
        getDistance: function(i, e, fl, fk) {
            return this.EARTHRADIUS * Math.acos((Math.sin(fl) * Math.sin(fk) + Math.cos(fl) * Math.cos(fk) * Math.cos(e - i)))
        },
        getRange: function(fk, i, e) {
            if (i != null) {
                fk = Math.max(fk, i)
            }
            if (e != null) {
                fk = Math.min(fk, e)
            }
            return fk
        },
        getLoop: function(fk, i, e) {
            while (fk > e) {
                fk -= e - i
            }
            while (fk < i) {
                fk += e - i
            }
            return fk
        }
    });
    function bR(i, e) {
        if (i < -90) {
            i = -90
        } else {
            if (i > 90) {
                i = 90
            }
        }
        while (e < -180) {
            e += 360
        }
        while (e > 180) {
            e -= 360
        }
        this.lat = i || 0;
        this.lng = e || 0
    }
    x.extend(bR.prototype, {
        equals: function(e) {
            return (this.lat === e.lat && this.lng === e.lng)
        },
        clone: function() {
            return new bR(this.lat,this.lng)
        },
        getLngSpan: function(e) {
            var i = this.lng;
            var fk = Math.abs(e - i);
            if (fk > 180) {
                fk = 360 - fk
            }
            return fk
        },
        sub: function(e) {
            return new bR(this.lat - e.lat,this.lng - e.lng)
        },
        toString: function() {
            return this.lat + ", " + this.lng
        }
    });
    function c2(e, i) {
        if (e && !i) {
            i = e
        }
        this._sw = this._ne = null;
        this._swLng = this._swLat = null;
        this._neLng = this._neLat = null;
        if (e) {
            this._sw = new bR(e.lat,e.lng);
            this._ne = new bR(i.lat,i.lng);
            this._swLng = e.lng;
            this._swLat = e.lat;
            this._neLng = i.lng;
            this._neLat = i.lat
        }
    }
    x.extend(c2.prototype, {
        isEmpty: function() {
            return !this._sw || !this._ne
        },
        equals: function(e) {
            if (this.isEmpty()) {
                return false
            }
            return this.getSouthWest().equals(e.getSouthWest()) && this.getNorthEast().equals(e.getNorthEast())
        },
        getSouthWest: function() {
            return this._sw
        },
        getNorthEast: function() {
            return this._ne
        },
        containsBounds: function(e) {
            if (this.isEmpty() || e.isEmpty()) {
                return false
            }
            return (e._swLng > this._swLng && e._neLng < this._neLng && e._swLat > this._swLat && e._neLat < this._neLat)
        },
        getCenter: function() {
            if (this.isEmpty()) {
                return null
            }
            return new bR((this._swLat + this._neLat) / 2,(this._swLng + this._neLng) / 2)
        },
        intersects: function(fk) {
            if (Math.max(fk._swLng, fk._neLng) < Math.min(this._swLng, this._neLng) || Math.min(fk._swLng, fk._neLng) > Math.max(this._swLng, this._neLng) || Math.max(fk._swLat, fk._neLat) < Math.min(this._swLat, this._neLat) || Math.min(fk._swLat, fk._neLat) > Math.max(this._swLat, this._neLat)) {
                return false
            }
            var fm = Math.max(this._swLng, fk._swLng);
            var i = Math.min(this._neLng, fk._neLng);
            var fl = Math.max(this._swLat, fk._swLat);
            var e = Math.min(this._neLat, fk._neLat);
            this._sw = new bR(fl,fm);
            this._ne = new bR(e,i);
            this._swLng = fm;
            this._swLat = fl;
            this._neLng = i;
            this._neLat = e;
            return true
        },
        containsPoint: function(e) {
            if (this.isEmpty()) {
                return false
            }
            return (e.lng >= this._swLng && e.lng <= this._neLng && e.lat >= this._swLat && e.lat <= this._neLat)
        },
        extend: function(e) {
            var i = e.lng;
            var fk = e.lat;
            if (!this._sw) {
                this._sw = new bR(0,0)
            }
            if (!this._ne) {
                this._ne = new bR(0,0)
            }
            if (!this._swLng || this._swLng > i) {
                this._sw.lng = this._swLng = i
            }
            if (!this._neLng || this._neLng < i) {
                this._ne.lng = this._neLng = i
            }
            if (!this._swLat || this._swLat > fk) {
                this._sw.lat = this._swLat = fk
            }
            if (!this._neLat || this._neLat < fk) {
                this._ne.lat = this._neLat = fk
            }
        },
        toSpan: function() {
            if (this.isEmpty()) {
                return new bR(0,0)
            }
            return new bR(Math.abs(this._neLat - this._swLat),Math.abs(this._neLng - this._swLng))
        },
        union: function(i) {
            if (i.isEmpty()) {
                return false
            }
            var e = i.getSouthWest();
            var fk = i.getNorthEast();
            if (this._swLat > e.lat) {
                this._swLat = e.lat
            }
            if (this._swLng > e.lng) {
                this._swLng = e.lng
            }
            if (this._neLat < fk.lat) {
                this._neLat = fk.lat
            }
            if (this._neLng < fk.lng) {
                this._neLng = fk.lng
            }
            this._sw = new bR(this._swLat,this._swLng);
            this._ne = new bR(this._neLat,this._neLng);
            return true
        },
        toString: function() {
            return this._swLat + ", " + this._swLng + ", " + this._neLat + ", " + this._neLng
        }
    });
    var cx = {
        idle: 0,
        freeze: 1,
        zooming: 2,
        dragging: 3,
        moving: 4,
        readyToDrag: 5,
        readyToPinch: 6,
        pinching: 7,
        stdMapCtrlDrag: 8,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        arrowOpCodes: {
            37: 1,
            38: 2,
            39: 4,
            40: 8
        }
    };
    var cM = {
        _map: null,
        _html: "<div class='BMap_opMask' unselectable='on'></div>",
        _maskElement: null,
        _cursor: "default",
        inUse: false,
        show: function(e) {
            if (!this._map) {
                this._map = e
            }
            this.inUse = true;
            if (!this._maskElement) {
                this._createMask(e)
            }
            this._maskElement.style.display = "block"
        },
        _createMask: function(i) {
            if (!this._map) {
                this._map = i
            }
            if (!this._map) {
                return
            }
            var e = this._maskElement = cp(this._map.container, this._html);
            x.on(e, "mouseup", function(fk) {
                if (fk.button == 2) {
                    bX(fk)
                }
            });
            x.on(e, "contextmenu", bX);
            e.style.display = "none"
        },
        getDrawPoint: function(fl, fo, fm) {
            fl = window.event || fl;
            var i = fl.offsetX || fl.layerX || 0;
            var fn = parseInt(fl.offsetY) || parseInt(fl.layerY) || 0;
            var fk = fl.target || fl.srcElement;
            if (fk != cM.getDom(this._map) && fo == true) {
                while (fk && fk != this._map.container) {
                    if (!(fk.clientWidth == 0 && fk.clientHeight == 0 && fk.offsetParent && fk.offsetParent.nodeName.toLowerCase() == "td")) {
                        i += fk.offsetLeft;
                        fn += fk.offsetTop
                    }
                    fk = fk.offsetParent
                }
            }
            if (fk != cM.getDom(this._map) && fk != this._map.container) {
                return
            }
            if (typeof i === "undefined" || typeof fn === "undefined") {
                return
            }
            if (isNaN(i) || isNaN(fn)) {
                return
            }
            if (fm) {
                i = i + fm.x;
                fn = fn + fm.y
            }
            return this._map.pixelToPointIn(new cN(i,fn))
        },
        hide: function() {
            if (!this._map) {
                return
            }
            this.inUse = false;
            if (this._maskElement) {
                this._maskElement.style.display = "none"
            }
        },
        getDom: function(e) {
            if (!this._maskElement) {
                this._createMask(e)
            }
            return this._maskElement
        },
        setCursor: function(e) {
            this._cursor = e || "default";
            if (this._maskElement) {
                this._maskElement.style.cursor = this._cursor
            }
        }
    };
    function aH() {
        this._type = "overlay"
    }
    aH.inherits(x.BaseClass, "Overlay");
    aH.getZIndex = function(i, e) {
        i = i * 1;
        if (!i) {
            return 0
        }
        if (e) {
            i = cP.convertMC2LL(new e2(0,i)).lat
        }
        return (i * -100000) << 1
    }
    ;
    x.extend(aH.prototype, {
        _i: function(e) {
            this._map = e;
            if (!this.domElement && a7(this.initialize)) {
                this.domElement = this.initialize(e);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function(e) {
            throw "initialize方法未实现"
        },
        draw: function() {
            throw "draw方法未实现"
        },
        remove: function() {
            this._map = null;
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null;
            this.dispatchEvent(new aB("onremove"))
        },
        hide: function() {
            this._visible = false;
            x.hide(this.domElement)
        },
        show: function() {
            this._visible = true;
            x.show(this.domElement)
        },
        getMap: function() {
            return this._map
        },
        dispose: function() {
            x.BaseClass.prototype.decontrol.call(this)
        }
    });
    function bJ() {
        x.BaseClass.call(this);
        aH.call(this);
        this._visible = true;
        this._visibleInternal = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    bJ.inherits(aH, "OverlayInternal");
    x.extend(bJ.prototype, {
        initialize: function(e) {
            this.map = e;
            x.BaseClass.call(this, this.hashCode);
            return null
        },
        draw: function() {},
        remove: function() {
            this.map = null;
            this.decontrol();
            aH.prototype.remove.call(this)
        },
        hide: function() {
            this._visible = false
        },
        show: function() {
            this._visible = true
        },
        getDom: function() {
            return this.domElement
        },
        getContainer: function() {
            return this.domElement
        },
        setClassName: function() {},
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (i.hasOwnProperty(e)) {
                    this._config[e] = i[e]
                }
            }
        },
        getPoint: function(fk, fl) {
            if (!fk) {
                return this.point
            } else {
                var e = fl ? fl.width : 0;
                var fm = fl ? fl.height : 0;
                if (this.map) {
                    var i = this.map.pointToPixelIn(this.point);
                    if (this._config && this._config.offset) {
                        i.x = i.x + this._config.offset.width + e;
                        i.y = i.y + this._config.offset.height + fm
                    } else {
                        i.x = i.x + e;
                        i.y = i.y + fm
                    }
                    return this.map.pixelToPointIn(i)
                }
            }
        },
        setZIndex: function(e) {
            this.zIndex = e
        },
        isVisible: function() {
            if (!this.domElement) {
                return false
            }
            return !!this._visible
        },
        enableMassClear: function() {
            this._config.enableMassClear = true
        },
        disableMassClear: function() {
            this._config.enableMassClear = false
        },
        showInternal: function() {
            this._visibleInternal = true
        },
        hideInternal: function(e) {
            this._visibleInternal = false;
            this._hideInternalReason = e
        }
    });
    function dg(e) {
        this.map = e;
        this._overlays = {};
        this._overlayArray = [];
        this._customOverlays = [];
        e._overlays = this._overlays;
        e._overlayArray = this._overlayArray;
        e._customOverlays = this._customOverlays;
        this._zoomingOrMoving = false;
        this._init()
    }
    dg.prototype._init = function() {
        if (this.map._renderType !== "webgl") {
            this._createOverlayContainers()
        } else {
            this._createWebGLOverlayContainers()
        }
        this._bind()
    }
    ;
    dg.prototype._createOverlayContainers = function() {
        var e = this.map;
        e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
        e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(e.platform, 50);
        e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
        e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
        e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
        e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
        e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
        if (e.isCanvasMap()) {
            e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50)
        } else {
            e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200)
        }
    }
    ;
    dg.prototype._createWebGLOverlayContainers = function() {
        var e = this.map;
        e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
        e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
        e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
        e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
        e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
        e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400)
    }
    ;
    dg.prototype._createOverlayDiv = function(e, fl) {
        var fk = H("div");
        var i = fk.style;
        i.position = "absolute";
        i.top = i.left = i.width = i.height = "0";
        i.zIndex = fl;
        e.appendChild(fk);
        return fk
    }
    ;
    dg.prototype._bind = function() {
        var fm = this.map;
        var fl = this;
        function i(fo) {
            fl.draw(fo)
        }
        if (fm._renderType !== "webgl") {
            fm.addEventListener("load", i);
            fm.addEventListener("moveend", i);
            fm.addEventListener("resize", i);
            fm.addEventListener("zoomend", i);
            fm.addEventListener("zooming_inner", i)
        } else {
            fm.on("update", i)
        }
        fm.addEventListener("zoomend", function(fo) {
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
            }
        });
        fm.addEventListener("oncenterandzoom", function(fo) {
            fl.draw(fo);
            if (this.mapType === "B_EARTH_MAP") {
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
            }
        });
        fm.addEventListener("maptypechange", function(fo) {
            if (this.mapType === "B_EARTH_MAP") {
                if (this._panes.mapPane) {
                    this._panes.mapPane.style.display = "none"
                }
                if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
                    this.temp.overlayDiv.style.display = "none";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = "none"
                    }
                } else {
                    if (this.temp.overlayDiv.style.display === "none") {
                        this.temp.overlayDiv.style.display = "";
                        if (this.temp.overlayDivEx) {
                            this.temp.overlayDivEx.style.display = ""
                        }
                        if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                            this.temp.infoWin.redraw()
                        }
                    }
                }
                if (this._panes.markerPane) {
                    this._panes.markerPane.style.display = "none"
                }
            } else {
                if (this._panes.mapPane) {
                    this._panes.mapPane.style.display = ""
                }
                if (this._panes.markerPane) {
                    this._panes.markerPane.style.display = ""
                }
                if (this.temp.overlayDiv.style.display === "none") {
                    this.temp.overlayDiv.style.display = "";
                    if (this.temp.overlayDivEx) {
                        this.temp.overlayDivEx.style.display = ""
                    }
                    if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                        this.temp.infoWin.redraw()
                    }
                }
            }
            fl.draw(fo)
        });
        fm.on("earthstatuschange", function fn(fo) {
            fl.draw(fo)
        });
        fm.addEventListener("addoverlay", function(fs) {
            var fp = fs.target;
            if (fp instanceof bJ) {
                if (!fl._overlays[fp.hashCode]) {
                    fl._overlays[fp.hashCode] = fp;
                    fl._overlayArray.push(fp)
                }
            } else {
                var fr = false;
                for (var fq = 0, fo = fl._customOverlays.length; fq < fo; fq++) {
                    if (fl._customOverlays[fq] === fp) {
                        fr = true;
                        break
                    }
                }
                if (!fr) {
                    fl._customOverlays.push(fp)
                }
            }
        });
        fm.addEventListener("removeoverlay", function(fr) {
            var fp = fr.target;
            if (fp instanceof bJ) {
                delete fl._overlays[fp.hashCode];
                for (var fq = 0; fq < fl._overlayArray.length; fq++) {
                    if (fl._overlayArray[fq] === fp) {
                        fl._overlayArray.splice(fq, 1);
                        break
                    }
                }
            } else {
                for (var fq = 0, fo = fl._customOverlays.length; fq < fo; fq++) {
                    if (fl._customOverlays[fq] === fp) {
                        fl._customOverlays.splice(fq, 1);
                        break
                    }
                }
            }
        });
        fm.addEventListener("clearoverlays", function(fq) {
            this.closeInfoWindow();
            this.closeSimpleInfoWindow();
            for (var fp in fl._overlays) {
                if (fl._overlays[fp]._config.enableMassClear) {
                    this.removeOverlay(fl._overlays[fp])
                }
            }
            for (var fo = fl._customOverlays.length - 1; fo > 0; fo--) {
                if (fl._customOverlays[fo].enableMassClear !== false) {
                    this.removeOverlay(fl._customOverlays[fo]);
                    fl._customOverlays.splice(fo, 1)
                }
            }
        });
        fm.addEventListener("infowindowopen", function(fp) {
            var fo = this.infoWindow;
            if (fo) {
                x.hide(fo.popDom);
                x.hide(fo.shadowDom)
            }
        });
        function fk() {
            if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
                if (fl._zoomingOrMoving === false) {
                    this._panes.markerMouseTarget.style.display = "none";
                    fl._zoomingOrMoving = true
                }
            }
        }
        function e(fq) {
            if (this.getMapType() === "B_EARTH_MAP" || this._renderType === "webgl") {
                if (fl._zoomingOrMoving === true) {
                    this._panes.markerMouseTarget.style.display = "";
                    fl._zoomingOrMoving = false;
                    for (var fp = 0; fp < fl._overlayArray.length; fp++) {
                        var fo = fl._overlayArray[fp];
                        if (fo instanceof b8 === true) {
                            fo.draw(fq)
                        }
                    }
                }
            }
        }
        fm.addEventListener("movestart", fk);
        fm.addEventListener("moveend", e);
        fm.addEventListener("zoomstart", fk);
        fm.addEventListener("zoomend", e);
        fm.addEventListener("animation_start", fk);
        fm.addEventListener("animation_end", e);
        fm.addEventListener("displayoptions_changed", function(fo) {
            if (this._displayOptions.overlay === false) {
                this.temp.overlayDiv.style.display = "none"
            } else {
                this.temp.overlayDiv.style.display = ""
            }
        })
    }
    ;
    dg.prototype.draw = function(fo) {
        fo = fo || {};
        if (this.map.getMapType() === "B_EARTH_MAP") {
            for (var fm = 0; fm < this._overlayArray.length; fm++) {
                var fk = this._overlayArray[fm];
                if (fk instanceof s === true) {
                    continue
                }
                if (this._zoomingOrMoving) {
                    if (fk instanceof b8 === true) {
                        continue
                    }
                }
                fk.draw(fo)
            }
        } else {
            for (var fm = 0, fl = this._overlayArray.length; fm < fl; fm++) {
                var fk = this._overlayArray[fm];
                if (this._zoomingOrMoving && fk instanceof b8 === true) {
                    continue
                }
                fk.draw(fo)
            }
        }
        x.each(this._customOverlays, function(e) {
            e.draw(fo)
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition(fo.center, fo.zoom)
        }
        if (this.map.getMapType() !== "B_EARTH_MAP" && this.map._renderType !== "webgl") {
            if (aI.DrawerSelector) {
                var fn = aI.DrawerSelector.getDrawer(this.map);
                fn.setPalette()
            }
        }
    }
    ;
    aI.register(function(e) {
        e._overlayMgr = new dg(e)
    });
    function s(e) {
        bJ.call(this);
        this._config = {
            strokeColor: "#000",
            strokeWeight: 2,
            strokeOpacity: 1,
            strokeStyle: "solid",
            strokeLineCap: "round",
            strokeLineJoin: "round",
            enableMassClear: true,
            getParseTolerance: null,
            getParseCacheIndex: null,
            enableParse: true,
            enableEditing: false,
            mouseOverTolerance: 15,
            geodesic: false,
            clip: true
        };
        this.setConfig(e);
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 0.65
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 0.65
        }
        if (this._config.strokeStyle !== "solid" && this._config.strokeStyle !== "dashed" && this._config.strokeStyle !== "dotted") {
            this._config.strokeStyle = "solid"
        }
        this.domElement = null;
        this._bounds = new cv();
        this.points = [];
        this.greatCirclePoints = [];
        this._parseCache = [];
        this._holesCache = [];
        this._parseCacheGL = [];
        this._parseCacheGLRaw = [];
        this._areaCacheGL = [];
        this._strokeStyleInfoForGL = [[]];
        this._fillStyleInfoForGL = "";
        this.vertexMarkers = [];
        this._temp = {}
    }
    s.JOININDEX = {
        miter: 0,
        round: 1,
        bevel: 2
    };
    s.CAPINDEX = {
        round: 0,
        butt: 1,
        square: 2
    };
    s.inherits(bJ, "Graph");
    s.getGraphPoints = function(i) {
        var e = [];
        if (!i || i.length === 0) {
            return e
        }
        if (typeof i === "string") {
            var fk = i.split(";");
            x.each(fk, function(fm) {
                var fl = fm.split(",");
                e.push(new e2(fl[0],fl[1]))
            })
        }
        if (i.constructor === Array && i.length > 0) {
            e = i
        }
        return e
    }
    ;
    s.parseTolerance = {
        0: [0.09, 0.005, 0.0001, 0.00001],
        1: [9000, 500, 20, 1]
    };
    x.extend(s.prototype, {
        initialize: function(e) {
            this.map = e;
            return null
        },
        draw: function() {},
        setPoints: function(e) {
            this._clearCache();
            this.points = s.getGraphPoints(e).slice(0);
            this._calcBounds()
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds = new cv();
            if (!this.hasMultipleParts) {
                x.each(this.points, function(i) {
                    e._bounds.extend(i)
                })
            } else {
                x.each(this.points, function(i) {
                    x.each(i, function(fk) {
                        e._bounds.extend(fk)
                    })
                })
            }
        },
        getPoints: function() {
            return this.points
        },
        getPathIn: function() {
            return this.points
        },
        setPointAt: function(i, e) {
            if (!e || !this.points[i]) {
                return
            }
            this._clearCache();
            this.points[i] = new e2(e.lng,e.lat);
            this._calcBounds()
        },
        setOptions: function(i) {
            i = i || {};
            for (var e in i) {
                if (i.hasOwnProperty(e)) {
                    this._config[e] = i[e]
                }
            }
        },
        setStrokeColor: function(e) {
            this._config.strokeColor = e
        },
        getStrokeColor: function() {
            return this._config.strokeColor
        },
        setStrokeLineCap: function(e) {
            this._config.strokeLineCap = e
        },
        getStrokeLineCap: function() {
            return this._config.strokeLineCap
        },
        setStrokeLineJoin: function(e) {
            this._config.strokeLineJoin = e
        },
        getStrokeLineJoin: function() {
            return this._config.strokeLineJoin
        },
        setStrokeWeight: function(e) {
            if (e > 0) {
                this._config.strokeWeight = e
            }
        },
        getStrokeWeight: function() {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function(e) {
            if (!e || e > 1 || e < 0) {
                return
            }
            this._config.strokeOpacity = e
        },
        getStrokeOpacity: function() {
            return this._config.strokeOpacity
        },
        setFillOpacity: function(e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e
        },
        getFillOpacity: function() {
            return this._config.fillOpacity
        },
        setStrokeStyle: function(e) {
            if (e !== "solid" && e !== "dashed" && e !== "dotted") {
                return
            }
            this._config.strokeStyle = e
        },
        getStrokeStyle: function() {
            return this._config.strokeStyle
        },
        setFillColor: function(e) {
            this._config.fillColor = e || ""
        },
        getFillColor: function() {
            return this._config.fillColor
        },
        getBounds: function() {
            this._bounds.setMinMax();
            return this._bounds
        },
        remove: function() {
            if (this.map) {
                this.map.removeEventListener("onmousemove", this._graphMouseEvent)
            }
            bJ.prototype.remove.call(this);
            this._clearCache();
            var e = new aB("onlineupdate");
            e.action = "remove";
            e.overlay = this;
            this.fire(e)
        },
        enableEditing: function() {
            this._config.enableEditing = true
        },
        disableEditing: function() {
            this._config.enableEditing = false
        },
        getParsedPoints: function() {
            var e = this._simplification(this.points);
            if (this.hasMultipleParts) {
                return e
            }
            return [e]
        },
        _simplification: function(fp) {
            var e = this.map;
            var fo = this.getParseCacheIndex(e.getZoom());
            var fr;
            if (this._parseCache[fo]) {
                fr = this._parseCache[fo]
            } else {
                var fm = fp;
                if (this.greatCirclePoints.length > 0) {
                    fm = this.greatCirclePoints
                }
                var fn = this.getParseTolerance(e.getZoom(), e.config.coordType);
                if (!this.hasMultipleParts) {
                    var fq = fb(fm, fn)
                } else {
                    var fq = [];
                    for (var fk = 0; fk < fm.length; fk++) {
                        var fl = fb(fm[fk], fn);
                        fq.push(fl)
                    }
                }
                fr = this._parseCache[fo] = fq
            }
            return fr
        },
        _clearCache: function() {
            this._parseCache.length = 0;
            this._parseCacheGL.length = 0;
            this._parseCacheGLRaw.length = 0;
            this._areaCacheGL.length = 0
        }
    });
    if (x.Browser.ie && document.namespaces && !document.namespaces.olv) {
        document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
    }
    function eP(fn, fl, fk) {
        if (!fn || !fl) {
            return
        }
        this.imageUrl = null;
        this.imageDom = null;
        if (typeof fn === "string") {
            this.imageUrl = fn
        } else {
            this.imageDom = fn;
            if (!this.imageDom.id) {
                this.imageDom.id = aI.getGUID("icon_dom_")
            }
        }
        this.size = fl;
        var fm = new cF(Math.floor(fl.width / 2),Math.floor(fl.height / 2));
        var i = {
            offset: fm,
            imageOffset: new cF(0,0)
        };
        fk = fk || {};
        for (var e in fk) {
            i[e] = fk[e]
        }
        if (fk.anchor) {
            i.offset = fk.anchor
        }
        this.anchor = this.offset = i.offset;
        this.imageOffset = i.imageOffset;
        this.infoWindowOffset = fk.infoWindowOffset || this.offset;
        this.printImageUrl = fk.printImageUrl || "";
        this.imageSize = fk.imageSize;
        this.srcSetObject = {};
        this.setImageSrcset(fk.srcset || fk.srcSet)
    }
    eP.prototype.setImageUrl = function(e) {
        if (!e) {
            return
        }
        this.imageUrl = e;
        this._renderData = null
    }
    ;
    eP.prototype.getCurrentImageUrl = function() {
        if (window.devicePixelRatio > 1 && this.srcSetObject["2x"]) {
            return this.srcSetObject["2x"]
        }
        return this.imageUrl
    }
    ;
    eP.prototype.setPrintImageUrl = function(e) {
        if (!e) {
            return
        }
        this.printImageUrl = e
    }
    ;
    eP.prototype.setSize = function(e) {
        if (!e) {
            return
        }
        this.size = new cF(e.width,e.height);
        this._renderData = null
    }
    ;
    eP.prototype.setOffset = function(e) {
        if (!e) {
            return
        }
        this.anchor = this.offset = new cF(e.width,e.height);
        this._renderData = null
    }
    ;
    eP.prototype.setAnchor = function(e) {
        this.setOffset(e)
    }
    ;
    eP.prototype.setImageOffset = function(e) {
        if (!e) {
            return
        }
        this.imageOffset = new cF(e.width,e.height);
        this._renderData = null
    }
    ;
    eP.prototype.setInfoWindowOffset = function(e) {
        if (!e) {
            return
        }
        this.infoWindowOffset = new cF(e.width,e.height)
    }
    ;
    eP.prototype.setImageSize = function(e) {
        if (!e) {
            return
        }
        this.imageSize = new cF(e.width,e.height)
    }
    ;
    eP.prototype.setImageSrcset = function(fk) {
        var e = "";
        if (!fk) {
            return
        }
        for (var i in fk) {
            if (fk.hasOwnProperty(i)) {
                this.srcSetObject[i] = fk[i];
                e = fk[i] + " " + i + ","
            }
        }
        this.srcSet = e
    }
    ;
    eP.prototype.toString = function() {
        return "Icon"
    }
    ;
    eP.prototype.generateRenderData = function() {
        var i = this.offset;
        var e = this.size;
        var fl = this.imageOffset;
        var fk = [];
        fk.push(-i.width, i.height - e.height, 0);
        fk.push(e.width - i.width, i.height - e.height, 0);
        fk.push(e.width - i.width, i.height, 0);
        fk.push(-i.width, i.height - e.height, 0);
        fk.push(e.width - i.width, i.height, 0);
        fk.push(-i.width, i.height, 0);
        return {
            vertex: fk
        }
    }
    ;
    eP.prototype.getRenderData = function() {
        if (!this._renderData) {
            this._renderData = this.generateRenderData()
        }
        return this._renderData
    }
    ;
    function W(fk, i) {
        x.BaseClass.call(this);
        this.content = fk;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new cF(0,0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        this.setConfig(i);
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = dm.imgPath;
        this.overlay = null;
        var e = this;
        cG.load("infowindow", function() {
            e._draw()
        })
    }
    W.inherits(x.BaseClass, "InfoWindow");
    x.extend(W.prototype, {
        setWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 60) {
                    e = 60
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        setContent: function(e) {
            this.content = e || ""
        },
        setMaxContent: function(e) {
            this._config.maxContent = e || ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        dispose: function() {
            x.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof (this._config[e]) == typeof (i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPoint: function() {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        dispose: function() {
            x.BaseClass.prototype.decontrol.call(this)
        },
        toString: function() {
            return "InfoWindow"
        }
    });
    bU.prototype.openInfoWindow = function(fl, e) {
        if (!fl || fl.toString() != "InfoWindow" || !e || e.toString() != "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var fk = new eP(dm.imgPath + "blank.gif",{
                width: 1,
                height: 1
            });
            i.marker = new b8(e,{
                icon: fk,
                width: 1,
                height: 1,
                offset: new cF(0,0),
                infoWindowOffset: new cF(0,0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.show();
        i.marker.openInfoWindow(fl)
    }
    ;
    bU.prototype.closeInfoWindow = function() {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeInfoWindow()
        }
    }
    ;
    bJ.prototype.openInfoWindow = function(e) {
        if (this.map) {
            this.map.closeInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            x.BaseClass.call(e, e.hashCode)
        }
    }
    ;
    bJ.prototype.closeInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    }
    ;
    function ai(fk, i) {
        bJ.call(this);
        this.content = fk;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new cF(0,0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                fontSize: "12px",
                zIndex: "80",
                MozUserSelect: "none"
            },
            point: null,
            enableMassClear: true
        };
        i = i || {};
        this.setConfig(i);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        this.point = this._config.point;
        var e = this;
        cG.load("marker", function() {
            e._draw()
        })
    }
    ai.inherits(bJ, "Label");
    x.extend(ai.prototype, {
        setPoint: function(e) {
            if (e && e.toString() === "Point" && !this.getMarker()) {
                this.point = this._config.point = new e2(e.lng,e.lat)
            }
        },
        setContent: function(e) {
            this.content = e
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._config.opacity = e
            }
        },
        setOffset: function(e) {
            if (!e || e.toString() !== "Size") {
                return
            }
            this._config.offset = new cF(e.width,e.height)
        },
        getOffset: function() {
            return this._config.offset
        },
        setStyle: function(e) {
            e = e || {};
            this._config.styles = x.extend(this._config.styles, e)
        },
        setStyles: function(e) {
            this.setStyle(e)
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setMarker: function(e) {
            if (this._marker && this._marker !== e) {
                this._marker._config.label = null
            }
            this._marker = e;
            if (e) {
                this.point = this._config.point = e.getPoint()
            } else {
                this.point = this._config.point = null
            }
        },
        getMarker: function() {
            return this._marker || null
        }
    });
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    function b8(e, i) {
        bJ.call(this);
        i = i || {};
        this.point = e;
        this.latLng = cP.convertMC2LL(e);
        this._rotation = 0;
        this.map = null;
        this._animation = null;
        this.domElement = null;
        this.iconDom = null;
        this.infoWindowDom = null;
        this.siblingElement = null;
        this.textureCoord = null;
        this.textureCoordGLMap = null;
        this.collisionDetectionFailed = false;
        this._config = {
            offset: new cF(0,0),
            opacity: 1,
            icon: null,
            title: "",
            infoWindow: null,
            label: null,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            raiseOnDrag: false,
            restrictDraggingArea: false,
            startAnimation: "",
            enableCollisionDetection: false,
            rank: 0,
            enableDraggingMap: false
        };
        this.setConfig(i);
        if (!i.icon) {
            this._config.icon = new eP(dm.imgPath + "marker_red.png",new cF(23,25),{
                offset: new cF(10,25),
                infoWindowOffset: new cF(10,0)
            })
        }
        this._isDragging = false;
        var fk = this;
        cG.load("marker", function() {
            fk._draw()
        })
    }
    b8.TOP_ZINDEX = aH.getZIndex(-90) + 1000000;
    b8.DRAG_ZINDEX = b8.TOP_ZINDEX + 1000000;
    b8._injectMethond = function(e) {
        x.extend(b8.prototype, e)
    }
    ;
    b8.inherits(bJ, "Marker");
    x.extend(b8.prototype, {
        toString: function() {
            return "Marker"
        },
        setIcon: function(e) {
            if (e) {
                this._config.icon = e;
                this.textureCoord = this.textureCoordGLMap = null
            }
        },
        getIcon: function() {
            return this._config.icon
        },
        setLabel: function(e) {
            if (!e) {
                return
            }
            this._config.label = e;
            e._config.enableMassClear = this._config.enableMassClear;
            e.setPoint(this.point)
        },
        getLabel: function() {
            return this._config.label
        },
        enableDragging: function() {
            this._config.enableDragging = true
        },
        disableDragging: function() {
            this._config.enableDragging = false
        },
        setPoint: function(e) {
            if (e) {
                this.point = this._config.point = new e2(e.lng,e.lat);
                this.latLng = cP.convertMC2LL(e)
            }
        },
        setPositionIn: function(e) {
            this.setPoint(e)
        },
        getPositionIn: function() {
            return this.getPoint()
        },
        setTop: function(i, e) {
            this._config.isTop = !!i;
            if (i) {
                this._addi = e || 0
            }
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        getTitle: function() {
            return this._config.title
        },
        setOffset: function(e) {
            if (e) {
                this._config.offset = e
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        setAnimation: function(e) {
            this._animation = e
        },
        setRank: function(e) {
            this._config.rank = e
        },
        getRank: function() {
            return this._config.rank
        },
        setRotation: function(e) {
            while (e < 0) {
                e += 360
            }
            this._rotation = e % 360
        },
        getRotation: function() {
            return this._rotation
        }
    });
    function ac(e, fk) {
        var i = cP.convertLL2MC(e);
        b8.call(this, i, fk)
    }
    ac.inherits(b8, "MarkerOut");
    x.extend(ac.prototype, {
        toString: function() {
            return "Marker"
        },
        setPosition: function(e) {
            var i = cP.convertLL2MC(e);
            this.setPositionIn(i)
        },
        getPosition: function() {
            var e = this.getPositionIn();
            return cP.convertMC2LL(e)
        }
    });
    function a(fk, e) {
        s.call(this, e);
        this.setPoints(fk);
        var i = this;
        cG.load("poly", function() {
            i._draw()
        })
    }
    a.inherits(s, "Polyline");
    function T(fm, e) {
        if (!fm || fm.length === 0) {
            return
        }
        var fl = [];
        for (var fk = 0; fk < fm.length; fk++) {
            fl[fk] = cP.convertLL2MC(fm[fk])
        }
        a.call(this, fl, e)
    }
    T.inherits(a, "PolylineOut");
    x.extend(T.prototype, {
        toString: function() {
            return "Polyline"
        },
        setPath: function(fl) {
            if (!fl || fl.length === 0) {
                return
            }
            var fk = [];
            for (var e = 0; e < fl.length; e++) {
                fk[e] = cP.convertLL2MC(fl[e])
            }
            this.setPathIn(fk)
        },
        getPath: function() {
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var fl = [];
            for (var fk = 0; fk < e.length; fk++) {
                fl[fk] = cP.convertMC2LL(e[fk])
            }
            return fl
        }
    });
    function dA(e, fk) {
        s.call(this, fk);
        this._normalizedBounds = new cv();
        this.setPoints(e);
        var i = this;
        cG.load("poly", function() {
            i._draw()
        })
    }
    dA.inherits(a, "PolylineMultipart");
    x.extend(dA.prototype, {
        setPoints: function(e) {
            if (!e) {
                return
            }
            this._clearCache();
            this.points = this._unifyArgs(e);
            this._calcBounds()
        },
        _unifyArgs: function(fk) {
            var e = [];
            var i = [];
            if (fk.constructor === Array) {
                if (fk[0].constructor === e2) {
                    i.push(fk)
                } else {
                    i = fk
                }
            } else {
                if (typeof fk === "string") {
                    i.push(fk)
                }
            }
            x.each(i, function(fl) {
                e.push(s.getGraphPoints(fl))
            });
            return e
        },
        setPointAt: function(i, e, fk) {
            fk = fk || 0;
            if (!e || !this.points[fk] || !this.points[fk][i]) {
                return
            }
            this._clearCache();
            this.points[fk][i] = new e2(e.lng,e.lat);
            this._calcBounds()
        },
        getBounds: function(e) {
            if (!e) {
                this._bounds.setMinMax();
                return this._bounds
            }
            this._normalizedBounds.setMinMax();
            return this._normalizedBounds
        },
        _calcBounds: function() {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds.setNorthEast(null);
            e._bounds.setSouthWest(null);
            if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
                x.each(e.greatCirclePoints, function(i) {
                    e._bounds.extend(i)
                })
            } else {
                x.each(e.points, function(i) {
                    x.each(i, function(fk) {
                        e._bounds.extend(fk)
                    })
                })
            }
            e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
            e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
            if (e._normalizedBounds.sw.lng < -bU.WORLD_SIZE_MC_HALF || e._normalizedBounds.ne.lng > bU.WORLD_SIZE_MC_HALF) {
                e._normalizedBounds.sw.lng = -bU.WORLD_SIZE_MC_HALF;
                e._normalizedBounds.ne.lng = bU.WORLD_SIZE_MC_HALF
            }
        }
    });
    function al(fk, e) {
        s.call(this, e);
        e = e || {};
        if (typeof e.fillOpacity === "number") {
            this._config.fillOpacity = e.fillOpacity
        } else {
            this._config.fillOpacity = 0.6
        }
        dM(this._config.fillOpacity, 0, 1);
        if (e.fillColor === "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = e.fillColor ? e.fillColor : "#fff"
        }
        this._parseFillCacheWebGL = [];
        this.setPoints(fk, e);
        var i = this;
        cG.load("poly", function() {
            i._draw()
        })
    }
    al.inherits(s, "Polygon");
    x.extend(al.prototype, {
        setPoints: function(fn) {
            var fl = [];
            if (typeof fn === "string" || fn[0]instanceof e2 || this instanceof d9 || fn.length === 0) {
                var e = this._processSinglePointArray(fn);
                this._userPoints = e.userPoints;
                fl = e.innerPoints;
                this.hasMultipleParts = false
            } else {
                this._userPoints = [];
                for (var fm = 0; fm < fn.length; fm++) {
                    var fk = this._processSinglePointArray(fn[fm]);
                    this._userPoints.push(fk.userPoints);
                    fl.push(fk.innerPoints)
                }
                this.hasMultipleParts = true
            }
            s.prototype.setPoints.call(this, fl)
        },
        setPathIn: function(e) {
            this.setPoints(e)
        },
        _processSinglePointArray: function(e) {
            var i = s.getGraphPoints(e).slice(0);
            innerPoints = i.slice(0);
            if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
                innerPoints.push(new e2(innerPoints[0].lng,innerPoints[0].lat))
            }
            return {
                userPoints: i,
                innerPoints: innerPoints
            }
        },
        setPointAt: function(i, e) {
            if (!this._userPoints[i]) {
                return
            }
            this._userPoints[i] = new e2(e.lng,e.lat);
            this.points[i] = new e2(e.lng,e.lat);
            if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new e2(e.lng,e.lat)
            }
            this._calcBounds()
        },
        getPoints: function() {
            var e = this._userPoints;
            if (e.length === 0) {
                e = this.points
            }
            return e
        },
        getPathIn: function() {
            return this.getPoints()
        }
    });
    function eM(fm, e) {
        if (!fm || fm.length === 0) {
            return
        }
        var fl = [];
        for (var fk = 0; fk < fm.length; fk++) {
            fl[fk] = cP.convertLL2MC(fm[fk])
        }
        al.call(this, fl, e)
    }
    eM.inherits(al, "PolygonOut");
    x.extend(eM.prototype, {
        toString: function() {
            return "Polygon"
        },
        setPath: function(fl) {
            if (!fl || fl.length === 0) {
                return
            }
            var fk = [];
            for (var e = 0; e < fl.length; e++) {
                fk[e] = cP.convertLL2MC(fl[e])
            }
            this.setPathIn(fk)
        },
        getPath: function() {
            var e = this.getPathIn();
            if (!e || e.length === 0) {
                return []
            }
            var fl = [];
            for (var fk = 0; fk < e.length; fk++) {
                fl[fk] = cP.convertMC2LL(e[fk])
            }
            return fl
        }
    });
    function d9(i, e, fk) {
        this.point = i;
        this.radius = Math.abs(e);
        al.call(this, [], fk)
    }
    d9.parseTolerance = {
        0: [0.01, 0.0001, 0.00001, 0.000004],
        1: [1000, 10, 1, 0.4]
    };
    d9.inherits(al, "Circle");
    x.extend(d9.prototype, {
        initialize: function(e) {
            this.map = e;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getPoint: function() {
            return this.point
        },
        setPoint: function(e) {
            if (!e) {
                return
            }
            this.point = e
        },
        setCenterIn: function(e) {
            var i = arguments[1];
            this.setPoint(e, i)
        },
        setRadius: function(e) {
            this.radius = Math.abs(e)
        },
        getCenterIn: function() {
            return this.point
        },
        getRadius: function() {
            return this.radius
        },
        _getPerimeterPoints: function(e, fs) {
            if (!e || !fs || !this.map) {
                return []
            }
            var fk = this.map;
            var fp = e.lng;
            var fn = e.lat;
            var fy = cP.convertMC2LL(e);
            fp = fy.lng;
            fn = fy.lat;
            var fz = [];
            var fu = fs / cP.EARTHRADIUS;
            var fr = (Math.PI / 180) * fn;
            var fx = (Math.PI / 180) * fp;
            for (var fq = 0; fq < 360; fq += 9) {
                var fo = (Math.PI / 180) * fq;
                var fv = Math.asin(Math.sin(fr) * Math.cos(fu) + Math.cos(fr) * Math.sin(fu) * Math.cos(fo));
                var ft = Math.atan2(Math.sin(fo) * Math.sin(fu) * Math.cos(fr), Math.cos(fu) - Math.sin(fr) * Math.sin(fv));
                var fw = ((fx - ft + Math.PI) % (2 * Math.PI)) - Math.PI;
                var fm = new bR(fv * (180 / Math.PI),fw * (180 / Math.PI));
                fz.push(cP.convertLL2MC(fm))
            }
            var fl = fz[0];
            fz.push(new e2(fl.lng,fl.lat));
            if (fl) {
                this._radiusMercator = Math.sqrt(Math.pow(fl.lng - this.point.lng, 2) + Math.pow(fl.lat - this.point.lat, 2))
            } else {
                this._radiusMercator = this.radius
            }
            return fz
        }
    });
    function cm(i, e, fl) {
        var fk = cP.convertLL2MC(i);
        d9.call(this, fk, e, fl)
    }
    cm.inherits(d9, "CircleOut");
    x.extend(cm.prototype, {
        toString: function() {
            return "Circle"
        },
        setCenter: function(e) {
            var i = cP.convertLL2MC(e);
            this.setCenterIn(i)
        },
        getCenter: function() {
            var e = this.getCenterIn();
            return cP.convertMC2LL(e)
        }
    });
    var aS = {};
    function fd(fk, i) {
        x.BaseClass.call(this);
        this.content = fk;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new cF(0,0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [[10, 10], [10, 10], [10, 10], [10, 10]],
            ifMaxScene: false,
            onClosing: function() {
                return true
            }
        };
        this.setConfig(i);
        if (this._config.width < 50) {
            this._config.width = 50
        }
        if (this._config.width > 730) {
            this._config.width = 730
        }
        if (this._config.height != 0) {
            if (this._config.height < 50) {
                this._config.height = 50
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth !== 0) {
            if (this._config.maxWidth < 50) {
                this._config.maxWidth = 50
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = dm.imgPath;
        this.overlay = null;
        var e = this;
        cG.load("simpleInfowindow", function() {
            e._draw()
        })
    }
    fd.inherits(x.BaseClass, "SimpleInfoWindow");
    x.extend(fd.prototype, {
        setWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function(e) {
            e = e * 1;
            e -= 10;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function(e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 50) {
                    e = 50
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function(e) {
            this._config.title = e || ""
        },
        setContent: function(e) {
            this.content = e || ""
        },
        setMaxContent: function(e) {
            this._config.maxContent = e || ""
        },
        redraw: function() {},
        enableAutoPan: function() {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function() {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function() {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function() {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function() {
            this._config.enableMaximize = true
        },
        disableMaximize: function() {
            this._config.enableMaximize = false
        },
        show: function() {
            this._visible = true
        },
        hide: function() {
            this._visible = false
        },
        close: function() {
            this.hide()
        },
        dispose: function() {
            x.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function() {
            this.isWinMax = true
        },
        restore: function() {
            this.isWinMax = false
        },
        setConfig: function(i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof (this._config[e]) == typeof (i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function() {
            return this.isOpen()
        },
        isOpen: function() {
            return false
        },
        getPoint: function() {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getOffset: function() {
            return this._config.offset
        },
        dispose: function() {
            x.BaseClass.prototype.decontrol.call(this)
        },
        toString: function() {
            return "SimpleInfoWindow"
        }
    });
    bU.prototype.openSimpleInfoWindow = function(fl, e) {
        if (!fl || fl.toString() != "SimpleInfoWindow" || !e || e.toString() != "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var fk = new eP(dm.imgPath + "blank.gif",{
                width: 1,
                height: 1
            });
            i.marker = new b8(e,{
                icon: fk,
                width: 1,
                height: 1,
                offset: new cF(0,0),
                infoWindowOffset: new cF(0,0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.show();
        i.marker.openSimpleInfoWindow(fl)
    }
    ;
    bU.prototype.closeSimpleInfoWindow = function() {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeSimpleInfoWindow()
        }
    }
    ;
    bJ.prototype.openSimpleInfoWindow = function(e) {
        if (this.map) {
            this.map.closeSimpleInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            x.BaseClass.call(e, e.hashCode)
        }
    }
    ;
    bJ.prototype.closeSimpleInfoWindow = function() {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    }
    ;
    function cN(e, i) {
        e = isNaN(e) ? 0 : e;
        i = isNaN(i) ? 0 : i;
        this.x = e;
        this.y = i
    }
    cN.prototype.equals = function(e) {
        if (!e) {
            return false
        }
        return e.x === this.x && e.y === this.y
    }
    ;
    cN.prototype.clone = function() {
        return new cN(this.x,this.y)
    }
    ;
    cN.prototype.toString = function() {
        return "Pixel"
    }
    ;
    function cF(i, e) {
        if (typeof i !== "number") {
            this.width = parseFloat(i)
        } else {
            this.width = i
        }
        if (typeof e !== "number") {
            this.height = parseFloat(e)
        } else {
            this.height = e
        }
    }
    cF.prototype.equals = function(e) {
        return !!(e && this.width === e.width && this.height === e.height)
    }
    ;
    cF.prototype.toString = function() {
        return "Size"
    }
    ;
    var aY = {
        B_NORMAL_MAP: {
            tileUrls: cS(dm.tileDomain, dm.rasterTilePath),
            vectorTileUrls: cS(dm.tileDomain, dm.vectorTilePath),
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            webgl: {
                minZoom: 3,
                maxZoom: 21
            },
            zoomLevelBase: 18,
            errorUrl: dm.imgPath + "bg.png",
            bounds: new cv(new e2(-21364736,-11708041.66),new e2(23855104,12474104.17)),
            imgExtend: "png"
        },
        B_SATELLITE_MAP: {
            tileUrls: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/starpic/?qt=satepc&", 
            "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/starpic/?qt=satepc&", 
            "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/starpic/?qt=satepc&", 
            "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/starpic/?qt=satepc&"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: dm.imgPath + "bg.png",
            bounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
            imgExtend: "png"
        },
        B_STREET_MAP: {
            tileUrls: cS(dm.tileDomain, dm.rasterTilePath),
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: dm.imgPath + "bg.png",
            bounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
            imgExtend: "png"
        },
        BMAP_CUSTOM_LAYER: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            zoomLevelBase: 18,
            errorUrl: dm.imgPath + "blank.gif",
            bounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
            imgExtend: "png"
        },
        B_EARTH_MAP: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 3,
            zoomLevelMax: 19,
            minDataZoom: 3,
            maxDataZoom: 19,
            minZoom: 3,
            maxZoom: 19,
            webgl: {
                minZoom: 3,
                maxZoom: 21
            },
            zoomLevelBase: 18,
            errorUrl: dm.imgPath + "blank.gif",
            bounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
            imgExtend: "png"
        }
    };
    var be = aY;
    function a5(fq, i, fm, fk, fl) {
        this.mgr = fq;
        this.position = fm;
        this._cbks = [];
        this.name = fq.getTileName(fk, fl, fq.map.config.style);
        this.info = fk;
        this._transparentPng = fl.isTransparentPng();
        var fr = H("img");
        b5(fr);
        fr.galleryImg = false;
        var fp = fr.style;
        fp.position = "absolute";
        fp.width = fq.tileSize + "px";
        fp.height = fq.tileSize + "px";
        fp.left = fm[0] + "px";
        fp.top = fm[1] + "px";
        this.img = fr;
        this.src = i;
        if (L && fm._offsetX === 0) {
            fp.opacity = 0;
            fp.willChange = "opacity"
        }
        var fo = this;
        this.img.onload = function(fz) {
            if (!fo.mgr) {
                return
            }
            var fu = fo.mgr;
            var fs = fu.bufferTiles;
            if (fu.bufferNumber > 0) {
                fs[fo.name] = fo;
                fs.push(fo.name)
            }
            var fw = fs.length - fu.bufferNumber;
            for (var fx = 0; fw > 0 && fx < fs.length; fx++) {
                var fy = fs[fx];
                if (!fu.mapTiles[fy]) {
                    if (fs[fy]) {
                        fs[fy].mgr = null;
                        var fv = fs[fy].img;
                        if (fv.parentNode) {
                            dD(fv);
                            fv.parentNode.removeChild(fv)
                        }
                        fv = null;
                        fs[fy].img = null;
                        fs[fy] = null;
                        delete fs[fy]
                    }
                    fs.splice(fx, 1);
                    fx--;
                    fw--
                }
            }
            fo.loaded = true;
            fu.imgNumber++;
            if (!eQ(fo.img)) {
                if (fl.tilesDiv) {
                    fl.tilesDiv.appendChild(fo.img)
                }
            }
            var fz = new aB("onimagechange");
            fz.action = "show";
            fz.tile = fo.name;
            fu.map.dispatchEvent(fz);
            if (L && fm._offsetX === 0) {
                var ft = new l({
                    fps: 10,
                    duration: 300,
                    render: function(e) {
                        if (fo.img && fo.img.style) {
                            fo.img.style.opacity = e * 1
                        }
                    },
                    finish: function() {
                        if (fo.img && fo.img.style) {
                            delete fo.img.style.opacity;
                            fo.img.style.willChange = "auto"
                        }
                    }
                })
            }
            fo._callCbks()
        }
        ;
        this.img.onerror = function(fu) {
            fo.error = true;
            fo._callCbks();
            if (!fo.mgr) {
                return
            }
            var fs = fo.mgr;
            var ft = be[fl.mapType];
            if (ft.errorUrl) {
                fo.img.src = ft.errorUrl
            }
            if (!eQ(fo.img)) {
                if (fl.tilesDiv) {
                    fl.tilesDiv.appendChild(fo.img)
                }
            }
        }
        ;
        fr = null;
        var fn = new aB("onimagebefore");
        fn.tile = fo.name;
        fq.map.dispatchEvent(fn)
    }
    a5.prototype._addLoadCbk = function(e) {
        this._cbks.push(e)
    }
    ;
    a5.prototype._load = function() {
        if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
            this.img.src = dm.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    }
    ;
    a5.prototype._callCbks = function() {
        var fk = this;
        for (var e = 0; e < fk._cbks.length; e++) {
            fk._cbks[e]()
        }
        fk._cbks.length = 0
    }
    ;
    var L = (!x.Browser.ie || x.Browser.ie > 8);
    function du(e) {
        this.tileLayers = [];
        this.map = e;
        this.bufferNumber = 300;
        this.mapTiles = [];
        this.bufferTiles = [];
        this.config = be[this.map.mapType];
        this.errorUrl = this.config.errorUrl;
        this.tileSize = this.config.tileSize;
        this.baseUnits = this.config.baseUnits;
        this.baseZoomLevel = this.config.zoomLevelBase;
        this.tileURLs = this.config.tileUrls;
        this.imgNumber = 0;
        this.numLoading = 0;
        this.temp = {}
    }
    aI.register(function(i) {
        if (i._renderType === "webgl") {
            return
        }
        var e = i.tileMgr = new du(i);
        i.addEventListener("mousewheel", function(fk) {
            e.mouseWheel(fk)
        });
        i.addEventListener("dblclick", function(fk) {
            e.dblClick(fk)
        });
        i.addEventListener("rightdblclick", function(fk) {
            e.dblClick(fk)
        });
        i.addEventListener("minuspress", function(fk) {
            e.keypress(fk)
        });
        i.addEventListener("pluspress", function(fk) {
            e.keypress(fk)
        });
        i.addEventListener("load", function(fk) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.loadTiles()
        });
        i.addEventListener("zoomstartcode", function(fk) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e._zoom(fk)
        });
        i.addEventListener("moving", function(fk) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.moveGridTiles()
        });
        i.addEventListener("resize", function(fk) {
            if (this.mapType === BMAP_EARTH_MAP) {
                return
            }
            e.resizeMap(fk)
        });
        i.addEventListener("addtilelayer", function(fk) {
            e.addTileLayer(fk)
        });
        i.addEventListener("removetilelayer", function(fk) {
            e.removeTileLayer(fk)
        })
    });
    x.extend(du.prototype, {
        addTileLayer: function(fl) {
            var fk = this;
            var i = fl.target;
            fk.tileLayers.push(i);
            if (fk.map.loaded) {
                fk.moveGridTiles()
            }
        },
        removeTileLayer: function(fs) {
            var ft = this;
            var fq = fs.target;
            var fo = fq.mapType;
            var fn = ft.mapTiles;
            var fv = ft.bufferTiles;
            for (var fk in fv) {
                var fl = fk.split("-")[1];
                if (fl == fo) {
                    delete fv[fk]
                }
            }
            for (var fk in fn) {
                var fl = fk.split("-")[1];
                if (fl == fo) {
                    delete fn[fk]
                }
            }
            if (ft.zoomsDiv && ft.zoomsDiv.parentNode) {
                ft.zoomsDiv.parentNode.removeChild(ft.zoomsDiv);
                ft.zoomsDiv.innerHTML = ""
            }
            var fm = ft.map;
            if (fm.deepZoom) {
                var fu = fm.deepZoom.preDeepZoomDiv;
                if (fu && fu.parentNode) {
                    fu.parentNode.removeChild(fu)
                }
            }
            for (var fr = 0, fp = ft.tileLayers.length; fr < fp; fr++) {
                if (fq == ft.tileLayers[fr]) {
                    ft.tileLayers.splice(fr, 1)
                }
            }
            ft.moveGridTiles()
        },
        hideDeepZoomDiv: function() {
            var i = this
              , fk = i.map;
            if (fk.deepZoom) {
                var e = fk.deepZoom.preDeepZoomDiv;
                if (e && e.style.display != "none") {
                    e.style.display = "none"
                }
            }
        },
        getTileLayer: function(fm) {
            var fl = this;
            for (var fk = 0, e = fl.tileLayers.length; fk < e; fk++) {
                tilelayer = fl.tileLayers[fk];
                if (tilelayer.mapType == fm) {
                    return tilelayer
                }
            }
            return null
        },
        _zoom: function(fk) {
            var i = this;
            if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
                i.zoomsDiv.style.display = "none"
            }
            i.hideDeepZoomDiv();
            i.moveGridTiles()
        },
        resizeMap: function(i) {
            this.loaded = false;
            this.moveGridTiles()
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            var e = this;
            if (this.numLoading == 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (e.numLoading == 0) {
                        e.map.dispatchEvent(new aB("ontilesloaded"))
                    }
                    e._checkLoadedTimer = null
                }, 80)
            }
        },
        getTileName: function(e, fk, i) {
            var fm = fk.mapType;
            var fl = "TILE-" + fm + "-" + i + "-" + e[0] + "-" + e[1] + "-" + e[2];
            return fl
        },
        hideTile: function(fl, fk) {
            var i = fl.img;
            if (eQ(i)) {
                if (fl.loaded) {
                    this.imgNumber--
                }
                if (i.parentNode) {
                    dD(i);
                    i.parentNode.removeChild(i)
                }
            }
            var fm = new aB("onimagechange");
            fm.tile = this.getTileName(fl.info, fk, this.map.config.style);
            fm.action = "hide";
            delete this.mapTiles[fl.name];
            if (!fl.loaded) {
                dD(i);
                fl._callCbks();
                i = null;
                fl.img = null;
                fl.mgr = null
            }
            this.map.dispatchEvent(fm)
        },
        loadTiles: function() {
            var i = this;
            if (x.Browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (fk) {}
            }
            if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                this.zoomsDiv.style.display = "none"
            }
            i.hideDeepZoomDiv();
            i.moveGridTiles()
        },
        getCell: function(fm, fl) {
            var e = this.baseUnits * Math.pow(2, (this.baseZoomLevel - fl));
            var fk = parseInt(fm.lng / e);
            var i = parseInt(fm.lat / e);
            return [fk, i, e * (fk + 0.5), e * (i + 0.5)]
        },
        moveGridTiles: function() {
            var fz = this.map
              , fI = fz.getMapType()
              , fG = this.tileLayers.length;
            var fE = fz.centerPoint;
            if (fI !== BMAP_SATELLITE_MAP) {
                fE = cC.calcLoopCenterPoint(fE)
            }
            var fq = fz.width;
            var fU = fz.getZoomUnits();
            var fF = fU * fq;
            var fK = fE.lng - fF / 2;
            var fv = fE.lng + fF / 2;
            var fy = cC.isAddWidth(fK, fv);
            for (var fM = 0; fM < fG; fM++) {
                var fm = this.tileLayers[fM];
                if (fm.baseLayer || fG == 1) {
                    this.tilesDiv = fm.tilesDiv
                }
                var fA = be[fm.mapType];
                var fl = fz.zoomLevel;
                var fP = fz.getZoomUnits(fz.zoomLevel);
                var fu = fA.baseUnits * Math.pow(2, (fA.zoomLevelBase - fl));
                var fs = Math.floor(fE.lng / fu);
                var fL = Math.floor(fE.lat / fu);
                var fx = fA.tileSize;
                var fB = [fs, fL, (fE.lng - fs * fu) / fu * fx, (fE.lat - fL * fu) / fu * fx];
                var ft = fy ? fz.width / 2 * 1.5 : fz.width / 2;
                var fw = fB[0] - Math.ceil((ft - fB[2]) / fx);
                var fT = fB[1] - Math.ceil((fz.height / 2 - fB[3]) / fx);
                var fN = fB[0] + Math.ceil((ft + fB[2]) / fx);
                var fC = fB[1] + Math.ceil((fz.height / 2 + fB[3]) / fx);
                var fr = [];
                for (var fR = fw; fR < fN; fR++) {
                    for (var fQ = fT; fQ < fC; fQ++) {
                        fr.push([fR, fQ]);
                        var fH = "id_" + fR + "_" + fQ + "_" + fl;
                        fr[fH] = true
                    }
                }
                if (fm.mapType !== BMAP_SATELLITE_MAP) {
                    fr = cC.calcLoopTiles(fr, fl)
                }
                fr.sort((function(i) {
                    return function(fW, fX) {
                        return ((0.4 * Math.abs(fW[0] - i[0]) + 0.6 * Math.abs(fW[1] - i[1])) - (0.4 * Math.abs(fX[0] - i[0]) + 0.6 * Math.abs(fX[1] - i[1])))
                    }
                }
                )([fB[0], fB[1]]));
                var fk = this.mapTiles;
                var e = -fE.lng / fP;
                var fV = fE.lat / fP;
                var fJ = [e, fV];
                for (var fD in fk) {
                    var fo = fk[fD];
                    var fS = fo.info;
                    if (!fS) {
                        continue
                    }
                    var fH = "id_" + fS[0] + "_" + fS[1] + "_" + fS[2];
                    if (!fr[fH]) {
                        this.hideTile(fo, fm)
                    }
                }
                var fn = -fz.offsetX + fz.width / 2;
                var fp = -fz.offsetY + fz.height / 2;
                fm.tilesDiv.style.left = Math.round(e + fn) - fJ[0] + "px";
                fm.tilesDiv.style.top = Math.round(fV + fp) - fJ[1] + "px";
                this.numLoading += fr.length;
                for (var fR = 0, fO = fr.length; fR < fO; fR++) {
                    this.showTile([fr[fR][0], fr[fR][1], fz.zoomLevel], fJ, fm, fR, fz.config.style)
                }
            }
        },
        showTile: function(fo, fn, fr, fw) {
            this.centerPos = fn;
            var fp = be[fr.mapType];
            var fs = this.map.config.style;
            var fl = this.getTileName(fo, fr, fs);
            var fm = (fo[0] * fp.tileSize) + fn[0];
            var fk = (-1 - fo[1]) * fp.tileSize + fn[1];
            var fv = [fm, fk];
            var fq = null;
            if (fr.mapType !== BMAP_SATELLITE_MAP) {
                fq = cC.calcLoopParam(fo[0], fo[2]);
                var fu = fq.offsetX;
                fv[0] += fu;
                fv._offsetX = fu
            }
            var fz = this;
            var fy = this.mapTiles[fl];
            if (fy) {
                fy.img.style.left = fv[0] + "px";
                fy.img.style.top = fv[1] + "px";
                if (fy.loaded) {
                    this._checkTilesLoaded()
                } else {
                    fy._addLoadCbk(function() {
                        fz._checkTilesLoaded()
                    })
                }
                return
            }
            fy = this.bufferTiles[fl];
            if (fy) {
                this.imgNumber++;
                fr.tilesDiv.insertBefore(fy.img, fr.tilesDiv.lastChild);
                this.mapTiles[fl] = fy;
                fy.img.style.left = fv[0] + "px";
                fy.img.style.top = fv[1] + "px";
                if (fy.loaded) {
                    this._checkTilesLoaded()
                } else {
                    fy._addLoadCbk(function() {
                        fz._checkTilesLoaded()
                    })
                }
                var fx = new aB("onimagechange");
                fx.action = "cache";
                fx.tile = this.getTileName(fo, fr, fs);
                this.map.dispatchEvent(fx)
            } else {
                var ft = new cN(fo[0],fo[1]);
                if (fq) {
                    ft.x = fq.col
                }
                var i = fr.getTilesUrl(ft, fo[2]);
                fy = new a5(this,i,fv,fo,fr);
                fy._addLoadCbk(function() {
                    fz._checkTilesLoaded()
                });
                fy._load();
                this.mapTiles[fl] = fy;
                aP(this.map)
            }
        },
        mouseWheel: function(fp) {
            var fo = this.map;
            if (!fo.config.enableWheelZoom) {
                return
            }
            var fq = fo.zoomLevel + (fp.trend === true ? 1 : -1);
            var fm = fo._getProperZoom(fq);
            if (fm.exceeded) {
                var fk = new aB("onzoomexceeded");
                fk.targetZoom = fq;
                fo.dispatchEvent(fk);
                return
            }
            fo.dispatchEvent(new aB("onzoomstart"));
            fo.lastLevel = fo.zoomLevel;
            fo.zoomLevel = fm.zoom;
            var i = fp.pixel;
            var fl = fo.pixelToPointIn(i, {
                zoom: fo.lastLevel
            });
            var fn = fo.getZoomUnits(fo.zoomLevel);
            fo.centerPoint = new e2(fl.lng + fn * (fo.width / 2 - i.x),fl.lat - fn * (fo.height / 2 - i.y));
            this.zoom(i)
        },
        dblClick: function(fk) {
            var i = this.map;
            if (!i.config.enableDblclickZoom) {
                return
            }
            if (i.mapType === "B_EARTH_MAP") {
                return
            }
            if (i.currentOperation === cx.dragging) {
                return
            }
            if (fk.type == "onrightdblclick") {
                i.zoomOut(fk.point)
            } else {
                i.zoomIn(fk.point)
            }
        },
        keypress: function(fk) {
            var i = this.map;
            if (i.getMapType() === BMAP_EARTH_MAP) {
                return
            }
            fk.type == "onpluspress" ? i.zoomIn() : i.zoomOut()
        }
    });
    function bH(fl) {
        this.opts = fl || {};
        this.copyright = this.opts.copyright || {};
        this.transparentPng = this.opts.transparentPng || false;
        this.png8 = this.opts.png8 || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.dataType = this.opts.dataType || 1;
        this.isFlat = this.opts.isFlat === false ? false : true;
        this.showLabel = this.opts.showLabel === false ? false : true;
        var e = this.opts.tileTypeName || "web";
        this.tileType = bF.getInstance(e);
        this.clipTile = this.opts.clipTile || false;
        this._type = "tilelayer";
        var i = d6() ? 128 : 256;
        this.cacheSize = this.opts.cacheSize || i;
        var fk = this;
        this.tileCache = new di(this.cacheSize,{
            clearCallback: function(fm) {
                if (fm.label) {
                    if (fm.label.textImageBitmap) {
                        fm.label.textImageBitmap.close()
                    }
                    if (fm.label.indoorTextImageBitmap) {
                        fm.label.indoorTextImageBitmap.close()
                    }
                }
                fk._removeIndoorData(fm)
            }
        });
        this.scaler = ay() >= 1.5 ? 2 : 1;
        this.normalUdt = ad("ditu", "normal").udt;
        this.numLoading = 0;
        this.useThumbData = false;
        if (this.baseLayer) {
            this.useThumbData = true
        }
        if (typeof this.opts.customLayer === "boolean") {
            this.customLayer = this.opts.customLayer
        } else {
            this.customLayer = true
        }
    }
    bH.inherits(cI, "TileLayer");
    x.extend(bH.prototype, {
        isTransparentPng: function() {
            return this.transparentPng
        },
        getTilesUrl: function(fs, e) {
            var fk = be[this.mapType];
            if (typeof fk != "object") {
                return null
            }
            var fl = fs.x;
            var ft = fs.y;
            if (this.mapType !== BMAP_SATELLITE_MAP) {
                var ft = cC.calcLoopParam(ft, e).col
            }
            var i = "";
            if (this.opts.tileUrlTemplate) {
                i = this.opts.tileUrlTemplate;
                i = i.replace(/\{X\}/, ft);
                i = i.replace(/\{Y\}/, fl);
                i = i.replace(/\{Z\}/, e)
            } else {
                if (this.mapType == BMAP_NORMAL_MAP) {
                    var fr = this.isCanvasMap ? 0 : 1;
                    var fn = fk.tileUrls[Math.abs(ft + fl) % fk.tileUrls.length];
                    if (window.offLineIPAddress) {
                        fn = window.offLineIPAddress + "tile5/"
                    }
                    var fm = this.map.config.style;
                    i = fn + "?qt=vtile&x=" + fl + "&y=" + ft + "&z=" + e + (fm === "default" ? "" : ("&styleId=" + dm.mapStyleNameIdPair[fm])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&showtext=" + fr;
                    i = i.replace(/-(\d+)/gi, "M$1")
                }
                if (this.mapType == BMAP_SATELLITE_MAP) {
                    var fo = ad("ditu", "satellite");
                    var fq = fo.ver;
                    var fp = fo.udt;
                    i = fk.tileUrls[Math.abs(ft + fl) % fk.tileUrls.length] + "u=x=" + fl + ";y=" + ft + ";z=" + e + ";v=" + fq + ";type=sate&fm=46&udt=" + fp;
                    i = i.replace(/-(\d+)/gi, "M$1")
                }
            }
            
            return i
        },
        initialize: function(fm) {
            this.map = fm;
            if (fm._renderType === "webgl") {
                var fl = null;
                if (this.customLayer !== false) {
                    fl = this.getTilesUrl
                }
                x.extend(this, dV);
                this.labelProcessor = new b4(this);
                this.callbackDataQueue = [];
                if (fl) {
                    this.getTilesUrl = fl
                }
                var e = this;
                fm.on("indoor_data_refresh", function(fn) {
                    if (!e.baseLayer) {
                        return
                    }
                    e._refreshIndoorData(fn.uid, fn.floor)
                });
                fm.on("custom_labels_ready", function(fn) {
                    if (!e.baseLayer) {
                        return
                    }
                    e._doWorkAfterLabelImageLoad(fn.virtualTile, fn.labelCanvas, null, fn.imgKey)
                });
                fm.on("glmoduleloaded", function() {
                    if (!e.baseLayer) {
                        return
                    }
                    e.updateAllIconsTextureCoords()
                })
            }
            if (!fm.temp.layerZIndex) {
                fm.temp.layerZIndex = 0
            }
            this.zIndex = this.zIndex || 0;
            if (this.baseLayer) {
                this.zIndex = 0
            }
            if (!fm.temp.layid) {
                fm.temp.layid = 0
            }
            if (!this.opts.mapType) {
                this.mapType = "BMAP_CUSTOM_LAYER_" + fm.temp.layid;
                fm.temp.layid++
            } else {
                this.mapType = this.opts.mapType
            }
            var i = be[this.mapType];
            if (!i) {
                be[this.mapType] = {
                    tileUrls: [],
                    tileSize: 256,
                    baseUnits: 256,
                    zoomLevelMin: 1,
                    zoomLevelMax: 19,
                    minZoom: 3,
                    maxZoom: 19,
                    minDataZoom: 3,
                    maxDataZoom: 19,
                    zoomLevelBase: 18,
                    errorUrl: dm.imgPath + "/blank.gif",
                    bounds: new cv(new e2(-21364736,-10616832),new e2(23855104,15859712)),
                    imgExtend: "png"
                }
            }
            if (fm._renderType !== "webgl") {
                var fk = cp(fm.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
                fk.style.display = "";
                fk.style.left = Math.ceil(-fm.offsetX + fm.width / 2) + "px";
                fk.style.top = Math.ceil(-fm.offsetY + fm.height / 2) + "px";
                this.tilesDiv = fk
            }
            this.isCanvasMap = fm.isCanvasMap();
            this.lastZoom = fm.getZoom()
        },
        remove: function() {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        getCopyright: function() {
            return this.copyright
        },
        getMapType: function() {
            return this.mapType
        },
        setZIndex: function(e) {
            this.zIndex = e;
            if (this.tilesDiv) {
                this.tilesDiv.style.zIndex = e
            }
        }
    });
    function bS(i, e, fk) {
        this.bounds = i;
        this.content = e;
        this.mapType = fk
    }
    bS.inherits(cI, "Copyright");
    var ek = {
        get: function(e) {
            if (!ek.singleton) {
                ek.singleton = new R(e)
            }
            return ek.singleton
        }
    };
    function R(i) {
        this._map = i;
        this._tileMgr = i.tileMgr;
        this._animationDiv = null;
        this._preAnimationDiv = null;
        this._animation = null;
        this._baseLayerDiv = null;
        this._transformStyleName = aA.ifSupportCSS3("transform", true);
        this._transformOriginStyleName = aA.ifSupportCSS3("transformOrigin", true);
        this._preZoomTimes = 1;
        this._preRenderTick = 1;
        this._enableCanvas2dMap = !!(i.getRenderType() === "canvas");
        this._isIE9 = !!(x.Browser.ie === 9);
        var e = this;
        i.addEventListener("maptypechange", function() {
            e.hide()
        });
        i.addEventListener("load", function() {
            e.hide()
        })
    }
    x.extend(R.prototype, {
        prepareLayer: function() {
            var fl = this._map;
            var e = this._tileMgr;
            this._canvas2dMapMgr = fl.canvas2dMapMgr;
            var fk = this._baseLayerDiv = e.tilesDiv;
            if (!this._animationDiv) {
                var i = this._preAnimationDiv;
                if (i) {
                    i.parentNode && i.parentNode.removeChild(i);
                    this._preAnimationDiv = null
                }
                this._preAnimationDiv = this._animationDiv = fk.cloneNode(true);
                fl.platform.insertBefore(this._animationDiv, fl.platform.firstChild)
            }
            this.show()
        },
        prepareAniParam: function() {
            var fl = this._animationDiv;
            if (!fl) {
                return
            }
            var e = fl.children.length;
            var fk;
            this._zoomAniInfo = [];
            for (var fm = e - 1; fm > -1; fm--) {
                var fn = {};
                fk = fl.children[fm].style;
                fn.top = parseInt(fk.top, 10);
                fn.left = parseInt(fk.left, 10);
                this._zoomAniInfo[fm] = fn
            }
        },
        prepareLabelLayer: function() {
            var fm = this._map;
            if (this._enableCanvas2dMap && fm.canvas2dMapMgr) {
                if (this.touchZoomLabelCanvas) {
                    this.touchZoomLabelCanvas.parentNode.removeChild(this.touchZoomLabelCanvas)
                }
                var i = fm.canvas2dMapMgr._labelCanvas;
                this.touchZoomLabelCanvas = i.cloneNode(false);
                var e = this.touchZoomLabelCanvas.getContext("2d");
                e.drawImage(i, 0, 0);
                fm.platform.insertBefore(this.touchZoomLabelCanvas, fm.platform.firstChild);
                var fl = parseInt(i.style.left, 10);
                var fk = parseInt(i.style.top, 10);
                this.touchZoomLabelCanvas.style.zIndex = 9;
                this.touchZoomLabelCanvas.style[this._transformOriginStyleName] = (this._fixPosition.x - (fm.offsetX + fl)) + "px " + (this._fixPosition.y - (fm.offsetY + fk)) + "px";
                i.style.visibility = "hidden"
            }
        },
        show: function() {
            if (this._animationDiv) {
                this._animationDiv.style.visibility = ""
            }
        },
        showLabel: function() {
            var i = this._map;
            if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
                var e = i.canvas2dMapMgr._labelCanvas;
                if (e) {
                    e.style.visibility = ""
                }
                if (this.touchZoomLabelCanvas) {
                    this.touchZoomLabelCanvas.style.zIndex = -2;
                    this.touchZoomLabelCanvas.style.visibility = "hidden"
                }
            }
        },
        hide: function() {
            if (this._animationDiv) {
                this._animationDiv.style.visibility = "hidden"
            }
            if (this._preAnimationDiv) {
                this._preAnimationDiv.style.visibility = "hidden"
            }
        },
        hideNonAnimationLayers: function() {
            var fl = this._map;
            if (fl.getRenderType() === "dom") {
                if (fl.overlayDiv) {
                    fl.overlayDiv.style.visibility = "hidden"
                }
                if (fl.overlayDivEx) {
                    fl.overlayDivEx.style.visibility = "hidden"
                }
            }
            var fn = fl.tileMgr.tileLayers;
            var fm;
            for (var fk = 0, e = fn.length; fk < e; fk++) {
                fm = fn[fk];
                fm.tilesDiv.style.visibility = "hidden"
            }
        },
        showNonAnimationLayers: function() {
            var fl = this._map;
            if (fl.getRenderType() === "dom") {
                if (fl.overlayDiv) {
                    fl.overlayDiv.style.visibility = ""
                }
                if (fl.overlayDivEx) {
                    fl.overlayDivEx.style.visibility = ""
                }
            }
            var fn = fl.tileMgr.tileLayers;
            var fm;
            for (var fk = 0, e = fn.length; fk < e; fk++) {
                fm = fn[fk];
                fm.tilesDiv.style.visibility = ""
            }
        },
        setFixPosition: function(e) {
            this._fixPosition = e
        },
        setZoom: function(e, fr) {
            var fo = this._fixPosition;
            var fx = this._map;
            var fy = this._baseLayerDiv;
            var fp = {
                x: fo.x - parseInt(fy.style.left, 10) - fx.offsetX,
                y: fo.y - parseInt(fy.style.top, 10) - fx.offsetY
            };
            var fl = this._animationDiv;
            if (!fl) {
                return
            }
            var fv = fl.children.length;
            var ft;
            var fw = this._transformStyleName;
            var fn = this._transformOriginStyleName;
            var fz = this;
            var fB;
            var fq;
            for (var fu = fv - 1; fu > -1; fu--) {
                var fs = this._zoomAniInfo[fu];
                ft = fl.children[fu].style;
                var fm = fs.left - fp.x;
                var fk = fs.top - fp.y;
                fs.dx = fm * e - fm;
                fs.dy = fk * e - fk;
                fs.preDx = fm - fm;
                fs.preDy = fk - fk;
                fB = fs.preDx + (fs.dx - fs.preDx);
                fq = fs.preDy + (fs.dy - fs.preDy) + fr;
                ft.left = fs.left + fB + "px";
                ft.top = fs.top + fq + "px";
                ft.width = ft.height = 256 * e + "px"
            }
            if (this._enableCanvas2dMap) {
                var fA = !fz._isIE9 ? "translate3d(0px, " + fr + "px, 0) scale(" + e + ")" : "translate(0px, " + fr + "px) scale(" + e + ")";
                this.touchZoomLabelCanvas.style[fw] = fA
            }
        },
        setZoomFinish: function() {
            this._animationDiv = null
        },
        startAnimation: function(fo) {
            this.prepareLayer();
            this.hideNonAnimationLayers();
            var fH = this._map;
            if (this.touchZoomLabelCanvas) {
                this.touchZoomLabelCanvas.style.display = "none"
            }
            fo = fo || {};
            var fF = fo.zoomCount || 0;
            var ft = fo.fixPosition;
            var fD = fo.fixMCPosition;
            var fr = fo.pixOffset;
            this._zoomCount = fF;
            var fl = fH.getZoom();
            var fG = fl + fF;
            var e = fH.config.enableContinuousZoom;
            var fx = 0.5;
            var fs = 5;
            var fk = Math.pow(2, fF);
            var fJ = this._baseLayerDiv;
            var fu = {
                x: ft.x - parseInt(fJ.style.left, 10) - fH.offsetX,
                y: ft.y - parseInt(fJ.style.top, 10) - fH.offsetY
            };
            var fp = this._animationDiv;
            var fB = fp.children.length;
            var fL = this._preZoomTimes;
            var fE = [];
            var fC = this._transformStyleName;
            var fq = this._transformOriginStyleName;
            for (var fA = fB - 1; fA > -1; fA--) {
                var fy = {};
                var fz = fp.children[fA].style;
                fy.top = parseInt(fz.top, 10);
                fy.left = parseInt(fz.left, 10);
                var fn = fy.left - fu.x;
                var fm = fy.top - fu.y;
                fy.dx = fn * fk - fn;
                fy.dy = fm * fk - fm;
                fy.preDx = fn * fL - fn;
                fy.preDy = fm * fL - fm;
                fE[fA] = fy
            }
            var fI = this;
            var fw;
            var fK;
            var fv;
            this._zoomAni = new l({
                fps: 60,
                duration: e ? 500 : 1,
                transition: function(i) {
                    i = i * fs / (2 * fx);
                    return fs * i - fx * i * i
                },
                render: function(fU) {
                    fU = fU * (4 * fx) / (fs * fs);
                    fw = fL + fU * (fk - fL);
                    var fN = fl + c0(fw);
                    var fS = null;
                    var fR = 0;
                    var fV = 0;
                    if (fo.onAnimationBeforeLooping) {
                        var fW = fo.onAnimationBeforeLooping(fU, fN);
                        fS = fW.loopingCenter;
                        fR = fW.yDiff;
                        fV = fW.totalYDiff
                    }
                    for (var fO = fE.length - 1; fO > -1; fO--) {
                        var fP = fE[fO];
                        if (fp.children[fO]) {
                            var fT = fp.children[fO].style;
                            fK = fP.preDx + (fP.dx - fP.preDx) * fU - fr.width * fU;
                            fv = fP.preDy + (fP.dy - fP.preDy) * fU - fr.height * fU + fR;
                            fT.left = fP.left + fK + "px";
                            fT.top = fP.top + fv + "px";
                            fT.height = fT.width = 256 * fw + "px"
                        }
                    }
                    var fM = fr.width * fU;
                    var fQ = fr.height * fU;
                    if (fH.isRestrict) {
                        fI._enableCanvas2dMap && fI._canvas2dMapMgr.clearLabel()
                    } else {
                        fI._enableCanvas2dMap && fI._canvas2dMapMgr.drawLabel(fw, ft, fl, fG, fF, fU, fM, fQ, fV, fR)
                    }
                    fI._preZoomTimes = fw;
                    fI._preRenderTick = fU;
                    fo.onAnimationLooping && fo.onAnimationLooping(fU, fN, fS)
                },
                finish: function() {
                    fI._preZoomTimes = 1;
                    fI._zoomAni = null;
                    fI._animationDiv = null;
                    fo.onAnimationFinish && fo.onAnimationFinish();
                    fI.showNonAnimationLayers()
                }
            });
            return this._zoomAni
        },
        stopAnimation: function() {
            if (this._zoomAni) {
                this._zoomAni.stop();
                this._zoomAni = null
            }
        }
    });
    function c(e) {
        this._initVars(e);
        this._initColorCanvas();
        this._bindEvent(e)
    }
    x.extend(c.prototype, {
        _initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this._labelCtx = e._labelCtx;
            this.ratio = this._map.config.ratio;
            this.sizeRatio = this.ratio > 1 ? 2 : 1;
            this.RANK1 = 1000000;
            this.RANK2 = 2000000;
            this.RANK3 = 3000000;
            this.RANK4 = 4000000;
            this.RANK5 = 5000000
        },
        _initColorCanvas: function() {
            var i = 256
              , fk = H("canvas")
              , e = fk.style;
            e.width = i + "px";
            e.height = i + "px";
            fk.width = i;
            fk.height = i;
            this._colorCvsSize = i;
            this._colorCvs = fk;
            this._colorCtx = fk.getContext("2d")
        },
        getLabelImageData: function(fy) {
            var fx = fy.textImg;
            var fk = fy.textPos;
            var fv = this.ratio;
            var ft = this.sizeRatio / fv;
            var fm = this._colorCtx;
            var fq = this._colorCvsSize;
            fm.clearRect(0, 0, fq, fq);
            var fs = 0;
            var e = 0;
            var fp = 0;
            for (var fr = 0; fr < fk.length; fr++) {
                if (fk[fr].width > fs) {
                    fs = fk[fr].width;
                    e = fr;
                    fp = fk[fr].drawX
                }
            }
            fs /= ft;
            var fu = 0;
            for (var fr = 0, fo = fk.length; fr < fo; fr++) {
                var fw = fk[fr];
                var fz;
                if (fr === e) {
                    fz = 0
                } else {
                    fz = fw.drawX - fp
                }
                fm.drawImage(fx, fw.srcX, fw.srcY, fw.width, fw.height, fz, fu, fw.width / ft, fw.height / ft);
                if (fw.width / ft > fs) {
                    fs = fw.width / ft
                }
                fu += fw.height / ft + 2 * fv
            }
            var fl = fm.getImageData(0, 0, fs, fu);
            var fn = fm.getImageData(0, 0, fs, fu);
            return [fl, fn]
        },
        _bindEvent: function(i) {
            var e = this
              , fk = i._map;
            fk.addEventListener("onspotmouseover", function(fo) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (fo.spots.length > 0) {
                    var fn = fo.spots[0].userdata.uid;
                    var fm = fo.spots[0].userdata.name;
                    var fl = e.findLabelByUid(fn, fm);
                    fl && e._toHighLightColor(fl)
                }
            });
            fk.addEventListener("onspotmouseout", function(fo) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (fo.spots.length > 0) {
                    var fn = fo.spots[0].userdata.uid;
                    var fm = fo.spots[0].userdata.name;
                    var fl = e.findLabelByUid(fn, fm);
                    fl && e._toDefaultColor(fl)
                }
            });
            fk.addEventListener("onspotclick", function(fo) {
                if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
                    return
                }
                if (fo.spots && fo.spots.length > 0) {
                    var fn = fo.spots[0].userdata.uid;
                    var fm = fo.spots[0].userdata.name;
                    var fl = e.findLabelByUid(fn, fm);
                    fl && e._changeBaseMapState(fl)
                } else {
                    e._recoverNormalState()
                }
            });
            fk.on("spot_status_reset", function() {
                e._recoverNormalState()
            });
            fk.on("spot_highlight", function(fm) {
                var fl = e.findLabelByUid(fm.uid);
                fl && e._changeBaseMapState(fl)
            })
        },
        _getTextBound: function(fw) {
            if (!fw.textPos) {
                return null
            }
            var fu = this.ratio;
            var fs = this.sizeRatio / fu;
            var fk = fw.textPos;
            var fv = fw.baseDrawX;
            var ft = fw.baseDrawY;
            var fq = fv * fu + (fk[0].drawX - fv) / fs;
            var fo = ft * fu + (fk[0].drawY - ft) / fs;
            var fm = fq + fk[0].width / fs;
            var e = fo + fk[0].height / fs;
            for (var fr = 0, fp = fk.length; fr < fp; fr++) {
                var fx = fk[fr];
                var fn = fv * fu + (fx.drawX - fv) / fs;
                if (fn < fq) {
                    fq = fn
                }
                var fl = ft * fu + (fx.drawY - ft) / fs;
                if (fl < fo) {
                    fo = fl
                }
                if (fn + fx.width > fm) {
                    fm = fn + fx.width
                }
                if (fl + fx.height > e) {
                    e = fl + fx.height
                }
            }
            return [fq, fo, fm, e]
        },
        _toHighLightColor: function(fk) {
            if (fk._tempRank && fk._tempRank == this.RANK5) {
                return
            }
            var fp = this._getTextBound(fk);
            if (!fp) {
                return
            }
            var fl = Math.round(fp[0]);
            var i = Math.round(fp[1]);
            var e = this.getLabelImageData(fk);
            var fn = e[0];
            var fm = e[1];
            var fo = this._canvas2dMapMgr.getFilterImageData(fn, this.RANK5);
            fk._oldImgData = fm;
            this._labelCtx.putImageData(fo, fl, i)
        },
        _toDefaultColor: function(e) {
            if (e._tempRank && e._tempRank == this.RANK5) {
                return
            }
            if (e._oldImgData) {
                var i = this.sizeRatio;
                var fk = this._getTextBound(e);
                if (!fk) {
                    return
                }
                this._labelCtx.putImageData(e._oldImgData, Math.round(fk[0]), Math.round(fk[1]));
                e._oldImgData = null
            }
        },
        _changeBaseMapState: function(fl) {
            var fk = this._canvas2dMapMgr;
            var i = fl.guid;
            var e = fl.guidExt;
            var fm = {
                guid: i,
                name: fl.name,
                guidExt: e
            };
            fk._labelStrategy.setStrategyInfo(fm);
            fk._loadData()
        },
        _recoverNormalState: function() {
            var e = this._canvas2dMapMgr;
            e._labelStrategy.setStrategyInfo(null);
            e._loadData()
        },
        findLabelByUid: function(fn, fl) {
            var fp = this._canvas2dMapMgr
              , e = fp._computedLabel;
            for (var fm = 0, fk = e.length; fm < fk; fm++) {
                var fo = e[fm];
                if (!fp.isClickableLabel(fo)) {
                    continue
                }
                if (fn && fo.guid === fn) {
                    return fo
                }
                if (fl && fo.name === fl) {
                    return fo
                }
            }
            return null
        }
    });
    function cH(e) {
        this._initVars(e)
    }
    x.extend(cH.prototype, {
        _initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this.ratio = this._map.config.ratio;
            this._strategyInfo = null;
            this.RANK1 = 1000000;
            this.RANK2 = 2000000;
            this.RANK3 = 3000000;
            this.RANK4 = 4000000;
            this.RANK5 = 5000000
        },
        setStrategyInfo: function(e) {
            this._strategyInfo = e
        },
        preComputeLabel: function(fr, gi, f1, fD, gc, gw) {
            var fV = []
              , fz = fr._centerX
              , fx = fr._centerY
              , gx = fD * gc;
            var f7 = this.ratio;
            var fq = this._map.getZoom();
            var fQ = 0;
            if (fq === 5) {
                fQ = 4
            }
            if (fq === 8) {
                fQ = -6
            }
            fr.sort(function(gy, i) {
                if (gy.x * gy.y < i.x * i.y) {
                    return -1
                } else {
                    return 1
                }
            });
            for (var fS = 0, fO = fr.length; fS < fO; fS++) {
                var gn = fr[fS]
                  , fJ = gn.x
                  , fG = gn.y
                  , fE = gn.z;
                var fL = cC.calcLoopParam(fJ, fE).offsetX;
                var f5 = fJ * gx
                  , f4 = (fG + 1) * gx
                  , fl = (f5 - fz) / fD + gi / 2 + fL
                  , fk = (fx - f4) / fD + f1 / 2;
                for (var fP = 0, gr = gn.length; fP < gr; fP++) {
                    var ft = gn[fP]
                      , fA = undefined
                      , fy = undefined
                      , gp = undefined
                      , go = undefined;
                    var ge = ft.baseDrawX = fl + ft.baseX;
                    var gd = ft.baseDrawY = fk + ft.baseY;
                    if (ft.type == "fixed") {
                        var fZ = ft.iconPos
                          , fC = ft.textPos
                          , gt = ft.textImg;
                        if (fZ) {
                            fZ.drawX = fl + fZ.destX;
                            fZ.drawY = fk + fZ.destY;
                            fA = fZ.drawX;
                            fy = fZ.drawY;
                            gp = fZ.drawX + fZ.width;
                            go = fZ.drawY + fZ.height
                        }
                        if (fC && gt) {
                            for (var gf = 0; gf < fC.length; gf++) {
                                var gs = fC[gf];
                                gs.drawX = fl + gs.destX;
                                gs.drawY = fk + gs.destY;
                                if (!fA) {
                                    fA = gs.drawX;
                                    fy = gs.drawY;
                                    gp = gs.drawX + gs.width;
                                    go = gs.drawY + gs.height
                                } else {
                                    if (gs.drawX < fA) {
                                        fA = gs.drawX
                                    }
                                    if (gs.drawY < fy) {
                                        fy = gs.drawY
                                    }
                                    if (gs.drawX + gs.width > gp) {
                                        gp = gs.drawX + gs.width
                                    }
                                    if (gs.drawY + gs.height > go) {
                                        go = gs.drawY + gs.height
                                    }
                                }
                            }
                        }
                    } else {
                        ft.tileX = fl;
                        ft.tileY = fk;
                        fA = fl + ft.minXOriginal;
                        fy = fk + ft.minYOriginal;
                        gp = fl + ft.maxXOriginal;
                        go = fk + ft.maxYOriginal
                    }
                    if (fA != undefined) {
                        var gh = ge + (fA - ge) / f7;
                        var gg = gd + (fy - gd) / f7;
                        var fT = ge + (gp - ge) / f7;
                        var fR = gd + (go - gd) / f7;
                        ft.minX = gh;
                        ft.minY = gg;
                        ft.maxX = fT;
                        ft.maxY = fR;
                        var gl = (gh + fT) / 2
                          , gk = (gg + fR) / 2
                          , f2 = fz + (gl - gi / 2) * fD
                          , f0 = fx + (f1 / 2 - gk) * fD;
                        ft.geoX = f2;
                        ft.geoY = f0;
                        fV.push(ft)
                    }
                }
            }
            if (gw) {
                for (var fS = 0, fO = gw.length; fS < fO; fS++) {
                    var fN = gw[fS];
                    var ga = fN[0];
                    var fu = fN[1];
                    var fZ = ga.iconPos;
                    var fo = fZ.geoX;
                    var fm = fZ.geoY;
                    var ge = (fo - fz) / fD + gi / 2;
                    var gd = (fx - fm) / fD + f1 / 2;
                    var fA = ge + fZ.destX;
                    var fy = gd + fZ.destY;
                    var gp = fA + fZ.width;
                    var go = fy + fZ.height;
                    ga.textPos = ga.textPos || ga._textPos;
                    var fC = ga.textPos;
                    var gj = fC[0];
                    var fI = ge + gj.destX;
                    var fw = gd + gj.destY;
                    if (fw < fy) {
                        fy = fw
                    }
                    if (fI + gj.width > gp) {
                        gp = fI + gj.width
                    }
                    if (fw + gj.height > go) {
                        go = fw + gj.height
                    }
                    if (fC.length === 2) {
                        var fH = fC[1];
                        var fF = ge + fH.destX;
                        var fv = gd + fH.destY;
                        if (fv < fy) {
                            fy = fv
                        }
                        if (fF + fH.width > gp) {
                            gp = fF + fH.width
                        }
                        if (fv + fH.height > go) {
                            go = fv + fH.height
                        }
                    }
                    ga._tempBounds = [fA, fy, gp, go];
                    var fZ = fu.iconPos;
                    var fo = fZ.geoX;
                    var fm = fZ.geoY;
                    var ge = (fo - fz) / fD + gi / 2;
                    var gd = (fx - fm) / fD + f1 / 2;
                    var fA = ge + fZ.destX;
                    var fy = gd + fZ.destY;
                    var gp = fA + fZ.width;
                    var go = fy + fZ.height;
                    fu.textPos = fu.textPos || fu._textPos;
                    var fC = fu.textPos;
                    var gj = fC[0];
                    var fI = ge + gj.destX;
                    var fw = gd + gj.destY;
                    if (fI < fA) {
                        fA = fI
                    }
                    if (fw < fy) {
                        fy = fw
                    }
                    if (fw + gj.height > go) {
                        go = fw + gj.height
                    }
                    if (fC.length === 2) {
                        var fH = fC[1];
                        var fF = ge + fH.destX;
                        var fv = gd + fH.destY;
                        if (fF < fA) {
                            fA = fF
                        }
                        if (fv < fy) {
                            fy = fv
                        }
                        if (fv + fH.height > go) {
                            go = fv + fH.height
                        }
                    }
                    fu._tempBounds = [fA, fy, gp, go]
                }
                for (var fS = 0, fO = gw.length; fS < fO; fS++) {
                    var fN = gw[fS];
                    var ga = fN[0];
                    var fu = fN[1];
                    if (fS === 0 && fu.textPos) {
                        fu._textPos = fu.textPos;
                        delete fu.textPos
                    }
                    var gm = ga;
                    if (!ga.textPos && fu.textPos) {
                        gm = fu
                    }
                    var gq = gm._tempBounds;
                    for (fP = fS + 1; fP < fO; fP++) {
                        var fM = gw[fP];
                        var fW = fM[0];
                        var gv = fM[1];
                        var fB = 0;
                        var gu = fW._tempBounds;
                        if (!(gq[2] < gu[0] || gq[0] > gu[2] || gq[3] < gu[1] || gq[1] > gu[3])) {
                            fB++;
                            if (fW.textPos) {
                                fW._textPos = fW.textPos;
                                delete fW.textPos
                            }
                        }
                        var gu = gv._tempBounds;
                        if (!(gq[2] < gu[0] || gq[0] > gu[2] || gq[3] < gu[1] || gq[1] > gu[3])) {
                            fB++;
                            if (gv.textPos) {
                                gv._textPos = gv.textPos;
                                delete gv.textPos
                            }
                        }
                        if (fB >= 2) {
                            if (gm.textPos) {
                                gm._textPos = gm.textPos;
                                delete gm.textPos
                            }
                        }
                    }
                }
                for (var fS = 0, fO = gw.length; fS < fO; fS++) {
                    var fN = gw[fS];
                    var ga = fN[0];
                    var fu = fN[1];
                    var fX = ga;
                    if (!ga.textPos && fu.textPos) {
                        fX = fu
                    }
                    var fZ = fX.iconPos;
                    var fo = fZ.geoX;
                    var fm = fZ.geoY;
                    var ge = fX.baseDrawX = (fo - fz) / fD + gi / 2;
                    var gd = fX.baseDrawY = (fx - fm) / fD + f1 / 2;
                    fZ.drawX = ge + fZ.destX;
                    fZ.drawY = gd + fZ.destY;
                    var fA = fZ.drawX;
                    var fy = fZ.drawY;
                    var gp = fZ.drawX + fZ.width;
                    var go = fZ.drawY + fZ.height;
                    var fC = fX.textPos;
                    if (fC) {
                        var gj = fC[0];
                        gj.drawX = ge + gj.destX;
                        gj.drawY = gd + gj.destY;
                        if (gj.drawX < fA) {
                            fA = gj.drawX
                        }
                        if (gj.drawY < fy) {
                            fy = gj.drawY
                        }
                        if (gj.drawX + gj.width > gp) {
                            gp = gj.drawX + gj.width
                        }
                        if (gj.drawY + gj.height > go) {
                            go = gj.drawY + gj.height
                        }
                        if (fC.length === 2) {
                            var fH = fC[1];
                            fH.drawX = ge + fH.destX;
                            fH.drawY = gd + fH.destY;
                            if (fH.drawX < fA) {
                                fA = fH.drawX
                            }
                            if (fH.drawY < fy) {
                                fy = fH.drawY
                            }
                            if (fH.drawX + fH.width > gp) {
                                gp = fH.drawX + fH.width
                            }
                            if (fH.drawY + fH.height > go) {
                                go = fH.drawY + fH.height
                            }
                        }
                    }
                    var gh = ge + (fA - ge) / f7;
                    var gg = gd + (fy - gd) / f7;
                    var fT = ge + (gp - ge) / f7;
                    var fR = gd + (go - gd) / f7;
                    fX.minX = gh;
                    fX.minY = gg;
                    fX.maxX = fT;
                    fX.maxY = fR;
                    var f9 = (gh + fT) / 2;
                    var f8 = (gg + fR) / 2;
                    var fp = fz + (f9 - gi / 2) * fD;
                    var fn = fx + (f1 / 2 - f8) * fD;
                    fX.geoX = fp;
                    fX.geoY = fn;
                    fV.push(fX)
                }
            }
            var gb = this._strategyInfo;
            if (gb) {
                var fU = gb.guid;
                var f3 = gb.name;
                var fK = gb.guidExt;
                for (var fS = 0, fO = fV.length; fS < fO; fS++) {
                    var fs = fV[fS];
                    delete fs._tempRank;
                    if (!this._canvas2dMapMgr.isClickableLabel(fs) || (fK === 1 && !fs.guidExt)) {
                        continue
                    }
                    if ((fU && fU === fs.guid) || (f3 && f3 === fs.name)) {
                        fs._tempRank = this.RANK5
                    }
                }
            } else {
                for (var fS = 0, fO = fV.length; fS < fO; fS++) {
                    var fs = fV[fS];
                    if (fs.type == "line" || !fs.iconPos) {
                        continue
                    }
                    delete fs._tempRank
                }
            }
            fV.sort(function(gz, gy) {
                var gA = gz._tempRank ? gz._tempRank : gz.rank
                  , i = gy._tempRank ? gy._tempRank : gy.rank;
                if (gA === i) {
                    return gz.baseX - gy.baseX
                }
                return i - gA
            });
            for (var fS = 0, fO = fV.length; fS < fO; fS++) {
                var gm = fV[fS];
                gm.isDel = false;
                gm.isFadeout = false;
                gm._schedule = 0;
                gm._isIgnore = false;
                gm.arrIntersectIndex = [];
                for (fP = fS + 1; fP < fO; fP++) {
                    var fY = fV[fP];
                    if (!(gm.maxX - fQ < fY.minX || gm.minX > fY.maxX - fQ || gm.maxY - fQ < fY.minY || gm.minY > fY.maxY - fQ)) {
                        gm.arrIntersectIndex.push(fP)
                    }
                }
            }
            for (var fS = 0, fO = fV.length; fS < fO; fS++) {
                var fs = fV[fS];
                if (fs.isDel == false) {
                    var e = fs.arrIntersectIndex;
                    for (var fP = 0, gr = e.length; fP < gr; fP++) {
                        var f6 = fV[e[fP]];
                        f6.isDel = true;
                        if (f6.guidExt === 1) {
                            f6.isDel = false
                        }
                    }
                }
            }
            return fV
        }
    });
    function Q(e) {
        this._map = e;
        this._initCanvas();
        this._initVars();
        this._bindEvent();
        this._tileType = bF.getInstance("na")
    }
    aI.register(function(i) {
        if (i.getRenderType() === "canvas") {
            var e = i.config.style;
            if (aI["FeatureStyle" + e]) {
                i.canvas2dMapMgr = new Q(i)
            } else {
                i.loadMapStyleFiles(function() {
                    i.canvas2dMapMgr = new Q(i);
                    i.canvas2dMapMgr._loadData()
                })
            }
        }
    });
    x.extend(Q.prototype, {
        _initCanvas: function() {
            var fo = this._map
              , fm = fo.getSize()
              , fl = fm.width
              , i = fm.height
              , e = fo.platform
              , fp = H("canvas")
              , fn = fp.style;
            var fk = this.ratio = fo.config.ratio;
            this._width = fl;
            this._height = i;
            fn.cssText = "position: absolute;left:0;top:0;width:" + fl + "px;height:" + i + "px;z-index:100;";
            fp.width = fl * fk;
            fp.height = i * fk;
            this._labelCanvas = fp;
            this._labelCtx = fp.getContext("2d");
            e.appendChild(fp)
        },
        _initVars: function() {
            var e = ad("ditu", "normal");
            this._udt = e.udt;
            this._version = e.ver;
            this._labelDataUrls = be.B_NORMAL_MAP.vectorTileUrls;
            this._style = aI["FeatureStyle" + this._map.config.style];
            this._labelCount = 0;
            this._vectorDrawLib = new ar(this);
            this._cache = {
                maxNum: 500,
                delNum: 50,
                arrCache: []
            };
            this._computedLabel = null;
            this._spotData = null;
            this._labelStrategy = new cH(this);
            this._labelClick = new c(this);
            this._biz = new eC(this);
            this._map.temp.isPermitSpotOver = true;
            this.labelStyleParam = "pl";
            if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
                this.labelStyleParam = "sl"
            }
            this.statRequestCount = 0;
            this.statResponseCount = 0
        },
        _resizeHandler: function(fn) {
            var fp = this
              , i = fp._map
              , fm = i.getSize()
              , fk = fm.width
              , fr = fm.height;
            var fo = this.ratio;
            var fs = this._labelCanvas
              , fl = fs.style;
            fl.width = fk + "px";
            fl.height = fr + "px";
            fs.width = fk * fo;
            fs.height = fr * fo;
            fp._width = fk;
            fp._height = fr;
            var fq = true;
            fp._loadData(fq)
        },
        _bindEvent: function() {
            var e = this
              , i = e._map;
            i.addEventListener("load", function(fk) {
                e.clearLabel();
                e._loadData()
            });
            i.addEventListener("zoomend", function(fk) {
                if (!fk.notClearLabel) {
                    e.clearLabel()
                }
                e._loadData()
            });
            i.addEventListener("moveend", function(fk) {
                e._loadData()
            });
            i.addEventListener("resize", function(fk) {
                e._resizeHandler(fk)
            });
            i.addEventListener("maptypechange", function(fk) {
                if (fk.mapType === BMAP_EARTH_MAP) {
                    e.hideLabelCanvas()
                } else {
                    e.showLabelCanvas();
                    if (fk.mapType === BMAP_NORMAL_MAP) {
                        e.labelStyleParam = "pl"
                    } else {
                        if (fk.mapType === BMAP_SATELLITE_MAP) {
                            e.labelStyleParam = "sl"
                        }
                    }
                    e._loadData()
                }
            });
            i.addEventListener("streetlayer_show", function(fk) {
                if (this.isCanvasMap()) {
                    e.showLabelCanvas()
                }
            });
            i.addEventListener("streetlayer_hide", function(fk) {
                if (this.isCanvasMap()) {
                    e.hideLabelCanvas()
                }
            });
            i.addEventListener("loadbizdata", function(fl) {
                var fk = fl.data;
                e._biz.proecessBizData(fk, function() {
                    e.updateLabel()
                })
            });
            i.addEventListener("unloadbizdata", function(fk) {
                e._biz.clearBizData();
                e.updateLabel()
            });
            e.isDrawText = false;
            setTimeout(function() {
                if (!e.isDrawText) {
                    i.dispatchEvent(new aB("onmapwhitescreen"))
                }
            }, 10000)
        },
        getStyle: function() {
            return this._style
        },
        _getZoomUnits: function(e) {
            return Math.pow(2, 18 - e)
        },
        _createCacheForm: function(fk, fp, fo, i) {
            var fn = this;
            var e = fn._cache;
            var fl = e.arrCache;
            var fq = this._getLabelId(fk, fp, fo, i);
            var fm = {
                id: fq,
                updateLabelCounter: 0
            };
            fl.push(fm);
            fl[fq] = fm;
            return fm
        },
        _getLabelId: function(i, fl, fk, e) {
            return "_" + i + "_" + fl + "_" + fk + "_" + e + "_" + this.labelStyleParam
        },
        _getCache: function(i, fl, fk, e) {
            return this._cache.arrCache[this._getLabelId(i, fl, fk, e)]
        },
        _setCacheValue: function(fm, fz, fx, fl, fs) {
            var fu = this;
            var e = fu._cache;
            var fo = e.arrCache;
            var fq = e.maxNum;
            var fn = e.delNum;
            var fy = this._getLabelId(fm, fz, fx, fl);
            var ft = fo[fy];
            if (fs) {
                ft.lb = fs
            }
            if (fo.length > fq) {
                var fk = fo.splice(0, fn);
                for (var fr = 0, fp = fk.length; fr < fp; fr++) {
                    var fv = fk[fr]
                      , fw = fv.id;
                    if (fo[fw].lb) {
                        fo[fw].lb = null
                    }
                    fo[fw] = null;
                    delete fo[fw]
                }
                fk = null
            }
        },
        _loadData: function(fx) {
            var fQ = this._map;
            if (!fQ.isCanvasMap()) {
                return
            }
            var fq = fQ.getCenterIn();
            var fP = cC.calcLoopCenterPoint(fq);
            var fp = this._tileType;
            var fs = this._width / 2;
            var fE = this._height;
            var fF = fQ.getZoom();
            var fB = fp.getDataZoom(fF);
            var fu = fQ.getZoomUnits(fF);
            var fA = fu * fs;
            var fO = fP.lng - fA;
            var fN = fP.lng + fA;
            var fy = cC.isAddWidth(fO, fN);
            fs = fy ? fs * 1.5 : fs;
            var fz = fp.getTileSize(fF);
            var fm = fp.getMercatorSize(fF, fB);
            var ft = Math.floor(fP.lng / fm);
            var fv = Math.floor(fP.lat / fm);
            var fn = [ft, fv, (fP.lng - ft * fm) / fm * fz, (fP.lat - fv * fm) / fm * fz];
            var fH = fn[0] - Math.ceil((fs - fn[2]) / fz);
            var fL = fn[1] - Math.ceil((fE / 2 - fn[3]) / fz);
            var fD = fn[0] + Math.ceil((fs + fn[2]) / fz);
            var fI = fn[1] + Math.ceil((fE / 2 + fn[3]) / fz);
            fQ.temp.isPermitSpotOver = false;
            var e = [];
            for (var fK = fH; fK < fD; fK++) {
                for (var fJ = fL; fJ < fI; fJ++) {
                    e.push([fK, fJ, fB]);
                    var fC = "id_" + fK + "_" + fJ + "_" + fF;
                    e[fC] = true
                }
            }
            e._zoom = fB;
            e = cC.calcLoopTiles(e, fF);
            e.sort((function(i) {
                return function(fS, fT) {
                    return ((0.4 * Math.abs(fS[0] - i[0]) + 0.6 * Math.abs(fS[1] - i[1])) - (0.4 * Math.abs(fT[0] - i[0]) + 0.6 * Math.abs(fT[1] - i[1])))
                }
            }
            )([fn[0], fn[1]]));
            var fw = this._cache.arrCache;
            this._curViewLabels = [];
            var fl = "viewKey_" + Math.floor(fq.lng) + "_" + Math.floor(fq.lat) + "_" + fF;
            this.statRequestCount = 0;
            this.statResponseCount = 0;
            this._labelCount += e.length;
            var fr = fF;
            for (var fK = 0, fG = e.length; fK < fG; fK++) {
                var ft = e[fK][0];
                var fv = e[fK][1];
                var fk = e[fK][2];
                var fo = this._getLabelId(ft, fv, fk, fr);
                var fM = fw[fo];
                if (!fM) {
                    fM = this._createCacheForm(ft, fv, fk, fr)
                }
                if (typeof fM.lb === "undefined") {
                    fM.lb = null;
                    this._loadLabelData(ft, fv, fk, fr, fz, fl);
                    this.statRequestCount++
                } else {
                    if (fM.lb) {
                        this._curViewLabels.push(fM.lb);
                        this._labelCount--
                    } else {
                        if (fx) {
                            this._loadLabelData(ft, fv, fk, fr, fz, fl)
                        }
                        fM.updateLabelCounter++
                    }
                }
            }
            if (this._labelCount === 0) {
                this.updateLabel()
            }
            var fR = this;
            if (fR.errorTimer) {
                clearTimeout(fR.errorTimer)
            }
            fR.errorTimer = setTimeout(function() {
                if (fR._labelCount !== 0) {
                    fR._labelCount = 0;
                    fR.updateLabel()
                }
                var fT = new aB("onloaddatatimeout");
                var fU = 0;
                var fS = 0;
                var fV = 0;
                var i = 0;
                if (fR.statRequestCount === fR.statResponseCount) {
                    fU = 1
                } else {
                    fS = 1
                }
                if (fS === 1) {
                    i = fR.statRequestCount - fR.statResponseCount;
                    fV = fR.statResponseCount
                }
                fT.noTimeoutCount = fU;
                fT.timeoutCount = fS;
                fT.timeoutNoLoaded = i;
                fT.timeoutLoaded = fV;
                fR._map.dispatchEvent(fT)
            }, 500)
        },
        clearLabel: function() {
            var e = this._width;
            var fk = this._height;
            var i = this.ratio;
            this._labelCtx.clearRect(0, 0, e * i, fk * i)
        },
        updateLabel: function() {
            var i = this._map;
            var e = i.getCenterIn();
            var fl = this._width;
            var fo = this._height;
            var fr = i.getZoom();
            var fq = this._tileType.getTileSize(fr);
            var fp = this._getZoomUnits(fr);
            var fk = this._labelCtx;
            this._labelCanvas.style.left = -i.offsetX + "px";
            this._labelCanvas.style.top = -i.offsetY + "px";
            var fn = this._curViewLabels;
            fn._centerX = e.lng;
            fn._centerY = e.lat;
            var fm = this._biz.bizLabels;
            this._computedLabel = this._labelStrategy.preComputeLabel(fn, fl, fo, fp, fq, fm);
            this._computedLabel._zoom = fr;
            this.clearLabel();
            this._vectorDrawLib.drawIconAndText(fk, this._computedLabel, fr);
            this._addSpotData();
            i.temp.isPermitSpotOver = true;
            if (fn.length > 0) {
                this.isDrawText = true
            }
        },
        _loadLabelData: function(fu, ft, fs, fk, fv, e) {
            var fn = fu.toString();
            var fl = ft.toString();
            var fp = "cbk_" + fn.replace("-", "_") + "_" + fl.replace("-", "__") + "_" + Math.floor(fs);
            var fz = cY + "." + fp;
            var fy = this._labelDataUrls;
            var fr = Math.abs(fu + ft) % fy.length;
            var fE = fy[fr];
            if (window.offLineIPAddress) {
                fE = window.offLineIPAddress + "pvd/"
            }
            var i = this.labelStyleParam;
            
            var fx = "?qt=vtile";
            var fA = "";
            if (this._map.config.style !== "default") {
                fA = "&styleId=" + dm.mapStyleNameIdPair[this._map.config.style]
            }
            var fw = "x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}" + fA + "&textonly=1&textimg=1&scaler={scaler}&fn=" + encodeURIComponent(fz);
            var fB = cC.calcLoopParam(fu, fs).col;
            var fq = this.ratio > 1 ? 2 : 1;
            var fo = fw.replace(/{x}/, fB).replace(/{y}/, ft).replace(/{z}/, Math.floor(fs)).replace(/{styles}/, i).replace(/{udt}/, this._udt).replace(/{v}/, this._version).replace(/{scaler}/, fq);
            var fm = fE + fx + "&param=" + window.encodeURIComponent(ei(fo));
            var fD = this;
            var fC = fD._map;
            aI[fp] = function(fF) {
                fD._vectorDrawLib.parseLabelData(fF, fu, ft, fs, fk, fv, function(fK) {
                    var fH = fC.getCenterIn();
                    var fL = fC.getZoom();
                    var fN = "viewKey_" + Math.floor(fH.lng) + "_" + Math.floor(fH.lat) + "_" + fL;
                    fD._labelCount--;
                    var fO = fD._getCache(fu, ft, fs, fk).updateLabelCounter;
                    fD._labelCount -= fO;
                    var fI = fD._curViewLabels;
                    if (fN === e || (fD._labelCount < 0 && fL === fs)) {
                        fI.push(fK)
                    }
                    if (fN === e) {
                        fD.statResponseCount++
                    }
                    if (fD._labelCount <= 0) {
                        var fG = (new Date()).getTime();
                        fD.updateLabel();
                        var fJ = (new Date()).getTime();
                        var fM = new aB("oncanvasmaploaded");
                        fM.drawTime = fJ - fG;
                        if (fD.statResponseCount === fD.statRequestCount) {
                            fM.isAllLoadedDrawing = true
                        }
                        fC.dispatchEvent(fM)
                    }
                    fD._setCacheValue(fu, ft, fs, fk, fK);
                    delete aI[fp]
                })
            }
            ;
            eX.load(fm)
        },
        drawLabel: function(fk, fl, fs, i, fq, fm, e, fn, fr, fo) {
            var fp = this;
            if (!fp._computedLabel) {
                return
            }
            if (fp._computedLabel._zoom !== fs) {
                fp.clearLabel();
                return
            }
            fp._map.temp.isPermitSpotOver = false;
            fp.clearLabel();
            fp._vectorDrawLib.zoomingIconAndText(this._labelCtx, fp._computedLabel, fk, fl, i, fq, fm, e, fn, fr, fo)
        },
        _addSpotData: function() {
            this._spotData = [];
            var fs = this._map.getZoom();
            for (var fn = 0, fm = this._computedLabel.length; fn < fm; fn++) {
                var fp = this._computedLabel[fn];
                if (!this.isClickableLabel(fp) || (fp.guidExt === 1 && fp.startScale > fs)) {
                    continue
                }
                var fo = [];
                fo[0] = (fp.minX - fp.maxX) / 2;
                fo[1] = (fp.minY - fp.maxY) / 2;
                fo[2] = (fp.maxX - fp.minX) / 2;
                fo[3] = (fp.maxY - fp.minY) / 2;
                var fl = null;
                if (fp.iconPos) {
                    fl = new e2(fp.iconPos.geoX,fp.iconPos.geoY)
                }
                var fk = fp.name ? fp.name.replace("\\\\", "<br>") : "";
                if (fp.iconPos && fp.iconPos.iconType.indexOf("ditie") > -1 && this._map.getZoom() > 14) {
                    fk = ""
                }
                var fr = {
                    n: fk,
                    pt: new e2(fp.geoX,fp.geoY),
                    userdata: {
                        iconPoint: fl,
                        uid: fp.guid,
                        name: fk,
                        type: fp.iconPos ? fp.iconPos.iconType : "",
                        iconImg: fp.iconImg,
                        mapPoi: true,
                        adver_log: fp.adver_log || ""
                    },
                    bd: fo,
                    tag: "MAP_SPOT_INFO"
                };
                this._spotData.push(fr)
            }
            var fq = new aB("onspotsdataready");
            fq.spots = this._spotData;
            this._map._spotDataOnCanvas = this._spotData;
            this._map.dispatchEvent(fq)
        },
        isClickableLabel: function(e) {
            if (e.isDel || (!e.guid && !e.name)) {
                return false
            }
            return true
        },
        getFilterImageData: function(fk, fo) {
            var fp = fk.data
              , fn = this._labelStrategy
              , fo = parseInt(fo);
            for (var fq = 0, fm = fp.length; fq < fm; fq += 4) {
                var e = fp[fq]
                  , fr = fp[fq + 1]
                  , fs = fp[fq + 2]
                  , ft = fp[fq + 3];
                if (ft === 0) {
                    continue
                }
                var fl = Math.round((e + fr + fs) / 3);
                var fu = fl - 90;
                fu = fu < 0 ? 0 : fu;
                if (fo === fn.RANK5) {
                    fp[fq] = 51 + fu * 1.3;
                    fp[fq + 1] = 133 + fu * 0.8;
                    fp[fq + 2] = 255
                }
            }
            return fk
        },
        showLabelCanvas: function() {
            this._labelCanvas.style.visibility = ""
        },
        hideLabelCanvas: function() {
            this._labelCanvas.style.visibility = "hidden"
        }
    });
    var bg = 5;
    var cz = 4;
    var e0 = 3;
    var dv = 2;
    var fe = 1;
    var cB = 0;
    var fh = 3;
    var eS = 5;
    var B = {
        3: {
            start: 3,
            base: 3
        },
        4: {
            start: 4,
            base: 5
        },
        5: {
            start: 4,
            base: 5
        },
        6: {
            start: 6,
            base: 7
        },
        7: {
            start: 6,
            base: 7
        },
        8: {
            start: 8,
            base: 9
        },
        9: {
            start: 8,
            base: 9
        },
        10: {
            start: 10,
            base: 10
        },
        11: {
            start: 11,
            base: 12
        },
        12: {
            start: 11,
            base: 12
        },
        13: {
            start: 11,
            base: 12
        },
        14: {
            start: 14,
            base: 15
        },
        15: {
            start: 14,
            base: 15
        },
        16: {
            start: 16,
            base: 17
        },
        17: {
            start: 16,
            base: 17
        },
        18: {
            start: 18,
            base: 19
        },
        19: {
            start: 18,
            base: 19
        },
        20: {
            start: 18,
            base: 19
        },
        21: {
            start: 18,
            base: 19
        }
    };
    function ar(fl) {
        this._canvas2dMapMgr = fl;
        var i = this.ratio = fl._map.config.ratio;
        this._featureStyle = null;
        this._map = fl._map;
        var fk = dI();
        var e = "udt=" + fk.udt + "&v=" + fk.ver;
        this.sizeRatio = this.ratio > 1 ? 2 : 1;
        this._binaryCache = {};
        this._iconCache = {};
        this._initColorCanvas()
    }
    x.extend(ar.prototype, {
        _initColorCanvas: function() {
            var i = 256
              , fk = H("canvas")
              , e = fk.style;
            e.width = i + "px";
            e.height = i + "px";
            fk.width = i;
            fk.height = i;
            this._colorCvs = fk;
            this._colorCtx = fk.getContext("2d")
        },
        parseLabelData: function(i, fn, fm, fl, e, fq, fp) {
            if (!this._featureStyle) {
                this._featureStyle = this._canvas2dMapMgr.getStyle()
            }
            if (!i || !i[0]) {
                fp([]);
                return
            }
            var fo = this._map.getZoomUnits();
            var fk = this;
            this.loadTextPng(i, fq, fn, fm, fl, e, fo, fp)
        },
        loadTextPng: function(fC, ft, fr, fq, fo, i, fm, fl) {
            var fB = this;
            var e = fC[5];
            var fA = this._map;
            var fx = fA.getZoom();
            var fk = fA.getSize();
            var fy = fk.width;
            var fw = fk.height;
            var fz = fA.getCenterIn();
            var fp = fz.lng;
            var fn = fz.lat;
            var fv = fr * ft * fm;
            var fu = (fq + 1) * ft * fm;
            if (e) {
                var fs = new Image();
                fs.onload = function() {
                    fB.calcIconAndTextInfo(fC, fs, ft, fr, fq, fo, i, fm, fv, fu, fl);
                    delete this.onload
                }
                ;
                fs.src = e
            } else {
                setTimeout(function() {
                    fB.calcIconAndTextInfo(fC, null, ft, fr, fq, fo, i, fm, fv, fu, fl)
                }, 1)
            }
        },
        calcIconAndTextInfo: function(fE, fv, fw, fu, fr, fp, fl, fn, fy, fx, fm) {
            var fD = this;
            var fC = fD._featureStyle;
            var fs = [];
            fs.x = fu;
            fs.y = fr;
            fs.z = fp;
            var ft = fD._canvas2dMapMgr
              , fk = fu * fn * fw
              , fB = (fr + 1) * fn * fw
              , fo = {
                tileLeft: fk,
                tileTop: fB,
                zoomUnits: fn
            };
            var e = [];
            if (fE[0]) {
                for (var fz = 0; fz < fE[0].length; fz++) {
                    if (fE[0][fz][0] === fh) {
                        e.push(fE[0][fz])
                    }
                }
            }
            var fq = fE[2] || [];
            for (var fz = 0; fz < e.length; fz++) {
                this._getFixedLabelInfo(e[fz], fv, fl, fn, fw, fy, fx, fs)
            }
            var fA = Math.pow(2, fl - fp);
            for (fz = 0; fz < fq.length; fz++) {
                this._getLineLabelInfo(fq[fz], fv, fp, fl, fn, fw, fy, fx, fA, fs)
            }
            fm(fs)
        },
        _getFixedLabelInfo: function(fv, fz, fm, fq, fA, fD, fC, fF) {
            var fu = fv[1];
            if (!fu) {
                return
            }
            var fH = this._map.getZoom();
            var fP = this._map.config.style;
            var fQ = this._featureStyle;
            var fr = fm;
            if (fr === 9) {
                fr = 8
            }
            for (var fM = 0; fM < fu.length; fM++) {
                var fR = fu[fM];
                var e = fR[0];
                var fl = cO.getStyleFromCache(fP, e, "point", fr, fQ);
                var fL = cO.getStyleFromCache(fP, e, "pointText", fr, fQ);
                if ((!fL || fL.length === 0) && (!fl || fl.length === 0)) {
                    if (fr === 5) {
                        var fp = fR[1];
                        if (!fp) {
                            continue
                        }
                        for (var fI = 0; fI < fp.length; fI++) {
                            var fG = fp[fI][4];
                            if (fG && fG[7] === "北京") {
                                fl = cO.getStyleFromCache(fP, e, "point", 6, fQ);
                                fL = cO.getStyleFromCache(fP, e, "pointText", 6, fQ);
                                break
                            } else {
                                continue
                            }
                        }
                    } else {
                        continue
                    }
                }
                var fp = fR[1];
                if (!fp) {
                    continue
                }
                var fN = null;
                var fs = 1;
                var fk = 0;
                var fy = 0;
                if (fl && fl[0]) {
                    fl = fl[0];
                    fN = fl.icon;
                    fs = fl.zoom ? fl.zoom / 100 : 1
                } else {
                    fl = null
                }
                for (var fI = 0; fI < fp.length; fI++) {
                    var fG = fp[fI][4];
                    if (!fG) {
                        continue
                    }
                    var fK = fG[2];
                    if (!this._isVisible(fK, fH)) {
                        continue
                    }
                    var ft = fG[12];
                    if (fL && fL.length > 0 && !ft) {
                        continue
                    }
                    var fx = Math.round(fG[0] / 100);
                    var fw = Math.round(fG[1] / 100);
                    var fJ = {
                        lng: fD + fx,
                        lat: fC - (fA * fq - fw)
                    };
                    var fo = fx / fq;
                    var fn = fA - fw / fq;
                    var fB = fG[7] || "";
                    var fO = fG[5];
                    var fE = {
                        type: "fixed",
                        name: fB,
                        textImg: fz,
                        rank: fG[4],
                        baseX: fo,
                        baseY: fn,
                        iconPos: null,
                        textPos: null,
                        guid: fG[3] || "",
                        tracer: fK,
                        direction: fO,
                        startScale: 3
                    };
                    if ((fO !== cz && ft || !ft) && fN !== null) {
                        fE.iconPos = this._getIconPosition(fN, fs, fo, fn, fJ);
                        if (fE.iconPos) {
                            fk = fE.iconPos.width;
                            fy = fE.iconPos.height
                        }
                    }
                    if (fk === 0) {
                        fE.direction = cz
                    }
                    if (ft) {
                        fE.textPos = this._getTextDrawData(fG, fo, fn, fk, fy)
                    }
                    if (fE.textPos || fE.iconPos) {
                        fF.push(fE)
                    }
                }
            }
        },
        _isVisible: function(e, i) {
            var fl;
            if (!this._binaryCache[e]) {
                fl = e.toString(2);
                if (fl.length < 8) {
                    fl = new Array(8 - fl.length + 1).join("0") + fl
                }
                this._binaryCache[e] = fl
            }
            fl = this._binaryCache[e];
            var fk = B[i].start;
            return fl[i - fk] === "1"
        },
        _getIconPosition: function(fp, fn, fk, i, e) {
            var fl = this._map.config.style;
            var fq = aI["iconSetInfo" + fl][fp];
            if (!fq) {
                if (fp.charCodeAt(0) >= 48 && fp.charCodeAt(0) <= 57) {
                    fq = aI["iconSetInfo" + fl]["_" + fp]
                }
            }
            if (!fq) {
                return null
            }
            var fm = fq[0];
            var fo = fq[1];
            fm = fm * fn;
            fo = fo * fn;
            return {
                srcX: 0,
                srcY: 0,
                destX: fk - fm / 2,
                destY: i - fo / 2,
                width: fm,
                height: fo,
                geoX: e.lng,
                geoY: e.lat,
                mcPt: e,
                iconType: fp
            }
        },
        _getTextDrawData: function(fw, fv, fu, fl, fs) {
            var fB = fw[5];
            if (typeof fB !== "number") {
                fB = 0
            }
            var fq = this.ratio;
            var fp = fq / 2;
            fl *= fp;
            fs *= fp;
            var fr = fw[12];
            var fm = fr.length;
            var fE = 0;
            var fD = 0;
            var fA = [];
            var fz = 0;
            var fC = 0;
            for (var fy = 0; fy < fm; fy++) {
                fC += Math.round(fr[fy][3])
            }
            for (var fy = 0; fy < fm; fy++) {
                var fo = fr[fy];
                var fn = fo[0];
                var i = fo[1];
                var fk = fo[2];
                var e = fo[3];
                var fF = 2 * fq;
                var fx = 0;
                if (fl !== 0) {
                    fx = 2 * fq
                }
                if (fl === 0) {
                    fB = cz
                }
                switch (fB) {
                case e0:
                    var ft = fu - fC / 2 - fF * (fm - 1) / 2;
                    fE = fv - fk - fl / 2 - fx;
                    fD = ft + fz + fF * fy;
                    break;
                case fe:
                    var ft = fu - fC / 2 - fF * (fm - 1) / 2;
                    fE = fv + fl / 2 + fx;
                    fD = ft + fz + fF * fy;
                    break;
                case dv:
                    var ft = fu - fs / 2 - fC - fF * (fm - 1) - fF;
                    fE = fv - fk / 2;
                    fD = ft + fz + fF * fy;
                    break;
                case cB:
                    var ft = fu + fs / 2 + fF / 2;
                    fE = fv - fk / 2;
                    fD = ft + fz + fF * fy;
                    break;
                case cz:
                    var ft = fu - e / 2 - fF * (fm - 1) / 2;
                    fE = fv - fk / 2;
                    fD = ft + fz + fF * fy;
                    break
                }
                fz += e;
                if (fk > 0 && e > 0) {
                    fA.push({
                        srcX: fn,
                        srcY: i,
                        destX: fE,
                        destY: fD,
                        width: fk,
                        height: e
                    })
                }
            }
            if (fA.length > 0) {
                return fA
            }
            return null
        },
        _getLineLabelInfo: function(ft, fl, fm, fI, fV, fA, fG, fF, fH, fz) {
            if (ft.length !== 10) {
                return
            }
            var fK = this.ratio;
            var fk = this.ratio;
            var fR = ft[7].length;
            var fB = ft[1];
            var fT = ft[3];
            var fZ = ft[8];
            var fp = ft[4];
            var e = 2;
            var fn = fp.slice(0, e);
            for (var fW = e; fW < fp.length; fW += e) {
                fn[fW] = fn[fW - e] + fp[fW];
                fn[fW + 1] = fn[fW - (e - 1)] + fp[fW + 1]
            }
            for (var fW = e; fW < fp.length; fW += e) {
                if (fW % (fT * e) === 0 || fW % (fT * e) === 1) {
                    continue
                }
                fn[fW] = fn[fW - e] + fp[fW] / fH;
                fn[fW + 1] = fn[fW - (e - 1)] + fp[fW + 1] / fH
            }
            for (var fY = 0; fY < fR; fY++) {
                var fU = ft[7][fY];
                if (!this._isVisible(fU, fI)) {
                    continue
                }
                var fM = ft[6][fY];
                var fy = fY * fT * e;
                fp = fn.slice(fy, fy + fT * e);
                var fC = [];
                var fL = undefined;
                var fJ = undefined;
                var fx = undefined;
                var fw = undefined;
                var fZ = ft[9].slice(0);
                if (fM) {
                    fZ.reverse()
                }
                var fP;
                var fN;
                for (var fX = 0; fX < fT; fX++) {
                    var fv = ft[5][fT * fY + fX];
                    var fQ = fp[fX * e] / 100;
                    var fO = fp[fX * e + 1] / 100;
                    var fu = fZ[fX];
                    var fq = fu[0];
                    var fs = fu[1];
                    var fo = fu[2];
                    var fr = fu[3];
                    var fE;
                    var fD;
                    var f1;
                    var f0;
                    if (fX === 0) {
                        fP = f1 = fQ / fV;
                        fN = fA - fO / fV;
                        f0 = fO / fV
                    } else {
                        f1 = fQ / fV;
                        f0 = fO / fV
                    }
                    var f3 = fP + (f1 - fP) * fk - fo / 2;
                    var f2 = fN + (fA - f0 - fN) * fk - fr / 2;
                    if (fL === undefined) {
                        fL = fP - fo / 2;
                        fJ = fN - fr / 2;
                        fx = fL + fo;
                        fw = fJ + fr
                    } else {
                        if (f3 < fL) {
                            fL = f3
                        }
                        if (f2 < fJ) {
                            fJ = f2
                        }
                        if (f3 + fo > fx) {
                            fx = f3 + fo
                        }
                        if (f2 + fr > fw) {
                            fw = f2 + fr
                        }
                    }
                    fC.push({
                        angle: fv,
                        srcX: fq,
                        srcY: fs,
                        destX: f3,
                        destY: f2,
                        width: fo,
                        height: fr
                    })
                }
                var fS = {
                    type: "line",
                    textImg: fl,
                    rank: fB,
                    baseX: fP,
                    baseY: fN,
                    arrWordPos: fC,
                    minXOriginal: fL,
                    minYOriginal: fJ,
                    maxXOriginal: fx,
                    maxYOriginal: fw,
                    text: ""
                };
                fz.push(fS)
            }
        },
        alterColor: function(fo, e, fn) {
            var fk = this._colorCtx
              , i = this._canvas2dMapMgr;
            fk.clearRect(0, 0, fo.width, fo.height);
            fk.drawImage(e, fo.srcX, fo.srcY, fo.width, fo.height, 0, 0, fo.width, fo.height);
            var fm = fk.getImageData(0, 0, fo.width, fo.height)
              , fl = i.getFilterImageData(fm, fn);
            fk.putImageData(fl, 0, 0)
        },
        drawIconAndText: function(fA, fz, e) {
            var fr = this.ratio;
            var fp = this.sizeRatio / fr;
            var ft = 2 / fr;
            var fL = this;
            for (var fD = 0, fB = fz.length; fD < fB; fD++) {
                var fs = fz[fD];
                if (fs.isDel == false) {
                    var fm = fs.baseDrawX;
                    var fl = fs.baseDrawY;
                    if (fs.type == "fixed") {
                        var fo = fs.iconPos
                          , fE = fs.textPos
                          , fx = fs.textImg
                          , fH = fs.startScale;
                        if (fo && fH <= e) {
                            var fk = this._iconCache[fo.iconType];
                            if (fk) {
                                if (fk.img) {
                                    fA.drawImage(fk.img, 0, 0, fk.img.width, fk.img.height, Math.round(fm * fr + (fo.drawX - fm) / ft), Math.round(fl * fr + (fo.drawY - fl) / ft), fo.width / ft, fo.height / ft)
                                } else {
                                    fk.drawLabels.push(fs)
                                }
                            } else {
                                if (!fk) {
                                    this._iconCache[fo.iconType] = {
                                        img: null,
                                        drawLabels: [fs]
                                    };
                                    var fN = new Image();
                                    fN._iconName = fo.iconType;
                                    fN.onload = function() {
                                        var fT = fL._iconCache[this._iconName];
                                        fT.img = this;
                                        this.onload = null;
                                        for (var fP = 0; fP < fT.drawLabels.length; fP++) {
                                            var fR = fT.drawLabels[fP];
                                            var fQ = fR.baseDrawX;
                                            var fO = fR.baseDrawY;
                                            var fS = fR.iconPos;
                                            fA.drawImage(this, 0, 0, this.width, this.height, Math.round(fQ * fr + (fS.drawX - fQ) / ft), Math.round(fO * fr + (fS.drawY - fO) / ft), fS.width / ft, fS.height / ft)
                                        }
                                        fT.drawPos = []
                                    }
                                    ;
                                    fN.src = dm.getIconSetPath(fL._map.config.style) + fo.iconType + ".png"
                                }
                            }
                        }
                        if (fE && fx && fH <= e) {
                            for (var fq = 0; fq < fE.length; fq++) {
                                var fy = fE[fq];
                                if (!fs._tempRank) {
                                    fA.drawImage(fx, fy.srcX, fy.srcY, fy.width, fy.height, Math.round(fm * fr + (fy.drawX - fm) / fp), Math.round(fl * fr + (fy.drawY - fl) / fp), fy.width / fp, fy.height / fp)
                                } else {
                                    this.alterColor(fy, fx, fs._tempRank);
                                    fA.drawImage(this._colorCvs, 0, 0, fy.width, fy.height, Math.round(fm * fr + (fy.drawX - fm) / fp), Math.round(fl * fr + (fy.drawY - fl) / fp), fy.width / fp, fy.height / fp)
                                }
                            }
                        }
                    } else {
                        var fn = fs.arrWordPos
                          , fx = fs.textImg
                          , fw = fs.tileX
                          , fu = fs.tileY;
                        for (var fC = 0, fv = fn.length; fC < fv; fC++) {
                            var fF = fn[fC];
                            var fM = Math.round(fw + fF.destX);
                            var fK = Math.round(fu + fF.destY);
                            var fG = fF.angle;
                            fM = fm * fr + fM - fm;
                            fK = fl * fr + fK - fl;
                            if (fG > 10 && fG < 350) {
                                fA.save();
                                var fJ = Math.round(fM + fF.width / 2);
                                var fI = Math.round(fK + fF.height / 2);
                                fA.translate(fJ, fI);
                                fA.rotate(-fG / 180 * Math.PI);
                                fA.drawImage(fx, fF.srcX, fF.srcY, fF.width, fF.height, -Math.round(fF.width / 2), -Math.round(fF.height / 2), fF.width / fp, fF.height / fp);
                                fA.restore()
                            } else {
                                fA.drawImage(fx, fF.srcX, fF.srcY, fF.width, fF.height, fM, fK, fF.width / fp, fF.height / fp)
                            }
                        }
                    }
                }
            }
        },
        isCollide: function(fn, fw, fv, e, fp, fk, fr) {
            for (var fm = 0, fl = fk.length; fm < fl; fm++) {
                var fq = fk[fm]
                  , fo = 1 / Math.pow(2, fr + 1)
                  , fu = fo * fq[3] / 2
                  , ft = fo * fq[4] / 2
                  , fs = fq[0];
                if (fs != fn) {
                    if (!(fw + e < fq[1] - fu || fw > fq[1] + fq[3] + fu || fv + fp < fq[2] - ft || fv > fq[2] + fq[4] + ft)) {
                        return true
                    }
                }
            }
            return false
        },
        zoomingIconAndText: function(fL, fF, fl, fJ, fK, gc, fS, ft, fY, fR, fC) {
            var gd = this.ratio;
            var fu = this.sizeRatio / gd;
            var ge = 2 / gd;
            var go = gd / 2;
            var f8 = fJ.x;
            var f7 = fJ.y;
            var fM = 2 * gd;
            if (fC !== 0) {
                f7 += fR
            }
            var fx = undefined
              , fq = undefined
              , fn = undefined
              , fs = undefined
              , fB = undefined;
            var fX = gc > 0 ? true : false;
            if (!fX) {
                fx = [];
                var f1 = 1 - fS
            }
            for (var gk = 0, gi = fF.length; gk < gi; gk++) {
                var gf = fF[gk];
                if (gf.isDel == false) {
                    var gp = gf.baseDrawX;
                    var gm = gf.baseDrawY;
                    fL.save();
                    fL.translate(-ft * gd, -fY * gd);
                    if (gf.isFadeout) {
                        if (!fX && gf._schedule <= fS && !gf._isIgnore) {
                            fL.globalAlpha = f1;
                            gf._schedule = fS
                        } else {
                            gf._isIgnore = true;
                            continue
                        }
                    }
                    if (gf.type == "fixed") {
                        var fN = gf.iconPos
                          , fU = gf.textPos
                          , fo = gf.textImg
                          , fO = gf.startScale;
                        var fk;
                        var f5 = 0;
                        if (fN) {
                            f5 = fM
                        }
                        if (fN && !gf.iconImg && this._iconCache[fN.iconType]) {
                            fk = this._iconCache[fN.iconType].img
                        }
                        if (fN && fO <= fK && fk) {
                            fs = fN.width;
                            fB = fN.height;
                            fq = (f8 + (gp - f8) * fl) * gd - fs / 2 / ge;
                            fn = (f7 + (gm - f7) * fl) * gd - fB / 2 / ge + fC;
                            if (!fX && this.isCollide(gk, fq, fn, fs, fB, fx, gc)) {
                                gf.isFadeout = true
                            }
                            fL.drawImage(fk, fN.srcX, fN.srcY, fk.width, fk.height, Math.round(fq), Math.round(fn), fs / ge, fB / ge);
                            !fX && fx.push([gk, fq, fn, fs, fB])
                        }
                        if (fU && fo && fO <= fK) {
                            var fT;
                            var fV;
                            var fE = 0;
                            var fQ = 0;
                            if (fN) {
                                fE = fN.width;
                                fQ = fN.height
                            }
                            var f6 = fU.length;
                            var fw = 0;
                            var fW = 0;
                            for (var fG = 0; fG < f6; fG++) {
                                var gh = fU[fG];
                                fW += gh.height;
                                if (fw < gh.width) {
                                    fw = gh.width
                                }
                            }
                            fW += (fG - 1) * fM;
                            if (!fX && this.isCollide(gk, fq, fn, fw, fW, fx, gc)) {
                                gf.isFadeout = true
                            }
                            var gg = 0;
                            for (var fG = 0; fG < f6; fG++) {
                                var gh = fU[fG];
                                switch (gf.direction) {
                                case e0:
                                    fT = -(fE / 2 / ge + gh.width + f5);
                                    fV = -fW / 2 + gg + fM * fG;
                                    break;
                                case fe:
                                    fT = fE / 2 / ge + f5;
                                    fV = -fW / 2 + gg + fM * fG;
                                    break;
                                case dv:
                                    fT = -gh.width / 2;
                                    fV = -fQ / 2 / ge - fW + gg - fM * (fG + 1);
                                    break;
                                case cB:
                                    fT = -gh.width / 2;
                                    fV = fQ / 2 / ge + gg + fM * (fG + 1);
                                    break;
                                case cz:
                                    fT = -gh.width / 2;
                                    fV = -fW / 2 + gg + fM * fG;
                                    break
                                }
                                gg += gh.height;
                                fq = (f8 + (gp - f8) * fl) * gd + fT / fu;
                                fn = (f7 + (gm - f7) * fl) * gd + fV / fu;
                                +fC;
                                fs = gh.width;
                                fB = gh.height;
                                if (!gf._tempRank) {
                                    fL.drawImage(fo, gh.srcX, gh.srcY, fs, fB, Math.round(fq), Math.round(fn), fs / fu, fB / fu)
                                } else {
                                    this.alterColor(gh, fo, gf._tempRank);
                                    fL.drawImage(this._colorCvs, 0, 0, fs, fB, Math.round(fq), Math.round(fn), fs / fu, fB / fu)
                                }
                                !fX && fx.push([gk, fq, fn, fs, fB])
                            }
                        }
                    } else {
                        var fD = gf.arrWordPos
                          , fo = gf.textImg
                          , gn = gf.tileX
                          , gl = gf.tileY;
                        var fv = fD[0];
                        var fr = Math.round(gn + fv.destX);
                        var fp = Math.round(gl + fv.destY);
                        for (var gj = 0, f4 = fD.length; gj < f4; gj++) {
                            var gb = fD[gj];
                            var gr = Math.round(gn + gb.destX);
                            var gq = Math.round(gl + gb.destY);
                            var fI = gb.angle;
                            var f3 = Math.round((f8 + (gp - f8) * fl) * gd - fv.width / 2 + gr - fr);
                            var f2 = Math.round((f7 + (gm - f7) * fl) * gd - fv.height / 2 + gq - fp);
                            fq = f3;
                            fn = f2;
                            fs = gb.width;
                            fB = gb.height;
                            if (!fX && this.isCollide(gk, fq, fn, fs, fB, fx, gc)) {
                                gf.isFadeout = true
                            }
                            if (fI > 10 && fI < 350) {
                                var ga = f3 + gb.width / 2;
                                var f9 = f2 + gb.height / 2;
                                var fm = fI / 180 * Math.PI;
                                var fP = Math.cos(fm);
                                var fy = Math.sin(fm);
                                var f0 = fP;
                                var fz = fP;
                                var fZ = fy;
                                var fA = -fy;
                                var fH = ga - ga * fP - f9 * fy;
                                var e = f9 + ga * fy - f9 * fP;
                                fL.save();
                                fL.transform(f0, fA, fZ, fz, fH, e);
                                fL.drawImage(fo, gb.srcX, gb.srcY, fs, fB, fq, fn, fs / fu, fB / fu);
                                fL.restore()
                            } else {
                                fL.drawImage(fo, gb.srcX, gb.srcY, fs, fB, fq, fn, fs / fu, fB / fu)
                            }
                            !fX && fx.push([gk, fq, fn, fs, fB])
                        }
                    }
                    fL.restore()
                }
            }
        }
    });
    function eC(e) {
        this.initVars(e)
    }
    x.extend(eC.prototype, {
        initVars: function(e) {
            this._map = e._map;
            this._canvas2dMapMgr = e;
            this.base64Prefix = "data:image/png;base64,";
            this.bizData = null;
            this.objTextsPng = null;
            this.arrIconsPng = null;
            this.bizLabels = null
        },
        proecessBizData: function(fn, fr) {
            var fp = this;
            this.bizData = fn;
            this.objTextsPng = null;
            this.arrIconsPng = null;
            var fk = fn.textsPng;
            var ft = fn.iconsPng;
            if (!fk || !ft) {
                return
            }
            var fq = new Image();
            fq.onload = function() {
                fp.objTextsPng = this;
                fp.calcIconAndTextInfo(fr);
                this.onload = null
            }
            ;
            fq.src = this.base64Prefix + fk;
            var fs = ft.length;
            var e = [];
            for (var fm = 0; fm < fs; fm++) {
                var fo = ft[fm];
                var fl = new Image();
                (function(i) {
                    fl.onload = function() {
                        fs--;
                        e[i] = this;
                        if (fs === 0) {
                            fp.arrIconsPng = e;
                            fp.calcIconAndTextInfo(fr)
                        }
                        this.onload = null
                    }
                }
                )(fm);
                fl.src = this.base64Prefix + fo
            }
        },
        calcIconAndTextInfo: function(fu) {
            if (this.objTextsPng && this.arrIconsPng) {
                var fq = this.bizData;
                var fo = fq.pois;
                var e = [];
                for (var fr = 0, fn = fo.length; fr < fn; fr++) {
                    var fl = fo[fr];
                    var fp = this.arrIconsPng[fl.iconPng];
                    var fm = fp.height / 2;
                    var ft = {
                        type: "fixed",
                        name: "",
                        textImg: this.objTextsPng,
                        iconImg: fp,
                        rank: fl.rank,
                        iconPos: {
                            srcX: 0,
                            srcY: 0,
                            destX: -fp.width / 2,
                            destY: -fm / 2,
                            width: fp.width,
                            height: fm,
                            geoX: fl.x,
                            geoY: fl.y,
                            iconType: "vectorCustom"
                        },
                        textPos: this.calcTextPos(fl.pos, fp),
                        startScale: fl.from < 12 ? 12 : fl.from,
                        guid: fl.guid,
                        guidExt: 1,
                        adver_log: fl.adver_log || ""
                    };
                    var fk = {
                        type: "fixed",
                        textDirLeft: "left",
                        name: "",
                        textImg: this.objTextsPng,
                        iconImg: fp,
                        rank: fl.rank,
                        iconPos: {
                            srcX: 0,
                            srcY: 0,
                            destX: -fp.width / 2,
                            destY: -fm / 2,
                            width: fp.width,
                            height: fm,
                            geoX: fl.x,
                            geoY: fl.y,
                            iconType: "vectorCustom"
                        },
                        textPos: this.calcTextPosLeft(fl.pos, fp),
                        startScale: fl.from < 12 ? 12 : fl.from,
                        guid: fl.guid,
                        guidExt: 1,
                        adver_log: fl.adver_log || ""
                    };
                    var fs = [ft, fk];
                    e.push(fs)
                }
                this.bizLabels = e;
                fu && fu()
            }
        },
        calcTextPos: function(fo, fk) {
            var i = [];
            var fn = fo.length / 4;
            var fm = fk.width / 2;
            if (fn === 1) {
                var fl = {
                    srcX: fo[0],
                    srcY: fo[1],
                    destX: fm,
                    destY: -fo[3] / 2,
                    width: fo[2],
                    height: fo[3]
                };
                i.push(fl)
            } else {
                var fl = {
                    srcX: fo[0],
                    srcY: fo[1],
                    destX: fm,
                    destY: -fo[3],
                    width: fo[2],
                    height: fo[3]
                };
                var e = {
                    srcX: fo[4],
                    srcY: fo[5],
                    destX: fm,
                    destY: 0,
                    width: fo[6],
                    height: fo[7]
                };
                i.push(fl);
                i.push(e)
            }
            return i
        },
        calcTextPosLeft: function(fo, fk) {
            var i = [];
            var fn = fo.length / 4;
            var fm = fk.width / 2;
            if (fn === 1) {
                var fl = {
                    srcX: fo[0],
                    srcY: fo[1],
                    destX: -fm - fo[2],
                    destY: -fo[3] / 2,
                    width: fo[2],
                    height: fo[3]
                };
                i.push(fl)
            } else {
                var fl = {
                    srcX: fo[0],
                    srcY: fo[1],
                    destX: -fm - fo[2],
                    destY: -fo[3],
                    width: fo[2],
                    height: fo[3]
                };
                var e = {
                    srcX: fo[4],
                    srcY: fo[5],
                    destX: -fm - fo[2],
                    destY: 0,
                    width: fo[6],
                    height: fo[7]
                };
                i.push(fl);
                i.push(e)
            }
            return i
        },
        clearBizData: function() {
            this.bizData = null;
            this.bizLabels = null
        }
    });
    function bT() {}
    x.extend(bT.prototype, {
        centerAndZoomIn: function(fk, fr, fs) {
            fs = fs || {};
            if (!this.loaded) {
                this.firstTileLoad = false
            }
            fr = this._getProperZoom(fr).zoom;
            if (fs.noAnimation !== true && this.loaded) {
                var fn = this._ifUseAnimation(fk, fr);
                if (fn) {
                    this.flyToIn(fk, fr, fs);
                    return
                }
            }
            var fp = this;
            if (!fk && !fr) {
                return
            }
            if (fk && !fk.equals(this.centerPoint)) {
                this.fire(new aB("oncenter_changed"))
            }
            if (fr && fr !== this.zoomLevel) {
                this.fire(new aB("onzoom_changed"))
            }
            fk = fk || this.centerPoint;
            fr = fr || this.zoomLevel;
            fr = this._getProperZoom(fr).zoom;
            if (this.mapType === BMAP_EARTH_MAP) {
                if (!this._earth) {
                    this.mapType = BMAP_NORMAL_MAP;
                    this.temp.originMapType = BMAP_EARTH_MAP;
                    function fq() {
                        fp._earth = new aI.Earth(fp,{
                            showRealSunlight: fp.config.showRealSunlight,
                            showMilkyway: fp.config.showMilkyway,
                            earthBackground: fp.config.earthBackground
                        });
                        fp._proxyEarthEvents();
                        fp._changeEarthMapType(BMAP_EARTH_MAP);
                        x.extend(fp, aI.EarthView.prototype);
                        delete fp.temp.originMapType
                    }
                    cG.load("earth", function() {
                        if (aI["FeatureStyle" + fp.config.style]) {
                            fq()
                        } else {
                            fp.loadMapStyleFiles(function() {
                                fq()
                            })
                        }
                    })
                }
            }
            this.lastLevel = this.zoomLevel || fr;
            this.zoomLevel = fr;
            var fo = new aB("onload");
            fo.point = fk;
            fo.zoom = fr;
            this.centerPoint = new e2(fk.lng,fk.lat);
            this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
            this.defaultCenter = this.defaultCenter || this.centerPoint;
            if (this.mapType !== BMAP_EARTH_MAP) {
                this.centerPoint = this.restrictCenter(this.centerPoint)
            }
            if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
                var i = this.config.defaultMaxBounds;
                var fm = new bS(i,"baidu",this.mapType);
                var fl = new bH({
                    mapType: this.mapType,
                    copyright: fm,
                    dataType: eo,
                    customLayer: false,
                    baseLayer: true,
                    tileTypeName: "na"
                });
                fl._isInnerLayer = true;
                this.addTileLayer(fl);
                if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
                    this._addHybirdMap()
                }
                this.baseLayerAdded = true;
                this.on("zoom_changed", function() {
                    if (this._heading === 0) {
                        return
                    }
                    if (this.getZoom() < 7 && this.config.restrictCenter === true) {
                        fp.resetHeading()
                    }
                })
            }
            this.loaded = true;
            this.dispatchEvent(fo);
            fs.callback && fs.callback()
        },
        _ifUseAnimation: function(fl, fq) {
            var fp = this.getSize();
            var fk = {
                zoom: this.zoomLevel
            };
            var fs = {
                zoom: fq
            };
            var fr = this.pointToPixelIn(this.centerPoint);
            var fm = this.pointToPixelIn(fl, fk);
            var fo = this.pointToPixelIn(this.centerPoint, fs);
            var fu = this.pointToPixelIn(fl, fs);
            var fn = Math.abs(fr.x - fm.x);
            var i = Math.abs(fr.y - fm.y);
            var e = Math.abs(fo.x - fu.x);
            var ft = Math.abs(fo.y - fu.y);
            if ((fn > fp.width || i > fp.height) && (e > fp.width || ft > fp.height)) {
                return false
            }
            return true
        },
        _setPlatformPosition: function(fs, fr, fu) {
            fu = fu || {};
            if (fs === 0 && fr === 0 && !fu.point) {
                return
            }
            if (isNaN(fu.initMapOffsetX)) {
                fu.initMapOffsetX = this.offsetX
            }
            if (isNaN(fu.initMapOffsetY)) {
                fu.initMapOffsetY = this.offsetY
            }
            var fo = cq(this._heading);
            if (this._tilt > 0) {
                fr = fr / Math.cos(cq(this._tilt))
            }
            var ft = fs * Math.cos(fo) + fr * Math.sin(fo);
            var fq = -fs * Math.sin(fo) + fr * Math.cos(fo);
            ft = ft + fu.initMapOffsetX;
            fq = fq + fu.initMapOffsetY;
            if (fu.point) {
                var i = this.restrictCenter(fu.point);
                if (!i.equals(this.centerPoint)) {
                    this.centerPoint = i.clone();
                    this.fire(new aB("oncenter_changed"))
                }
            } else {
                var fl = this.offsetX - ft;
                var e = this.offsetY - fq;
                var fp = this.centerPoint.lng;
                var fn = this.centerPoint.lat;
                var fm = new e2(fp,fn);
                var fk = this.getZoomUnits();
                this.centerPoint = this.restrictCenter(new e2(fm.lng + fl * fk,fm.lat - e * fk), fk);
                this.fire(new aB("oncenter_changed"))
            }
            this.offsetX = ft;
            this.offsetY = fq;
            this.dispatchEvent(new aB("onmoving"))
        },
        restrictCenter: function(fl, fm) {
            if (this.config.restrictCenter === false) {
                return fl
            }
            fm = fm || this.getZoomUnits();
            var fk = this.pixelToPointIn(new cN(0,0), {
                center: fl
            });
            var i = this.pixelToPointIn(new cN(0,this.height), {
                center: fl
            });
            if (this.zoomLevel < 5) {
                if (fk.lat > bU.MAX_LAT && i.lat < bU.MIN_LAT) {
                    var fn = bU.MAX_LAT - fl.lat;
                    var e = fl.lat - bU.MIN_LAT;
                    var fp;
                    if (fn < e) {
                        fp = fn / (this.height / 2)
                    } else {
                        fp = e / (this.height / 2)
                    }
                    var fo = 18 - c0(fp);
                    this.zoomLevel = fo;
                    return fl
                }
            }
            if (fk.lat > bU.MAX_LAT) {
                fl.lat = bU.MAX_LAT - this.height / 2 * fm
            } else {
                if (i.lat < bU.MIN_LAT) {
                    fl.lat = bU.MIN_LAT + this.height / 2 * fm
                }
            }
            return fl
        },
        zoomTo: function(e, fw, fx) {
            var fs = be[this.mapType];
            if (!fs) {
                return
            }
            var fr = this._getProperZoom(e);
            e = fr.zoom;
            if (this.zoomLevel === e) {
                return
            }
            var fn = e;
            this.lastLevel = this.zoomLevel;
            fx = fx || {};
            if (this.zoomEventStatus === "idle") {
                this.fire(new aB("onzoomstart"));
                this.zoomEventStatus = "zooming"
            }
            if (!fw && (this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen())) {
                fw = this.getInfoWindow().getPoint()
            }
            var fk;
            if (fw) {
                fk = this.pointToPixelIn(fw)
            }
            var fo = this.pixelToPointIn(fk);
            var fp = this.centerPoint.clone();
            this.fixPoint = fw;
            this.fixPixel = fk;
            this.fixCenter = fp;
            this.mousePosMCPoint = fo;
            if (fx.noAnimation) {
                e = fr.zoom;
                this.zoomLevel = e;
                this.fire(new aB("onzoom_changed"));
                var fm = this.getCurrentMaxTilt();
                if (this._tilt > fm) {
                    this._tilt = fm
                }
                if (fw) {
                    if (this._heading % 360 !== 0 || this._tilt > 0) {
                        var i = this._webglMapCamera.fromScreenPixelToMC(fk.x, fk.y, {
                            center: fp,
                            zoom: this.zoomLevel
                        });
                        if (i) {
                            var ft = i.sub(fo);
                            var fl = fp.sub(ft);
                            this.centerPoint = this.restrictCenter(fl)
                        }
                    } else {
                        var fq = this.getZoomUnits();
                        var fl = new e2(fw.lng - fq * (fk.x - this.width / 2),fw.lat + fq * (fk.y - this.height / 2));
                        this.centerPoint = this.restrictCenter(fl, fq)
                    }
                    this.fire(new aB("oncenter_changed"))
                }
                this._checkFireZoomend();
                return
            }
            this._animationInfo.zoom = {
                current: this.zoomLevel,
                diff: e - this.zoomLevel,
                target: e
            };
            var fu = this;
            fx.callback = function() {
                fu._checkFireZoomend()
            }
            ;
            var fv = this._tilt;
            if (this.fixPoint || fv > bU.MAX_DRAG_TILT_L2) {
                fx.renderCallback = function() {
                    var fB = fu.getCurrentMaxTilt();
                    if (fu._tilt > fB) {
                        fu._tilt = fB
                    }
                    var fC = fu.fixPixel;
                    if (!fu.fixPixel || !fu.fixPoint) {
                        return
                    }
                    var fy = fu.fixPixel;
                    var fI = fu.fixPoint;
                    var fF = fu.fixCenter;
                    var fD = fu.mousePosMCPoint;
                    if (fu._heading % 360 !== 0 || fu._tilt > 0) {
                        var fz = fu._webglMapCamera.fromScreenPixelToMC(fy.x, fy.y, {
                            center: fF,
                            zoom: fu.zoomLevel,
                            tilt: fu._tilt
                        });
                        if (fz) {
                            var fH = fz.sub(fD);
                            var fA = fF.sub(fH);
                            fu.centerPoint = fu.restrictCenter(fA)
                        }
                    } else {
                        var fE = fy;
                        var fG = fu.getZoomUnits();
                        var fA = new e2(fI.lng - fG * (fE.x - fu.width / 2),fI.lat + fG * (fE.y - fu.height / 2));
                        fu.centerPoint = fu.restrictCenter(fA, fG)
                    }
                    fu.fire(new aB("oncenter_changed"))
                }
            }
            if (fx.fromMouseWheel === true) {
                this._startInfiniteZoomAnimation(fx);
                return
            }
            this._startAnimation(fx)
        },
        _checkFireZoomend: function() {
            var e = this;
            if (e.fireZoomendTimer) {
                clearTimeout(e.fireZoomendTimer)
            }
            e.fireZoomendTimer = setTimeout(function() {
                if (e.zoomEventStatus === "zooming") {
                    e.fire(new aB("onzoomend"));
                    e.zoomEventStatus = "idle"
                }
                e.fireZoomendTimer = null
            }, 150)
        },
        deepZoomMedia: function(e) {
            var i = this;
            if (!i.temp.isStdCtrlBusy) {
                i.temp.isStdCtrlBusy = true;
                i.deepZoomTo(i.zoomLevel + e);
                setTimeout(function() {
                    i.temp.isStdCtrlBusy = false
                }, 400)
            }
        },
        deepZoomTo: function(e) {
            this.zoomTo(e)
        },
        flyToIn: function(fk, fP, fA) {
            fA = fA || {};
            var fm = this._getProperZoom(fP);
            fP = fm.zoom;
            if (this.centerPoint.equals(fk) && this.zoomLevel === fP && typeof fA.heading !== "number" && typeof fA.tilt !== "number") {
                return
            }
            var e = this.getHeading() % 360;
            var fs = this.getTilt();
            var fy = 0;
            var fC = 0;
            var fv = this.getBounds().containsPoint(fk);
            if (typeof fA.heading === "number") {
                fy = fA.heading
            } else {
                if (fv) {
                    fy = e
                }
            }
            if (typeof fA.tilt === "number") {
                fC = fA.tilt
            } else {
                if (fv) {
                    fC = fs
                }
            }
            this._heading = e;
            var fM = fy - e;
            var fI = fC - fs;
            var fw = this;
            var fo = this.zoomLevel;
            var fp = 1.42;
            var fE = this.zoomScale(fP - fo);
            var fR = this.getZoomUnits();
            var fu = this.centerPoint.div(fR);
            var fS = fk.div(fR);
            var fL = this.worldSize();
            var fH = fp;
            var fG = Math.max(this.width, this.height);
            var fF = fG / fE;
            var ft = fS.sub(fu).mag();
            var i = fH * fH;
            function fO(fU) {
                var fT = (fF * fF - fG * fG + (fU ? -1 : 1) * i * i * ft * ft) / (2 * (fU ? fF : fG) * i * ft);
                return Math.log(Math.sqrt(fT * fT + 1) - fT)
            }
            function fl(fT) {
                return (Math.exp(fT) - Math.exp(-fT)) / 2
            }
            function fq(fT) {
                return (Math.exp(fT) + Math.exp(-fT)) / 2
            }
            function fz(fT) {
                return fl(fT) / fq(fT)
            }
            var fr = fO(0);
            var fJ = function(fT) {
                return (fq(fr) / fq(fr + fH * fT))
            };
            var fK = function(fT) {
                return fG * ((fq(fr) * fz(fr + fH * fT) - fl(fr)) / i) / ft
            };
            var fn = (fO(1) - fr) / fH;
            if (Math.abs(ft) < 0.000001 || fn === Infinity || isNaN(fn)) {
                if (Math.abs(fG - fF) < 0.000001) {
                    this._animationInfo.zoom = {
                        current: this.zoomLevel,
                        diff: fP - this.zoomLevel
                    };
                    this._animationInfo.center = {
                        current: this.centerPoint,
                        diff: fk.sub(this.centerPoint)
                    };
                    this._animationInfo.heading = {
                        current: e,
                        diff: fy - e
                    };
                    this._animationInfo.tilt = {
                        current: fs,
                        diff: fC - fs
                    };
                    this.setLock(true);
                    this._startAnimation({
                        callback: function(fT) {
                            fw.setLock(false);
                            if (fA.callback) {
                                fA.callback(fT)
                            }
                        },
                        duration: fA.duration
                    });
                    return
                }
                var fQ = fF < fG ? -1 : 1;
                fn = Math.abs(Math.log(fF / fG)) / fH;
                fK = function() {
                    return 0
                }
                ;
                fJ = function(fT) {
                    return Math.exp(fQ * fH * fT)
                }
            }
            var fN = 1.7;
            if (fn < 0.3) {
                fN = 0.8
            } else {
                if (fn > 5) {
                    fN = (fn - 5) / 2 + fN
                }
            }
            var fB = fA.duration || 1000 * fn / fN;
            if (isNaN(fB)) {
                var fD = {};
                for (var fx in fA) {
                    fD[fx] = fA[fx];
                    fD.noAnimation = true
                }
                this.centerAndZoomIn(fk, fP, fD);
                return
            }
            this.fire(new aB("onmovestart"));
            this.fire(new aB("onzoomstart"));
            this.setLock(true);
            this._startAnimation({
                duration: fB,
                renderCallback: function(fT, fU) {
                    var fV = fT * fn;
                    var fY = fK(fV);
                    var fX = fo + fw.scaleZoom(1 / fJ(fV));
                    if (fX < fw.getMinZoom()) {
                        fX = fw.getMinZoom()
                    }
                    if (fX > fw.getMaxZoom()) {
                        fX = fw.getMaxZoom()
                    }
                    if (fX !== fw.zoomLevel) {
                        fw.zoomLevel = fX;
                        fw.fire(new aB("onzoom_changed"))
                    }
                    fw.centerPoint = fu.add(fS.sub(fu).mult(fY)).mult(fR);
                    fw.fire(new aB("oncenter_changed"));
                    if (typeof fy === "number") {
                        var fW = fT / 0.7;
                        if (fW > 1) {
                            fW = 1
                        }
                        fw.setHeading(e + fM * fT, {
                            noAnimation: true
                        })
                    }
                    if (typeof fC === "number") {
                        fw.setTilt(fs + fI * fT, {
                            noAnimation: true
                        })
                    }
                },
                callback: function(fT, fU) {
                    fw.setLock(false);
                    if (fU && fU.stop === true) {
                        fw.fire(new aB("onmoveend"));
                        fw.fire(new aB("onzoomend"));
                        fA.callback && fA.callback(fT);
                        return
                    }
                    if (fP !== fw.zoomLevel) {
                        fw.zoomLevel = fP;
                        fw.fire(new aB("onzoom_changed"))
                    }
                    fw.fire(new aB("onmoveend"));
                    fw.fire(new aB("onzoomend"));
                    fA.callback && fA.callback(fT)
                }
            })
        },
        zoomScale: function(e) {
            return Math.pow(2, e)
        },
        scaleZoom: function(e) {
            return Math.log(e) / Math.LN2
        },
        panToIn: function(i, fk) {
            fk = fk || {};
            if (!i || i.equals(this.centerPoint)) {
                fk.callback && fk.callback();
                return
            }
            var fl = this.pointToPixelIn(i);
            var e = Math.round(this.width / 2);
            var fn = Math.round(this.height / 2);
            var fm = this._ifUseAnimation(i, this.zoomLevel);
            if (fk.noAnimation === true || fm === false) {
                this._panToIn(e - fl.x, fn - fl.y, i);
                fk.callback && fk.callback();
                return
            }
            this.flyToIn(i, this.zoomLevel, fk)
        },
        _panToIn: function(i, e, fl) {
            var fk = this.temp;
            if (fk.operating === true) {
                return
            }
            if (fk.dragAni) {
                fk.dragAni.stop(false, {
                    readyToMove: true
                });
                fk.dragAni = null
            }
            this.dispatchEvent(new aB("onmovestart"));
            this._setPlatformPosition(i, e, {
                point: fl
            });
            this.dispatchEvent(new aB("onmoveend"))
        },
        panBy: function(i, e, fk) {
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            fk = fk || {};
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && fk.noAnimation !== true) {
                this._panBy(i, e, fk)
            } else {
                this._panToIn(i, e, fk.point);
                fk.callback && fk.callback()
            }
        },
        _panBy: function(i, e, fm) {
            if (this.temp.operating === true) {
                return
            }
            fm = fm || {};
            this.dispatchEvent(new aB("onmovestart"));
            var fl = this;
            var fk = fl.temp;
            fk.pl = fl.offsetX;
            fk.pt = fl.offsetY;
            if (fk.tlPan) {
                fk.tlPan.cancel()
            }
            if (fk.dragAni) {
                fk.dragAni.stop(false, {
                    readyToMove: true
                });
                fk.dragAni = null
            }
            fk.tlPan = new l({
                fps: fm.fps || fl.config.fps,
                duration: fm.duration || fl.config.actionDuration,
                transition: fm.transition || bq.easeInOutQuad,
                render: function(fn) {
                    this.terminative = fl.temp.operating;
                    if (fl.temp.operating) {
                        return
                    }
                    fl._setPlatformPosition(i * fn, e * fn, {
                        initMapOffsetX: fk.pl,
                        initMapOffsetY: fk.pt
                    })
                },
                finish: function(fn) {
                    fl.dispatchEvent(new aB("onmoveend"));
                    fl.temp.tlPan = false;
                    if (fl.temp.stopArrow === true) {
                        fl.temp.stopArrow = false;
                        if (fl.temp.arrow !== 0) {
                            fl._arrow()
                        }
                    }
                }
            })
        },
        _startAnimation: function(i) {
            var fm = this._animationInfo;
            var fk = this;
            i = i || {};
            if (fk._ani) {
                fk._ani.stop(!!i.goToEnd, {
                    stopCurrentAnimation: i.stopCurrentAnimation
                })
            }
            if (fk._infiniteAni) {
                fk._infiniteAni.stop();
                fk._infiniteAni = null
            }
            var fn = i.duration || 500;
            var fo = i.transition || bq.ease;
            var e = new aB("onanimation_start");
            this.fire(e);
            if (i.unstopable) {
                fm = this._animationInfoUnstopable
            }
            var fl = new l({
                duration: fn,
                transition: fo,
                render: function(fr, fq) {
                    for (var fp in fm) {
                        if (!fm.hasOwnProperty(fp)) {
                            continue
                        }
                        var ft = fm[fp].current;
                        var fs = fm[fp].diff;
                        fk._setValueTick(fp, ft, fs, fr)
                    }
                    if (i.renderCallback) {
                        i.renderCallback(fr, fq)
                    }
                },
                finish: function(fp) {
                    fk.fire(new aB("onanimation_end"));
                    if (i.unstopable) {
                        fk._animationInfoUnstopable = {};
                        fk._unstopableAni = null
                    } else {
                        fk._ani = null;
                        fk._animationInfo = {}
                    }
                    if (i.mapNeedCbk) {
                        i.mapNeedCbk()
                    }
                    if (i.callback) {
                        i.callback(fp)
                    }
                },
                onStop: function(fp) {
                    fp = fp || {};
                    fk.fire(new aB("onanimation_end"));
                    if (fp.stopCurrentAnimation) {
                        fk._animationInfo = {}
                    }
                    fk._ani = null;
                    if (i.mapNeedCbk) {
                        i.mapNeedCbk()
                    }
                    if (i.callback) {
                        i.callback(null, {
                            stop: true
                        })
                    }
                }
            });
            if (i.unstopable) {
                fk._unstopableAni = fl
            } else {
                fk._ani = fl
            }
        },
        _startInfiniteZoomAnimation: function(e) {
            var i = this;
            if (i._ani) {
                i._ani.stop(!!e.goToEnd, {
                    stopCurrentAnimation: e.stopCurrentAnimation
                })
            }
            if (i._infiniteAni) {
                return
            }
            this.fire(new aB("onanimation_start"));
            i._infiniteAni = new l({
                duration: 10000,
                transition: bq.linear,
                render: function() {
                    var fk = i._animationInfo.zoom;
                    if (Math.abs(fk.current - fk.target) < 0.001) {
                        i._setValue("zoom", fk.target);
                        i._infiniteAni.stop();
                        return
                    }
                    fk.current += (fk.target - fk.current) * 0.35;
                    i._setValue("zoom", fk.current);
                    if (e.renderCallback) {
                        e.renderCallback()
                    }
                },
                finish: function() {
                    i._infiniteAni = null;
                    i._animationInfo = {};
                    i.fire(new aB("onanimation_end"));
                    if (e.callback) {
                        e.callback()
                    }
                },
                onStop: function() {
                    i._infiniteAni = null;
                    i._animationInfo = {};
                    i.fire(new aB("onanimation_end"));
                    if (e.callback) {
                        e.callback()
                    }
                }
            })
        },
        _setValue: function(e, fk) {
            if (e === "zoom") {
                this._preZoomLevel = this.zoomLevel;
                var i = this._getProperZoom(fk);
                fk = i.zoom;
                if (fk !== this.zoomLevel) {
                    this.zoomLevel = fk;
                    if (fk < 5) {
                        this.restrictCenter(this.centerPoint)
                    }
                    this.fire(new aB("on" + e + "_changed"))
                }
                return
            } else {
                if (e === "center") {
                    this.centerPoint = fk
                }
            }
            this["_" + e] = fk;
            this.fire(new aB("on" + e + "_changed"))
        },
        _setValueTick: function(e, fm, fl, i) {
            if (e === "center") {
                var fk = new e2(fm.lng + fl.lng * i,fm.lat + fl.lat * i);
                this._setValue(e, fk);
                return
            }
            if (e === "zoom") {
                this._setValue(e, Math.pow(fm, 1 - i) * Math.pow(fm + fl, i));
                return
            }
            this._setValue(e, fm + fl * i)
        },
        setHeading: function(fl, i) {
            i = i || {};
            if (fl === this._heading) {
                i.callback && i.callback();
                return
            }
            var fk = d1(this._heading, 360);
            var e = d1(fl, 360);
            if (e === fk) {
                this._heading = fl;
                i.callback && i.callback();
                return
            }
            if (i.noAnimation) {
                this._setValue("heading", fl);
                i.callback && i.callback();
                return
            }
            if (i.unstopable) {
                this._animationInfoUnstopable.heading = {
                    current: this._heading,
                    diff: fl - this._heading
                }
            } else {
                this._animationInfo.heading = {
                    current: this._heading,
                    diff: fl - this._heading
                }
            }
            this._startAnimation(i)
        },
        resetHeading: function(e) {
            var i = this._heading;
            while (i < 0) {
                i += 360
            }
            i = i % 360;
            if (i > 180) {
                i -= 360
            }
            this._heading = i;
            e = e || {};
            e.unstopable = true;
            this.setHeading(0, e)
        },
        getHeading: function() {
            return this._heading
        },
        setTilt: function(e, i) {
            i = i || {};
            if (e === this._tilt) {
                i.callback && i.callback();
                return
            }
            if (e > bU.MAX_TILT) {
                e = bU.MAX_TILT
            }
            if (e < bU.MIN_TILT) {
                e = bU.MIN_TILT
            }
            if (i && i.noAnimation) {
                this._setValue("tilt", e);
                i.callback && i.callback();
                return
            }
            this._animationInfo.tilt = {
                current: this._tilt,
                diff: e - this._tilt
            };
            this._startAnimation(i)
        },
        getTilt: function() {
            return this._tilt
        },
        getCenterIn: function() {
            return this.centerPoint
        },
        getZoom: function() {
            return this.zoomLevel
        },
        getCameraPosition: function(fk) {
            fk = fk || {};
            var e = fk.center || this.centerPoint;
            var fl = fk.zoom || this.zoomLevel;
            var fo = typeof fk.heading === "number" ? fk.heading : this._heading;
            var i = typeof fk.tilt === "number" ? fk.tilt : this._tilt;
            var fn = this._webglMapCamera.generateMVMatrix(e, fl, fo, i);
            var fm = mat4.create(Float32Array);
            mat4.invert(fm, fn);
            return this._webglMapCamera.getPosition(fm)
        }
    });
    function dT(i) {
        this._jobQueue = [];
        this._idleOnlyJobQueue = [];
        var e = this;
        this.isIdle = true;
        i.on("updateframe", function(fl) {
            var fk = 12 - fl.frameTime;
            fk = fk < 1 ? 1 : fk;
            e.isIdle = false;
            if (e.idleWorkTimer) {
                clearInterval(e.idleWorkTimer);
                e.idleWorkTimer = null
            }
            e.runJobs(fk)
        });
        this._idleWorkerTicker = (function(fk) {
            return function() {
                if (fk.isIdle) {
                    fk.runJobs();
                    fk.runIdleOnlyJobs()
                }
            }
        }
        )(this);
        i.on("mapglidle", function() {
            e.isIdle = true;
            e.runJobs();
            e.runIdleOnlyJobs();
            e.idleWorkTimer = setInterval(e._idleWorkerTicker, dT.MAX_IDLE_TIME)
        })
    }
    dT.MAX_IDLE_TIME = 50;
    dT.MAX_FRAME_TIME = 6;
    dT.prototype.runJobs = function(i) {
        if (this._jobQueue.length === 0) {
            return
        }
        var fl = dJ();
        var e = 0;
        i = i || dT.MAX_FRAME_TIME;
        while (this._jobQueue.length && e < i) {
            var fk = this._jobQueue.shift();
            if (fk.state !== "invalid") {
                fk.call()
            }
            e = dJ() - fl
        }
    }
    ;
    dT.prototype.runIdleOnlyJobs = function() {
        if (this._idleOnlyJobQueue.length === 0) {
            return
        }
        var fk = dJ();
        var e = 0;
        while (this._idleOnlyJobQueue.length && e < dT.MAX_IDLE_TIME) {
            var i = this._idleOnlyJobQueue.shift();
            if (i.state !== "invalid") {
                i.call()
            }
            e = dJ() - fk
        }
    }
    ;
    dT.prototype.checkIdleRunning = function() {
        if (this.isIdle && !this.idleWorkTimer) {
            this.runJobs();
            this.runIdleOnlyJobs();
            this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50)
        }
    }
    ;
    dT.prototype.addJob = function(e) {
        this._jobQueue.push(e);
        this.checkIdleRunning()
    }
    ;
    dT.prototype.clearJobs = function() {
        this._jobQueue.length = 0;
        this._idleOnlyJobQueue.length = 0
    }
    ;
    dT.prototype.addIdleOnlyJob = function(e) {
        this._idleOnlyJobQueue.push(e);
        this.checkIdleRunning()
    }
    ;
    var bi = {};
    (function(fo) {
        if (!fs) {
            var fs = 0.000001
        }
        if (!i) {
            var i = (typeof Float32Array !== "undefined") ? Float32Array : Array
        }
        if (!fm) {
            var fm = Math.random
        }
        var fk = {};
        var fn = Math.PI / 180;
        fk.toRadian = function(ft) {
            return ft * fn
        }
        ;
        var fr = {};
        fr.create = function(fu) {
            fu = fu || i;
            var ft = new fu(2);
            ft[0] = 0;
            ft[1] = 0;
            return ft
        }
        ;
        fr.clone = function(ft, fv) {
            fv = fv || i;
            var fu = new fv(2);
            fu[0] = ft[0];
            fu[1] = ft[1];
            return fu
        }
        ;
        fr.fromValues = function(ft, fw, fv) {
            fv = fv || i;
            var fu = new fv(2);
            fu[0] = ft;
            fu[1] = fw;
            return fu
        }
        ;
        fr.copy = function(fu, ft) {
            fu[0] = ft[0];
            fu[1] = ft[1];
            return fu
        }
        ;
        fr.set = function(fu, ft, fv) {
            fu[0] = ft;
            fu[1] = fv;
            return fu
        }
        ;
        fr.add = function(fv, fu, ft) {
            fv[0] = fu[0] + ft[0];
            fv[1] = fu[1] + ft[1];
            return fv
        }
        ;
        fr.subtract = function(fv, fu, ft) {
            fv[0] = fu[0] - ft[0];
            fv[1] = fu[1] - ft[1];
            return fv
        }
        ;
        fr.sub = fr.subtract;
        fr.multiply = function(fv, fu, ft) {
            fv[0] = fu[0] * ft[0];
            fv[1] = fu[1] * ft[1];
            return fv
        }
        ;
        fr.mul = fr.multiply;
        fr.divide = function(fv, fu, ft) {
            fv[0] = fu[0] / ft[0];
            fv[1] = fu[1] / ft[1];
            return fv
        }
        ;
        fr.div = fr.divide;
        fr.min = function(fv, fu, ft) {
            fv[0] = Math.min(fu[0], ft[0]);
            fv[1] = Math.min(fu[1], ft[1]);
            return fv
        }
        ;
        fr.max = function(fv, fu, ft) {
            fv[0] = Math.max(fu[0], ft[0]);
            fv[1] = Math.max(fu[1], ft[1]);
            return fv
        }
        ;
        fr.scale = function(fv, fu, ft) {
            fv[0] = fu[0] * ft;
            fv[1] = fu[1] * ft;
            return fv
        }
        ;
        fr.scaleAndAdd = function(fv, fu, ft, fw) {
            fv[0] = fu[0] + (ft[0] * fw);
            fv[1] = fu[1] + (ft[1] * fw);
            return fv
        }
        ;
        fr.distance = function(fv, fu) {
            var ft = fu[0] - fv[0]
              , fw = fu[1] - fv[1];
            return Math.sqrt(ft * ft + fw * fw)
        }
        ;
        fr.dist = fr.distance;
        fr.squaredDistance = function(fv, fu) {
            var ft = fu[0] - fv[0]
              , fw = fu[1] - fv[1];
            return ft * ft + fw * fw
        }
        ;
        fr.sqrDist = fr.squaredDistance;
        fr.length = function(fu) {
            var ft = fu[0]
              , fv = fu[1];
            return Math.sqrt(ft * ft + fv * fv)
        }
        ;
        fr.len = fr.length;
        fr.squaredLength = function(fu) {
            var ft = fu[0]
              , fv = fu[1];
            return ft * ft + fv * fv
        }
        ;
        fr.sqrLen = fr.squaredLength;
        fr.negate = function(fu, ft) {
            fu[0] = -ft[0];
            fu[1] = -ft[1];
            return fu
        }
        ;
        fr.normalize = function(fw, fv) {
            var fu = fv[0]
              , fx = fv[1];
            var ft = fu * fu + fx * fx;
            if (ft > 0) {
                ft = 1 / Math.sqrt(ft);
                fw[0] = fv[0] * ft;
                fw[1] = fv[1] * ft
            }
            return fw
        }
        ;
        fr.dot = function(fu, ft) {
            return fu[0] * ft[0] + fu[1] * ft[1]
        }
        ;
        fr.cross = function(fv, fu, ft) {
            var fw = fu[0] * ft[1] - fu[1] * ft[0];
            fv[0] = fv[1] = 0;
            fv[2] = fw;
            return fv
        }
        ;
        fr.lerp = function(fv, fu, ft, fw) {
            var fy = fu[0]
              , fx = fu[1];
            fv[0] = fy + fw * (ft[0] - fy);
            fv[1] = fx + fw * (ft[1] - fx);
            return fv
        }
        ;
        fr.random = function(ft, fv) {
            fv = fv || 1;
            var fu = fm() * 2 * Math.PI;
            ft[0] = Math.cos(fu) * fv;
            ft[1] = Math.sin(fu) * fv;
            return ft
        }
        ;
        fr.transformMat2 = function(fw, fv, fu) {
            var ft = fv[0]
              , fx = fv[1];
            fw[0] = fu[0] * ft + fu[2] * fx;
            fw[1] = fu[1] * ft + fu[3] * fx;
            return fw
        }
        ;
        fr.transformMat2d = function(fw, fv, fu) {
            var ft = fv[0]
              , fx = fv[1];
            fw[0] = fu[0] * ft + fu[2] * fx + fu[4];
            fw[1] = fu[1] * ft + fu[3] * fx + fu[5];
            return fw
        }
        ;
        fr.transformMat3 = function(fw, fv, fu) {
            var ft = fv[0]
              , fx = fv[1];
            fw[0] = fu[0] * ft + fu[3] * fx + fu[6];
            fw[1] = fu[1] * ft + fu[4] * fx + fu[7];
            return fw
        }
        ;
        fr.transformMat4 = function(fw, fv, fu) {
            var ft = fv[0]
              , fx = fv[1];
            fw[0] = fu[0] * ft + fu[4] * fx + fu[12];
            fw[1] = fu[1] * ft + fu[5] * fx + fu[13];
            return fw
        }
        ;
        fr.rotate = function(fw, fu, ft, fA) {
            var fz = fu[0] - ft[0];
            var fy = fu[1] - ft[1];
            var fv = Math.sin(fA);
            var fx = Math.cos(fA);
            fw[0] = fz * fx - fy * fv + ft[0];
            fw[1] = fz * fv + fy * fx + ft[1];
            return fw
        }
        ;
        fr.forEach = (function() {
            var ft = fr.create();
            return function(fw, fA, fB, fz, fy, fu) {
                var fx, fv;
                if (!fA) {
                    fA = 2
                }
                if (!fB) {
                    fB = 0
                }
                if (fz) {
                    fv = Math.min((fz * fA) + fB, fw.length)
                } else {
                    fv = fw.length
                }
                for (fx = fB; fx < fv; fx += fA) {
                    ft[0] = fw[fx];
                    ft[1] = fw[fx + 1];
                    fy(ft, ft, fu);
                    fw[fx] = ft[0];
                    fw[fx + 1] = ft[1]
                }
                return fw
            }
        }
        )();
        fr.str = function(ft) {
            return "vec2(" + ft[0] + ", " + ft[1] + ")"
        }
        ;
        fo.vec2 = fr;
        var fq = {};
        fq.create = function(fu) {
            fu = fu || i;
            var ft = new fu(3);
            ft[0] = 0;
            ft[1] = 0;
            ft[2] = 0;
            return ft
        }
        ;
        fq.clone = function(ft, fv) {
            fv = fv || i;
            var fu = new fv(3);
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            return fu
        }
        ;
        fq.fromValues = function(ft, fx, fv, fw) {
            fw = fw || i;
            var fu = new fw(3);
            fu[0] = ft;
            fu[1] = fx;
            fu[2] = fv;
            return fu
        }
        ;
        fq.copy = function(fu, ft) {
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            return fu
        }
        ;
        fq.set = function(fu, ft, fw, fv) {
            fu[0] = ft;
            fu[1] = fw;
            fu[2] = fv;
            return fu
        }
        ;
        fq.add = function(fv, fu, ft) {
            fv[0] = fu[0] + ft[0];
            fv[1] = fu[1] + ft[1];
            fv[2] = fu[2] + ft[2];
            return fv
        }
        ;
        fq.subtract = function(fv, fu, ft) {
            fv[0] = fu[0] - ft[0];
            fv[1] = fu[1] - ft[1];
            fv[2] = fu[2] - ft[2];
            return fv
        }
        ;
        fq.sub = fq.subtract;
        fq.multiply = function(fv, fu, ft) {
            fv[0] = fu[0] * ft[0];
            fv[1] = fu[1] * ft[1];
            fv[2] = fu[2] * ft[2];
            return fv
        }
        ;
        fq.mul = fq.multiply;
        fq.divide = function(fv, fu, ft) {
            fv[0] = fu[0] / ft[0];
            fv[1] = fu[1] / ft[1];
            fv[2] = fu[2] / ft[2];
            return fv
        }
        ;
        fq.div = fq.divide;
        fq.min = function(fv, fu, ft) {
            fv[0] = Math.min(fu[0], ft[0]);
            fv[1] = Math.min(fu[1], ft[1]);
            fv[2] = Math.min(fu[2], ft[2]);
            return fv
        }
        ;
        fq.max = function(fv, fu, ft) {
            fv[0] = Math.max(fu[0], ft[0]);
            fv[1] = Math.max(fu[1], ft[1]);
            fv[2] = Math.max(fu[2], ft[2]);
            return fv
        }
        ;
        fq.scale = function(fv, fu, ft) {
            fv[0] = fu[0] * ft;
            fv[1] = fu[1] * ft;
            fv[2] = fu[2] * ft;
            return fv
        }
        ;
        fq.scaleAndAdd = function(fv, fu, ft, fw) {
            fv[0] = fu[0] + (ft[0] * fw);
            fv[1] = fu[1] + (ft[1] * fw);
            fv[2] = fu[2] + (ft[2] * fw);
            return fv
        }
        ;
        fq.distance = function(fv, fu) {
            var ft = fu[0] - fv[0]
              , fx = fu[1] - fv[1]
              , fw = fu[2] - fv[2];
            return Math.sqrt(ft * ft + fx * fx + fw * fw)
        }
        ;
        fq.dist = fq.distance;
        fq.squaredDistance = function(fv, fu) {
            var ft = fu[0] - fv[0]
              , fx = fu[1] - fv[1]
              , fw = fu[2] - fv[2];
            return ft * ft + fx * fx + fw * fw
        }
        ;
        fq.sqrDist = fq.squaredDistance;
        fq.length = function(fu) {
            var ft = fu[0]
              , fw = fu[1]
              , fv = fu[2];
            return Math.sqrt(ft * ft + fw * fw + fv * fv)
        }
        ;
        fq.len = fq.length;
        fq.squaredLength = function(fu) {
            var ft = fu[0]
              , fw = fu[1]
              , fv = fu[2];
            return ft * ft + fw * fw + fv * fv
        }
        ;
        fq.sqrLen = fq.squaredLength;
        fq.negate = function(fu, ft) {
            fu[0] = -ft[0];
            fu[1] = -ft[1];
            fu[2] = -ft[2];
            return fu
        }
        ;
        fq.normalize = function(fw, fv) {
            var fu = fv[0]
              , fy = fv[1]
              , fx = fv[2];
            var ft = fu * fu + fy * fy + fx * fx;
            if (ft > 0) {
                ft = 1 / Math.sqrt(ft);
                fw[0] = fv[0] * ft;
                fw[1] = fv[1] * ft;
                fw[2] = fv[2] * ft
            }
            return fw
        }
        ;
        fq.dot = function(fu, ft) {
            return fu[0] * ft[0] + fu[1] * ft[1] + fu[2] * ft[2]
        }
        ;
        fq.cross = function(fu, fz, fy) {
            var ft = fz[0]
              , fB = fz[1]
              , fA = fz[2]
              , fx = fy[0]
              , fw = fy[1]
              , fv = fy[2];
            fu[0] = fB * fv - fA * fw;
            fu[1] = fA * fx - ft * fv;
            fu[2] = ft * fw - fB * fx;
            return fu
        }
        ;
        fq.lerp = function(fv, fu, ft, fw) {
            var fz = fu[0]
              , fy = fu[1]
              , fx = fu[2];
            fv[0] = fz + fw * (ft[0] - fz);
            fv[1] = fy + fw * (ft[1] - fy);
            fv[2] = fx + fw * (ft[2] - fx);
            return fv
        }
        ;
        fq.random = function(ft, fx) {
            fx = fx || 1;
            var fv = fm() * 2 * Math.PI;
            var fw = (fm() * 2) - 1;
            var fu = Math.sqrt(1 - fw * fw) * fx;
            ft[0] = Math.cos(fv) * fu;
            ft[1] = Math.sin(fv) * fu;
            ft[2] = fw * fx;
            return ft
        }
        ;
        fq.transformMat4 = function(fw, fv, fu) {
            var ft = fv[0]
              , fy = fv[1]
              , fx = fv[2];
            fw[0] = fu[0] * ft + fu[4] * fy + fu[8] * fx + fu[12];
            fw[1] = fu[1] * ft + fu[5] * fy + fu[9] * fx + fu[13];
            fw[2] = fu[2] * ft + fu[6] * fy + fu[10] * fx + fu[14];
            return fw
        }
        ;
        fq.transformMat3 = function(fw, fv, fu) {
            var ft = fv[0]
              , fy = fv[1]
              , fx = fv[2];
            fw[0] = ft * fu[0] + fy * fu[3] + fx * fu[6];
            fw[1] = ft * fu[1] + fy * fu[4] + fx * fu[7];
            fw[2] = ft * fu[2] + fy * fu[5] + fx * fu[8];
            return fw
        }
        ;
        fq.transformQuat = function(fz, fF, ft) {
            var fG = fF[0]
              , fE = fF[1]
              , fD = fF[2]
              , fB = ft[0]
              , fA = ft[1]
              , fy = ft[2]
              , fC = ft[3]
              , fw = fC * fG + fA * fD - fy * fE
              , fv = fC * fE + fy * fG - fB * fD
              , fu = fC * fD + fB * fE - fA * fG
              , fx = -fB * fG - fA * fE - fy * fD;
            fz[0] = fw * fC + fx * -fB + fv * -fy - fu * -fA;
            fz[1] = fv * fC + fx * -fA + fu * -fB - fw * -fy;
            fz[2] = fu * fC + fx * -fy + fw * -fA - fv * -fB;
            return fz
        }
        ;
        fq.rotateX = function(fv, fu, ft, fy) {
            var fx = []
              , fw = [];
            fx[0] = fu[0] - ft[0];
            fx[1] = fu[1] - ft[1];
            fx[2] = fu[2] - ft[2];
            fw[0] = fx[0];
            fw[1] = fx[1] * Math.cos(fy) - fx[2] * Math.sin(fy);
            fw[2] = fx[1] * Math.sin(fy) + fx[2] * Math.cos(fy);
            fv[0] = fw[0] + ft[0];
            fv[1] = fw[1] + ft[1];
            fv[2] = fw[2] + ft[2];
            return fv
        }
        ;
        fq.rotateY = function(fv, fu, ft, fy) {
            var fx = []
              , fw = [];
            fx[0] = fu[0] - ft[0];
            fx[1] = fu[1] - ft[1];
            fx[2] = fu[2] - ft[2];
            fw[0] = fx[2] * Math.sin(fy) + fx[0] * Math.cos(fy);
            fw[1] = fx[1];
            fw[2] = fx[2] * Math.cos(fy) - fx[0] * Math.sin(fy);
            fv[0] = fw[0] + ft[0];
            fv[1] = fw[1] + ft[1];
            fv[2] = fw[2] + ft[2];
            return fv
        }
        ;
        fq.rotateZ = function(fv, fu, ft, fy) {
            var fx = []
              , fw = [];
            fx[0] = fu[0] - ft[0];
            fx[1] = fu[1] - ft[1];
            fx[2] = fu[2] - ft[2];
            fw[0] = fx[0] * Math.cos(fy) - fx[1] * Math.sin(fy);
            fw[1] = fx[0] * Math.sin(fy) + fx[1] * Math.cos(fy);
            fw[2] = fx[2];
            fv[0] = fw[0] + ft[0];
            fv[1] = fw[1] + ft[1];
            fv[2] = fw[2] + ft[2];
            return fv
        }
        ;
        fq.forEach = (function() {
            var ft = fq.create();
            return function(fw, fA, fB, fz, fy, fu) {
                var fx, fv;
                if (!fA) {
                    fA = 3
                }
                if (!fB) {
                    fB = 0
                }
                if (fz) {
                    fv = Math.min((fz * fA) + fB, fw.length)
                } else {
                    fv = fw.length
                }
                for (fx = fB; fx < fv; fx += fA) {
                    ft[0] = fw[fx];
                    ft[1] = fw[fx + 1];
                    ft[2] = fw[fx + 2];
                    fy(ft, ft, fu);
                    fw[fx] = ft[0];
                    fw[fx + 1] = ft[1];
                    fw[fx + 2] = ft[2]
                }
                return fw
            }
        }
        )();
        fq.str = function(ft) {
            return "vec3(" + ft[0] + ", " + ft[1] + ", " + ft[2] + ")"
        }
        ;
        fo.vec3 = fq;
        var fp = {};
        fp.create = function(fu) {
            fu = fu || i;
            var ft = new fu(4);
            ft[0] = 0;
            ft[1] = 0;
            ft[2] = 0;
            ft[3] = 0;
            return ft
        }
        ;
        fp.clone = function(ft, fv) {
            fv = fv || i;
            var fu = new fv(4);
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            return fu
        }
        ;
        fp.fromValues = function(ft, fy, fw, fu, fx) {
            fx = fx || i;
            var fv = new fx(4);
            fv[0] = ft;
            fv[1] = fy;
            fv[2] = fw;
            fv[3] = fu;
            return fv
        }
        ;
        fp.copy = function(fu, ft) {
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            return fu
        }
        ;
        fp.set = function(fv, ft, fx, fw, fu) {
            fv[0] = ft;
            fv[1] = fx;
            fv[2] = fw;
            fv[3] = fu;
            return fv
        }
        ;
        fp.add = function(fv, fu, ft) {
            fv[0] = fu[0] + ft[0];
            fv[1] = fu[1] + ft[1];
            fv[2] = fu[2] + ft[2];
            fv[3] = fu[3] + ft[3];
            return fv
        }
        ;
        fp.subtract = function(fv, fu, ft) {
            fv[0] = fu[0] - ft[0];
            fv[1] = fu[1] - ft[1];
            fv[2] = fu[2] - ft[2];
            fv[3] = fu[3] - ft[3];
            return fv
        }
        ;
        fp.sub = fp.subtract;
        fp.multiply = function(fv, fu, ft) {
            fv[0] = fu[0] * ft[0];
            fv[1] = fu[1] * ft[1];
            fv[2] = fu[2] * ft[2];
            fv[3] = fu[3] * ft[3];
            return fv
        }
        ;
        fp.mul = fp.multiply;
        fp.divide = function(fv, fu, ft) {
            fv[0] = fu[0] / ft[0];
            fv[1] = fu[1] / ft[1];
            fv[2] = fu[2] / ft[2];
            fv[3] = fu[3] / ft[3];
            return fv
        }
        ;
        fp.div = fp.divide;
        fp.min = function(fv, fu, ft) {
            fv[0] = Math.min(fu[0], ft[0]);
            fv[1] = Math.min(fu[1], ft[1]);
            fv[2] = Math.min(fu[2], ft[2]);
            fv[3] = Math.min(fu[3], ft[3]);
            return fv
        }
        ;
        fp.max = function(fv, fu, ft) {
            fv[0] = Math.max(fu[0], ft[0]);
            fv[1] = Math.max(fu[1], ft[1]);
            fv[2] = Math.max(fu[2], ft[2]);
            fv[3] = Math.max(fu[3], ft[3]);
            return fv
        }
        ;
        fp.scale = function(fv, fu, ft) {
            fv[0] = fu[0] * ft;
            fv[1] = fu[1] * ft;
            fv[2] = fu[2] * ft;
            fv[3] = fu[3] * ft;
            return fv
        }
        ;
        fp.scaleAndAdd = function(fv, fu, ft, fw) {
            fv[0] = fu[0] + (ft[0] * fw);
            fv[1] = fu[1] + (ft[1] * fw);
            fv[2] = fu[2] + (ft[2] * fw);
            fv[3] = fu[3] + (ft[3] * fw);
            return fv
        }
        ;
        fp.distance = function(fw, fu) {
            var ft = fu[0] - fw[0]
              , fy = fu[1] - fw[1]
              , fx = fu[2] - fw[2]
              , fv = fu[3] - fw[3];
            return Math.sqrt(ft * ft + fy * fy + fx * fx + fv * fv)
        }
        ;
        fp.dist = fp.distance;
        fp.squaredDistance = function(fw, fu) {
            var ft = fu[0] - fw[0]
              , fy = fu[1] - fw[1]
              , fx = fu[2] - fw[2]
              , fv = fu[3] - fw[3];
            return ft * ft + fy * fy + fx * fx + fv * fv
        }
        ;
        fp.sqrDist = fp.squaredDistance;
        fp.length = function(fv) {
            var ft = fv[0]
              , fx = fv[1]
              , fw = fv[2]
              , fu = fv[3];
            return Math.sqrt(ft * ft + fx * fx + fw * fw + fu * fu)
        }
        ;
        fp.len = fp.length;
        fp.squaredLength = function(fv) {
            var ft = fv[0]
              , fx = fv[1]
              , fw = fv[2]
              , fu = fv[3];
            return ft * ft + fx * fx + fw * fw + fu * fu
        }
        ;
        fp.sqrLen = fp.squaredLength;
        fp.negate = function(fu, ft) {
            fu[0] = -ft[0];
            fu[1] = -ft[1];
            fu[2] = -ft[2];
            fu[3] = -ft[3];
            return fu
        }
        ;
        fp.normalize = function(fx, fw) {
            var fu = fw[0]
              , fz = fw[1]
              , fy = fw[2]
              , fv = fw[3];
            var ft = fu * fu + fz * fz + fy * fy + fv * fv;
            if (ft > 0) {
                ft = 1 / Math.sqrt(ft);
                fx[0] = fw[0] * ft;
                fx[1] = fw[1] * ft;
                fx[2] = fw[2] * ft;
                fx[3] = fw[3] * ft
            }
            return fx
        }
        ;
        fp.dot = function(fu, ft) {
            return fu[0] * ft[0] + fu[1] * ft[1] + fu[2] * ft[2] + fu[3] * ft[3]
        }
        ;
        fp.lerp = function(fv, fu, ft, fw) {
            var fz = fu[0]
              , fy = fu[1]
              , fx = fu[2]
              , fA = fu[3];
            fv[0] = fz + fw * (ft[0] - fz);
            fv[1] = fy + fw * (ft[1] - fy);
            fv[2] = fx + fw * (ft[2] - fx);
            fv[3] = fA + fw * (ft[3] - fA);
            return fv
        }
        ;
        fp.random = function(ft, fu) {
            fu = fu || 1;
            ft[0] = fm();
            ft[1] = fm();
            ft[2] = fm();
            ft[3] = fm();
            fp.normalize(ft, ft);
            fp.scale(ft, ft, fu);
            return ft
        }
        ;
        fp.transformMat4 = function(fx, fw, fu) {
            var ft = fw[0]
              , fz = fw[1]
              , fy = fw[2]
              , fv = fw[3];
            fx[0] = fu[0] * ft + fu[4] * fz + fu[8] * fy + fu[12] * fv;
            fx[1] = fu[1] * ft + fu[5] * fz + fu[9] * fy + fu[13] * fv;
            fx[2] = fu[2] * ft + fu[6] * fz + fu[10] * fy + fu[14] * fv;
            fx[3] = fu[3] * ft + fu[7] * fz + fu[11] * fy + fu[15] * fv;
            return fx
        }
        ;
        fp.transformQuat = function(fz, fF, ft) {
            var fG = fF[0]
              , fE = fF[1]
              , fD = fF[2]
              , fB = ft[0]
              , fA = ft[1]
              , fy = ft[2]
              , fC = ft[3]
              , fw = fC * fG + fA * fD - fy * fE
              , fv = fC * fE + fy * fG - fB * fD
              , fu = fC * fD + fB * fE - fA * fG
              , fx = -fB * fG - fA * fE - fy * fD;
            fz[0] = fw * fC + fx * -fB + fv * -fy - fu * -fA;
            fz[1] = fv * fC + fx * -fA + fu * -fB - fw * -fy;
            fz[2] = fu * fC + fx * -fy + fw * -fA - fv * -fB;
            return fz
        }
        ;
        fp.forEach = (function() {
            var ft = fp.create();
            return function(fw, fA, fB, fz, fy, fu) {
                var fx, fv;
                if (!fA) {
                    fA = 4
                }
                if (!fB) {
                    fB = 0
                }
                if (fz) {
                    fv = Math.min((fz * fA) + fB, fw.length)
                } else {
                    fv = fw.length
                }
                for (fx = fB; fx < fv; fx += fA) {
                    ft[0] = fw[fx];
                    ft[1] = fw[fx + 1];
                    ft[2] = fw[fx + 2];
                    ft[3] = fw[fx + 3];
                    fy(ft, ft, fu);
                    fw[fx] = ft[0];
                    fw[fx + 1] = ft[1];
                    fw[fx + 2] = ft[2];
                    fw[fx + 3] = ft[3]
                }
                return fw
            }
        }
        )();
        fp.str = function(ft) {
            return "vec4(" + ft[0] + ", " + ft[1] + ", " + ft[2] + ", " + ft[3] + ")"
        }
        ;
        fo.vec4 = fp;
        var fl = {};
        fl.create = function(fu) {
            fu = fu || i;
            var ft = new fu(4);
            ft[0] = 1;
            ft[1] = 0;
            ft[2] = 0;
            ft[3] = 1;
            return ft
        }
        ;
        fl.clone = function(ft, fv) {
            fv = fv || i;
            var fu = new fv(4);
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            return fu
        }
        ;
        fl.copy = function(fu, ft) {
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            return fu
        }
        ;
        fl.identity = function(ft) {
            ft[0] = 1;
            ft[1] = 0;
            ft[2] = 0;
            ft[3] = 1;
            return ft
        }
        ;
        fl.transpose = function(fv, fu) {
            if (fv === fu) {
                var ft = fu[1];
                fv[1] = fu[2];
                fv[2] = ft
            } else {
                fv[0] = fu[0];
                fv[1] = fu[2];
                fv[2] = fu[1];
                fv[3] = fu[3]
            }
            return fv
        }
        ;
        fl.invert = function(fx, fv) {
            var fw = fv[0]
              , fu = fv[1]
              , ft = fv[2]
              , fz = fv[3]
              , fy = fw * fz - ft * fu;
            if (!fy) {
                return null
            }
            fy = 1 / fy;
            fx[0] = fz * fy;
            fx[1] = -fu * fy;
            fx[2] = -ft * fy;
            fx[3] = fw * fy;
            return fx
        }
        ;
        fl.adjoint = function(fv, ft) {
            var fu = ft[0];
            fv[0] = ft[3];
            fv[1] = -ft[1];
            fv[2] = -ft[2];
            fv[3] = fu;
            return fv
        }
        ;
        fl.determinant = function(ft) {
            return ft[0] * ft[3] - ft[2] * ft[1]
        }
        ;
        fl.multiply = function(fx, fC, fA) {
            var fw = fC[0]
              , fv = fC[1]
              , fu = fC[2]
              , ft = fC[3];
            var fD = fA[0]
              , fB = fA[1]
              , fz = fA[2]
              , fy = fA[3];
            fx[0] = fw * fD + fu * fB;
            fx[1] = fv * fD + ft * fB;
            fx[2] = fw * fz + fu * fy;
            fx[3] = fv * fz + ft * fy;
            return fx
        }
        ;
        fl.mul = fl.multiply;
        fl.rotate = function(fx, fA, fz) {
            var fw = fA[0]
              , fv = fA[1]
              , fu = fA[2]
              , ft = fA[3]
              , fB = Math.sin(fz)
              , fy = Math.cos(fz);
            fx[0] = fw * fy + fu * fB;
            fx[1] = fv * fy + ft * fB;
            fx[2] = fw * -fB + fu * fy;
            fx[3] = fv * -fB + ft * fy;
            return fx
        }
        ;
        fl.scale = function(fx, fy, fA) {
            var fw = fy[0]
              , fv = fy[1]
              , fu = fy[2]
              , ft = fy[3]
              , fB = fA[0]
              , fz = fA[1];
            fx[0] = fw * fB;
            fx[1] = fv * fB;
            fx[2] = fu * fz;
            fx[3] = ft * fz;
            return fx
        }
        ;
        fl.str = function(ft) {
            return "mat2(" + ft[0] + ", " + ft[1] + ", " + ft[2] + ", " + ft[3] + ")"
        }
        ;
        fl.frob = function(ft) {
            return (Math.sqrt(Math.pow(ft[0], 2) + Math.pow(ft[1], 2) + Math.pow(ft[2], 2) + Math.pow(ft[3], 2)))
        }
        ;
        fl.LDU = function(ft, fw, fv, fu) {
            ft[2] = fu[2] / fu[0];
            fv[0] = fu[0];
            fv[1] = fu[1];
            fv[3] = fu[3] - ft[2] * fv[1];
            return [ft, fw, fv]
        }
        ;
        fo.mat2 = fl;
        var e = {};
        e.create = function(fu) {
            fu = fu || i;
            var ft = new fu(16);
            ft[0] = 1;
            ft[1] = 0;
            ft[2] = 0;
            ft[3] = 0;
            ft[4] = 0;
            ft[5] = 1;
            ft[6] = 0;
            ft[7] = 0;
            ft[8] = 0;
            ft[9] = 0;
            ft[10] = 1;
            ft[11] = 0;
            ft[12] = 0;
            ft[13] = 0;
            ft[14] = 0;
            ft[15] = 1;
            return ft
        }
        ;
        e.clone = function(ft) {
            var fu = new i(16);
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            fu[4] = ft[4];
            fu[5] = ft[5];
            fu[6] = ft[6];
            fu[7] = ft[7];
            fu[8] = ft[8];
            fu[9] = ft[9];
            fu[10] = ft[10];
            fu[11] = ft[11];
            fu[12] = ft[12];
            fu[13] = ft[13];
            fu[14] = ft[14];
            fu[15] = ft[15];
            return fu
        }
        ;
        e.copy = function(fu, ft) {
            fu[0] = ft[0];
            fu[1] = ft[1];
            fu[2] = ft[2];
            fu[3] = ft[3];
            fu[4] = ft[4];
            fu[5] = ft[5];
            fu[6] = ft[6];
            fu[7] = ft[7];
            fu[8] = ft[8];
            fu[9] = ft[9];
            fu[10] = ft[10];
            fu[11] = ft[11];
            fu[12] = ft[12];
            fu[13] = ft[13];
            fu[14] = ft[14];
            fu[15] = ft[15];
            return fu
        }
        ;
        e.identity = function(ft) {
            ft[0] = 1;
            ft[1] = 0;
            ft[2] = 0;
            ft[3] = 0;
            ft[4] = 0;
            ft[5] = 1;
            ft[6] = 0;
            ft[7] = 0;
            ft[8] = 0;
            ft[9] = 0;
            ft[10] = 1;
            ft[11] = 0;
            ft[12] = 0;
            ft[13] = 0;
            ft[14] = 0;
            ft[15] = 1;
            return ft
        }
        ;
        e.transpose = function(fw, fv) {
            if (fw === fv) {
                var fA = fv[1]
                  , fy = fv[2]
                  , fx = fv[3]
                  , ft = fv[6]
                  , fz = fv[7]
                  , fu = fv[11];
                fw[1] = fv[4];
                fw[2] = fv[8];
                fw[3] = fv[12];
                fw[4] = fA;
                fw[6] = fv[9];
                fw[7] = fv[13];
                fw[8] = fy;
                fw[9] = ft;
                fw[11] = fv[14];
                fw[12] = fx;
                fw[13] = fz;
                fw[14] = fu
            } else {
                fw[0] = fv[0];
                fw[1] = fv[4];
                fw[2] = fv[8];
                fw[3] = fv[12];
                fw[4] = fv[1];
                fw[5] = fv[5];
                fw[6] = fv[9];
                fw[7] = fv[13];
                fw[8] = fv[2];
                fw[9] = fv[6];
                fw[10] = fv[10];
                fw[11] = fv[14];
                fw[12] = fv[3];
                fw[13] = fv[7];
                fw[14] = fv[11];
                fw[15] = fv[15]
            }
            return fw
        }
        ;
        e.invert = function(fM, fR) {
            var fV = fR[0]
              , fT = fR[1]
              , fS = fR[2]
              , fP = fR[3]
              , fx = fR[4]
              , fw = fR[5]
              , fv = fR[6]
              , fu = fR[7]
              , fL = fR[8]
              , fK = fR[9]
              , fJ = fR[10]
              , fI = fR[11]
              , fX = fR[12]
              , fW = fR[13]
              , fU = fR[14]
              , fQ = fR[15]
              , fH = fV * fw - fT * fx
              , fG = fV * fv - fS * fx
              , fF = fV * fu - fP * fx
              , fE = fT * fv - fS * fw
              , fD = fT * fu - fP * fw
              , fC = fS * fu - fP * fv
              , fB = fL * fW - fK * fX
              , fA = fL * fU - fJ * fX
              , fz = fL * fQ - fI * fX
              , fy = fK * fU - fJ * fW
              , fO = fK * fQ - fI * fW
              , fN = fJ * fQ - fI * fU
              , ft = fH * fN - fG * fO + fF * fy + fE * fz - fD * fA + fC * fB;
            if (!ft) {
                return null
            }
            ft = 1 / ft;
            fM[0] = (fw * fN - fv * fO + fu * fy) * ft;
            fM[1] = (fS * fO - fT * fN - fP * fy) * ft;
            fM[2] = (fW * fC - fU * fD + fQ * fE) * ft;
            fM[3] = (fJ * fD - fK * fC - fI * fE) * ft;
            fM[4] = (fv * fz - fx * fN - fu * fA) * ft;
            fM[5] = (fV * fN - fS * fz + fP * fA) * ft;
            fM[6] = (fU * fF - fX * fC - fQ * fG) * ft;
            fM[7] = (fL * fC - fJ * fF + fI * fG) * ft;
            fM[8] = (fx * fO - fw * fz + fu * fB) * ft;
            fM[9] = (fT * fz - fV * fO - fP * fB) * ft;
            fM[10] = (fX * fD - fW * fF + fQ * fH) * ft;
            fM[11] = (fK * fF - fL * fD - fI * fH) * ft;
            fM[12] = (fw * fA - fx * fy - fv * fB) * ft;
            fM[13] = (fV * fy - fT * fA + fS * fB) * ft;
            fM[14] = (fW * fG - fX * fE - fU * fH) * ft;
            fM[15] = (fL * fE - fK * fG + fJ * fH) * ft;
            return fM
        }
        ;
        e.adjoint = function(fB, fE) {
            var fI = fE[0]
              , fG = fE[1]
              , fF = fE[2]
              , fC = fE[3]
              , fw = fE[4]
              , fv = fE[5]
              , fu = fE[6]
              , ft = fE[7]
              , fA = fE[8]
              , fz = fE[9]
              , fy = fE[10]
              , fx = fE[11]
              , fK = fE[12]
              , fJ = fE[13]
              , fH = fE[14]
              , fD = fE[15];
            fB[0] = (fv * (fy * fD - fx * fH) - fz * (fu * fD - ft * fH) + fJ * (fu * fx - ft * fy));
            fB[1] = -(fG * (fy * fD - fx * fH) - fz * (fF * fD - fC * fH) + fJ * (fF * fx - fC * fy));
            fB[2] = (fG * (fu * fD - ft * fH) - fv * (fF * fD - fC * fH) + fJ * (fF * ft - fC * fu));
            fB[3] = -(fG * (fu * fx - ft * fy) - fv * (fF * fx - fC * fy) + fz * (fF * ft - fC * fu));
            fB[4] = -(fw * (fy * fD - fx * fH) - fA * (fu * fD - ft * fH) + fK * (fu * fx - ft * fy));
            fB[5] = (fI * (fy * fD - fx * fH) - fA * (fF * fD - fC * fH) + fK * (fF * fx - fC * fy));
            fB[6] = -(fI * (fu * fD - ft * fH) - fw * (fF * fD - fC * fH) + fK * (fF * ft - fC * fu));
            fB[7] = (fI * (fu * fx - ft * fy) - fw * (fF * fx - fC * fy) + fA * (fF * ft - fC * fu));
            fB[8] = (fw * (fz * fD - fx * fJ) - fA * (fv * fD - ft * fJ) + fK * (fv * fx - ft * fz));
            fB[9] = -(fI * (fz * fD - fx * fJ) - fA * (fG * fD - fC * fJ) + fK * (fG * fx - fC * fz));
            fB[10] = (fI * (fv * fD - ft * fJ) - fw * (fG * fD - fC * fJ) + fK * (fG * ft - fC * fv));
            fB[11] = -(fI * (fv * fx - ft * fz) - fw * (fG * fx - fC * fz) + fA * (fG * ft - fC * fv));
            fB[12] = -(fw * (fz * fH - fy * fJ) - fA * (fv * fH - fu * fJ) + fK * (fv * fy - fu * fz));
            fB[13] = (fI * (fz * fH - fy * fJ) - fA * (fG * fH - fF * fJ) + fK * (fG * fy - fF * fz));
            fB[14] = -(fI * (fv * fH - fu * fJ) - fw * (fG * fH - fF * fJ) + fK * (fG * fu - fF * fv));
            fB[15] = (fI * (fv * fy - fu * fz) - fw * (fG * fy - fF * fz) + fA * (fG * fu - fF * fv));
            return fB
        }
        ;
        e.determinant = function(fO) {
            var fT = fO[0]
              , fR = fO[1]
              , fP = fO[2]
              , fN = fO[3]
              , fw = fO[4]
              , fv = fO[5]
              , fu = fO[6]
              , ft = fO[7]
              , fK = fO[8]
              , fJ = fO[9]
              , fI = fO[10]
              , fH = fO[11]
              , fV = fO[12]
              , fU = fO[13]
              , fS = fO[14]
              , fQ = fO[15]
              , fG = fT * fv - fR * fw
              , fF = fT * fu - fP * fw
              , fE = fT * ft - fN * fw
              , fD = fR * fu - fP * fv
              , fC = fR * ft - fN * fv
              , fB = fP * ft - fN * fu
              , fA = fK * fU - fJ * fV
              , fz = fK * fS - fI * fV
              , fy = fK * fQ - fH * fV
              , fx = fJ * fS - fI * fU
              , fM = fJ * fQ - fH * fU
              , fL = fI * fQ - fH * fS;
            return fG * fL - fF * fM + fE * fx + fD * fy - fC * fz + fB * fA
        }
        ;
        e.multiply = function(fF, fJ, fG) {
            var fN = fJ[0]
              , fM = fJ[1]
              , fK = fJ[2]
              , fH = fJ[3]
              , fz = fJ[4]
              , fx = fJ[5]
              , fv = fJ[6]
              , ft = fJ[7]
              , fE = fJ[8]
              , fD = fJ[9]
              , fC = fJ[10]
              , fB = fJ[11]
              , fP = fJ[12]
              , fO = fJ[13]
              , fL = fJ[14]
              , fI = fJ[15];
            var fA = fG[0]
              , fy = fG[1]
              , fw = fG[2]
              , fu = fG[3];
            fF[0] = fA * fN + fy * fz + fw * fE + fu * fP;
            fF[1] = fA * fM + fy * fx + fw * fD + fu * fO;
            fF[2] = fA * fK + fy * fv + fw * fC + fu * fL;
            fF[3] = fA * fH + fy * ft + fw * fB + fu * fI;
            fA = fG[4];
            fy = fG[5];
            fw = fG[6];
            fu = fG[7];
            fF[4] = fA * fN + fy * fz + fw * fE + fu * fP;
            fF[5] = fA * fM + fy * fx + fw * fD + fu * fO;
            fF[6] = fA * fK + fy * fv + fw * fC + fu * fL;
            fF[7] = fA * fH + fy * ft + fw * fB + fu * fI;
            fA = fG[8];
            fy = fG[9];
            fw = fG[10];
            fu = fG[11];
            fF[8] = fA * fN + fy * fz + fw * fE + fu * fP;
            fF[9] = fA * fM + fy * fx + fw * fD + fu * fO;
            fF[10] = fA * fK + fy * fv + fw * fC + fu * fL;
            fF[11] = fA * fH + fy * ft + fw * fB + fu * fI;
            fA = fG[12];
            fy = fG[13];
            fw = fG[14];
            fu = fG[15];
            fF[12] = fA * fN + fy * fz + fw * fE + fu * fP;
            fF[13] = fA * fM + fy * fx + fw * fD + fu * fO;
            fF[14] = fA * fK + fy * fv + fw * fC + fu * fL;
            fF[15] = fA * fH + fy * ft + fw * fB + fu * fI;
            return fF
        }
        ;
        e.mul = e.multiply;
        e.translate = function(fF, fH, fA) {
            var fz = fA[0], fy = fA[1], fx = fA[2], fK, fJ, fI, fG, fw, fv, fu, ft, fE, fD, fC, fB;
            if (fH === fF) {
                fF[12] = fH[0] * fz + fH[4] * fy + fH[8] * fx + fH[12];
                fF[13] = fH[1] * fz + fH[5] * fy + fH[9] * fx + fH[13];
                fF[14] = fH[2] * fz + fH[6] * fy + fH[10] * fx + fH[14];
                fF[15] = fH[3] * fz + fH[7] * fy + fH[11] * fx + fH[15]
            } else {
                fK = fH[0];
                fJ = fH[1];
                fI = fH[2];
                fG = fH[3];
                fw = fH[4];
                fv = fH[5];
                fu = fH[6];
                ft = fH[7];
                fE = fH[8];
                fD = fH[9];
                fC = fH[10];
                fB = fH[11];
                fF[0] = fK;
                fF[1] = fJ;
                fF[2] = fI;
                fF[3] = fG;
                fF[4] = fw;
                fF[5] = fv;
                fF[6] = fu;
                fF[7] = ft;
                fF[8] = fE;
                fF[9] = fD;
                fF[10] = fC;
                fF[11] = fB;
                fF[12] = fK * fz + fw * fy + fE * fx + fH[12];
                fF[13] = fJ * fz + fv * fy + fD * fx + fH[13];
                fF[14] = fI * fz + fu * fy + fC * fx + fH[14];
                fF[15] = fG * fz + ft * fy + fB * fx + fH[15]
            }
            return fF
        }
        ;
        e.scale = function(fw, fu, fv) {
            var ft = fv[0]
              , fy = fv[1]
              , fx = fv[2];
            fw[0] = fu[0] * ft;
            fw[1] = fu[1] * ft;
            fw[2] = fu[2] * ft;
            fw[3] = fu[3] * ft;
            fw[4] = fu[4] * fy;
            fw[5] = fu[5] * fy;
            fw[6] = fu[6] * fy;
            fw[7] = fu[7] * fy;
            fw[8] = fu[8] * fx;
            fw[9] = fu[9] * fx;
            fw[10] = fu[10] * fx;
            fw[11] = fu[11] * fx;
            fw[12] = fu[12];
            fw[13] = fu[13];
            fw[14] = fu[14];
            fw[15] = fu[15];
            return fw
        }
        ;
        e.rotate = function(fN, fU, fW, ft) {
            var fD = ft[0], fC = ft[1], fB = ft[2], fO = Math.sqrt(fD * fD + fC * fC + fB * fB), fI, fS, fH, fY, fX, fV, fT, fA, fz, fy, fx, fM, fL, fK, fJ, fG, fF, fE, fR, fQ, fP, fw, fv, fu;
            if (Math.abs(fO) < fs) {
                return null
            }
            fO = 1 / fO;
            fD *= fO;
            fC *= fO;
            fB *= fO;
            fI = Math.sin(fW);
            fS = Math.cos(fW);
            fH = 1 - fS;
            fY = fU[0];
            fX = fU[1];
            fV = fU[2];
            fT = fU[3];
            fA = fU[4];
            fz = fU[5];
            fy = fU[6];
            fx = fU[7];
            fM = fU[8];
            fL = fU[9];
            fK = fU[10];
            fJ = fU[11];
            fG = fD * fD * fH + fS;
            fF = fC * fD * fH + fB * fI;
            fE = fB * fD * fH - fC * fI;
            fR = fD * fC * fH - fB * fI;
            fQ = fC * fC * fH + fS;
            fP = fB * fC * fH + fD * fI;
            fw = fD * fB * fH + fC * fI;
            fv = fC * fB * fH - fD * fI;
            fu = fB * fB * fH + fS;
            fN[0] = fY * fG + fA * fF + fM * fE;
            fN[1] = fX * fG + fz * fF + fL * fE;
            fN[2] = fV * fG + fy * fF + fK * fE;
            fN[3] = fT * fG + fx * fF + fJ * fE;
            fN[4] = fY * fR + fA * fQ + fM * fP;
            fN[5] = fX * fR + fz * fQ + fL * fP;
            fN[6] = fV * fR + fy * fQ + fK * fP;
            fN[7] = fT * fR + fx * fQ + fJ * fP;
            fN[8] = fY * fw + fA * fv + fM * fu;
            fN[9] = fX * fw + fz * fv + fL * fu;
            fN[10] = fV * fw + fy * fv + fK * fu;
            fN[11] = fT * fw + fx * fv + fJ * fu;
            if (fU !== fN) {
                fN[12] = fU[12];
                fN[13] = fU[13];
                fN[14] = fU[14];
                fN[15] = fU[15]
            }
            return fN
        }
        ;
        e.rotateX = function(ft, fA, fz) {
            var fF = Math.sin(fz)
              , fy = Math.cos(fz)
              , fE = fA[4]
              , fD = fA[5]
              , fC = fA[6]
              , fB = fA[7]
              , fx = fA[8]
              , fw = fA[9]
              , fv = fA[10]
              , fu = fA[11];
            if (fA !== ft) {
                ft[0] = fA[0];
                ft[1] = fA[1];
                ft[2] = fA[2];
                ft[3] = fA[3];
                ft[12] = fA[12];
                ft[13] = fA[13];
                ft[14] = fA[14];
                ft[15] = fA[15]
            }
            ft[4] = fE * fy + fx * fF;
            ft[5] = fD * fy + fw * fF;
            ft[6] = fC * fy + fv * fF;
            ft[7] = fB * fy + fu * fF;
            ft[8] = fx * fy - fE * fF;
            ft[9] = fw * fy - fD * fF;
            ft[10] = fv * fy - fC * fF;
            ft[11] = fu * fy - fB * fF;
            return ft
        }
        ;
        e.rotateY = function(fx, fE, fD) {
            var fF = Math.sin(fD)
              , fC = Math.cos(fD)
              , fw = fE[0]
              , fv = fE[1]
              , fu = fE[2]
              , ft = fE[3]
              , fB = fE[8]
              , fA = fE[9]
              , fz = fE[10]
              , fy = fE[11];
            if (fE !== fx) {
                fx[4] = fE[4];
                fx[5] = fE[5];
                fx[6] = fE[6];
                fx[7] = fE[7];
                fx[12] = fE[12];
                fx[13] = fE[13];
                fx[14] = fE[14];
                fx[15] = fE[15]
            }
            fx[0] = fw * fC - fB * fF;
            fx[1] = fv * fC - fA * fF;
            fx[2] = fu * fC - fz * fF;
            fx[3] = ft * fC - fy * fF;
            fx[8] = fw * fF + fB * fC;
            fx[9] = fv * fF + fA * fC;
            fx[10] = fu * fF + fz * fC;
            fx[11] = ft * fF + fy * fC;
            return fx
        }
        ;
        e.rotateZ = function(fx, fA, fz) {
            var fF = Math.sin(fz)
              , fy = Math.cos(fz)
              , fw = fA[0]
              , fv = fA[1]
              , fu = fA[2]
              , ft = fA[3]
              , fE = fA[4]
              , fD = fA[5]
              , fC = fA[6]
              , fB = fA[7];
            if (fA !== fx) {
                fx[8] = fA[8];
                fx[9] = fA[9];
                fx[10] = fA[10];
                fx[11] = fA[11];
                fx[12] = fA[12];
                fx[13] = fA[13];
                fx[14] = fA[14];
                fx[15] = fA[15]
            }
            fx[0] = fw * fy + fE * fF;
            fx[1] = fv * fy + fD * fF;
            fx[2] = fu * fy + fC * fF;
            fx[3] = ft * fy + fB * fF;
            fx[4] = fE * fy - fw * fF;
            fx[5] = fD * fy - fv * fF;
            fx[6] = fC * fy - fu * fF;
            fx[7] = fB * fy - ft * fF;
            return fx
        }
        ;
        e.fromRotationTranslation = function(fG, fE, fC) {
            var fz = fE[0]
              , fy = fE[1]
              , fx = fE[2]
              , fA = fE[3]
              , fH = fz + fz
              , ft = fy + fy
              , fB = fx + fx
              , fw = fz * fH
              , fv = fz * ft
              , fu = fz * fB
              , fF = fy * ft
              , fD = fy * fB
              , fK = fx * fB
              , fL = fA * fH
              , fJ = fA * ft
              , fI = fA * fB;
            fG[0] = 1 - (fF + fK);
            fG[1] = fv + fI;
            fG[2] = fu - fJ;
            fG[3] = 0;
            fG[4] = fv - fI;
            fG[5] = 1 - (fw + fK);
            fG[6] = fD + fL;
            fG[7] = 0;
            fG[8] = fu + fJ;
            fG[9] = fD - fL;
            fG[10] = 1 - (fw + fF);
            fG[11] = 0;
            fG[12] = fC[0];
            fG[13] = fC[1];
            fG[14] = fC[2];
            fG[15] = 1;
            return fG
        }
        ;
        e.fromQuat = function(fD, fA) {
            var fx = fA[0]
              , fw = fA[1]
              , fv = fA[2]
              , fy = fA[3]
              , fE = fx + fx
              , ft = fw + fw
              , fz = fv + fv
              , fu = fx * fE
              , fC = fw * fE
              , fB = fw * ft
              , fK = fv * fE
              , fJ = fv * ft
              , fH = fv * fz
              , fI = fy * fE
              , fG = fy * ft
              , fF = fy * fz;
            fD[0] = 1 - fB - fH;
            fD[1] = fC + fF;
            fD[2] = fK - fG;
            fD[3] = 0;
            fD[4] = fC - fF;
            fD[5] = 1 - fu - fH;
            fD[6] = fJ + fI;
            fD[7] = 0;
            fD[8] = fK + fG;
            fD[9] = fJ - fI;
            fD[10] = 1 - fu - fB;
            fD[11] = 0;
            fD[12] = 0;
            fD[13] = 0;
            fD[14] = 0;
            fD[15] = 1;
            return fD
        }
        ;
        e.frustum = function(fx, fu, fC, ft, fB, fz, fy) {
            var fA = 1 / (fC - fu)
              , fw = 1 / (fB - ft)
              , fv = 1 / (fz - fy);
            fx[0] = (fz * 2) * fA;
            fx[1] = 0;
            fx[2] = 0;
            fx[3] = 0;
            fx[4] = 0;
            fx[5] = (fz * 2) * fw;
            fx[6] = 0;
            fx[7] = 0;
            fx[8] = (fC + fu) * fA;
            fx[9] = (fB + ft) * fw;
            fx[10] = (fy + fz) * fv;
            fx[11] = -1;
            fx[12] = 0;
            fx[13] = 0;
            fx[14] = (fy * fz * 2) * fv;
            fx[15] = 0;
            return fx
        }
        ;
        e.perspective = function(fw, fv, fu, fx, ft) {
            var fz = 1 / Math.tan(fv / 2)
              , fy = 1 / (fx - ft);
            fw[0] = fz / fu;
            fw[1] = 0;
            fw[2] = 0;
            fw[3] = 0;
            fw[4] = 0;
            fw[5] = fz;
            fw[6] = 0;
            fw[7] = 0;
            fw[8] = 0;
            fw[9] = 0;
            fw[10] = (ft + fx) * fy;
            fw[11] = -1;
            fw[12] = 0;
            fw[13] = 0;
            fw[14] = (2 * ft * fx) * fy;
            fw[15] = 0;
            return fw
        }
        ;
        e.ortho = function(fw, fu, fC, ft, fA, fz, fy) {
            var fx = 1 / (fu - fC)
              , fB = 1 / (ft - fA)
              , fv = 1 / (fz - fy);
            fw[0] = -2 * fx;
            fw[1] = 0;
            fw[2] = 0;
            fw[3] = 0;
            fw[4] = 0;
            fw[5] = -2 * fB;
            fw[6] = 0;
            fw[7] = 0;
            fw[8] = 0;
            fw[9] = 0;
            fw[10] = 2 * fv;
            fw[11] = 0;
            fw[12] = (fu + fC) * fx;
            fw[13] = (fA + ft) * fB;
            fw[14] = (fy + fz) * fv;
            fw[15] = 1;
            return fw
        }
        ;
        e.lookAt = function(fH, fO, fP, fz) {
            var fN, fM, fK, fv, fu, ft, fC, fB, fA, fI, fL = fO[0], fJ = fO[1], fG = fO[2], fy = fz[0], fx = fz[1], fw = fz[2], fF = fP[0], fE = fP[1], fD = fP[2];
            if (Math.abs(fL - fF) < fs && Math.abs(fJ - fE) < fs && Math.abs(fG - fD) < fs) {
                return e.identity(fH)
            }
            fC = fL - fF;
            fB = fJ - fE;
            fA = fG - fD;
            fI = 1 / Math.sqrt(fC * fC + fB * fB + fA * fA);
            fC *= fI;
            fB *= fI;
            fA *= fI;
            fN = fx * fA - fw * fB;
            fM = fw * fC - fy * fA;
            fK = fy * fB - fx * fC;
            fI = Math.sqrt(fN * fN + fM * fM + fK * fK);
            if (!fI) {
                fN = 0;
                fM = 0;
                fK = 0
            } else {
                fI = 1 / fI;
                fN *= fI;
                fM *= fI;
                fK *= fI
            }
            fv = fB * fK - fA * fM;
            fu = fA * fN - fC * fK;
            ft = fC * fM - fB * fN;
            fI = Math.sqrt(fv * fv + fu * fu + ft * ft);
            if (!fI) {
                fv = 0;
                fu = 0;
                ft = 0
            } else {
                fI = 1 / fI;
                fv *= fI;
                fu *= fI;
                ft *= fI
            }
            fH[0] = fN;
            fH[1] = fv;
            fH[2] = fC;
            fH[3] = 0;
            fH[4] = fM;
            fH[5] = fu;
            fH[6] = fB;
            fH[7] = 0;
            fH[8] = fK;
            fH[9] = ft;
            fH[10] = fA;
            fH[11] = 0;
            fH[12] = -(fN * fL + fM * fJ + fK * fG);
            fH[13] = -(fv * fL + fu * fJ + ft * fG);
            fH[14] = -(fC * fL + fB * fJ + fA * fG);
            fH[15] = 1;
            return fH
        }
        ;
        e.str = function(ft) {
            return "mat4(" + ft[0] + ", " + ft[1] + ", " + ft[2] + ", " + ft[3] + ", " + ft[4] + ", " + ft[5] + ", " + ft[6] + ", " + ft[7] + ", " + ft[8] + ", " + ft[9] + ", " + ft[10] + ", " + ft[11] + ", " + ft[12] + ", " + ft[13] + ", " + ft[14] + ", " + ft[15] + ")"
        }
        ;
        e.frob = function(ft) {
            return (Math.sqrt(Math.pow(ft[0], 2) + Math.pow(ft[1], 2) + Math.pow(ft[2], 2) + Math.pow(ft[3], 2) + Math.pow(ft[4], 2) + Math.pow(ft[5], 2) + Math.pow(ft[6], 2) + Math.pow(ft[6], 2) + Math.pow(ft[7], 2) + Math.pow(ft[8], 2) + Math.pow(ft[9], 2) + Math.pow(ft[10], 2) + Math.pow(ft[11], 2) + Math.pow(ft[12], 2) + Math.pow(ft[13], 2) + Math.pow(ft[14], 2) + Math.pow(ft[15], 2)))
        }
        ;
        fo.mat4 = e
    }
    )(window);
    function bY() {
        this.result = {
            bkData: [],
            eleData: [[], [], [], [], [], []],
            tileLabels: []
        }
    }
    x.extend(bY.prototype, {
        createLayer: function(fk, i) {
            var e = this.result.bkData;
            i = i || {};
            if (!e[fk]) {
                e[fk] = [[], [], []]
            }
            e[fk].dataType = i.dataType || 2;
            e[fk].png8 = i.png8 || false;
            e[fk].clipTile = i.clipTile || false
        },
        removeLayer: function(i) {
            var e = this.result.bkData;
            e[i] = null
        },
        getResult: function() {
            return this.result
        },
        setData: function(fn, fm, fo) {
            var e = this.result.bkData;
            var fk = e[fm] ? e[fm][fo] : null;
            if (!fk) {
                return
            }
            for (var fl = 0; fl < fk.length; fl++) {
                if (fk[fl].key && fk[fl].key === fn.key) {
                    fk[fl] = fn;
                    return
                }
            }
            fk.push(fn)
        },
        setLabelData: function(e) {
            this.result.tileLabels = e
        },
        getLabelData: function() {
            return this.result.tileLabels
        },
        setOverlayData: function(i, e) {
            if (!this.result.eleData[e]) {
                return
            }
            this.result.eleData[e] = i
        },
        clearLabelOverlayData: function() {
            this.result.eleData[2] = [];
            this.result.eleData[3] = [];
            this.result.eleData[4] = []
        },
        clearData: function(fl) {
            var e = this.result.bkData;
            if (typeof fl === "number") {
                if (e[fl]) {
                    e[fl][0] = [];
                    e[fl][1] = [];
                    e[fl][2] = []
                }
                return
            }
            for (var fk = 0; fk < e.length; fk++) {
                if (!e[fk]) {
                    continue
                }
                e[fk][0] = [];
                e[fk][1] = [];
                e[fk][2] = []
            }
        },
        sortThumbData: function(i) {
            var e = this.result.bkData;
            var fk = e[i];
            if (!fk) {
                return
            }
            if (fk[0] && fk[0].length > 0) {
                fk[0].sort(function(fm, fl) {
                    return fm.tileInfo.useZoom - fl.tileInfo.useZoom
                })
            }
        }
    });
    var dx = (function() {
        var fv = new Int8Array(4);
        var fk = new Int32Array(fv.buffer,0,1);
        var fq = new Float32Array(fv.buffer,0,1);
        function fx(fE) {
            fk[0] = fE;
            return fq[0]
        }
        function i(fE) {
            fq[0] = fE;
            return fk[0]
        }
        function fr(fE) {
            var fG = (fE[3] << 24 | fE[2] << 16 | fE[1] << 8 | fE[0]);
            var fF = fx(fG & 4278190079);
            return fF
        }
        var fm = 0;
        var fp = 1;
        var ft = 2;
        var fA = 0;
        var fy = 1;
        var fw = 2;
        var fn = 6;
        var fs = 7;
        function fu(fE, fF) {
            var fG;
            if (fF % 2 === 0) {
                fG = [-fE[1], fE[0]]
            } else {
                fG = [fE[1], -fE[0]]
            }
            return fG
        }
        function e(fE, fF, fG) {
            var fH = fu(fE, fF);
            var fI;
            if (fG === fp) {
                return fH
            } else {
                if (fF === 4 || fF === 5) {
                    fI = [fH[0] - fE[0], fH[1] - fE[1]]
                } else {
                    fI = [fH[0] + fE[0], fH[1] + fE[1]]
                }
                if (fG === fm) {
                    vec2.normalize(fI, fI)
                }
                return fI
            }
        }
        function fl(fI, fH, fG, fE) {
            var fF = vec2.dot(fI, fH);
            if (fG === fw || fG === fy) {
                if ((fE === 0 || fE === 1) && fF > 0) {
                    return true
                } else {
                    if ((fE === 2 || fE === 3) && fF < 0) {
                        return true
                    }
                }
            }
            if ((fE === 0 || fE === 1) && fF < 0) {
                return true
            } else {
                if ((fE === 2 || fE === 3) && fF > 0) {
                    return true
                }
            }
            return false
        }
        function fD(fF, fK, fM) {
            var fL = fu(fF, fK);
            var fH;
            var fJ = fF;
            var fI = fM;
            var fO = [];
            vec2.normalize(fO, [fJ[0] + fI[0], fJ[1] + fI[1]]);
            var fN = vec2.dot(fL, [-fO[1], fO[0]]);
            if (Math.abs(fN) < 0.1) {
                fN = 1
            }
            var fG = 1 / fN;
            fH = [-fO[1] * fG, fO[0] * fG];
            var fE = vec2.dot(fF, fH);
            if (fE < 0) {
                vec2.negate(fH, fH)
            }
            return {
                cos2: fE,
                offset: fH
            }
        }
        function fB(fF, fK, fM, fE) {
            var fL = fu(fF, fK);
            var fJ;
            var fI;
            var fH;
            if (fK === 0 || fK === 1) {
                fJ = fM;
                fI = fF
            } else {
                fJ = fF;
                fI = fM
            }
            if (!fJ || !fI) {
                return fL
            }
            var fO = [fJ[0] + fI[0], fJ[1] + fI[1]];
            if (fO[0] === 0 && fO[1] === 0) {
                vec2.normalize(fO, fI)
            } else {
                vec2.normalize(fO, fO)
            }
            var fP = fl(fO, fL, fE, fK);
            if (fP) {
                return fL
            }
            var fN = vec2.dot(fL, [-fO[1], fO[0]]);
            if (Math.abs(fN) < 0.1) {
                fN = 1
            }
            var fG = 1 / fN;
            fH = [-fO[1] * fG, fO[0] * fG];
            return fH
        }
        function fC(fO, fP, fI, fQ, fN, fG, fJ, fH, fM) {
            var fL;
            var fF = 0;
            var fE = false;
            if (fM === undefined) {
                fL = fN.length / fn - 1
            } else {
                fL = fN.length / fs - 1
            }
            fo(fP[0], fO[0], fQ, fI, 4, fJ, fH, undefined, fN, fM);
            fL++;
            fF++;
            fo(fP[0], fO[0], fQ, fI, 5, fJ, fH, undefined, fN, fM);
            fL++;
            fF++;
            for (var fK = 0; fK < fO.length; fK++) {
                fo(fP[fK], fO[fK], fQ, fI, 0, fJ, fH, fO[fK - 1], fN, fM);
                fz(fG, ++fL, ++fF, fE);
                fo(fP[fK], fO[fK], fQ, fI, 1, fJ, fH, fO[fK - 1], fN, fM);
                fz(fG, ++fL, ++fF, fE);
                fo(fP[fK + 1], fO[fK], fQ, fI, 2, fJ, fH, fO[fK + 1], fN, fM);
                fz(fG, ++fL, ++fF, fE);
                fo(fP[fK + 1], fO[fK], fQ, fI, 3, fJ, fH, fO[fK + 1], fN, fM);
                fz(fG, ++fL, ++fF, fE);
                if (fI === fy && fK !== fO.length - 1) {
                    fo(fP[fK + 1], fO[fK], fQ, fI, 8, fJ, fH, fO[fK + 1], fN, fM);
                    fz(fG, ++fL, ++fF, fE);
                    fE = fE ? false : true
                }
            }
            fo(fP[fP.length - 1], fO[fO.length - 1], fQ, fI, 6, fJ, fH, undefined, fN, fM);
            fz(fG, ++fL, ++fF, fE);
            fo(fP[fP.length - 1], fO[fO.length - 1], fQ, fI, 7, fJ, fH, undefined, fN, fM);
            fz(fG, ++fL, ++fF, fE)
        }
        function fo(fQ, fH, fR, fG, fL, fJ, fF, fP, fN, fM) {
            var fO = fL % 2 === 0 ? 1 : -1;
            var fK;
            if (fL === 4 || fL === 5 || fL === 6 || fL === 7) {
                fK = e(fH, fL, fR)
            } else {
                if (fL === 0 || fL === 1 || fL === 2 || fL === 3) {
                    fK = fB(fH, fL, fP, fG)
                } else {
                    if (fL === 8) {
                        var fI = fD(fH, fL, fP);
                        fK = fI.offset;
                        vec2.normalize(fK, fK);
                        var fE = fI.cos2;
                        if (fE < 0) {
                            fO = -fO
                        }
                    }
                }
            }
            fN[fN.length] = fQ[0] * 10;
            fN[fN.length] = fQ[1] * 10;
            fN[fN.length] = fK[0] * fF * 10;
            fN[fN.length] = fK[1] * fF * 10;
            fN[fN.length] = fJ;
            fN[fN.length] = fO;
            if (fM !== undefined) {
                fN[fN.length] = fM
            }
        }
        function fz(fI, fG, fE, fH) {
            var fF;
            if (fE % 2 === 0) {
                if (fH) {
                    fI[fI.length] = fG - 2;
                    fI[fI.length] = fG - 1;
                    fI[fI.length] = fG
                } else {
                    fI[fI.length] = fG - 1;
                    fI[fI.length] = fG - 2;
                    fI[fI.length] = fG
                }
            } else {
                if (fH) {
                    fI[fI.length] = fG - 1;
                    fI[fI.length] = fG - 2;
                    fI[fI.length] = fG
                } else {
                    fI[fI.length] = fG - 2;
                    fI[fI.length] = fG - 1;
                    fI[fI.length] = fG
                }
            }
        }
        return {
            getVertexCount: function(fF, fE) {
                if (fE === fy) {
                    return fF * 5 - 2
                } else {
                    return fF * 4
                }
            },
            overlayLine: function(fN, fG, fO, fK, fE, fI, fF, fL) {
                var fM = [];
                for (var fJ = 0; fJ < fN.length; fJ++) {
                    if (fJ !== fN.length - 1) {
                        var fH = [fN[fJ + 1][0] - fN[fJ][0], fN[fJ + 1][1] - fN[fJ][1]];
                        var fP = [];
                        if (fH[0] === 0 && fH[1] === 0) {
                            fP = [0, 0]
                        } else {
                            vec2.normalize(fP, fH)
                        }
                        fM[fM.length] = [fP[0], fP[1]]
                    }
                }
                return fC(fM, fN, fG, fO, fK, fE, fr(fI), fF, fL)
            },
            toSolidVertices: function(fI, fF) {
                var fG = new Float32Array(fI.length / fs * 5);
                var fE = new Int16Array(fG.buffer);
                var fK = 0;
                var fH = 0;
                for (var fJ = 0; fJ < fI.length; fJ += fs) {
                    fE[fK] = ~~fI[fJ];
                    fE[fK + 1] = ~~fI[fJ + 1];
                    fE[fK + 2] = ~~fI[fJ + 2];
                    fE[fK + 3] = ~~fI[fJ + 3];
                    fG[fH + 2] = fI[fJ + 4];
                    fE[fK + 6] = fI[fJ + 5];
                    fE[fK + 7] = fF ? fF : 0;
                    fE[fK + 8] = fI[fJ + 6];
                    fE[fK + 9] = 0;
                    fK += 10;
                    fH += 5
                }
                return fG
            }
        }
    }
    )();
    var c3 = 1;
    var eo = 2;
    var dV = {
        drawIndex: 0,
        devicePixelRatio: ay(),
        zoomState: 1,
        curViewTilesInfo: null,
        iconSetImg: null,
        LAST_CALC_ZOOM: -1,
        LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
        lastCollisionTestTime: 0,
        remove: function() {
            this.tileCache.clear()
        },
        initDrawData: function() {
            this.drawIndex = this.zIndex;
            this.map._featureMgr.createLayer(this.drawIndex, {
                dataType: this.dataType,
                png8: this.png8,
                clipTile: this.clipTile
            })
        },
        destroyDrawData: function() {
            this.map._featureMgr.removeLayer(this.drawIndex)
        },
        setZIndex: function(e) {
            this.zIndex = e
        },
        getTileKey: function(e, fl) {
            fl = fl || {};
            var i = typeof fl.useZoom === "number" ? fl.useZoom : e.useZoom;
            var fk = e.style || this.mapStyleId || "default";
            return this.mapType + "_" + fk + "_" + e.col + "_" + e.row + "_" + e.zoom + "_" + i
        },
        getTileRenderDataKey: function(i) {
            var fk = i.col;
            var fl = i.zoom;
            var e = i.baseTileSize;
            fk = cC.calcLoopParam(fk, fl, e).col;
            return this.mapType + "_" + fk + "_" + i.row + "_" + fl + "_" + i.useZoom
        },
        getTileUnits: function(e) {
            var fl = this.map;
            var fk = be[fl.getMapType()];
            var i = fk.baseUnits * Math.pow(2, fk.zoomLevelBase - e);
            return i
        },
        getTilesUrl: function(fm, fv, fw) {
            var i = fm.x;
            var fx = fm.y;
            var fs = ad("ditu", "normal");
            var fo = fs.ver;
            var fp = fs.udt;
            i = cC.calcLoopParam(i, fv, fw).col;
            var fu = be.B_NORMAL_MAP.vectorTileUrls;
            var fn = Math.abs(i + fx) % fu.length;
            var ft = fu[fn];
            if (window.offLineIPAddress) {
                fu = [window.offLineIPAddress + "pvd/"];
                ft = fu[0]
            }
            var fk = "x=" + i + "&y=" + fx + "&z=" + Math.floor(fv);
            var fr = this.devicePixelRatio > 1 ? "&scaler=2" : "";
            var fq = "&textimg=1";
            if (this.map.config.textRenderType === "canvas") {
                fq = "&textimg=0"
            }
            var fl = this.map.config.style;
            if (typeof fl === "string" && fl !== "default") {
                fk += "&styleId=" + dm.mapStyleNameIdPair[fl]
            }
            fk += "&styles=pl" + fq + fr + "&v=" + fo + "&udt=" + fp + "&json=0";
            var e = ft + "?qt=vtile&param=" + window.encodeURIComponent(ei(fk));
            
            return e
        },
        getRasterTilesUrl: function(fk, fn, fl) {
            var fm = be[this.map.mapType];
            var i = this.map.config.style;
            var e = fm.tileUrls[Math.abs(fn + fk) % fm.tileUrls.length] + "?qt=tile&x=" + fk + "&y=" + fn + "&z=" + fl + ((i === "default" || typeof i !== "string") ? "" : ("&styleId=" + dm.mapStyleNameIdPair[i])) + "&styles=pl&udt=" + this.normalUdt + "&scaler=" + this.scaler + "&p=1";
            e = e.replace(/-(\d+)/gi, "M$1");
            return e
        },
        getZoomState: function() {
            var fk = this.map;
            var i = fk.getZoom();
            var e = i - this.lastZoom;
            if (e > 0) {
                this.zoomState = 1
            } else {
                if (e < 0) {
                    this.zoomState = -1
                }
            }
            this.lastZoom = i;
            return this.zoomState
        },
        releaseOutViewTileData: function(e) {
            var fm = this.map._workerMgr.releasePendingData(e);
            for (var fl = 0, fk = fm.length; fl < fk; fl++) {
                var fn = this.getTileKey(fm[fl]);
                this.tileCache.removeData(fn)
            }
        },
        loadLayerData: function(e, fl, i) {
            this.hasZoomChange = i;
            this.curViewTilesInfo = e;
            this.mapStyleId = this.map.getMapStyleId();
            this.releaseOutViewTileData(e);
            var fk = this.getZoomState();
            if (this.dataType === eo) {
                if (fl) {
                    this.getVectorLayerDataFromCache(e, fk)
                } else {
                    this.loadVectorLayerData(e)
                }
            } else {
                this.loadRasterLayerData(e, fl)
            }
        },
        getVectorLayerDataFromCache: function(fq, fA) {
            this.map.temp.isPermitSpotOver = false;
            this.tileLabels = [];
            if (this.baseLayer === true) {
                var fu = this.map._customLabelMgr.virtualTile;
                if (fu && fu.label) {
                    this.tileLabels.push(fu.label)
                }
            }
            this.thumbCache = {};
            var fB = -1;
            for (var fx = 0, fv = fq.length; fx < fv; fx++) {
                var fy = fq[fx];
                var fm = fy.col;
                var fn = fy.row;
                var fk = fy.zoom;
                var fw = this._getTileTexImgKey(fy);
                var fl = fy.useZoom;
                fB = fk;
                var fo = this.getTileKey(fy);
                var fD = this.tileCache.getData(fo);
                if (fD && fD.status === "ready") {
                    var fE = fD;
                    this.map._featureMgr.setData(fD, this.drawIndex, 2);
                    if (fD.label) {
                        if (fD.label.status === "ready") {
                            fD.label.tileInfo = fD.tileInfo;
                            this.tileLabels.push(fD.label);
                            if (fD.label.textureSources && fD.label.textureSources[fl] && this.map._webglMapScene) {
                                var fC = this.map._webglMapScene._painter;
                                if (!fC._labelTextureAtlasOffset[fw]) {
                                    fC._addToAsyncJob(fD.label.textureSources[fl])
                                }
                            }
                        } else {
                            if (fD.label.status !== "processing") {
                                this.processLabelData(fD)
                            }
                        }
                    }
                } else {
                    var fz = {
                        tileInfo: fy,
                        dataType: eo,
                        key: fo
                    };
                    this.map._featureMgr.setData(fz, this.drawIndex, 2);
                    if (this.useThumbData) {
                        this.setThumbData(fm, fn, fk, fl, fA)
                    }
                }
            }
            this.tileLabels.labelZoom = fB;
            this.updateLabels(fA);
            var fr = this.map.getZoom();
            var fp = Math.floor(fr);
            var ft = fr - fp;
            var fs = Math.floor(this.LAST_CALC_ZOOM);
            var e = this.LAST_CALC_ZOOM - fs;
            var fF = false;
            if (this.hasZoomChange) {
                if (Math.abs(fr - this.LAST_CALC_ZOOM) >= 0.5) {
                    fF = true
                } else {
                    if (ft < 0.5 && e >= 0.5) {
                        fF = true
                    } else {
                        if (ft >= 0.5 && e < 0.5) {
                            fF = true
                        }
                    }
                }
                if (fF) {
                    this.cacheDataCollideLabels(0)
                }
                this.LAST_CALC_ZOOM = fr
            } else {
                if (this.tileLabels.length > 0) {
                    this.cacheDataCollideLabels(30)
                }
            }
        },
        loadVectorLayerData: function(ft, fv) {
            this.map.temp.isPermitSpotOver = false;
            var fs = this;
            function fr(i, fx) {
                var fz = fs.tileCache.getData(fx);
                if (!fz) {
                    return
                }
                if (!i || i.error) {
                    if (typeof alog !== "undefined") {
                        alog("exception.fire", "catch", {
                            msg: i.tileKey + ":" + i.message,
                            path: "api.js",
                            ln: 1
                        })
                    }
                    var fy = new aB("ontileloaderror");
                    i = i || {};
                    fy.error = i.error || "";
                    fy.message = i.message || "";
                    fs.map.fire(fy);
                    fz.status = "init";
                    fz.reloadTimer = setTimeout(function() {
                        if (fz.retry < 3) {
                            fz.retry++;
                            fz.status = "loading";
                            fs.loadVectorTileData(i.tileInfo, fr)
                        } else {
                            fs.tileCache.removeData(fx)
                        }
                    }, 4000);
                    fs.map._featureMgr.clearData(fs.drawIndex);
                    fs._checkTilesLoaded();
                    fs.getVectorLayerDataFromCache(fs.curViewTilesInfo, fs.getZoomState());
                    return
                }
                if (fz.reloadTimer) {
                    clearTimeout(fz.reloadTimer);
                    fz.reloadTimer = null
                }
                fs.callbackDataQueue.push([i, fx]);
                if (fs.processDataTimer) {
                    return
                }
                fs.processDataTimer = setTimeout(function() {
                    while (fs.callbackDataQueue.length > 0) {
                        var fA = fs.callbackDataQueue.shift();
                        fs.vectorTileDataCbk(fA[0], fA[1]);
                        fs._checkTilesLoaded()
                    }
                    fs.map._featureMgr.clearData(fs.drawIndex);
                    fs.getVectorLayerDataFromCache(fs.curViewTilesInfo, fs.getZoomState());
                    fs.processDataTimer = null
                }, 200)
            }
            for (var fq = 0, fo = ft.length; fq < fo; fq++) {
                var fl = ft[fq];
                var fm = fl.col;
                var fw = fl.row;
                var fu = fl.zoom;
                var fk = fl.loopOffsetX;
                var fp = this.getTileKey(fl);
                var e = this.tileCache.getData(fp);
                if (!e) {
                    e = {
                        status: "init",
                        tileInfo: fl,
                        dataType: eo,
                        key: fp,
                        retry: 0
                    }
                }
                if (e.status !== "ready" && e.status !== "loading") {
                    this.numLoading++;
                    e.status = "loading";
                    this.tileCache.setData(fp, e);
                    var fn = this.getProcessedLabelZoom(fl);
                    if (fn) {
                        fl.processedLabelZooms = fn
                    }
                    this.loadVectorTileData(fl, fr)
                }
            }
        },
        setThumbData: function(i, fm, fl, e, fk) {
            if (fk === 1) {
                if (this._findParentZoomTile(i, fm, fl, e, 8) === false) {
                    this._findChildZoomTile(i, fm, fl, e, 3)
                }
            } else {
                if (fk === -1) {
                    if (this._findChildZoomTile(i, fm, fl, e, 3) === false) {
                        this._findParentZoomTile(i, fm, fl, e, 8)
                    }
                }
            }
            this.map._featureMgr.sortThumbData(this.drawIndex)
        },
        _findParentZoomTile: function(fo, fx, fw, fm, fr) {
            var fn = be[this.getMapType()];
            var fk = fn.minDataZoom;
            var e = fo;
            var fu = fx;
            var fs = fw;
            var ft = fm;
            for (var fq = 1; fq <= fr; fq++) {
                var fl = this.tileType.getParentTile(e, fu, fs, ft, fk);
                if (fl === null) {
                    continue
                }
                var fv = this.getTileKey(fl);
                var fp = this.tileCache.getData(fv);
                if (fp && fp.status === "ready") {
                    if (this.thumbCache[fv]) {
                        continue
                    }
                    this.map._featureMgr.setData(fp, this.drawIndex, 0);
                    this.thumbCache[fv] = true;
                    return true
                }
                e = fl.col;
                fu = fl.row;
                fs = fl.zoom;
                ft = fl.useZoom
            }
            return false
        },
        _findChildZoomTile: function(fp, fr, e, fm, fA) {
            var fy = be[this.getMapType()];
            var fu = fy.maxDataZoom;
            var fo = fp;
            var fq = fr;
            var fs = e;
            var fl = fm;
            var fn = true;
            for (var fx = 1; fx <= fA; fx++) {
                var fv = false;
                var fk = this.tileType.getChildTiles(fo, fq, fs, fl, fu, fx);
                if (!fk) {
                    continue
                }
                for (var fw = 0; fw < fk.length; fw++) {
                    var ft = this.getTileKey(fk[fw]);
                    var fz = this.tileCache.getData(ft);
                    if (fz && fz.status === "ready") {
                        if (!this.thumbCache[ft]) {
                            this.map._featureMgr.setData(fz, this.drawIndex, 1);
                            this.thumbCache[ft] = true
                        }
                        fv = true
                    } else {
                        fn = false
                    }
                }
                if (fv) {
                    break
                }
            }
            return fn
        },
        loadVectorTileData: function(i, fm) {
            var fk = i.col;
            var fq = i.row;
            var fo = i.zoom;
            var fp = i.baseTileSize;
            var e = this.getTilesUrl(new cN(fk,fq), fo, fp);
            if (!e) {
                return
            }
            var fn = this.getTileKey(i);
            aP(this.map);
            if (!this.processData) {
                this.map._workerMgr.loadTileData(e, i, fn, fm);
                return
            }
            var fm = "cbk" + fn.replace(/-/g, "_");
            var fl = this;
            aI[fm] = function(fr) {
                var fs = (function(ft) {
                    return function() {
                        ft.tileInfo = i;
                        var fz = fl.processData(ft);
                        if (!fz.road) {
                            return
                        }
                        var fw = {
                            tileInfo: i,
                            renderData: {
                                base: []
                            },
                            status: "ready",
                            key: fn,
                            mapType: fl.mapType
                        };
                        var fC = [];
                        var fF = [];
                        for (var fy = 0; fy < fz.road.length; fy++) {
                            var fB = fz.road[fy];
                            var fA = -1;
                            for (var fx = 0; fx < fB.length; fx++) {
                                var fD = fB[fx];
                                var fE = [];
                                if (fC.length / 7 + fD[0].length / 2 > 65536) {
                                    fw.renderData.base.push({
                                        type: "line",
                                        data: [dx.toSolidVertices(fC, 4000), new Uint16Array(fF)]
                                    });
                                    fC = [];
                                    fF = []
                                }
                                for (var fv = 0; fv < fD[0].length; fv += 2) {
                                    fE[fE.length] = [fD[0][fv], fD[0][fv + 1]]
                                }
                                var fu = fD[3];
                                dx.overlayLine(fE, fD[1], fD[2], fC, fF, fu, fD[4], fy + 20)
                            }
                            fw.renderData.base.push({
                                type: "line",
                                data: [dx.toSolidVertices(fC, 4000), new Uint16Array(fF)]
                            })
                        }
                        fl.tileCache.setData(fn, fw);
                        fl.map._featureMgr.clearData(fl.drawIndex);
                        fl.getVectorLayerDataFromCache(fl.curViewTilesInfo, fl.getZoomState());
                        fl.map.dispatchEvent(new aB("onrefresh"))
                    }
                }
                )(fr);
                fl.map.jobScheduler.addJob(fs);
                delete aI[fm]
            }
            ;
            e += "&fn=" + encodeURIComponent(cY + "." + fm);
            eX.load(e)
        },
        vectorTileDataCbk: function(fl, fm) {
            var fq = new aB("ontileloaded");
            fq.perfStat = fl.perfStat || [];
            var e = this.map;
            e.fire(fq);
            var i = fl.tileInfo;
            var fk = i.col;
            var fv = i.row;
            var fu = i.zoom;
            var ft = i.baseTileSize;
            var fo = this.tileCache.getData(fm);
            if (!fo) {
                return
            }
            if (!this.showLabel) {
                fl.label = null
            }
            fo.renderData = fl;
            fo.tileInfo = i;
            var fn = cC.calcLoopParam(fk, fu, ft);
            var fr = fn.geoOffsetX;
            fo.tileInfo.loopOffsetX = fr;
            fo.status = "ready";
            fo.mapType = this.mapType;
            this.tileCache.setData(fm, fo);
            fo.label = fl.label;
            fl.label = null;
            if (fl.indoorData) {
                e._indoorMgr.setData(fl.indoorData)
            }
            var fp = "id_" + fk + "_" + fv + "_" + fu;
            if (!this.curViewTilesInfo[fp]) {
                e.fire(new aB("ontilenotinview"));
                return
            }
            this.processLabelData(fo);
            if (fl.indoorData && e._indoorMgr.currentUid) {
                this._refreshIndoorData(e._indoorMgr.currentUid, e._indoorMgr.currentFloor)
            }
            var fs = new aB("onrefresh");
            fs.source = "webgllayer";
            this.map.dispatchEvent(fs)
        },
        _refreshIndoorData: function(ft, fs) {
            var fv = this.map._indoorMgr.getIndoorData(ft);
            var fy = fv.tileKeys;
            var fw = Math.floor(this.map.getZoom());
            for (var fq = 0; fq < fy.length; fq++) {
                var fn = fy[fq];
                var fp = this.tileCache.getData(fn);
                if (!fp) {
                    continue
                }
                var fx = fp.renderData;
                fx.indoorBase = [];
                fx.indoorBaseContour = [];
                fx.indoorBorder3D = [];
                fx.indoorArea3D = [];
                fp.label.indoorLabel = [];
                this.labelProcessor.clearCollisionCache(fp.label);
                for (var fr in fx.indoorData) {
                    if (fr === "tileInfo") {
                        continue
                    }
                    var e = fx.indoorData[fr];
                    var fm = e.defaultFloor;
                    if (fr === ft) {
                        fm = fs;
                        e.currentFloor = fs
                    }
                    if (e.floors[fm]) {
                        if (e.floors[fm].base) {
                            for (var fo = 0; fo < e.floors[fm].base.length; fo++) {
                                fx.indoorBase.push(e.floors[fm].base[fo])
                            }
                        }
                        if (e.floors[fm].contour) {
                            for (var fo = 0; fo < e.floors[fm].contour.length; fo++) {
                                fx.indoorBaseContour.push(e.floors[fm].contour[fo])
                            }
                        }
                        if (e.floors[fm].indoorBorder3D) {
                            fx.indoorBorder3D.push(e.floors[fm].indoorBorder3D)
                        }
                        if (e.floors[fm].area3D) {
                            fx.indoorArea3D.push(e.floors[fm].area3D)
                        }
                        if (e.floors[fm].pois) {
                            fp.label.indoorLabel = fp.label.indoorLabel.concat(e.floors[fm].pois)
                        }
                    }
                }
                this.updateAllIconsTextureCoords(fp);
                var fu = this;
                this.labelProcessor.loadIconImages(fp, function(i) {
                    fu.updateAllIconsTextureCoords(i)
                });
                var fl = fn.split("_");
                var fk = parseInt(fl[fl.length - 1], 10);
                if (fk !== fw) {
                    continue
                }
                fu.map._featureMgr.setData(fp, this.drawIndex, 2)
            }
            this.dataBackCollideLabels();
            this.map.dispatchEvent(new aB("onrefresh"))
        },
        _removeIndoorData: function(i) {
            if (!i.indoorData) {
                return
            }
            for (var e in i.indoorData) {
                if (e === "tileInfo") {
                    continue
                }
                this.map._indoorMgr.removeData(e, i.key)
            }
        },
        getProcessedLabelZoom: function(fl) {
            var fm = b3.baseZoomInfo[fl.zoom];
            if (!fm) {
                return false
            }
            var fk = [];
            for (var fn = 0; fn < fm.length; fn++) {
                var fo = this.getTileKey(fl, {
                    useZoom: fm[fn]
                });
                var e = this.tileCache.getData(fo);
                if (e && e.status === "ready" && e.label && e.label.status === "ready") {
                    fk.push(fm[fn])
                }
            }
            if (fk.length) {
                return fk
            } else {
                return false
            }
        },
        getSameZoomDataFromCache: function(fk) {
            var fl = b3.baseZoomInfo[fk.zoom];
            for (var fm = 0; fm < fl.length; fm++) {
                var fn = this.getTileKey(fk, {
                    useZoom: fl[fm]
                });
                if (fk.useZoom === fl[fm]) {
                    continue
                }
                var e = this.tileCache.getData(fn);
                if (e && e.status === "ready" && e.label && e.label.status === "ready") {
                    return e
                }
            }
            return false
        },
        hasSameLabelData: function(fl, fk) {
            for (var e = 0; e < fk.length; e++) {
                if (fk[e].key === fl) {
                    return true
                }
            }
            return false
        },
        getDataByFloorName: function(fk, fl) {
            for (var e = 0; e < fk.length; e++) {
                if (fk[e].floorName === fl) {
                    return fk[e]
                }
            }
            return null
        },
        mergeIndoorLabelData: function(fq, e) {
            for (var fo in fq) {
                if (fo === "tileInfo") {
                    continue
                }
                if (e[fo]) {
                    var fk = fq[fo].floors;
                    var fr = e[fo].floors;
                    for (var fm = 0; fm < fk.length; fm++) {
                        var fl = fk[fm];
                        var fp = fl.floorName;
                        var fn = this.getDataByFloorName(fr, fp);
                        if (fn) {
                            if (fn.pois) {
                                fn.pois = fn.pois.concat(fl.pois);
                                fl.pois = fn.pois
                            } else {
                                fn.pois = fl.pois
                            }
                        }
                    }
                }
            }
        },
        mergeSameZoomLabelData: function(fo) {
            var fm = fo.label;
            if (!fm) {
                return
            }
            var e = fo.tileInfo;
            var fn = this.getSameZoomDataFromCache(e);
            if (!fn) {
                return
            }
            var fl = fn.label;
            if (!fl) {
                return
            }
            for (var fk = 0; fk < fm.fixedLabel.length; fk++) {
                if (!this.hasSameLabelData(fm.fixedLabel[fk].key, fl.fixedLabel)) {
                    fl.hasNewData = true;
                    fl.fixedLabel.push(fm.fixedLabel[fk])
                }
            }
            for (var fk = 0; fk < fm.lineLabel.length; fk++) {
                if (!this.hasSameLabelData(fm.lineLabel[fk].key, fl.lineLabel)) {
                    fl.hasNewData = true;
                    fl.lineLabel.push(fm.lineLabel[fk])
                }
            }
            for (var fk = 0; fk < fm.indoorLabel.length; fk++) {
                if (!this.hasSameLabelData(fm.indoorLabel[fk].key, fl.indoorLabel)) {
                    fl.hasNewData = true;
                    fl.indoorLabel.push(fm.indoorLabel[fk])
                }
            }
            fo.label = fl;
            if (fn.renderData.indoorData && fo.renderData.indoorData) {
                this.mergeIndoorLabelData(fo.renderData.indoorData, fn.renderData.indoorData)
            }
        },
        processLabelData: function(fn) {
            if (!fn.label) {
                return
            }
            if (fn.label.status === "processing") {
                return
            }
            fn.label.status = "processing";
            var fl = this;
            fl.updateAllIconsTextureCoords(fn);
            this.labelProcessor.loadIconImages(fn, function(fo) {
                fl.updateAllIconsTextureCoords(fo)
            });
            if (this.map.config.textRenderType === "canvas") {
                var e = this.labelProcessor.drawLabelsOnCanvas(fn, function(fq, fr) {
                    var fp = fn.tileInfo;
                    fl.mergeSameZoomLabelData(fn);
                    if (fq) {
                        if (!fn.label.textureHeights) {
                            fn.label.textureHeights = []
                        }
                        fn.label.textureHeights[fp.useZoom] = fq.height
                    }
                    if (fr) {
                        if (!fn.label.indoorTextureHeights) {
                            fn.label.indoorTextureHeights = []
                        }
                        fn.label.indoorTextureHeights[fp.useZoom] = fr.height
                    }
                    var fo = fl._getTileTexImgKey(fp);
                    fl._doWorkAfterLabelImageLoad(fn, fq, fr, fo)
                });
                return
            }
            var fk = fn.label.textImageBitmap || fn.label.textImgStr;
            var fm = fn.label.indoorTextImageBitmap || fn.label.indoorTextImgStr;
            this.labelProcessor.loadImgByStr(fk, fm, function i(ft, fr) {
                var fq = fn.label.textureHeight;
                var fu = fn.label.indoorTextureHeight;
                fn.label.textureHeight = undefined;
                fn.label.indoorTextureHeight = undefined;
                var fp = fn.tileInfo;
                fl.mergeSameZoomLabelData(fn);
                var fs = fn.label;
                fs.textImgStr = "";
                fs.indoorTextImgStr && (fs.indoorTextImgStr = "");
                if (!fs.textureHeights) {
                    fs.textureHeights = []
                }
                fs.textureHeights[fp.useZoom] = fq;
                if (!fs.indoorTextureHeights) {
                    fs.indoorTextureHeights = []
                }
                fs.indoorTextureHeights[fp.useZoom] = fu;
                var fo = fl._getTileTexImgKey(fp);
                fl._doWorkAfterLabelImageLoad(fn, ft, fr, fo)
            })
        },
        _getTileTexImgKey: function(i) {
            var fk = i.style || this.mapStyleId || "default";
            var e = fk + "_" + i.col + "_" + i.row + "_" + i.zoom;
            if (this.map.config.textRenderType === "canvas") {
                e += "_" + i.useZoom
            }
            return e
        },
        _doWorkAfterLabelImageLoad: function(fp, fn, fl, i) {
            var fo = this;
            var fm = fp.label;
            fm.tileInfo = fp.tileInfo;
            fm.status = "ready";
            if (fn || fl) {
                var e = fm.tileInfo;
                if (fn) {
                    fn.id = i;
                    if (!fm.textureSources) {
                        fm.textureSources = []
                    }
                    fm.textureSources[e.useZoom] = fn
                }
                if (fl) {
                    fl.id = i + "_indoor";
                    if (!fm.indoorTextureSources) {
                        fm.indoorTextureSources = []
                    }
                    fm.indoorTextureSources[e.useZoom] = fl
                }
                if (fo.map._webglMapScene) {
                    var fk = fo.map._webglMapScene._painter;
                    if (fn) {
                        fk._addToAsyncJob(fm.textureSources[e.useZoom])
                    }
                }
            }
            if (fp.custom !== true) {
                fo.tileLabels.push(fm)
            }
            if (fo.collisionTimer) {
                return
            }
            fo.collisionTimer = setTimeout(function() {
                fo.dataBackCollideLabels();
                fo.collisionTimer = null
            }, 300)
        },
        _updateIconTextureCoords: function(fp, fk) {
            if (!fp) {
                return
            }
            var fo = this.map;
            for (var fl = 0; fl < fp.length; fl++) {
                var fn = fp[fl];
                if (!fn.iconPos) {
                    continue
                }
                if (fo._webglMapScene) {
                    var e = fo._webglMapScene._painter;
                    var fm = fk + "_" + fn.iconPos.iconType;
                    fn.iconPos.texcoord = e._iconTextureAtlasCoords[fm] || null
                }
            }
        },
        updateAllIconsTextureCoords: function(fm) {
            if (fm) {
                if (fm.label) {
                    var i = fm.tileInfo.style;
                    this._updateIconTextureCoords(fm.label.fixedLabel, i);
                    this._updateIconTextureCoords(fm.label.indoorLabel, i)
                }
            } else {
                var fl = this.tileCache.getAllData();
                for (var fk in fl) {
                    var e = fl[fk].data;
                    if (e.status === "ready" && e.label) {
                        var i = e.tileInfo.style;
                        this._updateIconTextureCoords(e.label.fixedLabel, i);
                        this._updateIconTextureCoords(e.label.indoorLabel, i)
                    }
                }
            }
            this.updateLabels();
            this.map.dispatchEvent(new aB("onrefresh"))
        },
        cacheDataCollideLabels: function(fk) {
            var fm = this;
            var i = this.map._featureMgr;
            function fl() {
                fm.cacheLabelTimer = null;
                var fn;
                var fo = fm.map.getTilt();
                var fp = fm.map.getHeading() % 360;
                if (fm.tileLabels.length === 0 || (fm.tileLabels.length === 1 && fm.tileLabels[0].tileInfo.zoom === 0)) {
                    fn = i.getLabelData();
                    if (fn.length > 0) {
                        fn = fm.labelProcessor.collisionTest(fn, -1)
                    }
                } else {
                    if (fo || fp) {
                        if (this._collisionTimer) {
                            if (!fo) {
                                clearTimeout(this._collisionTimer)
                            } else {
                                if (Date.now() - fm.lastCollisionTestTime > 500) {
                                    fm.lastCollisionTestTime = Date.now()
                                } else {
                                    clearTimeout(this._collisionTimer)
                                }
                            }
                        }
                        this._collisionTimer = setTimeout(function() {
                            fn = fm.labelProcessor.collisionTest(fm.tileLabels);
                            if (fn) {
                                i.setLabelData(fn)
                            }
                            fm.updateLabels();
                            fm.map.dispatchEvent(new aB("onrefresh"));
                            fm._collisionTimer = null
                        }, 60);
                        return
                    } else {
                        fn = fm.labelProcessor.getCachedLabels(fm.tileLabels)
                    }
                }
                if (fn) {
                    i.setLabelData(fn)
                }
                fm.updateLabels();
                fm.map.dispatchEvent(new aB("onrefresh"))
            }
            if (!fk) {
                clearTimeout(fm.cacheLabelTimer);
                fl()
            } else {
                if (fm.cacheLabelTimer) {
                    return
                }
                fm.cacheLabelTimer = setTimeout(function e() {
                    fl()
                }, fk)
            }
        },
        dataBackCollideLabels: function() {
            var i = this;
            if ((i.tileLabels && i.tileLabels.length === 0)) {
                return
            }
            var e;
            i.labelProcessor.calcLabelsCollision(i.tileLabels);
            e = i.labelProcessor.getCachedLabels(i.tileLabels);
            if (e) {
                i.map._featureMgr.setLabelData(e)
            }
            i.updateLabels();
            i.map.dispatchEvent(new aB("onrefresh"));
            if (d6()) {
                this.labelProcessor._refreshSpotData()
            }
        },
        updateLabels: function(fm) {
            var fn = this.map;
            var i = fn._featureMgr;
            var fk = i.getLabelData();
            if (fk.length > 0) {
                var fl = fn.getZoom();
                if (fk.labelZoom - fl < 3) {
                    this.labelProcessor.updateLabels(fk);
                    var e = this.labelProcessor.fixDataFormat(fk);
                    i.setOverlayData(e[0], 2);
                    i.setOverlayData(e[1], 3);
                    i.setOverlayData(e[2], 4)
                } else {
                    i.clearLabelOverlayData()
                }
                fn.temp.isPermitSpotOver = false;
                this.labelProcessor.curSpotAdded = false
            }
        },
        loadRasterLayerData: function(fl, fp) {
            if (fp) {
                for (var fn = 0, fm = fl.length; fn < fm; fn++) {
                    var fk = fl[fn];
                    var fq = this.getTileKey(fk);
                    var e = this.tileCache.getData(fq);
                    if (e && e.status === "ready") {
                        this.map._featureMgr.setData(e, this.drawIndex, 2)
                    }
                }
                return
            }
            for (var fn = 0, fm = fl.length; fn < fm; fn++) {
                var fk = fl[fn];
                var fq = this.getTileKey(fk);
                var e = this.tileCache.getData(fq);
                if (!e) {
                    this.tileCache.setData(fq, {});
                    var fo = this;
                    this.loadRasterTileData(fk, function(i, fr) {
                        fo.rasterTileDataCbk(i, fr)
                    })
                }
            }
        },
        loadRasterTileData: function(i, e) {
            var fm = i.col;
            var fp = i.row;
            var fn = i.zoom;
            var fl = this.getTilesUrl(new cN(fm,fp), fn);
            if (!fl) {
                return
            }
            var fo = this.getTileKey(i);
            var fk = this.loadTileImage(fl, fo, e);
            fk.tileInfo = i
        },
        loadTileImage: function(fl, fk, e) {
            var i = new Image();
            i.crossOrigin = "anonymous";
            i.onload = function() {
                e && e(this, fk)
            }
            ;
            i.onerror = function() {
                e && e(null, fk)
            }
            ;
            i.src = fl;
            return i
        },
        rasterTileDataCbk: function(fn, fl) {
            if (!fn) {
                this.tileCache.removeData(fl);
                return
            }
            var i = fn.tileInfo;
            var fk = i.col;
            var ft = i.row;
            var fs = i.zoom;
            var e = this.tileCache.getData(fl);
            if (!e) {
                return
            }
            var fm = cC.calcLoopParam(fk, fs);
            var fq = fm.geoOffsetX;
            fn.tileInfo.loopOffsetX = fq;
            e.textureSource = fn;
            e.dataType = c3;
            e.tileInfo = i;
            e.renderData = {
                vertexAll: [0, 0, 0, 0, 0, 256, 0, 0, 1, 0, 256, 256, 0, 1, 1, 0, 0, 0, 0, 0, 256, 256, 0, 1, 1, 0, 256, 0, 0, 1]
            };
            e.status = "ready";
            this.tileCache.setData(fl, e);
            var fo = "id_" + fk + "_" + ft + "_" + fs;
            var fp = false;
            if (this.curViewTilesInfo[fo]) {
                e.dataType = c3;
                e.png8 = this.png8 || false;
                this.map._featureMgr.setData(e, this.drawIndex, 2);
                fp = true
            }
            if (fp) {
                var fr = new aB("onrefresh");
                fr.source = "webgllayer";
                this.map.dispatchEvent(fr)
            }
        },
        _checkTilesLoaded: function() {
            this.numLoading--;
            if (this.map.firstTileLoad === false) {
                this.map.dispatchEvent(new aB("onfirsttilesloaded"));
                this.map.firstTileLoad = true
            }
            var e = this;
            if (this.numLoading === 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function() {
                    if (e.numLoading === 0) {
                        e.map.dispatchEvent(new aB("ontilesloaded"))
                    }
                    e._checkLoadedTimer = null
                }, 60)
            }
        },
        isClickableLabel: function(e) {
            if (e.isDel) {
                return false
            }
            if (e.zoom > 9 && !e.guid) {
                return false
            }
            if (e.zoom <= 9 && !e.name && !e.guid) {
                return false
            }
            return true
        }
    };
    var bg = 5;
    var cz = 4;
    var e0 = 3;
    var dv = 2;
    var fe = 1;
    var cB = 0;
    function r(e) {
        this._ratio = ay();
        this._iconCache = {};
        this._map = e;
        this._drawingCanvasPool = [];
        this._drawingCanvasHeight = 4096
    }
    x.extend(r.prototype, {
        _loadIcons: function(i, fp) {
            var fn = 0;
            var fm = this;
            var fk = this._map.config.style;
            for (var fo in i) {
                fn++;
                var e = new Image();
                e.id = fo;
                e.crossOrigin = "anonymous";
                e.onload = function() {
                    fm._iconCache[this.id].loaded = true;
                    fn--;
                    if (fn === 0) {
                        fp()
                    }
                    this.onload = null
                }
                ;
                e.onerror = function() {
                    fm._iconCache[this.id] = null;
                    fn--;
                    if (fn === 0) {
                        fp()
                    }
                    this.onerror = null
                }
                ;
                var fl = dm.getIconSetPath(fk) + fo + ".png";
                e.src = fl;
                this._iconCache[fo] = {
                    loaded: false,
                    image: e
                }
            }
        },
        _getEmptyDrawingCanvas: function() {
            for (var fk = 0; fk < this._drawingCanvasPool.length; fk++) {
                if (this._drawingCanvasPool[fk]._free === true) {
                    this._drawingCanvasPool[fk]._free = false;
                    return this._drawingCanvasPool[fk]
                }
            }
            var e = this._createNewDrawingCanvas();
            this._drawingCanvasPool.push(e);
            e._free = false;
            return e
        },
        _createNewDrawingCanvas: function() {
            var e = H("canvas");
            e.width = 512;
            e.height = this._drawingCanvasHeight;
            e._free = true;
            e._id = aI.getGUID();
            var i = e.getContext("2d");
            i.textBaseline = "bottom";
            i.lineJoin = "round";
            return e
        },
        drawLabelsOnCanvas: function(fD, fl) {
            var ft = fD.label.fixedLabel.slice(0);
            var fz = fD.label.lineLabel.slice(0);
            var fk = fD.label.indoorLabel.slice(0);
            if (ft.length === 0 && fz.length === 0 && fk.length === 0) {
                fl();
                return
            }
            var fo = function(fI, i) {
                return fI.styleId - i.styleId
            };
            ft.sort(fo);
            fz.sort(fo);
            fk.sort(fo);
            var fC = {};
            var e = this._getEmptyDrawingCanvas();
            var fy = e.getContext("2d");
            fy.clearRect(0, 0, e.width, e.height);
            var fG = 0;
            var fu = null;
            var fn = 0;
            if (ft.length > 0) {
                while (fn < ft.length && !ft[fn].styleText[0]) {
                    fn++
                }
                if (ft[fn] && ft[fn].styleText[0]) {
                    fu = ft[fn].styleText[0].fontSize + ft[fn].styleText[0].haloSize * 2
                }
            }
            if (fu === null && fk.length > 0) {
                fn = 0;
                while (fn < fk.length && !fk[fn].styleText[0]) {
                    fn++
                }
                if (fk[fn] && fk[fn].styleText[0]) {
                    fu = fk[fn].styleText[0].fontSize + fk[fn].styleText[0].haloSize * 2
                }
            }
            if (fu === null && fz.length > 0) {
                fn = 0;
                while (fn < fz.length && !fz[fn].styleText[0]) {
                    fn++
                }
                if (fz[fn] && fz[fn].styleText[0]) {
                    fu = fz[fn].styleText[0].fontSize + fz[fn].styleText[0].haloSize * 2
                }
            }
            if (fu === null || isNaN(fu)) {
                fl();
                return
            }
            var fq = 0;
            var fp = fu;
            var fw = {};
            var fH = 0;
            var fx = [];
            for (var fB = 0; fB < ft.length; fB++) {
                var fs = ft[fB];
                var fv = fs.name;
                var fA = fs.styleText;
                if (!fv || fA.length === 0) {
                    continue
                }
                var fm = fs.icon;
                if (fs.textOnIcon && (!this._iconCache[fm] || this._iconCache[fm].loaded === false)) {
                    fx.push(fs);
                    fH++;
                    if (!fw[fm]) {
                        fw[fm] = true
                    }
                    continue
                }
                var fE = this._drawEachText(fy, fs, fG, fq, fp, fu, fC);
                if (!fE) {
                    continue
                }
                fq = fE.curX;
                fp = fE.curY;
                fu = fE.curLineHeight;
                fG = fE.styleId
            }
            var fE = this._drawEachTypeOfLabels(fy, fk, fG, fq, fp, fu, fC);
            fG = fE.curStyleId;
            fq = fE.curX;
            fp = fE.curY;
            fu = fE.curLineHeight;
            var fE = this._drawEachTypeOfLabels(fy, fz, fG, fq, fp, fu, fC);
            fG = fE.curStyleId;
            fq = fE.curX;
            fp = fE.curY;
            fu = fE.curLineHeight;
            if (fH > 0) {
                var fF = this;
                this._loadIcons(fw, function() {
                    fE = fF._drawEachTypeOfLabels(fy, fx, fG, fq, fp, fu, fC);
                    fG = fE.curStyleId;
                    fq = fE.curX;
                    fp = fE.curY;
                    fu = fE.curLineHeight;
                    var i = fF._generateEachLabelCanvas(e, fp, ft, fz, fk, fD);
                    fl(i[0], i[1])
                });
                return
            }
            var fr = this._generateEachLabelCanvas(e, fp, ft, fz, fk, fD);
            fl(fr[0], fr[1])
        },
        drawCustomLabelsOnCanvas: function(fo, fu) {
            if (fo.length === 0) {
                fu();
                return
            }
            var fk = 0;
            var e = (fo[0].style.fontSize + (fo[0].style.haloSize || 0) * 2) || 0;
            var fl = e;
            var fq = this._getEmptyDrawingCanvas();
            var fv = fq.getContext("2d");
            fv.clearRect(0, 0, fq.width, fq.height);
            var fr = {};
            var ft = -1;
            for (var fm = 0; fm < fo.length; fm++) {
                if (!fo[fm].name) {
                    continue
                }
                var fs = this._drawEachText(fv, fo[fm], ft, fk, e, fl, fr);
                fk = fs.curX;
                e = fs.curY;
                fl = fs.curLineHeight;
                ft = fs.styleId
            }
            var fn = e;
            var fp = this._copyToNewCanvas(fq, fn);
            for (var fm = 0; fm < fo.length; fm++) {
                if (!fo[fm].name && fo[fm].style.iconSize) {
                    this._addFixedLabelBounds(fo[fm]);
                    continue
                }
                if (!fo[fm].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(fo[fm], fn);
                this._addFixedLabelBounds(fo[fm])
            }
            fu(fp)
        },
        _drawEachTypeOfLabels: function(fu, fo, fs, fl, fk, fm, fq) {
            for (var fn = 0; fn < fo.length; fn++) {
                var fp = fo[fn];
                var ft = fp.name;
                var e = fp.styleText;
                if (!ft || e.length === 0) {
                    continue
                }
                var fr = this._drawEachText(fu, fp, fs, fl, fk, fm, fq);
                fl = fr.curX;
                fk = fr.curY;
                fm = fr.curLineHeight;
                fs = fr.styleId;
                if (fr.curY > this._drawingCanvasHeight) {
                    return {
                        curX: fl,
                        curY: fk,
                        curLineHeight: fm,
                        curStyleId: fs
                    }
                }
            }
            return {
                curX: fl,
                curY: fk,
                curLineHeight: fm,
                curStyleId: fs
            }
        },
        _drawIndoorTextLabelOnCanvas: function(fm) {
            var e = this._getEmptyDrawingCanvas();
            var ft = e.getContext("2d");
            ft.clearRect(0, 0, e.width, e.height);
            var fB = 0;
            var fs = null;
            var fr = 0;
            var fp;
            var fy = {};
            var fx = [];
            for (var fn in fm) {
                if (fn === "tileInfo") {
                    continue
                }
                var fl = fm[fn];
                var fw = fl.defaultFloor;
                var fq = fl.floors;
                for (var fv = 0; fv < fq.length; fv++) {
                    if (fv === fw) {
                        continue
                    }
                    var fz = fq[fv];
                    if (!fz.pois) {
                        continue
                    }
                    var fo = fz.pois;
                    for (var fu = 0; fu < fo.length; fu++) {
                        if (fs === null && fo[fu].styleText[0]) {
                            fs = fo[fu].styleText[0].fontSize + fo[fu].styleText[0].haloSize * 2;
                            fp = fs
                        }
                        fx.push(fo[fu])
                    }
                }
            }
            if (fs === null) {
                return null
            }
            fx.sort(function(fC, i) {
                return i.rank - fC.rank || fC.styleId - i.styleId
            });
            var fA = this._drawEachTypeOfLabels(ft, fx, fB, fr, fp, fs, fy);
            fB = fA.curStyleId;
            fr = fA.curX;
            fp = fA.curY;
            fs = fA.curLineHeight;
            var fk = this._copyToNewCanvas(e, fp);
            return fk
        },
        _updateIndoorLabelsCoords: function(fs, ft) {
            for (var fr in fs) {
                if (fr === "tileInfo") {
                    continue
                }
                var e = fs[fr];
                var fn = e.defaultFloor;
                var fo = e.floors;
                for (var fp = 0; fp < fo.length; fp++) {
                    if (fp === fn) {
                        continue
                    }
                    var fk = fo[fp];
                    if (!fk.pois) {
                        continue
                    }
                    var fm = fk.pois;
                    for (var fl = 0; fl < fm.length; fl++) {
                        var fq = fm[fl];
                        if (fq.name && (!fq.textSize || fq.textSize.length === 0)) {
                            fm.splice(fl, 1);
                            fl--;
                            continue
                        }
                        this._updateFixedLabelCoords(fq, ft);
                        this._addFixedLabelBounds(fq)
                    }
                }
            }
        },
        _generateEachLabelCanvas: function(fo, fn, fp, e, fr, fk) {
            fn = Math.min(fn, this._drawingCanvasHeight);
            var fq = this._copyToNewCanvas(fo, fn);
            var fl = null;
            if (fk.renderData.indoorData) {
                fl = this._drawIndoorTextLabelOnCanvas(fk.renderData.indoorData);
                if (fl) {
                    this._updateIndoorLabelsCoords(fk.renderData.indoorData, fl.height)
                }
            }
            for (var fm = 0; fm < fp.length; fm++) {
                if (!fp[fm].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(fp[fm], fn);
                this._addFixedLabelBounds(fp[fm])
            }
            for (var fm = 0; fm < fr.length; fm++) {
                if (!fr[fm].textSize) {
                    continue
                }
                this._updateFixedLabelCoords(fr[fm], fn);
                this._addFixedLabelBounds(fr[fm])
            }
            for (var fm = 0; fm < e.length; fm++) {
                this._updateLineLabelCoords(e[fm], fn)
            }
            return [fq, fl]
        },
        _copyToNewCanvas: function(fk, i) {
            if (i === 0) {
                return null
            }
            var fl = H("canvas");
            fl.width = fk.width;
            fl.height = i;
            var e = fl.getContext("2d");
            e.drawImage(fk, 0, 0, 512, i, 0, 0, 512, i);
            fl._id = fk._id;
            fk._free = true;
            return fl
        },
        _drawEachText: function(fA, fo, i, fC, fB, fJ, fl) {
            var fI = fo.name;
            var fs = fo.styleText ? fo.styleText[0] : fo.style;
            if (!fs) {
                return null
            }
            var fv = fs.fontSize;
            var fY = fs.haloSize || 0;
            var fS = fs.fontRgba ? "rgba(" + fs.fontRgba.join(",") + ")" : fs.color;
            var fn = fs.haloRgba ? "rgba(" + fs.haloRgba.join(",") + ")" : fs.strokeColor;
            var f0 = fo.styleId || 0;
            if (fY > 2) {
                fY = 2
            }
            var fK = [];
            var fz = [];
            var fG = 0;
            if (fl && !fl[f0]) {
                fl[f0] = {}
            }
            var fu = fv + fY * 2;
            var fL = fu;
            if (fo.containDescendings) {
                fL += 4
            }
            if (fY === 0) {
                fL += 2
            }
            if (fo.textOnIcon) {
                fL = Math.max(fL, fo.iconSize[1])
            }
            if (f0 !== i || fL > fJ) {
                i = f0;
                fA.font = fv + "px sans-serif";
                if (fL > fJ) {
                    var fH = fL - fJ;
                    fJ += fH;
                    fB += fH
                }
                if (fY > 0) {
                    fA.lineWidth = fY * 2;
                    fA.strokeStyle = fn
                }
                fA.fillStyle = fS
            }
            if (fo.type === "line") {
                var fq = fI.split("");
                for (var f1 = 0; f1 < fq.length; f1++) {
                    var fU = fq[f1];
                    var fD;
                    var fM;
                    if (fl[f0][fU]) {
                        var fw = fl[f0][fU];
                        fD = fw.displaySize;
                        fM = fw.curWordPosition
                    } else {
                        var fk = Math.ceil(fA.measureText(fU).width);
                        if (fC + fk > 512) {
                            fC = 0;
                            fB += fL;
                            fJ = fL
                        }
                        if (fB > this._drawingCanvasHeight) {
                            return {
                                curX: fC,
                                curY: fB,
                                curLineHeight: fJ,
                                styleId: f0
                            }
                        }
                        var fV = fC;
                        if (fY > 0) {
                            fk += fY;
                            fV -= Math.round(fY / 2);
                            fA.strokeText(fU, fC, fB)
                        }
                        fA.fillText(fU, fC, fB);
                        var fR = [fk, fL];
                        fD = [Math.round(fR[0] / 2), Math.round(fR[1] / 2)];
                        fM = [fV, fB - fL];
                        fl[f0][fU] = {
                            displaySize: fD,
                            curWordPosition: fM,
                            totalHeight: fG
                        };
                        fC += fk + 2
                    }
                    fK.push(fD);
                    fz.push(fM)
                }
                fG = Math.round(fK[0][1])
            } else {
                if (fl[f0][fI]) {
                    var fw = fl[f0][fI];
                    fK = fw.textSize;
                    fz = fw.labelImagePosition;
                    fG = fw.totalHeight
                } else {
                    var fx = fI.split("\\");
                    if (fx.length > 1 && fo.textOnIcon) {
                        var f2 = 0;
                        var fZ = 0;
                        var f3 = [];
                        var fE = 8;
                        for (var f1 = 0; f1 < fx.length; f1++) {
                            var fI = fx[f1];
                            var ft = Math.ceil(fA.measureText(fI).width);
                            if (ft > f2) {
                                f2 = ft
                            }
                            f3.push(Math.round(ft / 2));
                            fZ += fL
                        }
                        var fr = f2 + 2 * fE;
                        var fX = fZ + 2 * fE;
                        if (fC + fr > 512) {
                            fC = 0;
                            fB += fJ
                        }
                        fB += fZ - fL + 2 * fE;
                        var fQ = fC;
                        var fF = fB - fX;
                        var e = Math.round(fr / 2);
                        var fy = this._iconCache[fo.icon].image;
                        this.drawStretchedIcon(fA, fy, [fQ, fF], fE, f2, fZ);
                        for (var f1 = 0; f1 < fx.length; f1++) {
                            var fI = fx[f1];
                            var fW = fQ + (e - f3[f1]);
                            var fT = fF + 4 + (f1 + 1) * fL;
                            fA.fillText(fI, fW, fT)
                        }
                        fK.push([Math.round(fr / 2), Math.round(fX / 2)]);
                        fz.push([fQ, fF]);
                        fC += fr;
                        fJ = fX;
                        fG = Math.round(fX / 2)
                    } else {
                        for (var f1 = 0; f1 < fx.length; f1++) {
                            var fI = fx[f1];
                            var ft = Math.ceil(fA.measureText(fI).width);
                            var fr = ft;
                            var fm = 0;
                            if (fo.textOnIcon) {
                                fm = 10;
                                fr += fm * 2;
                                if (fo.styleId === 519) {
                                    fr = fo.iconSize[0];
                                    fm = Math.round((fr - ft) / 2)
                                }
                            }
                            if (fC + fr > 512) {
                                fC = 0;
                                fB += fL;
                                fJ = fL
                            }
                            if (fB > this._drawingCanvasHeight) {
                                return {
                                    curX: fC,
                                    curY: fB,
                                    curLineHeight: fJ,
                                    styleId: f0
                                }
                            }
                            var fQ = fC;
                            var fF = fB - fL;
                            var fP = fC;
                            var fO = fB;
                            if (fo.containDescendings) {
                                fO -= 4
                            }
                            if (fo.textOnIcon) {
                                var fy = this._iconCache[fo.icon].image;
                                var fN = fo.iconSize;
                                if (fo.styleId === 519) {
                                    fA.drawImage(fy, 0, 0, fN[0], fN[1], fQ, fF, fN[0], fN[1])
                                } else {
                                    this.draw3StretchedIcon(fA, fy, [fQ, fF], fm, ft, fN[1])
                                }
                                fP += fm;
                                if (fo.iconSize[1] > fu) {
                                    fO -= (fo.iconSize[1] - fu) / 2 - 1
                                }
                                fr += 1
                            }
                            if (fY > 0) {
                                fr += fY;
                                fQ -= Math.round(fY / 2);
                                fA.strokeText(fI, fP, fO)
                            }
                            fA.fillText(fI, fP, fO);
                            var fp = [fr, fL];
                            var fD = [Math.round(fp[0] / 2), Math.round(fp[1] / 2)];
                            fK.push(fD);
                            fz.push([fQ, fF]);
                            fG += Math.round(fD[1]);
                            fC += fr
                        }
                    }
                    fl[f0][fI] = {
                        textSize: fK,
                        labelImagePosition: fz,
                        totalHeight: fG
                    }
                }
            }
            fo.textSize = fK;
            fo.labelImagePosition = fz;
            fo.totalHeight = fG;
            return {
                curX: fC,
                curY: fB,
                curLineHeight: fJ,
                styleId: f0
            }
        },
        drawStretchedIcon: function(e, fk, fl, fo, fp, i) {
            var fn = fl[0];
            var fm = fl[1];
            e.drawImage(fk, 0, 0, fo, fo, fn, fm, fo, fo);
            e.drawImage(fk, fo, 0, 1, fo, fn + fo, fm, fp, fo);
            e.drawImage(fk, fk.width - fo, 0, fo, fo, fn + fp + fo, fm, fo, fo);
            e.drawImage(fk, 0, fo, fo, 1, fn, fm + fo, fo, i);
            e.drawImage(fk, fo, fo, 1, 1, fn + fo, fm + fo, fp, i);
            e.drawImage(fk, fk.width - fo, fo, fo, 1, fn + fp + fo, fm + fo, fo, i);
            e.drawImage(fk, 0, fk.height - fo, fo, fo, fn, fm + i + fo, fo, fo);
            e.drawImage(fk, fo, fk.height - fo, 1, fo, fn + fo, fm + i + fo, fp, fo);
            e.drawImage(fk, fk.width - fo, fk.height - fo, fo, fo, fn + fp + fo, fm + i + fo, fo, fo)
        },
        draw3StretchedIcon: function(e, i, fk, fn, fp, fo) {
            var fm = fk[0];
            var fl = fk[1];
            e.drawImage(i, 0, 0, fn, i.height, fm, fl, fn, i.height);
            e.drawImage(i, fn, 0, 1, i.height, fm + fn, fl, fp, i.height);
            e.drawImage(i, i.width - fn, 0, fn, i.height, fm + fn + fp, fl, fn, i.height)
        },
        _updateFixedLabelCoords: function(fm, fB) {
            if (fB === 0) {
                return
            }
            var fw = [];
            var fI = [];
            var fJ = 0;
            var fz = fm.totalHeight;
            var fR = fm.textSize.length;
            var fn = fm.direction;
            if (typeof fn !== "number") {
                fn = 0
            }
            for (var fK = 0; fK < fR; fK++) {
                var fC = fm.labelImagePosition[fK];
                var fA = fm.textSize[fK];
                var fy = fC[0];
                var fl = fC[1];
                var fo = fA[0];
                var ft = fA[1];
                var fv = 0;
                var fH = 0;
                if (typeof fm.textMargin === "number") {
                    fH = fm.textMargin
                }
                var fu;
                var e;
                var fq = 0;
                var fx = 0;
                if (!fm.iconPos) {
                    if (!fm.custom) {
                        fn = cz
                    }
                } else {
                    fq = fm.iconPos.width;
                    fx = fm.iconPos.height
                }
                switch (fn) {
                case e0:
                    var fk = fz / 2 - ft + fv * (fR - 1) / 2;
                    fu = Math.round(-fq / 2 - fo - fH);
                    e = Math.round(fk - fJ - fv * fK);
                    break;
                case fe:
                    var fk = fz / 2 - ft + fv * (fR - 1) / 2;
                    fu = Math.round(fq / 2 + fH);
                    e = Math.round(fk - fJ - fv * fK);
                    break;
                case dv:
                    var fk = fx / 2 + fz - ft + fv * fR;
                    fu = Math.round(-fo / 2);
                    e = Math.round(fk - fJ - fv * fK);
                    break;
                case cB:
                    var fk = -fx / 2 - fv - ft;
                    fu = Math.round(-fo / 2);
                    e = Math.round(fk - fJ - fv * fK);
                    break;
                case cz:
                    var fk = -fz / 2 - fv * (fR - 1) / 2;
                    fu = Math.round(-fo / 2);
                    e = Math.round(fk - fJ - fv * fK);
                    break
                }
                fJ += ft;
                var fs = fu + fo;
                var fS = e;
                var fr = fs;
                var fQ = fS + ft;
                var fp = fu;
                var fP = fQ;
                fw.push(fu, e, fs, fS, fr, fQ, fu, e, fr, fQ, fp, fP);
                var fO = fy / 512;
                var fG = (fB - fl - ft * 2) / fB;
                var fN = (fy + fo * 2) / 512;
                var fF = fG;
                var fM = fN;
                var fE = (fB - fl) / fB;
                var fL = fO;
                var fD = fE;
                fI.push(fO, fG, fN, fF, fM, fE, fO, fG, fM, fE, fL, fD)
            }
            if (!fm.textPos) {
                fm.textPos = {}
            }
            fm.textPos.vertex = fw;
            fm.textPos.texcoord = fI
        },
        _addFixedLabelBounds: function(fr) {
            var fn = 1000;
            var fl = 1000;
            var fk = -1000;
            var e = -1000;
            if (fr.iconPos) {
                var fp = fr.iconPos["vertex"];
                for (var fq = 0, fm = fp.length; fq < fm; fq += 2) {
                    var fv = fp[fq];
                    var ft = fp[fq + 1];
                    if (fv < fn) {
                        fn = fv
                    }
                    if (fv > fk) {
                        fk = fv
                    }
                    if (ft < fl) {
                        fl = ft
                    }
                    if (ft > e) {
                        e = ft
                    }
                }
            }
            if (fr.custom && fr.style.iconSize && !fr.name) {
                var fs = fr.style.iconSize;
                var fu = fr.direction;
                switch (fu) {
                case cz:
                    fn = -Math.round(fs[0] / 2);
                    fl = -Math.round(fs[1] / 2);
                    fk = Math.round(fs[0] / 2);
                    e = Math.round(fs[1] / 2);
                    break;
                case dv:
                    fn = -Math.round(fs[0] / 2);
                    fl = 0;
                    fk = Math.round(fs[0] / 2);
                    e = fs[1];
                    break
                }
            }
            if (fr.textPos) {
                var fo = fr.textPos["vertex"];
                for (var fq = 0, fm = fo.length; fq < fm; fq += 2) {
                    var fv = fo[fq];
                    var ft = fo[fq + 1];
                    if (fv < fn) {
                        fn = fv
                    }
                    if (fv > fk) {
                        fk = fv
                    }
                    if (ft < fl) {
                        fl = ft
                    }
                    if (ft > e) {
                        e = ft
                    }
                }
            }
            fr.bds = [fn, fl, fk, e]
        },
        _updateLineLabelCoords: function(fC, fs) {
            if (fs === 0) {
                return
            }
            var fl = fC.wordsInfo;
            var fz = fC.wordCount;
            if (!fC.labelImagePosition) {
                return
            }
            var fu = fC.labelImagePosition.slice(0);
            if (fC.reverse) {
                fu.reverse()
            }
            var fL = 1000;
            var fI = 1000;
            var fJ = -1000;
            var fH = -1000;
            for (var fD = 0; fD < fz; fD++) {
                var fM = fu[fD];
                var fK = fM[0];
                var fA = fM[1];
                var fy = fC.textSize[fD];
                var fr = fy[0];
                var e = fy[1];
                var fq = fK / 512;
                var fx = (fs - fA - e * 2) / fs;
                var fo = (fK + fr * 2) / 512;
                var fw = fx;
                var fm = fo;
                var fv = (fs - fA) / fs;
                var fk = fq;
                var ft = fv;
                fl[fD].size = [fr, e];
                fl[fD].texcoord = [fq, fx, fo, fw, fm, fv, fq, fx, fm, fv, fk, ft];
                var fG = fl[fD].offset[0];
                var fF = fl[fD].offset[1];
                var fE = fG - fr / 2;
                var fp = fF + e / 2;
                var fn = fF - e / 2;
                var fB = fG + fr / 2;
                if (fE < fL) {
                    fL = fE
                }
                if (fB > fJ) {
                    fJ = fB
                }
                if (fn < fI) {
                    fI = fn
                }
                if (fp > fH) {
                    fH = fp
                }
            }
            fC.bds = [fL, fI, fJ, fH]
        }
    });
    var bI = {
        0: "00000000",
        16: "00010000",
        32: "00100000",
        48: "00110000",
        64: "01000000",
        96: "01100000"
    };
    function br(fk, fl, fm) {
        var e = fk.bds;
        if (!e) {
            return false
        }
        var i = fk.tracer;
        var fp;
        if (i) {
            if (!bI[i]) {
                fp = i.toString(2);
                if (fp.length < 8) {
                    fp = new Array(8 - fp.length + 1).join("0") + fp
                }
                bI[i] = fp
            }
            fp = bI[i];
            var fo = b3.mapZoomStartZoomMapping[fl];
            return fp[fl - fo] === "1"
        }
        var fn = fk.displayRange;
        if (fm >= fn[0] && fm <= fn[1]) {
            return true
        }
        return false
    }
    function b4(i, e) {
        this.map = i.map;
        this.layer = i;
        e = e || [];
        this.allLabels = [];
        this._spotData = [];
        this._strategyInfo = null;
        this.RANK1 = 1000000;
        this.RANK2 = 2000000;
        this.RANK3 = 3000000;
        this.RANK4 = 4000000;
        this.RANK5 = 5000000;
        this._useRound = false;
        this._mapIsMoving = false;
        this._onMapIdleCallback = e.onMapIdleCallback;
        this.map.temp.isPermitSpotOver = true;
        this.currentSelectedLabel = null;
        this.map._labelProcessor = this;
        this.iconCache = {};
        this.fixedLabelData = [];
        this.lineLabelData = [];
        this.highlightLabelData = [];
        this._iconLoadTimer = null;
        this._labelTextCanvas = null;
        if (this.map.config.textRenderType === "canvas") {
            this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas()
        }
        this.bind()
    }
    x.extend(b4.prototype, {
        bind: function() {
            var fk = this.map;
            var i = this;
            fk.addEventListener("mapstatusbusy_inner", function(fl) {
                i._useRound = false;
                i._mapIsMoving = true
            });
            fk.addEventListener("mapstatusidle_inner", function(fl) {
                i._useRound = true;
                i._mapIsMoving = false
            });
            fk.addEventListener("onspotmouseover", function(fn) {
                if (!this.temp.isPermitSpotOver) {
                    return
                }
                if (fn.spots.length > 0) {
                    var fm = fn.spots[0].userdata.uid;
                    var fo = fn.spots[0].userdata.tilePosStr;
                    var fl = i.getLabelByUid(fm, fo);
                    fl && fl.formatedData && i._toHighlightColor(fl.formatedData)
                }
            });
            fk.addEventListener("onspotmouseout", function(fn) {
                if (!this.temp.isPermitSpotOver) {
                    return
                }
                if (fn.spots.length > 0) {
                    var fm = fn.spots[0].userdata.uid;
                    var fo = fn.spots[0].userdata.tilePosStr;
                    var fl = i.getLabelByUid(fm, fo);
                    fl && fl.formatedData && i._toDefaultColor(fl.formatedData)
                }
            });
            fk.addEventListener("spotclick", function(fn) {
                if (fn.spots && fn.spots.length > 0) {
                    if (fn.spots[0].userdata.zoom < 10) {
                        return
                    }
                    var fm = fn.spots[0].userdata.uid;
                    var fo = fn.spots[0].userdata.tilePosStr;
                    if (i.currentSelectedLabel && (i.currentSelectedLabel.uid !== fm || i.currentSelectedLabel.tilePosStr !== fo)) {
                        i._recoverNormalState()
                    }
                    var fl = i.getLabelByUid(fm, fo);
                    fl && i._changeBaseMapState(fl)
                } else {
                    i._recoverNormalState()
                }
            });
            fk.on("spot_status_reset", function() {
                i._recoverNormalState()
            });
            fk.on("spot_highlight", function(fm) {
                var fl = i.getLabelByUid(fm.uid, fm.tilePosStr);
                fl && fl.formatedData && i._toHighlightColor(fl.formatedData)
            });
            fk.addEventListener("mousemove", function(fl) {
                if (i.curSpotAdded) {
                    return
                }
                if (this.currentOperation !== cx.idle || i._mapIsMoving === true) {
                    return
                }
                i._refreshSpotData();
                this.temp.isPermitSpotOver = true;
                i.curSpotAdded = true
            });
            if (d6()) {
                function e() {
                    i._refreshSpotData()
                }
                fk.addEventListener("mapstatusidle_inner", e)
            }
            fk.on("style_loaded", function() {
                if (i.map.config.textRenderType === "canvas" && !i._labelTextCanvas) {
                    i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas()
                }
            })
        },
        getLabelByUid: function(fo, fp) {
            var e = this.map._featureMgr.getResult().tileLabels;
            for (var fn = 0; fn < e.length; fn++) {
                var fk = e[fn].fixedLabel;
                for (var fm = 0; fm < fk.length; fm++) {
                    if (e[fn].fixedLabel[fm].guid === fo && e[fn].fixedLabel[fm].tilePosStr === fp) {
                        return e[fn].fixedLabel[fm]
                    }
                }
                var fl = e[fn].indoorLabel;
                for (var fm = 0; fm < fl.length; fm++) {
                    if (e[fn].indoorLabel[fm].guid === fo && e[fn].indoorLabel[fm].tilePosStr === fp) {
                        return e[fn].indoorLabel[fm]
                    }
                }
            }
            return null
        },
        getTileByLabelUid: function(fo) {
            var e = this.map._featureMgr.getResult().tileLabels;
            for (var fn = 0; fn < e.length; fn++) {
                var fk = e[fn].fixedLabel;
                for (var fm = 0; fm < fk.length; fm++) {
                    if (e[fn].fixedLabel[fm].guid === fo) {
                        return e[fn]
                    }
                }
                var fl = e[fn].indoorLabel;
                for (var fm = 0; fm < fl.length; fm++) {
                    if (e[fn].indoorLabel[fm].guid === fo) {
                        return e[fn]
                    }
                }
            }
            return null
        },
        _toHighlightColor: function(fk) {
            if (fk.tempRank && fk.tempRank === this.RANK5) {
                return
            }
            var e = this.map._featureMgr.getResult().eleData[4] || [];
            var fm = false;
            for (var fl = 0; fl < e.length; fl++) {
                if (e[fl] === fk || (e[fl].guid === fk.guid && e[fl].tilePosStr === fk.tilePosStr && e[fl].zoom === fk.zoom)) {
                    fm = true;
                    break
                }
            }
            if (fm) {
                return
            }
            e.push(fk);
            this.map._featureMgr.setOverlayData(e, 4);
            this.map.dispatchEvent(new aB("onrefresh"))
        },
        _toDefaultColor: function(fk) {
            if (fk.tempRank && fk.tempRank === this.RANK5) {
                return
            }
            var e = this.map._featureMgr.getResult().eleData[4] || [];
            for (var fl = 0; fl < e.length; fl++) {
                if (fk === e[fl] || (fk.guid === e[fl].guid && fk.tilePosStr === e[fl].tilePosStr && fk.zoom === e[fl].zoom)) {
                    e.splice(fl, 1);
                    break
                }
            }
            this.map._featureMgr.setOverlayData(e, 4);
            this.map.dispatchEvent(new aB("onrefresh"))
        },
        _changeBaseMapState: function(i) {
            var fm = i.guid;
            var fq = i.formatedData.guidExt;
            var fs = {
                guid: fm,
                tilePosStr: i.tilePosStr,
                guidExt: fq
            };
            this._strategyInfo = fs;
            this.currentSelectedLabel = i;
            var fl = this.map._featureMgr;
            var e = fl.getLabelData();
            e = this.collisionTest(e);
            this.updateLabels(e);
            var ft = this.fixDataFormat(e);
            fl.setOverlayData(ft[0], 2);
            fl.setOverlayData(ft[1], 3);
            fl.setOverlayData(ft[2], 4);
            var fk = this.getTileByLabelUid(fm);
            this.currentSelectedLabel.tileInfo = fk.tileInfo;
            var fr = fk.tileInfo.zoom;
            var fp = this.layer.tileCache.getAllData();
            for (var fo in fp) {
                var fn = fp[fo].data;
                if (!fn.label) {
                    continue
                }
                this.clearCollisionCache(fn.label)
            }
            this.map.dispatchEvent(new aB("onrefresh"))
        },
        _recoverNormalState: function() {
            this._strategyInfo = null;
            var fp = false;
            var fn = this.map._featureMgr.getLabelData();
            if (this.currentSelectedLabel) {
                var fk = this.currentSelectedLabel.guid;
                this.clearCollisionCache(this.getTileByLabelUid(fk));
                var fm = this.layer.tileCache.getAllData();
                for (var fl in fm) {
                    var fo = fm[fl].data;
                    if (!fo.label) {
                        continue
                    }
                    this.clearCollisionCache(fo.label)
                }
                this.currentSelectedLabel.tempRank = null;
                this.currentSelectedLabel = null;
                fp = true
            }
            fn = this.collisionTest(fn);
            this.updateLabels(fn);
            var e = this.fixDataFormat(fn);
            var i = this.map._featureMgr;
            i.setOverlayData(e[0], 2);
            i.setOverlayData(e[1], 3);
            i.setOverlayData([], 4);
            this.map.dispatchEvent(new aB("onrefresh"));
            if (fp) {
                this.curSpotAdded = false;
                this._refreshSpotData()
            }
        },
        loadIconImages: function(fm, fx) {
            var fp = fm.label;
            var fn = fm.tileInfo.style;
            var fk = fp.fixedLabel;
            var fu = fp.indoorLabel;
            var fy = fk.length + fu.length;
            var fr = this;
            var fl = 0;
            var fw = 200;
            for (var fo = 0; fo < fy; fo++) {
                var fq;
                if (fo < fk.length) {
                    fq = fk[fo]
                } else {
                    fq = fu[fo - fk.length]
                }
                if (!fq.iconPos) {
                    continue
                }
                var ft = fq.iconPos.iconType;
                var fv = fn + "_" + ft;
                fl++;
                if (this.iconCache[fv]) {
                    if (this.iconCache[fv].loaded) {
                        fx(fm)
                    }
                    continue
                }
                var fs = new Image();
                fs.id = fv;
                fs.crossOrigin = "anonymous";
                fs.onload = function() {
                    fr.iconCache[this.id].loaded = true;
                    fr._addToIconTexture(this);
                    if (fr._iconLoadTimer === null) {
                        fr._iconLoadTimer = setTimeout(function() {
                            fx();
                            fr._iconLoadTimer = null
                        }, fw)
                    }
                    this.onload = null
                }
                ;
                fs.onerror = function() {
                    if (!fr._iconLoadTimer) {
                        fr._iconLoadTimer = setTimeout(function() {
                            fx();
                            fr._iconLoadTimer = null
                        }, fw)
                    }
                    fr.iconCache[this.id] = null;
                    this.onerror = null
                }
                ;
                var e = dm.getIconSetPath(this.map.config.style) + ft + ".png";
                fs.src = e;
                this.iconCache[fv] = {
                    loaded: false,
                    image: fs
                }
            }
            return fl
        },
        _addToIconTexture: function(fn) {
            if (!this.map._webglMapScene) {
                return
            }
            var fp = this.map._webglMapScene._painter;
            var e = fp._iconTextureAtlas.addTexture(fn);
            fp._iconTextureAtlasOffset[fn.id] = e;
            var fs = 0 * fn.width / 1024 + e.width;
            var fm = 0 * fn.height / 1024 + e.height;
            var fr = fn.width / 1024 + e.width;
            var fl = fm;
            var fq = fr;
            var fk = fn.height / 1024 + e.height;
            var fo = fs;
            var i = fk;
            fp._iconTextureAtlasCoords[fn.id] = [fs, fm, fr, fl, fq, fk, fs, fm, fq, fk, fo, i]
        },
        loadImgByStr: function(fl, fm, fn) {
            if (!fl && !fm) {
                fn && fn(null, null);
                return
            }
            if (typeof fl === "object" && typeof fm === "object") {
                fn(fl, fm);
                return
            }
            var i = 0;
            var fk = null;
            var e = null;
            if (fl) {
                i++;
                fk = new Image();
                fk.onload = function() {
                    i--;
                    if (i === 0) {
                        fn && fn(this, e)
                    }
                    this.onload = null
                }
                ;
                fk.src = fl
            }
            if (fm) {
                i++;
                e = new Image();
                e.onload = function() {
                    i--;
                    if (i === 0) {
                        fn && fn(fk, this)
                    }
                    this.onload = null
                }
                ;
                e.src = fm
            }
        },
        collisionTest: function(fq, f3, fI) {
            if (!fq) {
                return []
            }
            var fA = this.map;
            var fP = fA.getHeading();
            fP = this.calcLoopHeading(fP);
            var fY = fA.height;
            var fU = this.allLabels;
            fU.length = 0;
            fq.sort(function(f5, i) {
                var f7 = f5.tileInfo;
                var f6 = i.tileInfo;
                if (f7.col * f7.row < f6.col * f6.row) {
                    return -1
                } else {
                    return 1
                }
            });
            var fr = fq.labelZoom;
            var fB = fA.getTilt();
            var ft = fA.getZoom();
            var fT;
            if (fI) {
                fT = fI
            } else {
                fT = this.getZoomStep()
            }
            for (var f1 = 0, fZ = fq.length; f1 < fZ; f1++) {
                var fE = fq[f1];
                var fp = fE.tileInfo;
                var fm = fp.zoom;
                var fS = fp.loopOffsetX / Math.pow(2, 18 - fm);
                if (!fP && !fB) {
                    if (fE.unnecessaryCollisionTest && fE.unnecessaryCollisionTest[fI]) {
                        continue
                    }
                }
                var fL = fE.fixedLabel || [];
                for (var f0 = 0, fG = fL.length; f0 < fG; f0++) {
                    var fn = fL[f0];
                    fn.zoom = fm;
                    if (f3 === -1 && fn.isDel) {
                        continue
                    }
                    if (!br(fn, fp.useZoom, ft)) {
                        fn.isDel = true;
                        continue
                    }
                    this.calcCollisionBounds(fn, fT, fS, fY);
                    fU.push(fn)
                }
                var fK = fE.indoorLabel || [];
                for (var f0 = 0, fG = fK.length; f0 < fG; f0++) {
                    var fn = fK[f0];
                    fn.zoom = fm;
                    if (f3 === -1 && fn.isDel) {
                        continue
                    }
                    if (!br(fn, fp.useZoom)) {
                        fn.isDel = true;
                        continue
                    }
                    this.calcCollisionBounds(fn, fT, fS, fY);
                    fU.push(fn)
                }
                var fo = fE.lineLabel || [];
                for (var f0 = 0, fG = fo.length; f0 < fG; f0++) {
                    var fn = fo[f0];
                    if (f3 === -1 && fn.isDel) {
                        continue
                    }
                    if (!br(fn, fp.useZoom)) {
                        fn.isDel = true;
                        continue
                    }
                    var f4 = fn.pt;
                    var fH = fA.pointToPixelIn(f4, {
                        zoom: fT,
                        useRound: this._useRound
                    });
                    var fF = fH.x + fS;
                    var fD = fY - fH.y;
                    var fJ = fn.bds;
                    var fX = fJ[0];
                    var fV = fJ[1];
                    var fy = fJ[2];
                    var fx = fJ[3];
                    var fQ = fX;
                    var fO = fV;
                    var fw = fy;
                    var fv = fx;
                    if ((fP >= 0 && fP < 45) || (fP >= 315 && fP < 360)) {
                        fQ = fX;
                        fO = fV;
                        fw = fy;
                        fv = fx
                    } else {
                        if (fP >= 45 && fP < 135) {
                            fQ = fV;
                            fO = -fy;
                            fw = fx;
                            fv = -fX
                        } else {
                            if (fP >= 135 && fP < 225) {
                                fQ = -fy;
                                fO = -fx;
                                fw = -fX;
                                fv = -fV
                            } else {
                                if (fP >= 225 && fP < 315) {
                                    fQ = -fx;
                                    fO = fX;
                                    fw = -fV;
                                    fv = fy
                                }
                            }
                        }
                    }
                    fn._tempBds = [fF + fQ, fD + fO, fF + fw, fD + fv];
                    fU.push(fn)
                }
            }
            var fR = this._strategyInfo;
            if (fR) {
                var fu = fR.guid;
                var fC = fR.guidExt;
                var fk = false;
                for (var f1 = 0, fZ = fU.length; f1 < fZ; f1++) {
                    var fW = fU[f1];
                    delete fW.tempRank;
                    if (!this.layer.isClickableLabel(fW) || (fC === 1 && !fW.guidExt)) {
                        continue
                    }
                    if (fu === fW.guid && fR.tilePosStr === fW.tilePosStr) {
                        fW.tempRank = this.RANK5;
                        fk = true
                    }
                }
                if (!fk && this.currentSelectedLabel) {
                    this.currentSelectedLabel.tempRank = this.RANK5;
                    var fp = this.currentSelectedLabel.tileInfo;
                    var fm = fp.zoom;
                    var fS = fp.loopOffsetX / Math.pow(2, 18 - fm);
                    this.calcCollisionBounds(this.currentSelectedLabel, fT, fS, fY);
                    fU.push(this.currentSelectedLabel)
                }
            } else {
                for (var f1 = 0, fZ = fU.length; f1 < fZ; f1++) {
                    var fW = fU[f1];
                    if (fW.type === "line" || !fW.iconPos) {
                        continue
                    }
                    delete fW.tempRank
                }
            }
            fU.sort(function(f6, f5) {
                var f7 = f6.tempRank ? f6.tempRank : f6.rank;
                var i = f5.tempRank ? f5.tempRank : f5.rank;
                return i - f7 || f6.startZoom - f5.startZoom || f5.pt.lng - f6.pt.lng || f5.pt.lat - f6.pt.lat
            });
            var fl = 0;
            if (fB > 0) {
                fl = 6
            }
            var ft = fA.getZoom();
            if (ft >= 8 && ft < 9) {
                ft < 8.5 ? (fl = 6) : (fl = 3)
            }
            var e = 2;
            if (ft < 6 && ft >= 5) {
                e = -1
            }
            for (var f1 = 0, fZ = fU.length; f1 < fZ; f1++) {
                var fN = fU[f1];
                var fs = fN._tempBds;
                fN.isDel = false;
                fN._intersectIdx = [];
                for (f0 = f1 + 1; f0 < fZ; f0++) {
                    var fz = fU[f0];
                    var f2 = fz._tempBds;
                    if (!(fs[2] + fl + e < f2[0] - fl || fs[0] - fl > f2[2] + fl + e || fs[3] + fl + e < f2[1] - fl || fs[1] - fl > f2[3] + fl + e)) {
                        fN._intersectIdx.push(f0)
                    }
                }
            }
            for (var f1 = 0, fZ = fU.length; f1 < fZ; f1++) {
                var fW = fU[f1];
                if (fW.isDel === false) {
                    var fM = fW._intersectIdx;
                    for (var f0 = 0, fG = fM.length; f0 < fG; f0++) {
                        fU[fM[f0]].isDel = true
                    }
                }
            }
            return fq
        },
        calcCollisionBounds: function(fq, fo, i, fp) {
            var fn = fq.pt;
            var fl = this.map;
            var fm = fl.pointToPixelIn(fn, {
                zoom: fo,
                useRound: this._useRound
            });
            var fk = fm.x + i;
            var fr = fp - fm.y;
            var e = fq.bds;
            fq._tempBds = [fk + e[0], fr + e[1], fk + e[2], fr + e[3]]
        },
        getZoomStep: function() {
            var fk = this.map.getZoom();
            var e = Math.floor(fk);
            var i = fk - e >= 0.5 ? e + 0.5 : e;
            return i
        },
        clearCollisionCache: function(e) {
            if (!e) {
                return
            }
            e.cacheState = null;
            e.unnecessaryCollisionTest = null
        },
        getCachedLabels: function(e) {
            e = e || [];
            var fk = this.getZoomStep();
            var fm = [];
            var fo = false;
            for (var fl = 0; fl < e.length; fl++) {
                var fn = e[fl];
                if (!fn.cacheState || !fn.cacheState[fk]) {
                    fo = true;
                    break
                }
                if (fn.hasNewData) {
                    fo = true;
                    break
                }
            }
            if (fo) {
                this.calcLabelsCollision(e)
            }
            return e
        },
        calcLabelsCollision: function(fk) {
            var fm = this.getZoomStep();
            var fn = {};
            var fq;
            var fl;
            fk = this.collisionTest(fk, undefined, fm);
            for (var fp = 0; fp < fk.length; fp++) {
                fq = fk[fp];
                fl = fq.tileInfo;
                var fu = fl.col + "," + fl.row;
                fn[fu] = 1
            }
            var e = {};
            for (var fp = 0; fp < fk.length; fp++) {
                fq = fk[fp];
                if (!fq.cacheState) {
                    fq.cacheState = {}
                }
                fl = fq.tileInfo;
                var ft = fl.col;
                var fr = fl.row;
                fu = ft + "," + fr;
                if (fq.cacheState[fm] === "stable") {
                    e[fu] = 1;
                    if (!fq.hasNewData) {
                        continue
                    }
                }
                for (var fo = 0; fo < fq.fixedLabel.length; fo++) {
                    var fs = fq.fixedLabel[fo];
                    if (!fs.cachedIsDel) {
                        fs.cachedIsDel = {}
                    }
                    fs.cachedIsDel[fm] = fs.isDel
                }
                for (var fo = 0; fo < fq.indoorLabel.length; fo++) {
                    var fs = fq.indoorLabel[fo];
                    if (!fs.cachedIsDel) {
                        fs.cachedIsDel = {}
                    }
                    fs.cachedIsDel[fm] = fs.isDel
                }
                for (var fo = 0; fo < fq.lineLabel.length; fo++) {
                    var fs = fq.lineLabel[fo];
                    if (!fs.cachedIsDel) {
                        fs.cachedIsDel = {}
                    }
                    fs.cachedIsDel[fm] = fs.isDel
                }
                if (fn[(ft - 1) + "," + (fr - 1)] && fn[(ft - 1) + "," + fr] && fn[(ft - 1) + "," + (fr + 1)] && fn[ft + "," + (fr - 1)] && fn[ft + "," + (fr + 1)] && fn[(ft + 1) + "," + (fr - 1)] && fn[(ft + 1) + "," + fr] && fn[(ft + 1) + "," + (fr + 1)]) {
                    fq.cacheState[fm] = "stable";
                    e[fu] = 1
                } else {
                    if (!fq.cacheState[fm]) {
                        fq.cacheState[fm] = "unstable"
                    }
                }
            }
            for (var fp = 0; fp < fk.length; fp++) {
                var fq = fk[fp];
                fl = fq.tileInfo;
                var fu = fl.col + "," + fl.row;
                var ft = +fl.col;
                var fr = +fl.row;
                if (e[(ft - 1) + "," + (fr - 1)] && e[(ft - 1) + "," + fr] && e[(ft - 1) + "," + (fr + 1)] && e[ft + "," + (fr - 1)] && e[ft + "," + (fr + 1)] && e[(ft + 1) + "," + (fr - 1)] && e[(ft + 1) + "," + fr] && e[(ft + 1) + "," + (fr + 1)]) {
                    if (!fq.unnecessaryCollisionTest) {
                        fq.unnecessaryCollisionTest = {}
                    }
                    fq.unnecessaryCollisionTest[fm] = 1
                }
            }
            fk.hasNewData = false
        },
        updateLabels: function(fl) {
            var e = this.map;
            var fr = e.getZoom();
            var ft = e.getHeading();
            ft = this.calcLoopHeading(ft);
            var fs = e.getTilt();
            var fm = this.getZoomStep();
            for (var fq = 0, fn = fl.length; fq < fn; fq++) {
                var fp = fl[fq];
                var fk = fp.tileInfo;
                var fo = fk.loopOffsetX || 0;
                this.updateFixedLabel(fp.fixedLabel, fs, ft, fp, fm, fr, fo);
                this.updateFixedLabel(fp.indoorLabel, fs, ft, fp, fm, fr, 0);
                this.updateLineLabel(fp.lineLabel, fs, ft, fp, fm)
            }
        },
        updateFixedLabel: function(fq, fs, i, fu, fm, e, fl) {
            if (fq.length === 1) {}
            for (var fv = 0, fn = fq.length; fv < fn; fv++) {
                var fr = fq[fv];
                if (!fr.cachedIsDel) {
                    continue
                }
                if (!fs && !i && fu.cacheState && fu.cacheState[fm]) {
                    fr.isDel = fr.cachedIsDel[fm];
                    if (typeof fr.isDel === "undefined") {
                        fr.isDel = fr.cachedIsDel[fm] = true
                    }
                }
                if (fr.startScale > e) {
                    fr.isDel = true
                }
                if (fr.isDel) {
                    continue
                }
                var fx = fr.pt;
                var fk = fr.iconPos;
                if (fk && fk.texcoord) {
                    if (!fk.rtVertex) {
                        fk.rtVertex = [];
                        var fz = fk.vertex;
                        var fo = ae(fx.lng);
                        var fw = ae(fx.lat);
                        fk.rtVertex = [fo[0], fw[0], fo[1], fw[1], 0, fz[0], fz[1], 0, 0, fk.texcoord[0], fk.texcoord[1], fo[0], fw[0], fo[1], fw[1], 0, fz[2], fz[3], 0, 0, fk.texcoord[2], fk.texcoord[3], fo[0], fw[0], fo[1], fw[1], 0, fz[4], fz[5], 0, 0, fk.texcoord[4], fk.texcoord[5], fo[0], fw[0], fo[1], fw[1], 0, fz[6], fz[7], 0, 0, fk.texcoord[6], fk.texcoord[7], fo[0], fw[0], fo[1], fw[1], 0, fz[8], fz[9], 0, 0, fk.texcoord[8], fk.texcoord[9], fo[0], fw[0], fo[1], fw[1], 0, fz[10], fz[11], 0, 0, fk.texcoord[10], fk.texcoord[11]]
                    }
                }
                var fy = fr.textPos;
                if (fy) {
                    if (!fy.rtVertex) {
                        fy.rtVertex = [];
                        var fz = fy.vertex;
                        var fp = fy.rtVertex;
                        var fo = ae(fx.lng);
                        var fw = ae(fx.lat);
                        var fB = ae(fl);
                        for (var ft = 0, fA = fz.length; ft < fA; ft += 12) {
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft], fz[ft + 1], fB[0], fB[1], fy.texcoord[0], fy.texcoord[1]);
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft + 2], fz[ft + 3], fB[0], fB[1], fy.texcoord[2], fy.texcoord[3]);
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft + 4], fz[ft + 5], fB[0], fB[1], fy.texcoord[4], fy.texcoord[5]);
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft + 6], fz[ft + 7], fB[0], fB[1], fy.texcoord[6], fy.texcoord[7]);
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft + 8], fz[ft + 9], fB[0], fB[1], fy.texcoord[8], fy.texcoord[9]);
                            fp.push(fo[0], fw[0], fo[1], fw[1], 0, fz[ft + 10], fz[ft + 11], fB[0], fB[1], fy.texcoord[10], fy.texcoord[11])
                        }
                    }
                }
            }
        },
        updateLineLabel: function(fq, fU, fK, fF, fG) {
            fq = fq || [];
            var fA = this.map;
            var ft = fA.getZoomUnits();
            for (var fT = 0, fR = fq.length; fT < fR; fT++) {
                var fp = fq[fT];
                if (!fp.cachedIsDel) {
                    continue
                }
                if (!fU && !fK && fF.cacheState && fF.cacheState[fG]) {
                    fp.isDel = fp.cachedIsDel[fG];
                    if (typeof fp.isDel === "undefined") {
                        fp.isDel = fp.cachedIsDel[fG] = true
                    }
                }
                if (fp.isDel) {
                    continue
                }
                if (!fp.styleText || fp.styleText.length === 0) {
                    continue
                }
                var fr = fp.mcInTile;
                var fN = fr.x;
                var fL = fr.y;
                var fE = fp.wordsInfo;
                var fC = fp.labelAngle;
                var fy = false;
                var fM = 0;
                if (fK !== 0) {
                    var fz = fE[0].angle;
                    var fQ = this.calcLoopHeading(fz - fK);
                    var fw = this.calcLoopHeading(fC - fK);
                    if (fQ > 45 && fQ < 315) {
                        if (fQ > 45 && fQ <= 135) {
                            fM = 270
                        } else {
                            if (fQ > 135 && fQ <= 225) {
                                fM = 180
                            } else {
                                if (fQ > 225 && fQ < 315) {
                                    fM = 90
                                }
                            }
                        }
                        if (fC > 225 && fC <= 315 && fM <= 180) {
                            fy = true
                        } else {
                            if ((fC >= 0 && fC <= 45 || fC >= 315 && fC < 360) && fM >= 180) {
                                fy = true
                            }
                        }
                    }
                }
                for (var fS = 0, fu = fE.length; fS < fu; fS++) {
                    var fP = fE[fS];
                    var fx = fP.calcInfo;
                    var fJ = fP.offset[0];
                    var fH = fP.offset[1];
                    var e = fP.size[0];
                    var fk = fP.size[1];
                    var fv = fP.angle;
                    if (!fx) {
                        fx = {}
                    }
                    if (fK !== fx.mapHeading || ft !== fx.zoomUnits) {
                        fx.mapHeading = fK;
                        fx.zoomUnits = ft;
                        if (fy) {
                            var fB = fE[fu - 1 - fS];
                            fJ = fB.offset[0];
                            fH = fB.offset[1];
                            fv = fB.angle
                        }
                        var fm = fN + fJ * ft;
                        var fl = fL + fH * ft;
                        fx.rotationCenter = {
                            lng: fm,
                            lat: fl
                        };
                        fx.calcHeading = fM;
                        fx.angle = fv;
                        fx.offsetX = fJ;
                        fx.offsetY = fH;
                        fP.calcInfo = fx
                    }
                    if (!fP.rtVertex) {
                        fP.rtVertex = []
                    }
                    fP.rtVertex.length = 0;
                    var fD = fx.calcHeading + fx.angle;
                    var fn = fx.rotationCenter;
                    fJ = fx.offsetX;
                    fH = fx.offsetY;
                    var fo = Math.round(fJ - e / 2);
                    var fO = Math.round(fJ + e / 2);
                    var fI = Math.round(fH + fk / 2);
                    var fs = Math.round(fH - fk / 2);
                    fP.rtVertex.push(fN, fL, fP.z, fo, fs, fn.lng, fn.lat, fD, fP.texcoord[0], fP.texcoord[1], fN, fL, fP.z, fO, fs, fn.lng, fn.lat, fD, fP.texcoord[2], fP.texcoord[3], fN, fL, fP.z, fO, fI, fn.lng, fn.lat, fD, fP.texcoord[4], fP.texcoord[5], fN, fL, fP.z, fo, fs, fn.lng, fn.lat, fD, fP.texcoord[6], fP.texcoord[7], fN, fL, fP.z, fO, fI, fn.lng, fn.lat, fD, fP.texcoord[8], fP.texcoord[9], fN, fL, fP.z, fo, fI, fn.lng, fn.lat, fD, fP.texcoord[10], fP.texcoord[11])
                }
            }
        },
        calcLoopHeading: function(e) {
            while (e >= 360) {
                e -= 360
            }
            while (e < 0) {
                e += 360
            }
            return e
        },
        fixDataFormat: function(ft) {
            var fl = this.fixedLabelData;
            var e = this.lineLabelData;
            var fk = this.highlightLabelData;
            var fA = 0;
            var fp = 0;
            var fy = 0;
            var fz;
            if (this.currentSelectedLabel) {
                var fo = this.getLabelByUid(this.currentSelectedLabel.guid, this.currentSelectedLabel.tilePosStr);
                if (!fo || fo.isDel) {
                    fl[fA] = this.currentSelectedLabel.formatedData;
                    fA++;
                    fk[fy] = this.currentSelectedLabel.formatedData;
                    fy++
                }
            }
            for (var fx = 0; fx < ft.length; fx++) {
                var fr = ft[fx];
                var fq = fr.fixedLabel;
                var fm = fr.indoorLabel;
                var fw = fr.lineLabel;
                fz = this.fixFixedLabelDataFormat(fq, fr, fl, fA, fk, fy);
                fA = fz[0];
                fy = fz[1];
                fz = this.fixFixedLabelDataFormat(fm, fr, fl, fA, fk, fy, true);
                fA = fz[0];
                fy = fz[1];
                e[fp] = {
                    tileInfo: fr.tileInfo,
                    lineLabels: []
                };
                for (var fv = 0; fv < fw.length; fv++) {
                    if (fw[fv].isDel) {
                        continue
                    }
                    var fs = fw[fv].wordsInfo;
                    if (fs) {
                        for (var fu = 0; fu < fs.length; fu++) {
                            if (!fs[fu].rtVertex) {
                                continue
                            }
                            var fn = fs[fu].formatedData;
                            if (!fn) {
                                fn = {
                                    textureSource: fr.textureSources[fw[fv].processedInZoom],
                                    textureHeight: fr.textureHeights[fw[fv].processedInZoom],
                                    renderData: {
                                        vertex: fs[fu].rtVertex,
                                        textureCoord: fs[fu].texcoord
                                    }
                                };
                                fs[fu].formatedData = fn
                            }
                            e[fp].lineLabels.push(fn)
                        }
                    }
                }
                fp++
            }
            fl.length = fA;
            e.length = fp;
            fk.length = fy;
            return [e, fl, fk]
        },
        fixFixedLabelDataFormat: function(fo, fr, fs, fp, fm, e, fq) {
            for (var i = 0; i < fo.length; i++) {
                if (fo[i].isDel) {
                    continue
                }
                var fn = fo[i].textPos;
                var fl = fo[i].iconPos;
                var fk = null;
                if (fn && fn.rtVertex) {
                    if (!fo[i].formatedData) {
                        fk = {
                            guid: fo[i].guid,
                            guidExt: fo[i].guidExt,
                            tilePosStr: fo[i].tilePosStr,
                            zoom: fo[i].zoom,
                            tempRank: fo[i].tempRank,
                            textureSource: fr.textureSources[fo[i].processedInZoom],
                            textureHeight: fr.textureHeights[fo[i].processedInZoom],
                            renderData: {
                                vertex: fn.rtVertex,
                                textureCoord: fn.texcoord
                            }
                        };
                        if (fq && fo[i].onDefaultFloor === false) {
                            fk.textureSource = fr.indoorTextureSources[fo[i].processedInZoom];
                            fk.textureHeight = fr.indoorTextureHeights[fo[i].processedInZoom]
                        }
                        fo[i].formatedData = fk
                    } else {
                        fk = fo[i].formatedData;
                        fk.tempRank = fo[i].tempRank
                    }
                    if (this.currentSelectedLabel && fk.guid === this.currentSelectedLabel.guid && fk.tilePosStr === this.currentSelectedLabel.tilePosStr) {
                        fm[e] = fk;
                        e++
                    }
                }
                if (fl && fl.rtVertex) {
                    if (fk) {
                        if (!fk.iconRenderData) {
                            fk.iconRenderData = {
                                vertex: fl.rtVertex,
                                textureCoord: fl.texcoord
                            }
                        }
                    } else {
                        fk = {
                            guid: fo[i].guid,
                            guidExt: fo[i].guidExt,
                            zoom: fo[i].zoom,
                            tempRank: fo[i].tempRank,
                            iconRenderData: {
                                vertex: fl.rtVertex,
                                textureCoord: fl.texcoord
                            }
                        };
                        fo[i].formatedData = fk
                    }
                }
                fs[fp] = fk;
                fp++
            }
            return [fp, e]
        },
        _refreshSpotData: function() {
            this._spotData.length = 0;
            var fp = this.map;
            var fn = Math.floor(fp.getZoom());
            var fk = this.map._featureMgr.getLabelData();
            if (fk) {
                for (var fm = 0, fl = fk.length; fm < fl; fm++) {
                    this._addFixedSpotData(fk[fm].fixedLabel, fn);
                    this._addFixedSpotData(fk[fm].indoorLabel, fn)
                }
            }
            var fq = this.currentSelectedLabel;
            if (fq && !this.getTileByLabelUid(fq.guid, fq.tilePosStr)) {
                this._spotData.push(this._getSpotDataFromLabel(this.currentSelectedLabel))
            }
            var fo = new aB("onspotsdataready");
            fo.spots = this._spotData;
            fp._spotDataOnCanvas = this._spotData;
            fp.dispatchEvent(fo)
        },
        _addFixedSpotData: function(fm, fl) {
            for (var e = 0; e < fm.length; e++) {
                var fk = fm[e];
                if (!this.layer.isClickableLabel(fk) || (fk.guidExt === 1 && fk.startScale > fl)) {
                    continue
                }
                var i = fm[e].spot || this._getSpotDataFromLabel(fm[e]);
                this._spotData.push(i)
            }
        },
        _getSpotDataFromLabel: function(fk) {
            var fn = this.map;
            var e = fk.bds.slice(0);
            var fl = null;
            if (fk.iconPos) {
                fl = new e2(fk.pt.lng,fk.pt.lat)
            }
            var i = fk.name ? fk.name.replace("\\\\", "<br>") : "";
            if (fk.iconPos && fk.iconPos.iconType.indexOf("ditie") > -1 && fn.getZoom() > 14) {
                i = ""
            }
            var fm = {
                n: i,
                pt: new e2(fk.pt.lng,fk.pt.lat),
                userdata: {
                    iconPoint: fl,
                    uid: fk.guid,
                    name: i,
                    mapPoi: true,
                    type: fk.iconPos ? fk.iconPos.iconType : "",
                    rank: fk.rank,
                    zoom: fk.zoom,
                    tilePosStr: fk.tilePosStr
                },
                bd: e,
                tag: "MAP_SPOT_INFO"
            };
            fk.spot = fm;
            return fm
        },
        drawLabelsOnCanvas: function(i, e) {
            this._labelTextCanvas.drawLabelsOnCanvas(i, e)
        }
    });
    function dW(e) {
        this._map = e;
        this.virtualTile = {
            custom: true,
            label: {
                fixedLabel: [],
                indoorLabel: [],
                lineLabel: [],
                textureHeights: [],
                status: "ready"
            },
            tileInfo: {
                col: 0,
                row: 0,
                zoom: 0,
                useZoom: 0,
                loopOffsetX: 0
            },
            status: "ready"
        };
        this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
        this.init()
    }
    dW.prototype.init = function() {
        var fk = this._map;
        var i = this;
        function e() {
            i.updateLabels()
        }
        fk.addEventListener("add_tile_labels", e);
        fk.addEventListener("onremove_tile_labels", e);
        fk.addEventListener("onclear_labels", e)
    }
    ;
    dW.prototype.updateLabels = function() {
        var i = this._map.tileMgr.getLabelTextCanvas();
        var fk = this._map;
        var e = this;
        i.drawCustomLabelsOnCanvas(fk._customTileLabels, function(fm) {
            var fl = e.virtualTile;
            if (fm) {
                fl.label.textureHeights[0] = [fm.height]
            }
            fl.label.fixedLabel = fk._customTileLabels;
            var fn = new aB("oncustom_labels_ready");
            fn.virtualTile = fl;
            fn.labelCanvas = fm;
            fn.imgKey = aI.getGUID("custom_labels_");
            fk.dispatchEvent(fn)
        })
    }
    ;
    aI.register(function(e) {
        e._customLabelMgr = new dW(e)
    });
    function c7(i) {
        var fl = null;
        try {
            if (cd.inMapHost) {
                fl = new Worker(i);
                fl.onerror = function(e) {
                    e.preventDefault();
                    fl = p(i)
                }
            } else {
                fl = p(i)
            }
        } catch (fk) {
            fl = p(i)
        }
        return fl
    }
    function p(fn) {
        var fq = null;
        try {
            var fk;
            try {
                fk = new Blob(['importScripts("' + fn + '");'],{
                    type: "application/javascript"
                })
            } catch (fo) {
                var fm = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                fm.append('importScripts("' + fn + '");');
                fk = fm.getBlob("application/javascript")
            }
            var fl = window.URL || window.webkitURL;
            var i = fl.createObjectURL(fk);
            fq = new Worker(i)
        } catch (fp) {}
        return fq
    }
    function ea(e) {
        this.init(e)
    }
    var aC = {
        init: function(fk) {
            var i = this;
            this.map = fk;
            this.arrPendingData = [];
            var e = navigator.hardwareConcurrency || 4;
            if (d6() && e > 2) {
                e = 2
            }
            this.arrWorker = [];
            this.ratio = ay();
            this.wordSpaceRatio = this.ratio;
            if (this.ratio > 1) {
                this.textSizeRatio = 2
            } else {
                this.textSizeRatio = 1
            }
            bO.canUseWebAssembly(function(fl) {
                var fo;
                if (fl) {
                    fo = "https://api.map.baidu.com/res/webgl/10/worker_wasm_0x2jrw.js"
                } else {
                    fo = "https://api.map.baidu.com/res/webgl/10/worker_asm_3yi3e3.js"
                }
                for (var fn = 0; fn < e; fn++) {
                    var fq = c7(fo);
                    fq.onmessage = function fm(fs) {
                        if (fs.data) {
                            this._cbk && this._cbk(fs.data, this._parsingTileKey)
                        } else {
                            this._cbk && this._cbk(null, this._parsingTileKey)
                        }
                        this._isBusy = false;
                        this._cbk = null;
                        this._parsingTileInfo = null;
                        this._parsingTileKey = null;
                        if (i.arrPendingData.length > 0) {
                            var fu = i.arrPendingData.shift();
                            var fr = fu.cbk;
                            i.loadTileData(fu.url, fu.tileInfo, fu.tileKey, fr)
                        }
                        var ft = new aB("onrefresh");
                        ft.source = "workermgr";
                        fk.fire(ft)
                    }
                    ;
                    i.arrWorker.push(fq)
                }
                if (i.arrPendingData.length > 0) {
                    for (var fn = 0; fn < Math.min(i.arrPendingData.length, e); fn++) {
                        var fp = i.arrPendingData.shift();
                        i.loadTileData(fp.url, fp.tileInfo, fp.tileKey, fp.cbk)
                    }
                }
            });
            fk.on("style_willchange", function() {
                for (var fm = 0, fl = i.arrWorker.length; fm < fl; fm++) {
                    i.arrWorker[fm].isSendFS = false
                }
                if (typeof this.config.style !== "string") {
                    ea.stringifiedCustomStyleInfo = null
                }
            })
        },
        getIdleWorker: function() {
            for (var fk = 0, e = this.arrWorker.length; fk < e; fk++) {
                var fl = this.arrWorker[fk];
                if (!fl._isBusy) {
                    fl._isBusy = true;
                    return fl
                }
            }
            return null
        },
        releasePendingData: function(fk) {
            var fl = [];
            var fo = this.arrPendingData;
            for (var fn = fo.length - 1; fn >= 0; fn--) {
                var fp = fo[fn];
                var e = fp.tileInfo;
                if (fk.tileTypeName !== e.tileTypeName) {
                    continue
                }
                var fm = "id_" + e.col + "_" + e.row + "_" + e.zoom;
                if (!fk[fm]) {
                    fo.splice(fn, 1);
                    fl.push(e)
                }
            }
            return fl
        },
        loadTileData: function(e, fk, fr, fq) {
            var fl = this.getIdleWorker();
            
            if (fl) {
                fl._cbk = fq;
                fl._parsingTileInfo = fk;
                fl._parsingTileKey = fr;
                var i = {
                    action: "loadTileData",
                    url: e,
                    tileInfo: fk,
                    tileKey: fr
                };
                var fp = this.map.getMapStyleId();
                var fo = !!(fp.indexOf("custom") === 0);
                var fn = fp;
                if (fo) {
                    fn = "Custom"
                }
                if (!fl.isSendFS) {
                    if (!ea["stringifiedFeatureStyle" + fp] && aI["FeatureStyle" + fp]) {
                        ea["stringifiedFeatureStyle" + fp] = JSON.stringify(aI["FeatureStyle" + fp])
                    }
                    if (!ea["stringifiedIconSetInfo" + fn]) {
                        ea["stringifiedIconSetInfo" + fn] = JSON.stringify(aI["iconSetInfo" + fn])
                    }
                    if (!ea.stringifiedIndoorStyle) {
                        ea.stringifiedIndoorStyle = JSON.stringify(aI.indoorStyle)
                    }
                    if (fo && aI.customStyleInfo) {
                        if (!ea.stringifiedCustomStyleInfo) {
                            ea.stringifiedCustomStyleInfo = JSON.stringify(aI.customStyleInfo)
                        }
                    }
                    if (ea["stringifiedFeatureStyle" + fp]) {
                        i.featureStyle = ea["stringifiedFeatureStyle" + fp]
                    }
                    i.iconSetInfo = ea["stringifiedIconSetInfo" + fn];
                    i.indoorStyle = ea.stringifiedIndoorStyle;
                    if (fo && ea.stringifiedCustomStyleInfo) {
                        i.customMapStyle = ea.stringifiedCustomStyleInfo
                    }
                    i.iconInfo = {
                        wordSpaceRatio: this.wordSpaceRatio,
                        textSizeRatio: this.textSizeRatio
                    };
                    i.mapStyleId = fp;
                    fl.isSendFS = true
                }
                fl.postMessage(i)
            } else {
                var fm = {
                    url: e,
                    tileInfo: fk,
                    tileKey: fr,
                    cbk: fq
                };
                this.arrPendingData.push(fm)
            }
        }
    };
    x.extend(ea.prototype, aC);
    function cw(i) {
        this.tileLayers = [];
        this.map = i;
        var e = this.config = be[this.map.mapType];
        this.errorUrl = e.errorUrl;
        this.tileSize = e.tileSize;
        this.baseUnits = e.baseUnits;
        this.baseZoomLevel = e.zoomLevelBase;
        this.tileURLs = e.tileUrls;
        this.tilesInfoCache = {};
        this.loadDelay = 10;
        this._labelTextCanvas = null
    }
    aI.register(function(i) {
        if (i._renderType !== "webgl") {
            return
        }
        var e = i.tileMgr = new cw(i);
        i.addEventListener("addtilelayer", function(fl) {
            e.addWebGLLayer(fl.target)
        });
        i.addEventListener("removetilelayer", function(fl) {
            e.removeWebGLLayer(fl.target)
        });
        i.on("update", function fk(fl) {
            if (!aI["FeatureStyle" + this.config.style] && !aI.customStyleLoaded) {
                return
            }
            e.loadLayersData({
                zoomChanged: fl.changedStatus.onzoom_changed ? true : false
            })
        });
        i.on("style_changed", function() {
            e.loadLayersData()
        })
    });
    x.extend(cw.prototype, {
        addWebGLLayer: function(fl) {
            this.tileLayers.push(fl);
            fl.initDrawData();
            if (this.tileLayers.length > 1) {
                for (var fk = 1; fk < this.tileLayers.length; fk++) {
                    if (this.tileLayers[fk].isFlat) {
                        this.map.setDisplayOptions({
                            isFlat: true
                        });
                        break
                    }
                }
            }
            var e = this.map.config.style;
            if (aI["FeatureStyle" + e]) {
                this.loadLayersData()
            } else {
                var fm = this;
                this.map.loadMapStyleFiles(function() {
                    fm.loadLayersData()
                })
            }
        },
        removeWebGLLayer: function(fn) {
            var fo = false;
            for (var fm = 0, fl = this.tileLayers.length; fm < fl; fm++) {
                if (fn === this.tileLayers[fm]) {
                    fo = true;
                    this.tileLayers.splice(fm, 1);
                    break
                }
            }
            if (fo === false) {
                return
            }
            fn.destroyDrawData();
            if (aI["FeatureStyle" + this.map.config.style]) {
                this.loadLayersData()
            }
            if (this.tileLayers.length === 1) {
                this.map.setDisplayOptions({
                    isFlat: false
                })
            } else {
                var e = false;
                for (var fm = 1; fm < this.tileLayers.length; fm++) {
                    if (this.tileLayers[fm].isFlat) {
                        e = true;
                        break
                    }
                }
                this.map.setDisplayOptions({
                    isFlat: e
                })
            }
            var fk = new aB("onrefresh");
            fk.source = "removewebgllayer";
            this.map.fire(fk)
        },
        getLabelTextCanvas: function() {
            if (!this._labelTextCanvas) {
                this._labelTextCanvas = new r(this.map)
            }
            return this._labelTextCanvas
        },
        loadLayersData: function(i) {
            if (this.map.suspendLoad) {
                return
            }
            var fl = this;
            i = i || {};
            var fk = !!i.zoomChanged;
            var e = (fk === true || this.map.getTilt() > 50);
            if (!e) {
                if (!this.syncLoadTimer) {
                    this.syncLoadTimer = setTimeout(function() {
                        fl._loadLayersFromCache(fk);
                        fl.syncLoadTimer = null
                    }, 40)
                }
            } else {
                this._loadLayersFromCache(fk)
            }
            this.timer && window.clearTimeout(this.timer);
            this.timer = window.setTimeout(function() {
                var fn = fl.tileLayers.length;
                fl.tilesInfoCache = {};
                for (var fo = 0; fo < fn; fo++) {
                    var fq = fl.tileLayers[fo];
                    var fp = fq.tileType;
                    var fm = null;
                    if (fl.tilesInfoCache[fp.getName()]) {
                        fm = fl.tilesInfoCache[fp.getName()]
                    } else {
                        fm = fl.calcTilesInfo(fp);
                        fl.tilesInfoCache[fp.getName()] = fm
                    }
                    fq.loadLayerData(fm, false, fk)
                }
                fl.timer = null
            }, this.loadDelay);
            if (d6() && fk) {
                this.loadDelay = 200
            } else {
                this.loadDelay = 80
            }
        },
        _loadLayersFromCache: function(fm) {
            this.map._featureMgr.clearData();
            var fp = this.tileLayers;
            fp.sort(function(fq, i) {
                return fq.zIndex - i.zIndex > 0
            });
            var fk = fp.length;
            this.tilesInfoCache = {};
            for (var fl = 0; fl < fk; fl++) {
                var fo = fp[fl];
                var fn = fo.tileType;
                var e = null;
                if (this.tilesInfoCache[fn.getName()]) {
                    e = this.tilesInfoCache[fn.getName()]
                } else {
                    e = this.calcTilesInfo(fn);
                    this.tilesInfoCache[fn.getName()] = e
                }
                fo.loadLayerData(e, true, fm)
            }
        },
        calcTilesInfo: function(fw) {
            var fI = this.map;
            var fO = fI.getMapType();
            var fJ = be[fO];
            var fD = fI.getZoom();
            var e = Math.floor(fD);
            var fn = fw.getDataZoom(fD);
            var fY = fw.getName();
            fn = dM(fn, fJ.minDataZoom, fJ.maxDataZoom);
            var fR = e;
            if (fw._name === "web") {
                fR = fn
            }
            var fH = fw.getTileSize(fD);
            var fm = fw.getBaseTileSize(fD);
            var fA = fw.getMercatorSize(fD, fn);
            var fz;
            var fP;
            var fG;
            var fT;
            var fK = fI.getCenterIn();
            if (fO !== BMAP_SATELLITE_MAP) {
                fK = cC.calcLoopCenterPoint(fK)
            }
            var fE = Math.floor(fK.lng / fA);
            var fp = Math.floor(fK.lat / fA);
            var fF = fI.getBoundsIn();
            var fM = 0;
            var fk = 0;
            fF = cC.calcLoopMapBounds(fF, fI.getCenter());
            if (fF.ne.lng > cC._mc180X) {
                var fu = cC.getSpaceDistanceInPixel(fn);
                fM = Math.ceil(fu / fm)
            }
            if (fF.sw.lng < cC._mcM180X) {
                var fu = cC.getSpaceDistanceInPixel(fn);
                fk = Math.ceil(fu / fm)
            }
            var fr = [Math.floor(fF.sw.lng / fA) - fk, Math.floor(fF.sw.lat / fA)];
            var fW = [Math.floor(fF.ne.lng / fA) + fM, Math.floor(fF.ne.lat / fA)];
            fz = fr[0];
            fP = fW[0] + 1;
            fG = fr[1];
            fT = fW[1] + 1;
            var fv = [];
            for (var fs = fz; fs < fP; fs++) {
                if (cC.isTileBlank(fs, fn, fm) === true) {
                    continue
                }
                for (var fx = fG; fx < fT; fx++) {
                    var ft = {
                        col: fs,
                        row: fx,
                        zoom: fn,
                        useZoom: fR,
                        tileTypeName: fY,
                        loopOffsetX: 0,
                        tileSize: fH,
                        baseTileSize: fm,
                        mercatorSize: fA
                    };
                    fv.push(ft);
                    var fN = "id_" + fs + "_" + fx + "_" + fn;
                    fv[fN] = true
                }
            }
            if (fO !== BMAP_SATELLITE_MAP) {
                fv = cC.calcLoopTiles(fv, fn, fm, fA)
            }
            if (fn === 3) {
                for (var fV = 0, fU = fv.length; fV < fU; fV++) {
                    var fs = fv[fV].col;
                    var fx = fv[fV].row;
                    var fQ = cC.calcLoopParam(fs, fn);
                    var fo = fQ.T;
                    var fB = fs >= 0 ? fs - fo : fs + fo;
                    var fC = "id_" + fB + "_" + fx + "_" + fn;
                    if (!fv[fC]) {
                        var ft = {
                            col: fB,
                            row: fx,
                            zoom: fn,
                            useZoom: fR,
                            loopOffsetX: 0,
                            tileSize: fH,
                            baseTileSize: fm,
                            mercatorSize: fA
                        };
                        fv.push(ft);
                        fv[fC] = true
                    }
                }
            }
            if (this.map._tilt > 0) {
                for (var fV = 0; fV < fv.length; fV++) {
                    var fq = fv[fV];
                    var fS = fq.col;
                    var fX = fq.row;
                    var fL = [];
                    fL.minX = fS * fA;
                    fL.maxX = (fS + 1) * fA;
                    fL.minY = fX * fA;
                    fL.maxY = (fX + 1) * fA;
                    var fl = new e2(0,0);
                    fl.lng = (fL.minX + fL.maxX) / 2;
                    fl.lat = (fL.minY + fL.maxY) / 2;
                    var fy = fI.pointToPixelIn(fl);
                    if (fy.x > 0 && fy.x < this.map.width && fy.y > 0 && fy.y < this.map.height) {
                        continue
                    }
                    if (fL.minX < fK.lng && fL.maxX > fK.lng && fL.minY < fK.lat && fL.maxY > fK.lat) {
                        continue
                    }
                    if (!this.ifTileInMapBounds(fL, fF, fS, fX)) {
                        fv.splice(fV, 1);
                        fV--
                    }
                }
            }
            fv.sort((function(i) {
                return function(fZ, f0) {
                    return ((0.4 * Math.abs(fZ.col - i[0]) + 0.6 * Math.abs(fZ.row - i[1])) - (0.4 * Math.abs(f0.col - i[0]) + 0.6 * Math.abs(f0.row - i[1])))
                }
            }
            )([fE, fp]));
            fv.zoom = fn;
            fv.tileTypeName = fY;
            return fv
        },
        getCurrentViewTilesInfo: function(i) {
            var e = this.tilesInfoCache[i.getName()];
            if (!e) {
                return this.calcTilesInfo(i)
            }
            return e
        },
        ifTileInMapBounds: function(e, fn, fk, fm) {
            var i = fn.normalizedBottomLeft;
            var fy = fn.normalizedTopRight;
            var fq = fn.normalizedTopLeft;
            var fo = fn.normalizedBottomRight;
            var fl = false;
            var fx = new e2(e.minX,e.minY);
            var fu = new e2(e.maxX,e.maxY);
            var fp = new e2(fu.lng,fx.lat);
            var fv = new e2(fx.lng,fu.lat);
            var fs = [fv, fu, fp, fx];
            for (var fw = 0, fr = fs.length; fw < fr; fw++) {
                var ft = fw + 1;
                if (ft === fr) {
                    ft = 0
                }
                var fz = fw;
                var fA = es(fs[ft], fs[fz], fq, i);
                if (fA) {
                    fl = true;
                    break
                }
                fA = es(fs[ft], fs[fz], fo, fy);
                if (fA) {
                    fl = true;
                    break
                }
                fA = es(fs[ft], fs[fz], fy, fq);
                if (fA) {
                    fl = true;
                    break
                }
                fA = es(fs[ft], fs[fz], i, fo);
                if (fA) {
                    fl = true;
                    break
                }
            }
            return fl
        },
        getTileLayer: function(fm) {
            for (var fl = 0, e = this.tileLayers.length; fl < e; fl++) {
                var fk = this.tileLayers[fl];
                if (fk.mapType === fm) {
                    return fk
                }
            }
            return null
        }
    });
    function am(e) {
        this._map = e;
        this._spotsId = null;
        this._init()
    }
    am.prototype._init = function() {
        var e = this._map;
        e.addEventListener("onspotsdataready", function(fk) {
            var i = fk.spots;
            if (this._spotsId) {
                e.removeSpots(this._spotsId)
            }
            this._spotsId = e.addSpots(i)
        })
    }
    ;
    aI.register(function(e) {
        if (!e.config.enableIconClick) {
            return
        }
        e._mapIcon = new am(e)
    });
    function ap(e) {
        this._indoorData = {};
        this._map = e;
        this.currentUid = null;
        this.currentFloor = null;
        this._indoorControl = null;
        this.enterMethod = null;
        this.showMask = false;
        this._isMobile = d6();
        this._autoEnterZoom = 19;
        if (this._isMobile) {
            this._autoEnterZoom = 17
        }
        this._init(e);
        window._indoorMgr = this
    }
    ap.prototype._init = function(i) {
        var e = this;
        i.on("indoor_status_changed", function(fo) {
            var fk = fo.uid;
            var fm = fo.floor;
            if (fk === null) {
                fk = e.currentUid;
                if (e._indoorData[fk]) {
                    fm = e._indoorData[fk].defaultFloor
                }
                if (e._indoorControl) {
                    e._indoorControl.hide()
                }
                e.currentUid = null;
                e.currentFloor = null;
                e.enterMethod = null
            } else {
                if (e._indoorData[fk]) {
                    var fn = e._indoorData[fk];
                    fm = (typeof fm === "number") ? fm : fn.defaultFloor;
                    if (!e._indoorControl) {
                        if (i.config.showControls && i._displayOptions.indoor) {
                            e._indoorControl = new et(i,fn)
                        }
                    } else {
                        e._indoorControl.setInfo(fn);
                        e._indoorControl.show()
                    }
                    e.currentUid = fk;
                    e.currentFloor = fm
                }
            }
            if (!e._indoorData || !e._indoorData[fk] || e._indoorData[fk].currentFloor === fm) {
                this.fire(new aB("onrefresh"));
                return
            }
            var fl = new aB("onindoor_data_refresh");
            fl.uid = fk;
            fl.floor = fm;
            fl.tileKey = e._indoorData[fk].tileKey;
            e._indoorData[fk].currentFloor = fm;
            e.currentFloor = fm;
            this.fire(fl)
        });
        i.on("spotclick", function(fl) {
            var fk = null;
            if (fl.curAreaSpot && this.areaSpots[fl.curAreaSpot]) {
                fk = this.areaSpots[fl.curAreaSpot].userData.uid
            }
            if (fk === e.currentUid) {
                if (fl.curAreaSpot) {
                    e.enterMethod = "byClick"
                }
                return
            }
            if (fk === null) {
                if (e.currentUid && e.enterMethod === "byClick") {
                    i.showIndoor(null);
                    e.enterMethod = null
                }
            } else {
                e.enterMethod = "byClick";
                if (e.currentUid) {
                    i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor)
                }
                i.showIndoor(fk, e._indoorData[fk].defaultFloor)
            }
        });
        i.on("moveend", function() {
            if (this.getZoom() >= e._autoEnterZoom) {
                e._checkIndoorByMove()
            }
        });
        i.on("zoomend", function() {
            if (this.getZoom() >= e._autoEnterZoom) {
                e._checkIndoorByMove()
            } else {
                if (e.enterMethod !== "byClick" && e.currentUid !== null) {
                    this.showIndoor(null)
                }
            }
        })
    }
    ;
    ap.prototype._checkIndoorByMove = function() {
        var fk = this._map;
        var fr = fk.getSize();
        var fw = {
            x: fr.width / 2,
            y: fr.height / 2
        };
        var fv = Math.max(fr.width, fr.height);
        var fx = [];
        for (var fs in this._indoorData) {
            var e = this._indoorData[fs].center;
            var fl = fk.pointToPixelIn(new aI.Point(e[0],e[1]));
            var fo = eG(fw, fl);
            fx.push({
                uid: fs,
                distance: fo
            })
        }
        if (fx.length === 0) {
            return
        }
        fx.sort(function(fy, i) {
            return fy.distance - i.distance
        });
        var fn = fx[0];
        var ft = fk.getCenterIn();
        var fm = false;
        for (var fq = 0; fq < this._indoorData[fn.uid].contour.length; fq++) {
            if (b1([ft.lng, ft.lat], this._indoorData[fn.uid].contour[fq])) {
                fm = true;
                break
            }
        }
        if (fm === false && fn.uid === "e96b44200baa3b4082288acc") {
            var fp = this._indoorData[fn.uid].boundsMin;
            var fu = this._indoorData[fn.uid].boundsMax;
            if (ft.lng > fp[0] && ft.lat > fp[1] && ft.lng < fu[0] && ft.lat < fu[1]) {
                fm = true
            }
        }
        if (fm) {
            if (this.enterMethod !== "byClick") {
                if (this.currentUid !== null && this.currentUid !== fn.uid) {
                    this._map.showIndoor(this.currentUid, this._indoorData[this.currentUid].defaultFloor)
                }
                if (this.currentUid !== fn.uid) {
                    this._map.showIndoor(fn.uid, this._indoorData[fn.uid].defaultFloor)
                }
                this.enterMethod = "byMove"
            }
        } else {
            if (this.enterMethod !== "byClick") {
                this._map.showIndoor(null)
            }
        }
    }
    ;
    ap.prototype.setData = function(fl) {
        if (fl === null) {
            return
        }
        for (var fk in fl) {
            if (fk === "tileInfo") {
                continue
            }
            var fm = fl[fk].tileKey;
            if (this._indoorData[fk]) {
                if (!this._indoorData[fk][fm]) {
                    this._indoorData[fk].tileKeys.push(fm);
                    this._indoorData[fk][fm] = true
                }
            } else {
                this._indoorData[fk] = fl[fk];
                this._indoorData[fk].tileKeys = [fl[fk].tileKey];
                this._indoorData[fk][fm] = true;
                for (var e = 0; e < this._indoorData[fk].contour.length; e++) {
                    this._map.addAreaSpot(this._indoorData[fk].contour[e], {
                        id: fk + e,
                        userData: {
                            uid: fk
                        }
                    })
                }
            }
        }
        if (this._map.getZoom() >= this._autoEnterZoom) {
            this._checkIndoorByMove()
        }
    }
    ;
    ap.prototype.removeData = function(fk, fm) {
        if (!this._indoorData[fk]) {
            return
        }
        var fl = this._indoorData[fk];
        for (var e = 0; e < fl.tileKeys.length; e++) {
            if (fl.tileKeys[e] === fm) {
                fl.tileKeys.splice(e, 1);
                break
            }
        }
        delete fl[fm];
        if (fl.tileKeys.length === 0) {
            delete this._indoorData[fk]
        }
    }
    ;
    ap.prototype.getIndoorData = function(e) {
        return this._indoorData[e] || null
    }
    ;
    ap.prototype.getData = function() {
        return this._indoorData
    }
    ;
    aI.register(function(e) {
        e._indoorMgr = new ap(e)
    });
    var cO = (function() {
        var fl = {};
        var fu = {};
        var fq = {};
        function fs(fw) {
            if (Object.prototype.toString.call(fw) === "[object Object]") {
                for (var fv in fw) {
                    return false
                }
                return true
            } else {
                return false
            }
        }
        function fr(fB, fC, fF, fy, fE) {
            fy = fy || FS;
            var fw;
            if (fy) {
                fw = ft(fB, fC, fF, fy)
            } else {
                fw = fk(fB, fC, fF, fE)
            }
            var fA = fw.drawId;
            var fv = fw.style;
            var fD = fw.styleUpdate;
            var fG = [];
            if (!fA) {
                return fG
            }
            for (var fx = 0; fx < fA.length; fx++) {
                var fz = fD[fA[fx]] || fv[fA[fx]];
                if (fz) {
                    switch (fC) {
                    case "polygon":
                        fz = fm(fz, fB);
                        break;
                    case "line":
                        fz = fp(fz, fB);
                        break;
                    case "pointText":
                        fz = fn(fz, fB);
                        break;
                    case "point":
                        fz = e(fz, fB);
                        break;
                    case "polygon3d":
                        fz = fo(fz, fB);
                        break
                    }
                    if (fz) {
                        fG[fG.length] = fz
                    }
                }
            }
            return fG
        }
        function ft(fw, fy, fz, fv) {
            var fx = fv[2];
            switch (fy) {
            case "point":
                fx = fx[0];
                break;
            case "pointText":
                fx = fx[1];
                break;
            case "line":
                fx = fx[3];
                break;
            case "polygon":
                fx = fx[4];
                break;
            case "polygon3d":
                fx = fx[5];
                break
            }
            var fB = fz - 1;
            if (fy === "line" && fz === 12) {
                fB = fz
            }
            var fC = fv[1][fB][0];
            var fA = fC[fw];
            if (!fA) {
                if (fy === "point" || fy === "pointText") {
                    fC = fv[1][fz][0];
                    fA = fC[fw]
                }
            }
            return {
                drawId: fA,
                style: fx,
                styleUpdate: []
            }
        }
        function fk(fz, fA, fD, fC) {
            if (!fC) {
                return {
                    drawId: null,
                    style: [],
                    styleUpdate: []
                }
            }
            var fB;
            var fx = fC.baseFs;
            if (fs(fC.zoomRegion)) {
                fB = fC.StyleBody || []
            } else {
                fB = fC.zoomStyleBody[fD] || []
            }
            var fw = fx[2];
            switch (fA) {
            case "point":
                fw = fw[0];
                fB = fB[0] || {};
                break;
            case "pointText":
                fw = fw[1];
                fB = fB[1] || {};
                break;
            case "line":
                fw = fw[3];
                fB = fB[3] || {};
                break;
            case "polygon":
                fw = fw[4];
                fB = fB[4] || {};
                break;
            case "polygon3d":
                fw = fw[5];
                fB = fB[5] || {};
                break
            }
            var fv = fx[1][fD - 1][0];
            var fy = fv[fz];
            return {
                drawId: fy,
                style: fw,
                styleUpdate: fB
            }
        }
        function fn(fw, fv) {
            if (!fw || fw.length === 0) {
                return null
            }
            return {
                sid: fv,
                fontRgba: i(fw[0]),
                haloRgba: i(fw[1]),
                backRgba: i(fw[2]),
                fontSize: fw[3],
                haloSize: fw[4],
                fontWeight: fw[5],
                fontStyle: fw[6],
                density: fw[7]
            }
        }
        function e(fw, fv) {
            return {
                sid: fv,
                rank: fw[0],
                ucflag: fw[1],
                icon: fw[2],
                iconType: fw[3],
                nineGG: fw[4],
                density: fw[5],
                zoom: fw[6]
            }
        }
        function fp(fw, fv) {
            return {
                sid: fv,
                borderRgba: i(fw[0]),
                fillRgba: i(fw[1]),
                borderWidth: fw[2],
                fillWidth: fw[3],
                borderCap: fw[4],
                fillCap: fw[5],
                haveBorderLine: fw[6],
                haveBorderTexture: fw[7],
                haveFillTexture: fw[8],
                isUseBorderRgba: fw[9],
                isUseFillRgba: fw[10],
                borderTexture: fw[11],
                fillTexture: fw[12],
                borderTextureType: fw[13],
                fillTextureType: fw[14],
                isRealWidth: fw[15],
                haveArrow: fw[16],
                needRound: fw[17],
                realBorderWidth: fw[18]
            }
        }
        function fm(fw, fv) {
            return {
                sid: fv,
                fillRgba: i(fw[0]),
                borderRgba: i(fw[1]),
                borderWidth: fw[2],
                borderTexture: fw[3],
                borderTextureType: fw[4],
                waterStyle: fw[5],
                haloStyle: fw[6],
                textureStyle: fw[7],
                thickRgba: i(fw[8])
            }
        }
        function fo(fw, fv) {
            return {
                sid: fv,
                filter: fw[0],
                ratio: fw[1],
                haveBorder: fw[2],
                borderWidth: fw[3],
                borderRgba: i(fw[4]),
                fillTop: i(fw[5]),
                fillSide: i(fw[6]),
                polyTexture: fw[7]
            }
        }
        function i(fA) {
            var fz = fA;
            if (fq[fz]) {
                return fq[fz]
            }
            fA = fA >>> 0;
            var fy = (fA) & 255;
            var fx = (fA >> 8) & 255;
            var fv = (fA >> 16) & 255;
            var fw = (fA >> 24) & 255;
            fq[fz] = [fy, fx, fv, fw];
            return fq[fz]
        }
        return {
            getStyleFromCache: function(fC, fx, fA, fB, fw, fz, fv) {
                fC = fC || "default";
                var fy = fC + "-" + fx + "-" + fA + "-" + fB;
                if (fz) {
                    fy += "-indoor"
                }
                if (fw) {
                    if (!fu[fy]) {
                        fu[fy] = fr(fx, fA, fB, fw)
                    }
                    return fu[fy]
                }
                if (!fl[fy]) {
                    fl[fy] = fr(fx, fA, fB, fw, fv)
                }
                return fl[fy]
            }
        }
    }
    )();
    aI.register(function(i) {
        var e = new cn(i)
    });
    function cn(e) {
        e.container.appendChild(this.render());
        this.bind(e)
    }
    cn.prototype.render = function() {
        var i = document.createElement("div");
        i.className = "click-ripple-container";
        var e = document.createElement("div");
        e.className = "click-ripple";
        i.appendChild(e);
        this._div = i;
        this._ripple = e;
        return i
    }
    ;
    cn.prototype.bind = function(i) {
        var e = this;
        i.addEventListener("spotclick", function(fk) {
            if (!fk.spots || fk.spots.length === 0) {
                return
            }
            e._div.style.left = fk.pixel.x + "px";
            e._div.style.top = fk.pixel.y + "px";
            x.ac(e._ripple, "ripple-playing")
        });
        x.on(e._ripple, "transitionend", function() {
            x.rc(e._ripple, "ripple-playing")
        })
    }
    ;
    function d4(e) {
        cI.call(this);
        if (!e) {
            return
        }
        this._opts = {};
        this._map = e;
        this._maxLat = 84.6;
        this._minLat = -80.6;
        this._maxLatMC = cP.convertLL2MC(new bR(this._maxLat,0)).lat;
        this._minLatMC = cP.convertLL2MC(new bR(this._minLat,0)).lat
    }
    d4.inherits(cI, "ToolbarItem");
    x.extend(d4.prototype, {
        open: function() {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            return true
        },
        close: function() {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false
        },
        _checkStr: function(e) {
            if (!e) {
                return ""
            }
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    });
    function eB(fk, i) {
        d4.call(this, fk);
        i = i || {};
        this._opts = x.extend(x.extend(this._opts || {}, {
            autoClear: false,
            tips: "测距",
            followText: "单击确定起点，双击结束绘制",
            unit: "metric",
            showResult: true,
            lineColor: "blue",
            lineStroke: 2,
            opacity: 1,
            lineStyle: "solid",
            cursor: dm.distCursor,
            styleCodes: {
                lnCode: 0,
                spCode: 0,
                slCode: 0,
                tlCode: 0
            },
            enableMassClear: true
        }), i);
        if (this._opts.showResult === false) {
            if (typeof i.tips === "undefined") {
                this._opts.tips = "绘制折线"
            }
            if (!i.cursor) {
                this._opts.cursor = "crosshair"
            }
        }
        if (this._opts.lineStroke <= 0) {
            this._opts.lineStroke = 2
        }
        if (this._opts.opacity > 1) {
            this._opts.opacity = 1
        } else {
            if (this._opts.opacity < 0) {
                this._opts.opacity = 0
            }
        }
        if (this._opts.lineStyle !== "solid" && this._opts.lineStyle !== "dashed") {
            this._opts.lineStyle = "solid"
        }
        this._checked = false;
        this._drawing = null;
        this.followTitle = null;
        this._totalDis = {};
        this._points = [];
        this._paths = [];
        this._dots = [];
        this._segDistance = [];
        this._overlays = [];
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "米",
                u2: "公里"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5279.856,
                u1: "英尺",
                u2: "英里"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._dLineColor = "#ff6319";
        this._dLineStroke = 3;
        this._dOpacity = 0.8;
        this._dLineStyle = "solid";
        this._dCursor = dm.distCursor;
        if (this._opts.showResult) {
            this._opts.followText = "单击确定起点"
        }
        this._followTextM = "单击确定地点，双击结束";
        this._sectionMarkerTip = "单击可删除此点，拖拽可调整位置";
        this._movingTimerId = null;
        if (this._opts.showResult) {
            this.text = "测距"
        } else {
            this.text = "绘线"
        }
        this._isOpen = false;
        var e = this;
        cG.load("tools", function() {
            e._draw()
        })
    }
    eB.inherits(d4, "PolylineTItem");
    x.extend(eB.prototype, {
        setLineColor: function(e) {
            this._opts.lineColor = e
        },
        setLineStroke: function(e) {
            if (Math.round(e) > 0) {
                this._opts.lineStroke = Math.round(e)
            }
        },
        setOpacity: function(e) {
            if (e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        },
        setLineStyle: function(e) {
            if (e === "solid" || e === "dashed") {
                this._opts.lineStyle = e
            }
        },
        clear: function() {
            for (var fk = 0, e = this._overlays.length; fk < e; fk++) {
                if (this._overlays[fk]) {
                    this._map.removeOverlay(this._overlays[fk])
                }
            }
            this._overlays.length = 0;
            for (var fk = 0, e = this._dots.length; fk < e; fk++) {
                if (this._dots[fk] && this._dots[fk].parentNode) {
                    this._dots[fk].parentNode.removeChild(this._dots[fk])
                }
            }
            this._dots.length = 0
        },
        setCursor: function(e) {
            if (this._opts.showResult === true) {
                return
            }
            this._opts.cursor = e
        },
        getCursor: function() {
            if (this._opts.showResult === true) {
                return this._dCursor
            }
            var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
            if (e !== null) {
                return e[1]
            } else {
                return this._opts.cursor
            }
        },
        showResult: function(e) {
            this._opts.showResult = !!e
        }
    });
    function bv() {
        var fm = 3;
        var ft = 256;
        var fl = Math.pow(2, 18 - fm) * ft;
        var fu = 2;
        var fs = (fu + 1) * fl;
        var fk = cP.convertLL2MC(new e2(180,0));
        var fq = fk.lng;
        var fo = fs - fq;
        var fr = -3;
        var e = fr * fl;
        var fn = cP.convertLL2MC(new e2(-180,0));
        var fp = fn.lng;
        var i = fp - e;
        this._validPixels = fq / Math.pow(2, 18 - fm);
        this._mc180X = fq;
        this._mcM180X = fp;
        this._loopOffset = fo + i;
        this._mcTSpan = fq - fp;
        this._spaceDistance = fo;
        this._mSpaceDistance = i
    }
    bv.prototype = {
        calcLoopParam: function(fk, i, fr) {
            fr = fr || 256;
            var fo = 0;
            var fl = 3;
            var fn = 6;
            var fm = fn * Math.pow(2, (i - fl)) * 256 / fr;
            var fq = fm / 2 - 1;
            var fp = -fm / 2;
            while (fk > fq) {
                fk -= fm;
                fo -= this._loopOffset
            }
            while (fk < fp) {
                fk += fm;
                fo += this._loopOffset
            }
            var e = fo;
            fo = Math.round(fo / Math.pow(2, 18 - i));
            return {
                offsetX: fo,
                geoOffsetX: e,
                col: fk,
                T: fm,
                maxCol: fq,
                minCol: fp
            }
        },
        calcLoopCenterPoint: function(i) {
            var e = i.lng;
            while (e > this._mc180X) {
                e -= this._mcTSpan
            }
            while (e < this._mcM180X) {
                e += this._mcTSpan
            }
            i.lng = e;
            return i
        },
        calcLoopMapBounds: function(fk, fl) {
            var i = fl || fk.getCenter();
            var e = fk.sw.lng;
            var fm = fk.ne.lng;
            while (i.lng > this._mc180X) {
                i.lng -= this._mcTSpan;
                e -= this._mcTSpan;
                fm -= this._mcTSpan
            }
            while (i.lng < this._mcM180X) {
                i.lng += this._mcTSpan;
                e += this._mcTSpan;
                fm += this._mcTSpan
            }
            fk.sw.lng = e;
            fk.ne.lng = fm;
            if (fk.pointBottomLeft) {
                fk.pointBottomLeft = this.calcLoopCenterPoint(fk.pointBottomLeft);
                fk.pointTopLeft = this.calcLoopCenterPoint(fk.pointTopLeft);
                fk.pointTopRight = this.calcLoopCenterPoint(fk.pointTopRight);
                fk.pointBottomRight = this.calcLoopCenterPoint(fk.pointBottomRight)
            }
            return fk
        },
        calcLoopTiles: function(ft, e, fx, fq) {
            fx = fx || 256;
            var fm = fq || Math.pow(2, 18 - e) * fx;
            var fs = Math.floor(this._mc180X / fm);
            var fo = Math.floor(this._mcM180X / fm);
            var fu = Math.floor(this._loopOffset / fm);
            var fv = [];
            for (var fp = 0; fp < ft.length; fp++) {
                var fw = ft[fp];
                var fl = fw[0];
                var fy = fw[1];
                if (fl >= fs) {
                    var fr = fl + fu;
                    if (this.isTileBlank(fr, e, fx) === true) {
                        continue
                    }
                    var fk = "id_" + fr + "_" + fy + "_" + e;
                    if (!ft[fk]) {
                        ft[fk] = true;
                        fv.push([fr, fy, e, 0])
                    }
                } else {
                    if (fl <= fo) {
                        var fr = fl - fu;
                        if (this.isTileBlank(fr, e, fx) === true) {
                            continue
                        }
                        var fk = "id_" + fr + "_" + fy + "_" + e;
                        if (!ft[fk]) {
                            ft[fk] = true;
                            fv.push([fr, fy, e, 0])
                        }
                    }
                }
            }
            for (var fp = 0, fn = fv.length; fp < fn; fp++) {
                ft.push(fv[fp])
            }
            for (var fp = ft.length - 1; fp >= 0; fp--) {
                var fl = ft[fp][0];
                if (this.isTileBlank(fl, e, fx)) {
                    ft.splice(fp, 1)
                }
            }
            return ft
        },
        isTileBlank: function(fk, fm, e) {
            var fn = Math.pow(2, fm - 3);
            var i = Math.round(this._validPixels * fn);
            var fl = 6 * fn * 256 / e;
            while (fk > fl / 2 - 1) {
                fk -= fl
            }
            while (fk < -(fl / 2)) {
                fk += fl
            }
            if (fk > 0 && fk * e > i) {
                return true
            }
            if (fk < 0 && Math.abs((fk + 1) * e) > i) {
                return true
            }
            return false
        },
        isAddWidth: function(e, i) {
            return e < this._mcM180X || i > this._mc180X
        },
        getSpaceDistanceInPixel: function(i) {
            var e = Math.round((this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i));
            return e
        }
    };
    var cC = new bv();
    var bk = (function() {
        var e = true;
        var fl = 256;
        var fn = ad("ditu", "normalTraffic");
        var fk = fn.udt;
        var fo = "https://sp3.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa/traffic/";
        var fm = [[2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 3, 2, 0, [], 0, 0], [2, "79,210,125,1", 4, 2, 0, [], 0, 0], [2, "79,210,125,1", 5, 2, 0, [], 0, 0], [2, "79,210,125,1", 6, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 3, 2, 0, [], 0, 0], [2, "255,208,69,1", 4, 2, 0, [], 0, 0], [2, "255,208,69,1", 5, 2, 0, [], 0, 0], [2, "255,208,69,1", 6, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 3, 2, 0, [], 0, 0], [2, "232,14,14,1", 4, 2, 0, [], 0, 0], [2, "232,14,14,1", 5, 2, 0, [], 0, 0], [2, "232,14,14,1", 6, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 3, 2, 0, [], 0, 0], [2, "181,0,0,1", 4, 2, 0, [], 0, 0], [2, "181,0,0,1", 5, 2, 0, [], 0, 0], [2, "181,0,0,1", 6, 2, 0, [], 0, 0], [2, "255,255,255,1", 4, 0, 0, [], 0, 0], [2, "255,255,255,1", 5.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 7, 0, 0, [], 0, 0], [2, "255,255,255,1", 8.5, 0, 0, [], 0, 0], [2, "255,255,255,1", 10, 0, 0, [], 0, 0]];
        var i = new bH({
            transparentPng: true,
            dataType: 2,
            cacheSize: 256,
            clipTile: true
        });
        i.zIndex = 2;
        i.getTilesUrl = function(fr, fs) {
            if (!fr || fs < 7) {
                return null
            }
            var fq = fr.x;
            var ft = fr.y;
            var fp = fo + "?qt=vtraffic&z=" + fs + "&x=" + fq + "&y=" + ft + "&udt=" + fk;
            return fp
        }
        ;
        i.processData = function(fs) {
            var fw = fs.content;
            var fu = 10;
            if (typeof fs.precision === "number") {
                fu = fs.precision * 10
            }
            var fD = {
                road: [[], []]
            };
            if (!fw) {
                return fD
            }
            var fB = fw.tf;
            if (!fB) {
                return fD
            }
            for (var ft = 0; ft < fB.length; ft++) {
                var fC = fB[ft][1];
                var fA = [];
                var fy = 0;
                var fx = 0;
                var fz = fm[fB[ft][3]];
                for (var fr = 0, fp = fC.length; fr < fp / 2; fr++) {
                    fy += fC[fr * 2] / fu;
                    fx += fC[fr * 2 + 1] / fu;
                    fA.push(fy, 256 - fx)
                }
                var fq = fz[1].split(",");
                fq[3] = fq[3] * 255;
                var fv = fz[2] / 2;
                fD.road[0].push([fA, 1, 2, [255, 255, 255, 255], fv + 2]);
                fD.road[1].push([fA, 1, 2, fq, fv])
            }
            return fD
        }
        ;
        return i
    }
    )();
    aI.register(function(i) {
        if (i.config && i.config.isOverviewMap) {
            return
        }
        if (i.isLoaded()) {
            dK(i)
        } else {
            i.addEventListener("load", function() {
                dK(this)
            })
        }
        i.cityName = "中国";
        i.cCode = "1";
        var e = {};
        e.enableRequest = true;
        e.request = function() {
            if (e.enableRequest) {
                e.enableRequest = false;
                setTimeout(function() {
                    e._request()
                }, 500)
            }
        }
        ;
        e._request = function() {
            var fl = i.getBoundsIn();
            var fn = i.getZoom();
            var fk = fl.getSouthWest();
            var fm = fl.getNorthEast();
            bA.request(function(fq) {
                if (fq.current_city["code"] >= 9000 && fq.current_city["code"] <= 9378) {
                    fq.current_city["name"] = "台湾省"
                }
                if (fq.current_city["code"] >= 20000 && fq.current_city["code"] <= 20499) {
                    fq.current_city["name"] = "新加坡"
                }
                if (fq.current_city["code"] >= 20500 && fq.current_city["code"] <= 25999) {
                    fq.current_city["name"] = "泰国"
                }
                if (fq.current_city["code"] >= 26000 && fq.current_city["code"] <= 29999) {
                    fq.current_city["name"] = "日本"
                }
                if (fq.current_city["code"] >= 30000 && fq.current_city["code"] <= 30999) {
                    fq.current_city["name"] = "韩国"
                }
                if (fq.current_city["code"] >= 31000 && fq.current_city["code"] <= 37000) {
                    fq.current_city["name"] = "亚太"
                }
                if (fq.current_city["code"] >= 46609 && fq.current_city["code"] <= 52505) {
                    fq.current_city["name"] = "欧洲"
                }
                if (fq.current_city["code"] >= 39509 && fq.current_city["code"] <= 53500) {
                    fq.current_city["name"] = "南美洲"
                }
                if (fq.current_city["code"] >= 54000 && fq.current_city["code"] <= 70000) {
                    fq.current_city["name"] = "北美洲"
                }
                if (fq.current_city["code"] === 54003 && fq.current_city["code"] >= 60731 && fq.current_city["code"] <= 61123) {
                    fq.current_city["name"] = "美国"
                }
                if (fq.current_city["code"] === 54015 || fq.current_city["code"] >= 57970 && fq.current_city["code"] <= 60223) {
                    fq.current_city["name"] = "加拿大"
                }
                if (fq.current_city["code"] === 54025 || fq.current_city["code"] >= 54338 && fq.current_city["code"] <= 57374) {
                    fq.current_city["name"] = "墨西哥"
                }
                e.enableRequest = true;
                if (fq && fq.current_city) {
                    var fp = fq.current_city["name"];
                    var fo = fq.current_city["code"];
                    if (fo !== i.cCode) {
                        i.dispatchEvent("citychange", {
                            name: fp,
                            code: fo
                        })
                    }
                    i.cityName = fp;
                    i.cCode = fq.current_city["code"];
                    if (!d6()) {
                        cW(i)
                    }
                }
            }, {
                qt: "cen",
                b: fk.lng + "," + fk.lat + ";" + fm.lng + "," + fm.lat,
                l: fn
            }, "", "", true)
        }
        ;
        i.addEventListener("load", function(fk) {
            e.request()
        });
        i.addEventListener("moveend", function(fk) {
            e.request()
        });
        i.addEventListener("zoomend", function(fk) {
            e.request()
        });
        e.request()
    });
    function dK(i) {
        if (i.temp.copyadded) {
            return
        }
        i.temp.copyadded = true;
        if (!i.cpyCtrl) {
            var fl = new cF(2,2);
            i.config.cpyCtrlOffset = fl;
            if (d6()) {
                fl.width = 72;
                fl.height = 0
            }
            var fk = new co({
                offset: fl,
                printable: true
            });
            i.cpyCtrl = fk
        }
        if (!d6()) {
            cW(i);
            i.addEventListener("maptypechange", function() {
                cW(i)
            })
        }
        i.addControl(fk);
        var e = new O();
        e._opts = {
            printable: true
        };
        i.logoCtrl = e;
        i.addControl(e);
        i.addEventListener("resize", function() {
            if (this.getSize().width >= 300 && i.getSize().height >= 100) {
                e.show();
                fk.setOffset(i.config.cpyCtrlOffset)
            } else {
                e.hide();
                fk.setOffset(new cF(4,2))
            }
        });
        if (i.getSize().width >= 300 && i.getSize().height >= 100) {
            e.show()
        } else {
            e.hide();
            fk.setOffset(new cF(4,2))
        }
        i.addEventListener("oncopyrightoffsetchange", function(fm) {
            i.logoCtrl.setOffset(fm.target.logo);
            i.cpyCtrl.setOffset(fm.target.cpy)
        });
        i.dispatchEvent(new aB("hidecopyright"))
    }
    function cW(fA) {
        if (!fA.cpyCtrl) {
            var fI = new cF(2,2);
            if (d6()) {
                fI.width = 72;
                fI.height = 0
            }
            var fD = new co({
                offset: fI,
                printable: true
            });
            fA.cpyCtrl = fD
        }
        var fR = fA.cityName || "中国";
        var fB = fA.getMapType();
        var fC = ["常州市", "南昌市", "乌鲁木齐市", "无锡市", "福州市", "泉州市", "珠海市", "贵阳市"];
        var fu = ["北京市", "上海市", "广州市", "深圳市", "宁波市", "石家庄市", "沈阳市", "长春市", "青岛市", "温州市", "台州市", "金华市", "佛山市", "中山市", "昆明市", "南宁市", "苏州市", "西安市", "济南市", "郑州市", "合肥市", "呼和浩特市", "杭州市", "成都市", "武汉市", "长沙市", "天津市", "南京市", "重庆市", "大连市", "东莞市", "厦门市"];
        var fw = ["香港特别行政区"];
        var fq = ["台湾省"];
        var fJ = ["日本"];
        var fP = ["韩国"];
        var fE = ["泰国"];
        var fH = ["亚太"];
        var fr = ["新加坡"];
        var fQ = ["欧洲"];
        var fl = ["南美洲"];
        var fM = ["北美洲"];
        var fk = ["美国"];
        var fG = ["墨西哥"];
        var fo = ["加拿大"];
        for (var fN in fC) {
            if (fC[fN] === fR) {
                var fx = true;
                break
            }
        }
        for (var fN in fu) {
            if (fu[fN] === fR) {
                var fm = true;
                break
            }
        }
        for (var fN in fw) {
            if (fw[fN] === fR) {
                var fT = true;
                break
            }
        }
        if (fq[0] === fR) {
            var fL = true
        }
        if (fr[0] === fR) {
            var i = true
        }
        if (fJ[0] === fR) {
            var ft = true
        }
        if (fP[0] === fR) {
            var fz = true
        }
        if (fE[0] === fR) {
            var fy = true
        }
        if (fH[0] === fR) {
            var fp = true
        }
        if (fQ[0] === fR) {
            var fv = true
        }
        if (fl[0] === fR) {
            var fs = true
        }
        if (fM[0] === fR) {
            var e = true
        }
        if (fk[0] === fR) {
            var fO = true
        }
        if (fo[0] === fR) {
            var fK = true
        }
        if (fG[0] === fR) {
            var fn = true
        }
        var fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "];
        var fF = "rgba(255, 255, 255, 0.701961)";
        if (fA.getZoom() <= 9) {
            fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
        } else {
            if (fL) {
                fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
            } else {
                if (ft || fz) {
                    fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                } else {
                    if (i || fy) {
                        fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                    } else {
                        if (fp) {
                            fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                        } else {
                            if (fv) {
                                fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                            } else {
                                if (fs) {
                                    fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                                } else {
                                    if (e) {
                                        fS = ["&copy;&nbsp;2019 Baidu - GS(2018)5572号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; "]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (fA.getZoom() <= 9) {
            fS.push("长地万方");
            fS.push(' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
            fS.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
            if (fB === BMAP_SATELLITE_MAP || fB === BMAP_HYBRID_MAP) {
                fS.push(' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>');
                fF = "rgba(0,0,0,.7)"
            }
        } else {
            if (ft || fz) {
                fS.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>')
            } else {
                if (i || fy) {
                    fS.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>')
                } else {
                    if (fp) {
                        fS.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                        fS.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                    } else {
                        if (fv) {
                            fS.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                            fS.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                        } else {
                            if (fs) {
                                fS.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                                fS.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                            } else {
                                if (fO || fn || fK) {
                                    fS.push('<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                                    fS.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                                } else {
                                    if (e) {
                                        fS.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
                                        fS.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>')
                                    } else {
                                        fS.push("长地万方");
                                        if (fx) {
                                            fS.push(' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>')
                                        }
                                        if (fT) {
                                            fS.push(' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>')
                                        }
                                        if (fL) {
                                            fS.push(' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>');
                                            fS.push(' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>')
                                        }
                                        if (fB === BMAP_SATELLITE_MAP || fB === BMAP_HYBRID_MAP) {
                                            fF = "rgba(0,0,0,.7)"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        fS.unshift('<span style="background: ' + fF + ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">');
        fS.push("</span>");
        fS = fS.join("");
        fA.cpyCtrl.addCopyright({
            id: 1,
            content: fS
        })
    }
    aI.Map = bU;
    aI.MapType = be;
    aI.Point = e2;
    aI.Pixel = cN;
    aI.Size = cF;
    aI.Bounds = cv;
    aI.TileLayer = bH;
    aI.Copyright = bS;
    aI.Projection = aI.Project = cP;
    aI.RenderTypeUtils = aA;
    aI.Overlay = aH;
    aI.Label = ai;
    aI.Marker = ac;
    aI.Icon = eP;
    aI.Polyline = T;
    aI.PolylineMultipart = dA;
    aI.Polygon = eM;
    aI.InfoWindow = W;
    aI.SimpleInfoWindow = fd;
    aI.Circle = cm;
    aI.Control = az;
    aI.NavigationControl = ca;
    aI.NavigationControl3D = de;
    aI.CopyrightControl = co;
    aI.ScaleControl = eT;
    aI.MapTypeControl = aT;
    aI.ZoomControl = by;
    aI.LocationControl = aR;
    aI.LogoControl = O;
    aI.DistanceTool = eB;
    aI.ContextMenu = bl;
    aI.MenuItem = dH;
    aI.OperationMask = cM;
    aI.Animation = l;
    aI.Transitions = bq;
    aI.Event = aB;
    aI.trafficLayer = bk;
    aI.verify();
    aI.apiLoad();
}
)(BMapGL, "BMapGL");
