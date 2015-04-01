

jsPlumb.bind("ready", function () {

    // render mode
    var resetRenderMode = function (desiredMode) {
        var newMode = jsPlumb.setRenderMode(desiredMode);
        $(".rmode").removeClass("selected");
        $(".rmode[mode='" + newMode + "']").addClass("selected");

        $(".rmode[mode='canvas']").attr("disabled", !jsPlumb.isCanvasAvailable());
        $(".rmode[mode='svg']").attr("disabled", !jsPlumb.isSVGAvailable());
        $(".rmode[mode='vml']").attr("disabled", !jsPlumb.isVMLAvailable());

        jsPlumbDemo.init();
    };

    $(".rmode").bind("click", function () {
        var desiredMode = $(this).attr("mode");
        if (jsPlumbDemo.reset) jsPlumbDemo.reset();
        jsPlumb.reset();
        resetRenderMode(desiredMode);
    });
    resetRenderMode(jsPlumb.SVG);
});


var overlays = null, overlays_or = null, overlays_and = null;
window.jsPlumbDemo = {

    init: function () {
        var color = "gray";

        jsPlumb.importDefaults({
            // notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
            // than the curves on the first demo, which use the default curviness value.			
            //   Connector: ["Bezier", { curviness: 50}],
            Connector: ["Flowchart", { stub: [10, 10], gap: 10, cornerRadius: 5, alwaysRespectStubs: true}],
            DragOptions: { cursor: "pointer", zIndex: 2000 },
            PaintStyle: { strokeStyle: color, lineWidth: 2 },
            EndpointStyle: { radius: 9, fillStyle: color },
            HoverPaintStyle: { strokeStyle: "#ec9f2e" },
            EndpointHoverStyle: { fillStyle: "#ec9f2e" },
            Anchors: ["BottomCenter", "TopCenter"]
        });




        // declare some common values:
        var arrowCommon = { foldback: 0.7, fillStyle: color, width: 14 };

        // use three-arg spec to create two different arrows with the common values:
        overlays = [
					["Arrow", { location: 0, direction: -1 }, arrowCommon],
					["Arrow", { location: 0.9, direction: -1 }, arrowCommon]
				];
        overlays_or = [
					["Arrow", { location: 0, direction: -1 }, arrowCommon],
					["Arrow", { location: 0, direction: -1 }, arrowCommon],
                    ["Label", { location: 0, label: "", id: "label", cssClass: "aLabel"}]
				];
        overlays_and = [
					["Arrow", { location: 0, direction: -1 }, arrowCommon],
					["Arrow", { location: 0.9, direction: -1 }, arrowCommon],
                    ["Label", { location: 0, label: "", id: "label", cssClass: "aLabel"}]
        //, ["Arrow", { location: 0.3, direction: -1 }, arrowCommon]
				];

        //  jsPlumb.connect({ source: "window3", target: "window6", overlays: overlays, detachable: true, reattach: true });
        //  jsPlumb.connect({ source: "root", target: "link_or", overlays: overlays });

        // you do not need to use this method. You can use your library's selector method.
        // the jsPlumb demos use it so that the code can be shared between all three libraries.
        jsPlumb.draggable(jsPlumb.getSelector(".window_item"));
    }
};


function Add_WS_Connect() {
    delconnect("root", "ws_f");
    addconnect("root", "ws_f", overlays_or)
}
function Add_WS_YZ_Connect() {
    DEL_WS_YZ_Connect();
    addconnect("ws_f", "ws_y_1", overlays_and);
    addconnect("ws_f", "ws_y_2", overlays_and);
    addconnect("ws_f", "ws_y_3", overlays_and);
    addconnect("ws_f", "ws_y_4", overlays_and);
}

function DEL_WS_YZ_Connect() {
    delconnect("ws_f", "ws_y_1");
    delconnect("ws_f", "ws_y_2");
    delconnect("ws_f", "ws_y_3");
    delconnect("ws_f", "ws_y_4");
}

function Add_LJ_Connect() {
    delconnect("root", "lj_f");
    addconnect("root", "lj_f", overlays_or);
}
function Add_LJ_YZ_Connect() {
    DEL_LJ_YZ_Connect();
    addconnect("lj_f", "lei_y_1", overlays_and);
    addconnect("lj_f", "lei_y_2", overlays_and);
    addconnect("lj_f", "lei_y_3", overlays_and);
    addconnect("lj_f", "lei_y_4", overlays_and);
    addconnect("lj_f", "lei_y_5", overlays_and);
    addconnect("lj_f", "lei_y_6", overlays_and);
}
function DEL_LJ_YZ_Connect() {
    delconnect("lj_f", "lei_y_1");
    delconnect("lj_f", "lei_y_2");
    delconnect("lj_f", "lei_y_3");
    delconnect("lj_f", "lei_y_4");
    delconnect("lj_f", "lei_y_5");
    delconnect("lj_f", "lei_y_6");
}

function Add_FBBS_Connect() {
    delconnect("root", "fbbs_f");
    addconnect("root", "fbbs_f", overlays_or);
}

function Add_FBBS_YZ_Connect() {
    DEL_FBBS_YZ_Connect();
    addconnect("fbbs_f", "fbbs_y_1", overlays_and);
    addconnect("fbbs_f", "fbbs_y_2", overlays_and);
    addconnect("fbbs_f", "fbbs_y_3", overlays_and);
    addconnect("fbbs_f", "fbbs_y_4", overlays_and);
}
function DEL_FBBS_YZ_Connect() {
    delconnect("fbbs_f", "fbbs_y_1");
    delconnect("fbbs_f", "fbbs_y_2");
    delconnect("fbbs_f", "fbbs_y_3");
    delconnect("fbbs_f", "fbbs_y_4");
}


function Add_WD_Connect() {
    delconnect("root", "wd_f");
    addconnect("root", "wd_f", overlays_or);
}

function Add_WD_YZ_Connect() {
    DEL_WD_YZ_Connect();
    addconnect("wd_f", "wd_y_1", overlays_and);
    addconnect("wd_f", "wd_y_2", overlays_and);
    addconnect("wd_f", "wd_y_3", overlays_and);
    addconnect("wd_f", "wd_y_4", overlays_and);
}

function DEL_WD_YZ_Connect() {
    delconnect("wd_f", "wd_y_1");
    delconnect("wd_f", "wd_y_2");
    delconnect("wd_f", "wd_y_3");
    delconnect("wd_f", "wd_y_4");
}

function Add_NH_Connect() {
    delconnect("root", "nh_f");
    addconnect("root", "nh_f", overlays_or);
}

function Add_NH_YZ_Connect() {
    DEL_NH_YZ_Connect();
    addconnect("nh_f", "nh_y_1", overlays_and);
    addconnect("nh_f", "nh_y_2", overlays_and);
    addconnect("nh_f", "nh_y_3", overlays_and);
}

function DEL_NH_YZ_Connect() {
    delconnect("nh_f", "nh_y_1");
    delconnect("nh_f", "nh_y_2");
    delconnect("nh_f", "nh_y_3");
}

function addconnect(_source, _target, _overlays) {
    jsPlumb.connect({ source: _source, target: _target, overlays: _overlays });
}

function delconnect(_source, _target) {
    try {
        var Conn = jsPlumb.getConnections({ source: _source, target: _target });
        if (Conn != null && Conn.length > 0)
            jsPlumb.detach(Conn[0]);
    }
    catch (e)
    { }
}