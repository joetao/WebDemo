if (typeof Namespace == "undefined") {
    var Namespace = {};
}
Namespace.TowerFaultAnalysis = {};
Namespace.TowerFaultAnalysis.DrawMarkAndPopMessage = function (geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark) {
    var dXCoord = geom_x;
    var dYCoord = geom_y;
    var dAltitude = 100.0;
    var eAltitudeTypeCode = 0;
    var dYaw = 0.0;
    var dPitch = -45;
    var dRoll = 0.0;
    var dDistance = 500;
    var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
    Namespace.TowerFaultAnalysis.CreateImageLabel(geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark);
}
Namespace.TowerFaultAnalysis.CreateImageLabel = function (geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark) {
    try {
        {
            var dXCoord = geom_x;
            var dYCoord = geom_y;
            var dAltitude = 60;
            var eAltitudeTypeCode = 0;
            var dYaw = 0.0;
            var dPitch = 0.0;
            var dRoll = 0.0;
            var dDistance = 500;
            var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
        }
        {
            cLabelStyle = SGWorld.Creator.CreateLabelStyle();
            {
                var nBGRValue = 0xFF0000;
                var dAlpha = 0.5;
                var cBackgroundColor = cLabelStyle.BackgroundColor;
                cBackgroundColor.FromBGRColor(nBGRValue);
                cBackgroundColor.SetAlpha(dAlpha);
                cLabelStyle.BackgroundColor = cBackgroundColor;
                cLabelStyle.FontName = "Arial";
                cLabelStyle.Italic = true;
                cLabelStyle.Scale = 3;
            }
        }
        {
            var groupPath = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis");
            if (groupPath <= 0)
                groupPath = SGWorld.ProjectTree.CreateGroup("TowerFaultAnalysis");
            var MarkName = tower_id + "_" + tower_gz_id + "_" + gz_mark;
            var cImageLabelLabel = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis\\" + MarkName);
            if (cImageLabelLabel <= 0) {
                var imagename = null;
                if (gz_mark == 1) {
                    imagename = "lightning.gif";
                }
                else if (gz_mark == 2) {
                    imagename = "cross.gif";
                }
                else if (gz_mark == 3) {
                    imagename = "snow.gif";
                }
                else if (gz_mark == 3) {
                    imagename = "thunder.gif";
                }
                cImageLabelLabel = SGWorld.Creator.CreateImageLabel(cPos, getRootPath() + "/Images/" + imagename, cLabelStyle, groupPath, MarkName);
                cImageLabelLabel.Message.MessageID = Namespace.TowerFaultAnalysis.CreateMessage(tower_id).ID;
            }
        }
        {
            var cFlyToPos = cPos.Copy();
            cFlyToPos.Pitch = -45.0;
            SGWorld.Navigate.FlyTo(cFlyToPos);
        }
    }
    catch (e) {
        alert("Unexpected error: " + e.description);
    }
}

Namespace.TowerFaultAnalysis.CreateMessage = function (tower_id) {
    var tMessage = getRootPath() + "/SC/TowerFaultAnalysis_Result.aspx?tid=" + tower_id;
    var msg = SGWorld.Creator.CreatePopupMessage("杆塔易发故障数据", tMessage, 0, 0, 450, 300);
    SGWorld.Window.ShowPopup(msg);
    return msg;
}

Namespace.TowerFaultAnalysis.unload = function () {
    var groupPath = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis");
    if (groupPath > 0) {
        SGWorld.ProjectTree.DeleteItem(groupPath);
    }
    Namespace.Common.Initialstate();
}


