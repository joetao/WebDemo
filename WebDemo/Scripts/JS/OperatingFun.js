function getRootPath() {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    return prePath + postPath+"/UI";
}

var DataType = null;
function GetTowerInfo(type) {
    DataType = type;
    getunit();
    getData(0, "", "");
    $("#sel_unit").change(function () {
        getpowerlineByApply();
    })
    $("#btn_sel").click(function () {
        var unitidVal = $("#sel_unit").val();
        var lineidVal = $("#sel_powerline").val();
        if (unitidVal == 0)
            alert("请选择“管辖单位.”");
        else if (lineidVal == 0) {
            getData(0, unitidVal, "");
        }
        else {
            getData(0, unitidVal, lineidVal);
        }
    })
}

function GetMonitorDevicesInfo(type) {
    DataType = type;
    getunit();
    getData(0, "", "");
    $("#sel_unit").change(function () {
        getpowerline();
    })
    $("#btn_sel").click(function () {
        var unitidVal = $("#sel_unit").val();
        var lineidVal = $("#sel_powerline").val();
        //        if (unitidVal == 0)
        //            alert("请选择“管辖单位.”");
        //        else if (lineidVal == 0) {
        //            getData(0, unitidVal, "");
        //        }
        //        else {
        getData(0, unitidVal, lineidVal);
        //        }
    })
}

function getpowerline() {
    var unit_id_Val = $("#sel_unit").val();
    $.ajax({
        type: "get",
        data: { type: "pl", unit_id: unit_id_Val },
        url: "Handler.ashx",
        success: function (data) {
            $("#sel_powerline").html(data);
        }
    })
}

function getunit() {
    $.ajax({
        type: "get",
        data: { type: "unit" },
        url: "ActionBase.act",
        success: function (data) {
            $("#sel_unit").html(data);
            getpowerlineByApply();
        }
    })
}

function getpowerlineByApply() {
    var unit_id_Val = $("#sel_unit").val();
    $.ajax({
        type: "get",
        data: { type: "power_line_apply", unit_id: unit_id_Val },
        url: "Handler.ashx",
        success: function (data) {
            $("#sel_powerline").html(data);
        }
    })
}

function getData(pageindexVal, unitidVal, lineidVal) {
    $.ajax({
        type: "get",
        data: { type: DataType, pageindex: pageindexVal, unit_id: unitidVal, line_id: lineidVal },
        url: "Handler.ashx",
        success: function (data) {
            $("#td_list_Content").html(data);
        }
    })
}

function PagingClick(obj) {
    var pageindexVal = $(obj).attr("pageindex");
    var unitidVal = $("#sel_unit").val();
    var lineidVal = $("#sel_powerline").val();
    if (unitidVal == 0 && lineidVal == 0) {
        unitidVal = "";
        lineidVal = "";
    }
    getData(pageindexVal, unitidVal, lineidVal);
}; 