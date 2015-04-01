

function getRootPath() {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    return prePath + postPath; 
}

var DataType = null;
//落雷数据初始化
function thunderBoltInit() {

    getunit();
    getpowerline();
    gettower();
    getsubsation();

    $("#sel_unit").change(function () {
        getpowerline();
        getsubsation();
    })
    $("#sel_powerline").change(function () {
        gettower();
    })
}
 
//管辖单位
function getunit() {
    $.ajax({
        type: "get",
        data: { type: "unit" },
        url: "Handler.ashx",
        success: function (data) {
            $("#sel_unit").html(data);
        }
    })
}

//输电线路
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

//杆塔编号数据集
function gettower() {
    var powerline_id_Val = $("#sel_powerline").val();

    $.ajax({
        type: "get",
        data: { type: "tw", line_id: powerline_id_Val },
        url: "Handler.ashx",
        success: function (data) {
            $("#sel_tower").html(data);

        }
    });
}


//变电站名称数据集
function getsubsation() {

    var unit_id_Val = $("#sel_unit").val();
    $.ajax({
        type: "get",
        data: { type: "sb", unit_id: unit_id_Val },
        url: "Handler.ashx",
        success: function (data) {

            $("#sel_substation").html(data);

        }
    });
}