Namespace.PosManfAysis = {};
//画圆
Namespace.PosManfAysis.DrawRound = function (X, Y, towerid) {
    var coordX = X;
    var coordY = Y;
    var tower_id = towerid;

    var dAltitude = 60;
    var eAltitudeTypeCode = 0;
    var dYaw = 0.0;
    var dPitch = 0.0;
    var dRoll = 0.0;
    var dDistance = 500;
    var position = SGWorld.Creator.CreatePosition(coordX, coordY, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
     
    var color1 = SGWorld.Creator.CreateColor(0, 0, 0, 0);
    var color2 = SGWorld.Creator.CreateColor(0, 0, 255, 10);
    var groupPath = SGWorld.ProjectTree.FindItem("PosManfAysis");
    if (groupPath <= 0) {
        groupPath = SGWorld.ProjectTree.CreateGroup("PosManfAysis");
    }
    var MarkName = tower_id + "_" + coordX + "_" + coordY;
    var ccircleLabel = SGWorld.ProjectTree.FindItem("PosManfAysis\\" + MarkName);
    if (ccircleLabel <= 0) {
        var ccircleLabel = SGWorld.Creator.CreateCircle(position, 100.0, color1, color2, groupPath, MarkName);
        ccircleLabel.Position.Distance = 800;
        ccircleLabel.Message.MessageID = Namespace.PosManfAysis.MessageBoxShow2(tower_id).ID;
    }
    var cFlyToposition = position.Copy();
    cFlyToposition.Pitch = -45.0;
    SGWorld.Navigate.FlyTo(cFlyToposition);
}

//弹出对话框2
Namespace.PosManfAysis.MessageBoxShow2 = function (towerid) {
    var tower_id = towerid;
    var urls = getRootPath() + '/SC/ListTowerGzInfo.aspx?towerid=' + tower_id + '';
    var popup = SGWorld.Creator.CreatePopupMessage("定点故障分析--杆塔周边及灾害风险信息查询", urls, 550, 200, 800, 400, 800000);

    SGWorld.Window.ShowPopup(popup);
    return popup;
}

Namespace.PosManfAysis.DrawRoundAndPopMessage2 = function (X, Y, towerid, towerCode) {
    var coordX = X;
    var coordY = Y;
    var tower_id = towerid
    Namespace.PosManfAysis.DrawRound(coordX, coordY, tower_id);
}

Namespace.PosManfAysis.unload = function () {
    var groupPath = SGWorld.ProjectTree.FindItem("PosManfAysis");
    if (groupPath > 0) {
        SGWorld.ProjectTree.DeleteItem(groupPath);
    }
    Namespace.Common.Initialstate();
}

Namespace.LayersOverlying = {};
Namespace.LayersOverlying.unload = function () {
    var groupPath = SGWorld.ProjectTree.FindItem("四川电力专题图");
    if (groupPath > 0) {
        groupPath = SGWorld.ProjectTree.ExpandGroup(groupPath, false);
    }
    var Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\四川污区分布图");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\四川冰区图");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\雷害分布图220kV反击");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\雷害分布图220kV绕击");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\雷害分布图500kV反击");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\雷害分布图500kV绕击");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\地闪密度图");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\地质灾害图");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Item = SGWorld.ProjectTree.FindItem("四川电力专题图\\鸟害图");
    if (Item > 0) {
        SGWorld.ProjectTree.SetVisibility(Item, false);
    }
    Namespace.Common.Initialstate();
}

Namespace.towerComprehensive = {};
Namespace.towerComprehensive.FindObjectForXy = function (geom_x, geom_y) {
    var dXCoord = geom_x;
    var dYCoord = geom_y;
    var dAltitude = 100.0;
    var eAltitudeTypeCode = 0;
    var dYaw = 0.0;
    var dPitch = -45;
    var dRoll = 0.0;
    var dDistance = 500;
    var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
    var cFlyToPos = cPos.Copy();
    cFlyToPos.Pitch = -45;
    SGWorld.Navigate.FlyTo(cFlyToPos);
}

