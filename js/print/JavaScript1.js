

function downClick() {
    $("#down").css('display', 'none');
    var bgDiv = document.getElementById("bgDivdown");
    var msgDiv = document.getElementById("biaohuimodaldown");
    bgDiv.style.display = msgDiv.style.display = "none";
}


function getBrowser(returnData) {
    //return document.getElementById(movieName);
    if (navigator.appName.indexOf("Microsoft") != -1) {
        DownLoadByIE(returnData); //IE10以下
        return;
        //return top.window[movieName];
    } else {
        if (window.navigator.msSaveOrOpenBlob) {
            DownLoadByIE(returnData); //IE、Edge
            return;
        } else {
            DownLoadByChrome(returnData);
            return;
        }
        //alert("你正在使用的浏览器不支持地图下载，请联系系统管理员");
       // return;
        //return window[movieName]
        //return document[movieName]
    }
}
//function DownLoadByIE(imgPathURL) {
//   // imgPathURL = "http://192.168.2.156:8030/images/arrow-down.png"
//    //var f = window.open(imgPathURL).document.execCommand("SaveAs");
//    //如果隐藏IFRAME不存在，则添加  
//    if (!document.getElementById("IframeReportImg"))
//        $('<iframe style="display:none;" id="IframeReportImg" name="IframeReportImg" onload="DoSaveAsIMG();" width="100" height="100" src="about:blank"><img id="zzz" src="about:blank"></iframe>').appendTo("body");
//    if (document.all.IframeReportImg.src != imgPathURL) {
//        //加载图片  
//        document.all.IframeReportImg.src = imgPathURL;
//    }
//    else {
//        //图片直接另存为  
//        DoSaveAsIMG();
//    }
//}

//function DoSaveAsIMG() {
//    console.log(document.all.IframeReportImg.src);

//    if (document.all.IframeReportImg.src != "about:blank") {
//       // console.log(11111111111);
//        try {

//            setTimeout(function () {
//                document.frames["IframeReportImg"].document.execCommand("SaveAs");
//                //document.frames.frames.document.execCommand("SaveAs");
//                //console.log(22222222222)
//            }, 1000)
//        } catch (e) {
//            console.log(e);
//        }

//        //document.IframeReportImg.document.execCommand("SaveAs");
//    }
//}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 4096;
    try {
        var byteCharacters = atob(b64Data);
    } catch (e) {
        alert("生成图片出错，请稍后再试\r\r" + "错误代码：" + e.number + "\r详细信息：" + e.description + "\r尝试解决方法：若多次失败，请使用Chrome浏览器下载地图");
        console.log(e);
        clearAfterDownSuccess();
        return;
    }

    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    try {
        var blob = new Blob(byteArrays, { type: contentType });
    } catch (e) {
        alert('下载图片出错，请稍后再试');
        console.log(e);
        clearAfterDownSuccess();
    }

    return blob;
}

function DownLoadByIE(imgPathURL) {
    var blob = b64toBlob(imgPathURL.replace('data:image/png;base64,', ''), 'image/png');
    var timestamp = new Date().getTime().toString();
    window.navigator.msSaveBlob(blob, timestamp + ".png");
    alert("下载成功!");
}

function DownLoadByChrome(imgPathURL, filename) {
    //imgPathURL = imgPathURL.replace('data:image/png;base64,', '');
    //var blob = new Blob([imgPathURL], { type: 'application/png' }); //octet - stream
    var blob = b64toBlob(imgPathURL.replace('data:image/png;base64,', ''), 'image/png');
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    var timestamp = new Date().getTime().toString();//用时间戳给图片命名
    a.download = timestamp + ".png"
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    try {
        a.dispatchEvent(e);
    } catch (e) {
        console.log(e);
    }
    URL.revokeObjectURL(url);
    alert("下载成功!");
}

function clearAfterDownSuccess() {
    $('#mycanvas').remove();//移除先前转换的canvas
    //$('#mycanvas').remove();

    //$("#down").css('display', 'none');
    // var bgDiv = document.getElementById("bgDivdown");
    //var msgDiv = document.getElementById("biaohuimodaldown");
    //bgDiv.style.display = msgDiv.style.display = "none";
}

