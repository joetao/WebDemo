<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="datagrid.aspx.cs" Inherits="WebDemo.EasyuiDemo.datagrid" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Scripts/jquery-easyui-1.3.2/themes/icon.css" rel="stylesheet" type="text/css" />
    <link href="../Scripts/jquery-easyui-1.3.2/themes/default/easyui.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="../Scripts/jquery-easyui-1.3.2/jquery.easyui.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {

                        BindDataGridByUrl();
//                        BindDataGridByPost();
//            BindDataGridByAjax();
        })
        /*
        绑定本地Json数据到DataGrid中
        */
        function BindDataGridByLocaldata() {
            var jsdata = '{"total":2,"rows":[{"studentid":"101","name":"张三","age":24},{"studentid":"102","name":"李四","age":25},{"studentid":"103","name":"王五","age":23}]}';
            var data = $.parseJSON(jsdata);
            $('#dg').datagrid("loadData", data); //将数据绑定到DataGrid中

        }
        /*
        用Jquery ajax异步请求
        */
        function BindDataGridByAjax() {
            $.ajax({
                type: "post",
                data: { type: "coloums" },
                url: '../DataCreater.ashx',
                success: function (data) {
                    $('#dg').datagrid({
                        title: '测试Grid',
                        loadMsg: '正在加载，请稍等',
                        fitColoums: true,
                        resizable: true,
                        height: 'auto',
                        nowrap: false,
                        url: '../DataCreater.ashx?type=data',
                        rownumbers: true, //行号
                        singleSelect: true, //是否单选
                        pagination: true//分页控件,                                

                    });
                    var p = $('#dg').datagrid('getPager');
                    $(p).pagination({
                        pageSize: 10,
                        pageList: [10, 20, 30, 40, 50],
                        beforePageText: '第',
                        afterPageText: '页 共{pages}页',
                        displayMag: '当前显示{from}-{to} 条记录 共{total}条记录'
                    });
                }

            });
        }

        /*
        直接用url请求
        */
        function BindDataGridByUrl() {

            $('#dg').datagrid({
                title: '测试datagrid',
                loadMsg: "正在加载，请稍等...",
                striped: false,
                fitColumns: true,
                resizable: true,
                height: 'auto',
                nowrap: false,
                url: "../DataCreater.ashx?type=data",
                rownumbers: true, //行号      
                singleSelect: true, //是否单选  
                pagination: false//分页控件  
            });


        }
        function BindDataGridByPost() {
            var url = "../DataCreater.ashx";
            var data = { type: "data" };
            $.post(url, data, function (res) {
                alert(res);
                var json = JSON.parse(res);//字符串转json格式    
                $("#dg").datagrid('loadData', json);

            })
        }


     

    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <table class="easyui-datagrid" title="Basic DataGrid" style="width: 700px; height: 250px"
            data-options="singleSelect:true,collapsible:true" id="dg">
            <thead>
                <tr>
                    <th data-options="field:'studentid',width:80">
                        学号
                    </th>
                    <th data-options="field:'name',width:100">
                        姓名
                    </th>
                    <th data-options="field:'age',width:80,align:'right'">
                        年龄
                    </th>
                </tr>
            </thead>
        </table>
    </div>
    </form>
</body>
</html>