Namespace.towerComprehensive.DrawRoundAndPopMessage2 = function (x, y, id, code) {
    try {
        Namespace.towerComprehensive.FindObjectForXy(x, y);
        var datePath = getRootPath() + "/SC/towerDateShow.aspx?ID=" + id.toString();
        var popup = SGWorld.Creator.CreatePopupMessage("综合信息--杆塔数据信息", datePath, 550, 250, 745, 400, -1);
        SGWorld.Window.ShowPopup(popup);
    } catch (e) {
        alert("系统暂忙");
    }
}

Namespace.towerComprehensive.unload = function () {
    Namespace.Common.Initialstate();
}


Namespace.lineNavigate = {};
Namespace.lineNavigate.DrawMarkAndPopMessage = function (geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark) {
    var dXCoord = geom_x;
    var dYCoord = geom_y;
    var dAltitude = 100.0;
    var eAltitudeTypeCode = 0;
    var dYaw = 0.0;
    var dPitch = -45;
    var dRoll = 0.0;
    var dDistance = 500;
    var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
    Namespace.lineNavigate.CreateImageLabel(geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark);
}

Namespace.lineNavigate.CreateImageLabel = function (geom_x, geom_y, tower_id, tower_code, tower_gz_id, gz_mark) {
    try {
        {
            var dXCoord = geom_x;
            var dYCoord = geom_y;
            var dAltitude = 60;
            var eAltitudeTypeCode = 0;
            var dYaw = 0.0;
            var dPitch = 0.0;
            var dRoll = 0.0;
            var dDistance = 500;
            var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
        }
        {
            cLabelStyle = SGWorld.Creator.CreateLabelStyle();
            {
                var nBGRValue = 0xFF0000;
                var dAlpha = 0.5;
                var cBackgroundColor = cLabelStyle.BackgroundColor;
                cBackgroundColor.FromBGRColor(nBGRValue);
                cBackgroundColor.SetAlpha(dAlpha);
                cLabelStyle.BackgroundColor = cBackgroundColor;
                cLabelStyle.FontName = "Arial";
                cLabelStyle.Italic = true;
                cLabelStyle.Scale = 3;

            }
        }
        {
            var groupPath = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis");
            if (groupPath <= 0)
                groupPath = SGWorld.ProjectTree.CreateGroup("TowerFaultAnalysis");
            var MarkName = tower_id + "_" + tower_gz_id + "_" + gz_mark;
            var cImageLabelLabel = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis\\" + MarkName);
            if (cImageLabelLabel <= 0) {
                var imagename = null;
                if (gz_mark == 1) {
                    imagename = "lightning.gif";
                }
                else if (gz_mark == 2) {
                    imagename = "cross.gif";
                }
                else if (gz_mark == 3) {
                    imagename = "snow.gif";
                }
                else if (gz_mark == 3) {
                    imagename = "thunder.gif";
                }
                cImageLabelLabel = SGWorld.Creator.CreateImageLabel(cPos, getRootPath() + "/Images/" + imagename, cLabelStyle, groupPath, MarkName);
                cImageLabelLabel.Message.MessageID = Namespace.lineNavigate.CreateMessage(tower_id).ID;
            }
        }
        {
            var cFlyToPos = cPos.Copy();
            cFlyToPos.Pitch = -45.0;
            SGWorld.Navigate.FlyTo(cFlyToPos);
        }
    }
    catch (e) {
        alert("Unexpected error: " + e.description);
    }
}

Namespace.lineNavigate.CreateMessage = function (tower_id) {
    var tMessage = getRootPath() + "/SC/TowerFaultAnalysis_Result.aspx?tid=" + tower_id;
    var msg = SGWorld.Creator.CreatePopupMessage("线路模拟巡航", tMessage, 0, 0, 450, 300);
    //SGWorld.Window.ShowPopup(msg);
    return msg;
}

