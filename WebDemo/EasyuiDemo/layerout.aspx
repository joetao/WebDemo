<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="layerout.aspx.cs" Inherits="WebDemo.EasyuiDemo.layerout" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Scripts/jquery-easyui-1.3.2/themes/icon.css" rel="stylesheet" type="text/css" />
    <link href="../Scripts/jquery-easyui-1.3.2/themes/default/easyui.css" rel="stylesheet"
        type="text/css" />
    <link href="../Style/site.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="../Scripts/jquery-easyui-1.3.2/jquery.easyui.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        var tabCount = 0;
        $(document).ready(function () {
            $('#cc').layout('add', {
                region: 'west',
                width: 180,
                title: 'West Title',
                split: true,
                tools: [{
                    iconCls: 'icon-add',
                    handler: function () { alert('add') }
                }, {
                    iconCls: 'icon-remove',
                    handler: function () { alert('remove') }
                }]
            });

            $('#mytree').tree({
                onClick: function (node) {
                  
                    switch (node.id) {
                        case "datagrid":
                            addtab(node.id, "/EasyuiDemo/datagrid.aspx", "", "icon-item", true);
                            break;
                        case "json":
                            addtab(node.id, "/JavaScripDemo/json.aspx", "", "icon-item", true);
                            break;
                        case "DivInDiv":
                            alert("DivInDiv");
                            addtab(node.id, "/CssDemo/DivInDiv.htm", "", "icon-item", true);
                            break;
                    }
                }
            });
            /*关闭窗口*/
            $('#mytab').tabs({
                onClose: function (title) {
                    tabCount--;
                }
            });


        }
        );
        function addtab(title, href, param, icon, close) {
            href = href + "?" + param;
            var tab = $('#mytab');
            //判断名称为tilte的选项卡是否被加载过，如果没有加载过就加载，加载过就选中。
            var isExist = tab.tabs('exists', title);
            if (isExist) {//存在就刷新选中
                tab.tabs('select', title);
            }
            else { //不存在就加载
                if (tabCount >= 8) {
                    $.messager.alert('提示', '标签页数量已达最大值，请先关闭其他页面。');
                    return;
                }
                var content = '未实现';
                if (href) {
                    content = '<iframe frameborder="0"  src="' + href + '" style="width:100%;height:99%;"></iframe>';
                    // add a unselected tab panel
                    tab.tabs('add', {
                        closable: close, //关闭按钮x
                        title: title,
                        selected: true, //新添加的选中
                        content: content,
                        iconCls: icon || 'icon-default'


                    });
                    tabCount++;        
                }
               
             
            }
          


        }

    </script>
</head>
<body class="easyui-layout">
  
 
        <div data-options="region:'north',split:false" class="banner">
          <div class="title" >My Web Lab</div>
        </div>
        <div data-options="region:'south',split:false" class="foot" >
 Copyright &copy; 2013 乐邦软件工作室
        </div>
        <div data-options="region:'west',title:'导航栏',split:true" style="width: 150px;">
            <ul id="mytree" class="easyui-tree">
                <li><span>Folder</span>
                    <ul>
                        <li><span>EasyuiDemo</span>
                            <ul>
                                <li id="datagrid"><span><a  href="#">datagrid</a></span> </li>
                                <li><span><a href="#">tree</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                            </ul>
                        </li>
                         <li><span>CssDemo</span>
                            <ul>
                                <li id="DivInDiv"><span><a  href="#">DivInDiv</a></span> </li>
                                <li><span><a href="#">tree</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                            </ul>
                        </li>
                         <li><span>JavaScriptDemo</span>
                            <ul>
                                <li id="json"><span><a  href="#">json</a></span> </li>
                              
                            </ul>
                        </li>
                          <li><span>JqueryDemo</span>
                            <ul>
                                <li id="Li2"><span><a  href="#">datagrid</a></span> </li>
                                <li><span><a href="#">tree</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                            </ul>
                        </li>
                         <li><span>HighChart</span>
                            <ul>
                                <li id="Li3"><span><a  href="#">datagrid</a></span> </li>
                                <li><span><a href="#">tree</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                                 <li><span><a href="#">datagrid</a></span> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><span>File21</span> </li>
            </ul>
        </div>
    
        <div id="mytab" class="easyui-tabs" data-options="region:'center'"  style="height:800px;width:100%">
            <div title="工作台" style="padding: 20px;">
                tab1
            </div>
          
        </div>   
</body>
</html>