function exportMap(index) {
    //window.print();

    // var swfQuery  = getSWF("index1");
    ////var graphicJson = graphicsConvertToJson();
    //// var swfQuery = document.getElementById("swfQRcode");
    // if (swfQuery.exportMap == undefined) {
    //     alert("下载组件正在加载，请稍后再试！");
    //     $("#down").css('display', 'none');
    //     var bgDiv = document.getElementById("bgDivdown");
    //     var msgDiv = document.getElementById("biaohuimodaldown");
    //     bgDiv.style.display = msgDiv.style.display = "none";
    //     return;
    // }
    //swfQuery.exportMap();
    canvg();//将svg转换为canvas。参数为空，会自动创建需要的元素节点

    if (navigator.appName.indexOf("Microsoft") != -1) {
        if (document.all && document.addEventListener && window.atob) {
            //  alert('IE10');
            html2canvas(document.getElementById('map_layers'), {
                //ForIE10andChrome
                allowTaint: false,
                taintTest: false,
                onrendered: function (canvas) {
                    canvas.id = "mycanvas";
                    //document.body.appendChild(canvas); //生成base64图片数据 
                    try {
                        var dataUrl = canvas.toDataURL();
                    } catch (e) {
                        alert("生成图片出错，请稍后再试\r\r" + "错误代码：" + e.number + "\r详细信息：" + e.description + "\r尝试解决方法：若多次失败，请使用Chrome浏览器下载地图");
                        console.log(e);
                        clearAfterDownSuccess();
                        return;
                    }
                    getBrowser(dataUrl);
                    clearAfterDownSuccess();
                }
            });
            return;
        } else {
            html2canvasforIE9(document.getElementById('map_layers'), {
                //ForIE10andChrome
                allowTaint: false,
                taintTest: false,
                onrendered: function (canvas) {
                    canvas.id = "mycanvas";
                    //document.body.appendChild(canvas); //生成base64图片数据 
                    try {
                        var dataUrl = canvas.toDataURL();
                    } catch (e) {
                        alert("生成图片出错，请稍后再试\r\r" + "错误代码：" + e.number + "\r详细信息：" + e.description);
                        console.log(e);
                        clearAfterDownSuccess();
                        return;
                    }
                    getBrowser(dataUrl);
                    clearAfterDownSuccess();
                }
            });
            return;
        }

    } else {
        if (navigator.appVersion.indexOf(".NET CLR") != -1) {
            if (!document.all) {
                // alert('IE11+ or not IE');
                html2canvasForIE11(document.getElementById('map_layers'), {//ForIE11
                    allowTaint: true, taintTest: false,
                    onrendered: function (canvas) {
                        canvas.id = "mycanvas";
                        //document.body.appendChild(canvas); //生成base64图片数据 
                        try {
                            var dataUrl = canvas.toDataURL();
                        } catch (e) {
                            alert("生成图片出错，请稍后再试\r\r" + "错误代码：" + e.number + "\r详细信息：" + e.description + "\r尝试解决方法：若多次失败，请使用Chrome浏览器下载地图");
                            console.log(e);
                            clearAfterDownSuccess();
                            return;
                        }
                        getBrowser(dataUrl);
                        clearAfterDownSuccess();
                    }
                });
            }
            return;
        }
        if (navigator.appName.indexOf("Netscape") == 0) {  //chrome浏览器
            html2canvas(document.getElementById('map_layers'), {//ForIE10andChrome
            	useCORS: true, //（图片跨域相关）
      			allowTaint: true, //允许跨域（图片跨域相关）
                taintTest: false,
                onrendered: function (canvas) {
                    canvas.id = "mycanvas";
                    canvas.class = "mycanvas";
                    //document.body.appendChild(canvas); //生成base64图片数据 
                    try {
                        var dataUrl = canvas.toDataURL("image/png");
                        var newImg = document.createElement("img");
                        newImg.setAttribute('crossOrigin', 'anonymous');
                        newImg.src = dataUrl;
                        // document.body.appendChild(newImg);
                    } catch (e) {
                        alert("生成图片出错，请稍后再试\r\r" + "错误代码：" + e.number + "\r详细信息：" + e.description);
                        console.log(e);
                        clearAfterDownSuccess();
                        return;
                    }
                    getBrowser(dataUrl);
                    clearAfterDownSuccess();
                }
            });
            return;
        }
        alert("你正在使用的浏览器不支持地图下载，请联系系统管理员");
        return;
        //return window[movieName]
        //return document[movieName]
    }







    //html2canvas(document.getElementById('map'), {//ForIE10andChrome
    //    allowTaint: false, taintTest: false,
    //    onrendered: function (canvas) {
    //        canvas.id = "mycanvas";
    //        document.body.appendChild(canvas); //生成base64图片数据 
    //try {
    //    var dataUrl = canvas.toDataURL();
    //} catch (e) {
    //    alert("生成图片出错，请稍后再试\r\r详细信息：" + e.description + "\r错误代码：" + e.number);
    //    console.log(e);
    //    clearAfterDownSuccess();
    //}

    //        getBrowser(dataUrl);
    //        clearAfterDownSuccess();
    //    }
    //});




    //html2canvas(document.getElementById("map"), {
    //    allowTaint: true,
    //    taintTest: false,
    //    onrendered: function (canvas) {
    //        canvas.id = "mycanvas";
    //        //document.body.appendChild(canvas);
    //        //生成base64图片数据
    //        var dataUrl = canvas.toDataURL();
    //        var newImg = document.createElement("img");
    //        newImg.src = dataUrl;

    //        $(newImg).css({
    //            "position": "absolute",
    //            "left": 0,
    //            "top": 0
    //        }).insertAfter(winDraw);
    //    }
    // });


    //require([
    // "esri/map",
    // "esri/layers/ArcGISTiledMapServiceLayer",
    // "esri/arcgis/utils",
    // "dojo/Deferred",

    // "extras/map-to-canvas",
    //], function (Map, ArcGISTiledMapServiceLayer, arcgisUtils, Deferred, mapToCanvas) {
    //    "use strict";
    //    var canvas = document.getElementById("screenshotCanvas");
    //    mapToCanvas(map, canvas).then(function () {
    //        // Update the data URL.
    //        var url;
    //        try {
    //            url = canvas.toDataURL();
    //        } catch (e) {
    //            console.log("Error generating image URL", e.message);
    //            alert(e.message);
    //        }
    //        if (url) {
    //            document.location = url;
    //        }
    //    });
    //});

}