Namespace.lineNavigate.FlyByPoint = function () {
    try {

        var groupPath = SGWorld.ProjectTree.FindItem("线路巡航");
        if (groupPath > 0) {
            var root = SGWorld.ProjectTree.GetObject(groupPath);
            SGWorld.Navigate.FlyTo(root);

        } else {

            //创建动态飞行对象
            var MotionStyle = 2;
            var ObjectType = 0;
            var FileName = getRootPath() + "/Resources/AirPlanes/500d.xpc";

            var ScalFactor = 30;
            var AlttudeType = 0;
            var GroupID = 0;
            var Description = "线路巡航";

            var DynamicObject = SGWorld.Creator.CreateDynamicObject(0, MotionStyle, ObjectType, FileName, ScalFactor, AlttudeType, GroupID, Description);
            DynamicObject.TurnSpeed = 10;
            DynamicObject.CircularRoute = 1;
            DynamicObject.Acceleration = 10;

            //线路点参数
            var Altitude = 1000;
            var Speed = 5000;
            var yaw = 0;
            var picth = 0;
            var roll = 0;
            var Cyaw = 0;
            var Cpicth = 0;
            var MessageID = "";
            //后台参数格式化
            //   var paraArrayStr = $("#ParaArray").html(); //得到整个参数 
            var paraArrayStr = $(window.parent.frames['iframeright'].document.getElementById('ParaArray')).html();

            var str = new Array();
            str = paraArrayStr.split(","); //拆分数字 得到格式 [X:Y:ID:Code:GZID]

            for (i = 0; i < str.length; i++) {
                var pointParaArray = new Array();
                var pointDate = str[i].substring(1, str[i].length - 1); //去掉前后 [] 符号

                pointParaArray = pointDate.split(":");
                var pointX = pointParaArray[0];
                var pointY = pointParaArray[1];
                var towerID = pointParaArray[2];
                var towerCode = pointParaArray[3];
                var gzID = pointParaArray[4];
                var staClass = pointParaArray[5];
                Namespace.lineNavigate.CreateImageLabel(pointX, pointY, towerID, towerCode, gzID, staClass);
                var RouteWayPoint = SGWorld.Creator.CreateRouteWayPoint(pointX, pointY, Altitude, Speed, yaw, picth, roll, Cyaw, Cpicth, MessageID);
                DynamicObject.WayPoints.AddWayPoint(RouteWayPoint);
            }
            SGWorld.Navigate.FlyTo(DynamicObject, 18);
        }
    } catch (e) {

    }
}

Namespace.lineNavigate.unload = function () {
    var groupPath = SGWorld.ProjectTree.FindItem("TowerFaultAnalysis");
    if (groupPath > 0) {
        SGWorld.ProjectTree.DeleteItem(groupPath);
    }
    Namespace.Common.Initialstate();
}


Namespace.Common = {};
Namespace.Common.Initialstate = function () {
    var dXCoord = 103.12939116;   //103.12939116 29.32666668
    var dYCoord = 29.32666668;
    var dAltitude = 100.0;
    var eAltitudeTypeCode = 0;
    var dYaw = 0;
    var dPitch = -75;
    var dRoll = 0.0;
    var dDistance = 58000;
    var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
    var cFlyToposition = cPos.Copy();
    cFlyToposition.Pitch = -75.0;
    try {
        SGWorld.Navigate.FlyTo(cFlyToposition);
    }
    catch (e) {
    }
}

Namespace.Common = {};
Namespace.Common.Initialstate2 = function () {
    var dXCoord = 103.12939116;   //103.12939116 29.32666668
    var dYCoord = 29.32666668;
    var dAltitude = 100.0;
    var eAltitudeTypeCode = 0;
    var dYaw = 90;
    var dPitch = -75;
    var dRoll = 0.0;
    var dDistance = 5000;
    var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
    var cFlyToposition = cPos.Copy();
    cFlyToposition.Pitch = -75.0;
    try {
        SGWorld.Navigate.FlyTo(cFlyToposition);
    }
    catch (e) {
    }
}

function unload() {
    Namespace.Common.Initialstate();
}