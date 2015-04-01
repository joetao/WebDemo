(function () { 
    $.ajaxSetup({ cache: false });
})();

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function GridConfig(foldername, tablename) {   
    window.parent.parent.OpenGridConfigWindow(foldername, tablename);
}

function CloseGridConfigWindow() {
    window.parent.parent.CloseGridConfigWindow();
}

function CloseCRUDWindow() {
    window.parent.parent.CloseCRUDWindow();
}

function ExportToExcel(tablename) {
    window.location.href = "/DataFactory/ExportImport/Export/ExportToExcel.aspx?tableName=" + tablename;
}

function CloseImportExcelWindow() {
    window.parent.parent.CloseImportExcelWindow();
}
function OpenImportExcelWindow(tablename) {
    window.parent.parent.OpenImportExcelWindow(tablename);
}

function resizeGrid() {
    $('#dg').datagrid('resize', {
        width: function () { return document.body.clientWidth * 0.9; }
    });
}

function CRUD(type, url, param) {
    window.parent.parent.OpenCRUDWindow(type, url, param);
}

function CRUD_EX(url, param, title, icon) {
    window.parent.parent.OpenCRUDWindow_EX(url, param, title, icon);
}

function CRUD_EX2(url, param, title, icon, w, h) { 
    window.parent.parent.parent.OpenCRUDWindow_EX2(url, param, title, icon, w, h);
}

function GetOperatingPurview(_code) {
    $.ajax({
        type: "post",
        data: { code: _code, id: getQueryString("id") },
        url: "ActionBase.do",
        async: false,
        success: function (data) {
            document.write(data);
        }
    });
}

function DownloadExcelTemplate(tablename) {
    window.location.href = "/DataFactory/Template/Download/DownloadExcelTemplate.aspx?tableName=" + tablename;
}

/*切换图列*/
function changeLegend(standard) {
    if (standard == "贵州标准") {

        //贵州标准
        $("#trGZ").css("display", "");
        $("#trNW").css("display", "none");

    }
    else {
        //南网标准
        $("#trGZ").css("display", "none");
        $("#trNW").css("display", "");
    }
}
