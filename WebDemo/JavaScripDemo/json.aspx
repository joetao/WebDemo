<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="json.aspx.cs" Inherits="WebDemo.JavaScripDemo.json" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="../Scripts/json.js" type="text/javascript"></script>    
    <title></title>
  
</head>
<body>
    <form id="form1" runat="server">
    <div>
  
    <script type="text/javascript">
         /*知识总结：
         （一）Json:s包括对象（名/值对的无需集合）和数组(值的有序集合)两个数据结构
         （二）json.js脚本
              (1)toJSONString()：将JavasScript对象或数组转换成JSON文本
             （2）parseJSON():将JSON文本字符串转换成JavaScript对象。javascript中的eval()方法也有类似功能。parseJSON()更安全，因为只作用于JSON文本
         */
        /*(一)对象字面量*/
       //(1).添加属性
        var member = new Object();
        member.name = "joetao";
        member.address = "中国光谷";
        member.isRegistered = true;
        member = member.toJSONString();
        alert("the member object as  a Json data structure:\n" + member);
        //(2)数组语法为对象添加属性
        var member2 = new Object();
        member2["name"] = "joetao2";
        member2["address"] = "中国光谷";
        member2["isRegistered"] = "true";
        member2 = member2.toJSONString();
        alert("the member object as  a Json data structure:\n" + member2);
        //(3)对象字面量，快速创建同以对象
        var member3 = { name: "joetao3", address: "中国光谷", isRegistered: true };
        member3 = member3.toJSONString()
        alert("the member object as  a Json data structure:\n" + member3);
        //(4)JSON文本形式的member对象
        var member4 = { "name": "joetao4", "address": "中国光谷", "isRegistered": true }
        member4 = member4.toJSONString()
        alert("the member object as  a Json data structure:\n" + member4);
        //集合(一个以上的成员对象)表现形式
        var mermbers = { "members": [{ "name": "joetao1", "address": "中国光谷", "isRegistered": true }, { "name": "joetao2", "address": "中国光谷", "isRegistered": true }, { "name": "joetao3", "address": "中国光谷", "isRegistered": true}] }
        mermbers = mermbers.toJSONString();
        alert("the member object as  a Json data structure:\n" + mermbers);
        //用parseJSON()将JSON文本字符串转换成JavaScript对象
        var membersObject = mermbers.parseJSON();
        for (i = 0; i < membersObject.members.length; i++) {
            alert(membersObject.members[i].name);

        }
        //用eval()将JSON文本字符串转换成JavaScript对象
        var membersObjectByEval =eval("("+ mermbers+")");//注意：eval()时需要加圆括号，以表明是一个求值表达式，而不是一个要运行的命令
        for (i = 0; i < membersObjectByEval.members.length; i++) {
            alert(membersObjectByEval.members[i].name);

        }
        /*(二)数组字面量*/
        //(1)数组语法为对象添加属性
        var memberArray=new Array();
        memberArray[0]="joetao";
        memberArray[1]="中国光谷";
        memberArray[2] = true;
        //(2)数组字面量，快速创建同以对象
        alert("the array as  a Json data structure:\n" + memberArray.toJSONString());
        var memberArray1 = ["joetao1", "中国光谷", true];
        alert("the array as  a Json data structure:\n" + memberArray1.toJSONString());
        //(3)JSON文本形式的数组
        var memberArray2 = ["joetao2", "中国光谷", true]
        alert("the array as  a Json data structure:\n" + memberArray2.toJSONString());
         </script>
    </div>
    </form>
</body>
</html>
