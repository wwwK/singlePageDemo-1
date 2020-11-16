var multiPages = { multiPages: 2,
                   currentPage:1,
                   pages : [
                        { fileName:"lte", pageName:"ModelSpace"},
                        { fileName:"lte__Layout01", pageName:"²¼¾Ö1"}
                   ]
};
var worldUnits = { globalOrigin: { x: -128.828, y: -78},
						units: "none",
						svgToWorldUnits: 0.0685333
};
var buildings = {
	BUILDING_NAME_GOES_HERE: {
		name: "",
		company: "",
		address: "",
		city: "",
		state: "",
		zipcode: "",
		country: "",
		FacMgr: "",
		FacMgr_title: "",
		FacMgr_email: "",
		FacMgr_phone: "",
		floors: {
			FLOOR_NAME_GOES_HERE: {
				name: "name_of_file_to_appear",
				file: "file_name",
				rooms: {
				}
			}
		}
	}
}

var vqBuilding = "BUILDING_NAME_GOES_HERE";
var vqFloor = "FLOOR_NAME_GOES_HERE";
var vqRooms = new Array();
var vqTBorder  = new Array();
var vqText  = new Array();
var vqURLs  = new Array();
function drawPaths (paper){
vqRooms.length = 0;
vqTBorder.length = 0;
vqText.length = 0;
vqURLs.length = 0;
}

var layer_thumb;
function drawThumb (paper){
layer_thumb = paper.group(
paper.path("M29,2615L29,383M29,383L2971,383M2971,383L2971,2615M2971,2615L29,2615").attr({stroke: "rgb(153,153,153,255)" , "stroke-width" : cvjs_MinWidth})
);
layer_thumb.attr(hide);
}

thumbs_loaded = true;
var layers_all;
var cvjs_MinWidth = 0.588431;
var cvjs_HatchLW = cvjs_MinWidth/10.0;
var cvjs_NumberOfLineWidths = 2;
function drawDrawing (paper){
var bb, tx;
layers_all = paper.g();
layer_0 = paper.group(
paper.group(
paper.path("M29.42,2615.69L29.42,383.31H2971.58L2971.58,2615.69H29.42").attr({"stroke-width" : cvjs_MinWidth})

).attr({fill:"none", "fill-opacity":"0", stroke:"black", "stroke-width" : cvjs_MinWidth, class: "layer_0"}),
paper.group(
paper.group(
paper.text(323.64,1611.12,"For Demonstration Purposes Only").attr({"stroke-width" : cvjs_MinWidth, transform: "r340,323.64,1611.12"}),
paper.text(617.85,1778.55,"Tailor Made Software").attr({"stroke-width" : cvjs_MinWidth, transform: "r340,617.85,1778.55"}))
.attr({"font-size": "159.455px","font-family": "Arial"})
).attr({fill:"rgb(127,0,0)", "stroke-width" : cvjs_MinWidth, stroke:"rgb(127,0,0)", "fill-opacity":"1", class: "layer_0"})
);
layers_all.add(layer_0);

layerTable = { numberOfLayers: 1,
			layers: [
						{ layer: layer_0, layerClass: "layer_0", layerName: "0", status : "ON"}
					 ]
};

}

var layer_0;

var layerTable;
var actualLLX = 29.4216;
var actualLLY = 383.312;
var actualURX = 2971.58;
var actualURY = 2615.69;
$(document).ready(function() {
	SetUpVq(1,15);
	    nodes_loaded = true;
     floor_loaded = true;
		thumbs_loaded = true;
});
SetUpVq(1,15);
nodes_loaded = true;
floor_loaded = true;
thumbs_loaded = true;
