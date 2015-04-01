function getUnits(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "23634183-5AAC-4116-879A-C156E74415D2" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
function getRoles(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "F873941A-FCAE-4827-A664-F6B601195427" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}



function getVolt_Lvl(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "AD4ABA3B-93A6-45E3-AE69-05ABE3A96A8B" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
function getIceLineCountForYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "BF0D43E3-D3C4-4DFA-B86F-A70598F3C606" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getCity(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "4F482533-F9E5-45E6-B6B0-57FFFE89B6D4" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getPowerLine(SelectName, unit_id) {
    $.ajax({
        type: "post",
        data: { code: "43B523B0-FDC4-4421-9961-EEA3F8702A2D", Unit: unit_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getPowerLineSetVal(SelectName, unit_id, val) {
    $.ajax({
        type: "post",
        data: { code: "43B523B0-FDC4-4421-9961-EEA3F8702A2D", Unit: unit_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
            $("#" + SelectName).val(val);
        }
    });
}
//根据管辖单位id和电压等级获取输电线路
function getPowerLine(SelectName, unit_id, Volt_Lvl) {
    $.ajax({
        type: "post",
        data: { code: "43B523B0-FDC4-4421-9961-EEA3F8702A2D", Unit: unit_id, Volt: Volt_Lvl },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//根据覆冰监测设备关联的杆塔，寻找相应的线路
function getPowerLineFromIceDeviceMonitor(SelectName, unit_id, Volt_Lvl) {
    $.ajax({
        type: "post",
        data: { code: "76F47129-024A-47BE-B6AE-10AFCD181B67", Unit: unit_id, Volt: Volt_Lvl },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

////根据管辖单位id获取(新建)输电线路
function getPowerLine_V(SelectName, unit_id) {
    $.ajax({
        type: "post",
        data: { code: "88D24EE9-06D9-4379-88C1-DB948F4D05F3", Unit: unit_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}


function getInsulatorModel(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "513DC5C7-AECC-4A7A-9A6E-DA1FFDE24974" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取单片爬距
function getInsulatorMocrdist(SelectName, Model) {
    $.ajax({
        type: "post",
        data: { code: "276B980F-0936-4DCF-A3CD-5E8D39B6DEA6", Model: Model },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}


function getInsulatorMocrdistSetVal(SelectName, Model, val) {
    $.ajax({
        type: "post",
        data: { code: "276B980F-0936-4DCF-A3CD-5E8D39B6DEA6", Model: Model },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
            $("#" + SelectName).val(val);
        }
    });
}

function getTowerCode(SelectName, line_id) {
    $.ajax({
        type: "post",
        data: { code: "EB3E1D80-A937-4BEB-89AF-F7746EB94A4E", Line: line_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//根据新建线路id获取杆塔
function getTowerCode_V(SelectName, line_id) {
    $.ajax({
        type: "post",
        data: { code: "9DF35F3A-0F32-42D2-8CA2-375A9BE00753", Line: line_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getTowerCodeSetVal(SelectName, line_id, val) {
    $.ajax({
        type: "post",
        data: { code: "EB3E1D80-A937-4BEB-89AF-F7746EB94A4E", Line: line_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
            $("#" + SelectName).val(val);
        }
    });
}

function getGeomByTowerID(longCID, latCID, tower_id) {
    $.ajax({
        type: "post",
        data: { code: "8E71DFAE-945E-4A9A-8AD0-3972CF669067", tower_id: tower_id },
        url: "ActionBase.do", 
        success: function (data) {
            var arr = eval(data);
            $("#" + longCID).val(arr[0]);
            $("#" + latCID).val(arr[1]);
        }
    });
}

function getGeomByTowerID_Sync(longCID, latCID, tower_id) {
    $.ajax({
        type: "post",
        data: { code: "8E71DFAE-945E-4A9A-8AD0-3972CF669067", tower_id: tower_id },
        url: "ActionBase.do",
        async: false,
        success: function (data) {
            var arr = eval(data);
            $("#" + longCID).val(arr[0]);
            $("#" + latCID).val(arr[1]);
        }
    });
}

function getTowerType(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "EBFACD9B-AF81-43BD-9FCA-13A315FA83D3" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getTowerMaterial(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "5B354ABF-C50E-4A4C-B32C-029571B9B653" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getTowerUsage(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "F6E305D8-C7D8-4AAD-B09B-FA71A62BE253" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getPolType(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "E94F3B95-EB8F-4B53-B87C-76A8D35065D0" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getPolLevel(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "391D5360-EE2A-4156-9DC9-D33FA654EC3D" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getSubStation(SelectName, unit_id) {
    $.ajax({
        type: "post",
        data: { code: "0FB465A1-ADC3-4C62-A07C-EEA30F4F9B19", Unit: unit_id },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getGeomBySubstationID(longCID, latCID, sub_id) {
    $.ajax({
        type: "post",
        data: { code: "0A493089-873B-40E5-8EC5-A9F7696F0144", sub_id: sub_id },
        url: "ActionBase.do",
        success: function (data) {
            var arr = eval(data);
            $("#" + longCID).val(arr[0]);
            $("#" + latCID).val(arr[1]);
        }
    });
}

//获取监测点所在地
function getPointLocation(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "E233988B-B3B7-48CF-8810-33FFD0092D3F" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取气象数据测量点
function getWindRoseMeaPoint(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "4BF7DBF5-4F57-4FA9-AE3C-8FCF16D08D39" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//通过线路ID和测量点类型获取SpotPol测量点名称
function getSpotMeasureName(SelectName, line_id, ptype) {
    $.ajax({
        type: "post",
        data: { code: "A7115D45-84F6-49F3-B42C-5053021A9769", line_ID: line_id, pType: ptype },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//通过管辖单位ID和测量点类型获取SpotPol测量点名称
function getSpotMeasureNameBySub(SelectName, unit_id, ptype) {
    $.ajax({
        type: "post",
        data: { code: "FF6D5B59-78E0-4D6A-9F40-7D76577FC709", Unit_id: unit_id, pType: ptype },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取所在地
function getSZD(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "1C298A6A-1B97-4F14-8F81-45735587EC14" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取污区年份转换成下拉框
function getPolYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "7A0C6FD5-8DF1-42FB-8004-C40A566623E2" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取已发布的污区年份转换成下拉框
function getPolYear_EX(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "8C2B4CAC-341F-4F91-9445-3C761242CB5F" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function getPolTime() {
    var year;
    $.ajax({
        type: "post",
        data: { code: "1D181020-5B6A-46F5-B992-31345C7F615B", type: "polyear" },
        url: "ActionBase.do",
        async: false,
        success: function (data) {
            if (data != null && data != "")
                year = data;
            else
                year = 2011;
        }
    });
    return year;
}

//获取气象台站站名
function getMeteorologicalStation(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "EF64E324-6642-4787-AFDE-1E849B6A677C" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//获取雷区年份下拉框
function getThounderYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "AA2C7383-2E28-43A1-8FFC-0EDC01ABD856" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//获取雷区年份下拉框
function getThounderYear_EX(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "2BC5C133-BDB9-42CE-8979-F451E08436F7" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//分类表获取雷区年份下拉框("1"：地闪年份,"2":雷害分布)
function getThunderYearByType(SelectName, leiType) {
    $.ajax({
        type: "post",
        data: { code: "FA89F5C7-52AF-4262-9E8D-230C7587A3B8", leitype: leiType },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取舞区年份下拉框
function getWaveYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "8A4AECBE-CACB-4D04-8D41-1FCFA69543F3" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取舞区发布图年份下拉框
function getWaveYear_EX(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "940E06D9-17F1-4C04-A476-1CF773AE6AC9" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取冰区年份下拉框
function getIceYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "EDD1E200-7218-46F3-BE5A-7657AC5DB09B" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//获取冰区发布图年份下拉框
function getIceYear_EX(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "9447C633-8C80-4954-9D3A-E26537291931" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
function getIceYear_Ex_Standard(SelectName, Standard) {
    $.ajax({
        type: "post",
        data: { code: "67984F01-8171-49AE-AD36-81B8A1B91C7C", standard: Standard },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}




function getStringLastIceYearByStandard(Standard) {
  
    var year;
    $.ajax({
        type: "post",
        data: { code: "9AF60C07-42D6-4BB5-8341-9400836D92E9", standard: Standard },
        url: "ActionBase.do",
        async: false,
        success: function (data) {
            if (data != null && data > 0)
                year = data;
            else
                year = 2013;
        }
    })
    return year;

}

function getStringIceReturnPeriodByLastYearStandard(Standard) {   
    var icetype;
    $.ajax({
        type: "post",
        data: { code: "8294BA2E-3C82-4877-98A6-243ADB37DC13", standard: Standard },
        url: "ActionBase.do",
        async: false,
        success: function (data) {
            if (data != null && data > 0)
                icetype = data;
            else
                icetype = 1;
        }
    })
    return icetype;
   
}





/*获取覆冰故障统计年份*/
function getIceTrippedDamagedYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "9F63BBB4-E4A4-48B9-84E0-3A2018FB96EC" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
/*获取覆冰历史故障统计年份*/
function getIceHistoryYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "BF312547-CD69-49D6-BF0C-875A41ECEA9D" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
/*获取历史观冰点记录统计年份*/
function getSpotIceDataHistoryYear(SelectName,type) {
    $.ajax({
        type: "post",
        data: { code: "5B89575D-02E5-40A3-B7B8-B18A29C6F57F", IceSpotType: type },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}



function getReturnPeriod_Ex_YearStandard(SelectName, Standard, Year) {
     $.ajax({
        type: "post",
        data: { code: "BCF7D31C-5181-43E4-BAE3-2F8AFDE8F13F", standard: Standard, year: Year },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

function 
getReturnPeriod_Ex_LastYearStandard(SelectName, Standard) {
    $.ajax({   
        type: "post",
        data: { code: "D0E33279-930A-45F2-93AA-F807A23C2176", standard: Standard },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}


//读取发布的“冰、舞、雷、污”发布修正后的图时间并集
function getAllYear(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "CBF7E409-B3A4-4C16-B3D0-A9394E6BFD4B" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//特殊气象类型
function getDisaType(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "D5FDB3E1-2C78-4BA1-8CF0-E9EE88E01A65" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//特殊气象标题信息
function getDisaInfoTitle(SelectName, BeginTime, EndTime, DisaTypeID) {
    $.ajax({
        type: "post",
        data: { code: "410CCE82-4205-4DE8-8880-72CB33F910DA", BeginTime: BeginTime, EndTime: EndTime, DisaTypeID: DisaTypeID },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}
//人工覆冰观测点名称
function getSpotIceName(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "81C49A04-EF78-4EE6-9648-DC5B7B174D4C" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}

//用户列表
function getUsers(SelectName) {
    $.ajax({
        type: "post",
        data: { code: "EC77AECC-C633-4219-B6EC-FFB66C449C84" },
        url: "ActionBase.do",
        success: function (data) {
            $("#" + SelectName).html(data);
        }
    });
}







