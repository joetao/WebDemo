var WmsServer, GwcServer;
function MapOptions(WmsSvr) {
    WmsServer = WmsSvr;
    var bounds = new OpenLayers.Bounds(
       103.60022099967614, 24.621376000127043,
       109.59095800005555, 29.224294000067214
    );
    var options = {
        maxExtent: bounds,
        maxResolution: 0.0234013164077321,
        minScale: 10000000,
        maxScale: 1000,
        projection: "EPSG:4326",
        units: 'degrees'
    };
    OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;
    OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;
    return options;
}

//mapOptions扩展
function MapOptions_Ex(WmsSvr, GwcSvr) {
    WmsServer = WmsSvr;
    GwcServer = GwcSvr;
    var bounds = new OpenLayers.Bounds(
       103.60022099967614, 24.621376000127043,
       109.59095800005555, 29.224294000067214
    );
    var options = {
        maxExtent: bounds,
        maxResolution: 0.0234013164077321,
        resolutions: [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4, 8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5],
        maxExtent: new OpenLayers.Bounds(-180.0, -90.0, 180.0, 90.0),
        minScale: 10000000,
        maxScale: 1000,
        projection: "EPSG:4326",
        units: 'degrees'
    };
    OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;
    OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;
    return options;
}

function OverviewMap() {
    var O_Map = new OpenLayers.Layer.WMS(
        "OverviewMap", WmsServer,
        {
            layers: "GZ_BASE_1"
        }
    );
    return O_Map;
}

function XZQ(isBase, isSelect) {
    var streets_all = new OpenLayers.Layer.WMS(
        "贵州行政区图", WmsServer,
        {
            layers: "GZ_BASE_1",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets_all;
}

function XZQ_WZT(isBase, isSelect) {
    var streets = new OpenLayers.Layer.WMS(
        "贵州行政区图(完整图)", WmsServer,
        {
            layers: "GZ_BASE",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets;

}

function XZQ_DWQT(isBase, isSelect) {
    var streets2 = new OpenLayers.Layer.WMS(
        "贵州行政区+电网全图", WmsServer,
        {
            layers: "GZ_BASE_ALL",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets2;
}
///可融冰线路
function ICE_THAW_POWERLINE(isBase, isSelect) {
    var streets2 = new OpenLayers.Layer.WMS(
        "可融冰线路", WmsServer,
        {
            layers: "GZ_ICE_THAW_POWER",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets2;
}
///不融冰线路
function ICE_NOT_THAW_POWERLINE(isBase, isSelect) {
    var streets2 = new OpenLayers.Layer.WMS(
        "不可融冰线路", WmsServer,
        {
            layers: "GZ_ICE_NOT_THAW_POWER",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets2;
}
///发电厂
function POWERSTATION_ALL(isBase, isSelect) {
    var streets2 = new OpenLayers.Layer.WMS(
        "发电厂", WmsServer,
        {
            layers: "GZ_POWERSTATION_ALL",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return streets2;
}





//// 大中城市
function BIGCITY(isBase, isSelect) {
    var bigcity = new OpenLayers.Layer.WMS(
        "大中城市", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:bigCity',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return bigcity;
}

//// 铁路
function RAILWAY(isBase, isSelect) {
    var railway = new OpenLayers.Layer.WMS(
        "铁路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:railway',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return railway;
}

//// 高速公路
function HIGHWAY(isBase, isSelect) {
    var highway = new OpenLayers.Layer.WMS(
        "高速公路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:roadhig',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return highway;
}


//// 国道
function MAINROAD_G(isBase, isSelect) {
    var mainroad = new OpenLayers.Layer.WMS(
        "国道", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mRoad_G',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mainroad;
}
//// 省道
function MAINROAD_S(isBase, isSelect) {
    var mainroad = new OpenLayers.Layer.WMS(
        "省道", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mRoad_S',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mainroad;
}

//// 县级城市
function SMALLCITY(isBase, isSelect) {
    var smallcity = new OpenLayers.Layer.WMS(
        "县级城市", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:xCity ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return smallcity;
}

//主要河流
function MAINRIVER(isBase, isSelect) {
    var mainriver = new OpenLayers.Layer.WMS(
        "河流", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mainRiver ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mainriver;
}

//主要河流—湖泊
function MAINRIVER_HP(isBase, isSelect) {
    var mainriver_hp = new OpenLayers.Layer.WMS(
        "湖泊", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mainRiver_hupo ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mainriver_hp;
}

//主要河流—水库
function MAINRIVER_SK(isBase, isSelect) {
    var mainriver_sk = new OpenLayers.Layer.WMS(
        "水库", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mainRiver_sk ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mainriver_sk;
}

//山川
function MOUNTAIN(isBase, isSelect) {
    var mountain = new OpenLayers.Layer.WMS(
        "山川", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_shp:mountain_G ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return mountain;
}

function POWERMAP_ALL(isBase, isSelect) {
    var powerMap = new OpenLayers.Layer.WMS(
        "全部电网图层", WmsServer,
        {
            layers: "GZ_ICE_POWER",
            transparent: true
        },
        {
            visibility: isSelect,
            isBaseLayer: isBase,
            singleTile: false
        }
    );
    return powerMap;
}

// 1000kV线路
function POWERLINE_1000KV(isBase, isSelect) {
    var layer1 = new OpenLayers.Layer.WMS(
        "1000kV线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_1000kv',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer1;
}
//// 所有线路 根据线路id过滤
function POWERLINE_ALL_BYLINEID(isBase, isSelect, filter) {
    var layer2 = new OpenLayers.Layer.WMS(
        "输电线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_all',
            cql_filter: 'id eq ' + filter,
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer2;
}

//// 模拟（新建）所有线路 根据线路id过滤
function POWERLINE_ALL_V_BYLINEID(isBase, isSelect, filter) {
    var layer2 = new OpenLayers.Layer.WMS(
        "新建输电线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_v_all',
            cql_filter: 'id eq ' + filter,
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer2;
}

//// 500(330)kV线路
function POWERLINE_500KV_AC(isBase, isSelect) {
    var layer2 = new OpenLayers.Layer.WMS(
        "500kV线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_500kv_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer2;
}


//// 500(330)kV线路
function POWERLINE_500KV_DC(isBase, isSelect) {
    var layer3 = new OpenLayers.Layer.WMS(
        "500(800)kV直流线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_500kv_dc ',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer3;
}


//// 220kV线路
function POWERLINE_220KV_AC(isBase, isSelect) {
    var layer4 = new OpenLayers.Layer.WMS(
        "220kV线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_220kv_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer4;
}
//// 冰情上报观测点
function ICE_UPREPORT_POINT(isBase, isSelect) {
    var layer4 = new OpenLayers.Layer.WMS(
        "冰情上报观测点", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:ice_upreport_point_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase,
               queryVisible: true
        }
    );
    return layer4;
}

//// 110(66)kV线路
function POWERLINE_110KV_AC(isBase, isSelect) {
    var layer5 = new OpenLayers.Layer.WMS(
        "110kV线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_110kv_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer5;
}


//// 地线融冰线路
function POWERLINE_THAW_EARTHWIRE(isBase, isSelect) {
    var layer5 = new OpenLayers.Layer.WMS(
        "地线融冰线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_thaw_earthwire',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer5;
}
//// 串接线固定式直流融冰
function POWERLINE_THAW_FIXEDCASCADE(isBase, isSelect) {
    var layer5 = new OpenLayers.Layer.WMS(
        "串接线固定式直流融冰", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_thaw_fixedcascade',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer5;
}
////直接线固定式直流融冰
function POWERLINE_THAW_FIXEDDIRECT(isBase, isSelect) {
    var layer5 = new OpenLayers.Layer.WMS(
        "直接线固定式直流融冰", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_thaw_fixeddirect',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer5;
}
//// 方式融冰线路
function POWERLINE_THAW_PATTERN(isBase, isSelect) {
    var layer5 = new OpenLayers.Layer.WMS(
        "方式融冰线路", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:power_line_thaw_pattern',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer5;
}



// 1000(750)kV变电站
function SUBSTATION_1000KV_AC(isBase, isSelect) {
    var layer6 = new OpenLayers.Layer.WMS(
        "1000(750)kV变电站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:conv_stat_1000kv_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer6;
}


//// ±800(500)kV换流站 
function CONVERTSTATION_500KV(isBase, isSelect) {
    var layer7 = new OpenLayers.Layer.WMS(
        "±(500)kV换流站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:conv_stat_dc',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer7;
}


//// 500(330)kV变电站
function SUBSTATION_500KV_AC(isBase, isSelect) {
    var layer8 = new OpenLayers.Layer.WMS(
        "500kV变电站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:conv_stat_500_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer8;
}


//// 220kV变电站
function SUBSTATION_220KV_AC(isBase, isSelect) {
    var layer9 = new OpenLayers.Layer.WMS(
        "220kV变电站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:conv_stat_220_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer9;
}


//// 110kV变电站
function SUBSTATION_110KV_AC(isBase, isSelect) {
    var layer99 = new OpenLayers.Layer.WMS(
        "110kV变电站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:conv_stat_110_ac',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer99;
}

//// 110kV变电站_预警
function SUBSTATION_110KV_WARN(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "110kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_warn_110',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}

//// 220kV变电站_预警
function SUBSTATION_220KV_WARN(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "220kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_warn_220',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}


//// 500kV变电站_预警
function SUBSTATION_500KV_WARN(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "500kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_warn_500',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}

//// 110kV变电站
function SUBSTATION_110KV(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "110kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_110',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}

//// 220kV变电站
function SUBSTATION_220KV(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "220kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_220',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}


//// 500kV变电站
function SUBSTATION_500KV(isBase, isSelect, filter) {
    var layer = new OpenLayers.Layer.WMS(
        "500kV变电站", WmsServer,
        {
            layers: 'gz_pg:substation_500',
            cql_filter: filter == null ? 'unit_id eq ' + filter : '1=1',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer;
}

//// 历史污闪点
function HIS_FAULT(isBase, isSelect) {
    var layer10 = new OpenLayers.Layer.WMS(
        "历史污闪点", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:his_fault_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer10;
}

//// 污染源
function POL_SRC(isBase, isSelect) {
    var layer11 = new OpenLayers.Layer.WMS(
        "污染源", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:pol_src_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer11;
}


//// 水电厂
function POWERSTATION_WATER(isBase, isSelect) {
    var layer12 = new OpenLayers.Layer.WMS(
        "水电厂", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:powerstation_water',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer12;
}


//// 火电厂
function POWERSTATION_FIRE(isBase, isSelect) {
    var layer13 = new OpenLayers.Layer.WMS(
        "火电厂", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:powerstation_fire',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer13;
}
////风电厂
function POWERSTATION_WIND(isBase, isSelect) {
    var layer13 = new OpenLayers.Layer.WMS(
        "风电厂", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:powerstation_wind',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer13;
}
////核电厂
function POWERSTATION_NUCLEAR(isBase, isSelect) {
    var layer13 = new OpenLayers.Layer.WMS(
        "核电厂", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:powerstation_nuclear',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer13;
}
//// 抽水蓄能厂
function POWERSTATION_PUMPSTORAGE(isBase, isSelect) {
    var layer13 = new OpenLayers.Layer.WMS(
        "抽水蓄能厂", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_powerstation_pumpstorage',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer13;
}

//// 融冰装置
function ICE_THAW_EQUIPMENT(isBase, isSelect) {
    var layer13 = new OpenLayers.Layer.WMS(
        "融冰装置", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:ice_thaw_equipment_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer13;
}

////覆冰监测点
function ICE_MONITOR_POINT(isBase, isSelect) {
    var layer15 = new OpenLayers.Layer.WMS(
        "覆冰监测点", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:ice_monitor_point_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase

        }
    );
    return layer15;
}

////开关站
function OPENCLOSE_STATION(isBase, isSelect) {
    var layer15 = new OpenLayers.Layer.WMS(
        "开关站", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:openclose_station_v',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer15;
}



//// 杆塔
function TOWER(isBase, isSelect) {
    var layer14 = new OpenLayers.Layer.WMS(
        "杆塔", WmsServer,
        {
            height: '430',
            width: '800',
            layers: 'gz_pg:tower',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: 'true',
            transparent: 'true'
        },
        {
            visibility: isSelect,
            singleTile: false,
            'isBaseLayer': isBase
        }
    );
    return layer14;
}

// 杆塔 线路id    
function TOWERBYLINEID(isBase, isSelect, filter) {

    var vectors = new OpenLayers.Layer.WMS(
            "杆塔", WmsServer,
            {
                layers: 'gz_pg:tower',
                cql_filter: 'line_id eq ' + filter,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}

// 模拟（新建）杆塔 线路id    
function TOWER_V_BYLINEID(isBase, isSelect, filter) {
    var vectors = new OpenLayers.Layer.WMS(
            "模拟杆塔", WmsServer,
            {
                layers: 'gz_pg:tower_v',
                cql_filter: 'line_id eq ' + filter,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}




function ICE_AREA_SELECT(isBase, isSelect, year, type, standard) {   
    
    var ice_type;
    var layer;
    var layerName;
    var ice_year
    var ice_standard;
    var layertitle;
    if (standard == "0") {
        ice_standard = "gz";     
    }
    else {
       ice_standard="nw"
   }
   if (type == "2") {
       ice_type = "50";
   }
   else if (type == "3") {
       ice_type = "100";
   }
   else {
       ice_type = "30";
   }
   layerName = 'gz_pg:ice_area_' + ice_type + '_' + year + '_' + ice_standard;
   layertitle = year + "年冰区" + ice_type + "年分布图";
   layer = new OpenLayers.Layer.WMS(
            layertitle, GwcServer,
            {
                layers: layerName,             
                format: 'image/jpeg',
                transparent: 'true'
            },
            {
                tileSize: new OpenLayers.Size(256, 256),
                isBaseLayer: isBase,
                visibility: isSelect
            });
    return layer;
}




// 冰区实时分布图   
function ICE_ONLINE_AREA(isBase, isSelect) {
    var layer = new OpenLayers.Layer.WMS(
            "冰区实时分布图", WmsServer,
            {
                layers: 'gz_pg:ice_online_v',
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
//凝冻趋势分布图
function ICE_FREEZING_AREA(isBase, isSelect, hourflag) {
    var hourflagname;
    if (hourflag == 24)
        hourflagname = "24小时预报";
    if (hourflag == 72)
        hourflagname = "72小时预报";
    if (hourflag == 48)
        hourflagname = "48小时预报";
    var layer = new OpenLayers.Layer.WMS(
             hourflagname + "凝冻趋势图", WmsServer,
            {
                layers: 'gz_pg:ice_freezing_area_v',
                cql_filter: 'hourflag eq ' + hourflag,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
//凝冻趋势分布图
function ICE_FREEZING_AREA_SELECT(isBase, isSelect, title, hourflag, date) {
    var layer = new OpenLayers.Layer.WMS(
             title, WmsServer,
            {
                layers: 'gz_pg:ice_freezing_area_all',
                cql_filter: 'create_dt=\'' + date + '\' and hourflag= ' + hourflag,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}

/*凝冻趋势*/
function Freezing_Area_ByCondition(isBase, isSelect, title, date, hourflag, level) {
    var vectors = new OpenLayers.Layer.WMS(
            title, WmsServer,
            {

                layers: 'gz_pg:ice_freezing_area_all',
                cql_filter: 'create_dt=\'' + date + '\' and hourflag= ' + hourflag + '  and level in (' + level + ')',
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}

// 舞动图   
function WAVE_AREA(isBase, isSelect, year) {
    var layer = new OpenLayers.Layer.WMS(
            year + "年舞动图", WmsServer,
            {
                layers: 'gz_pg:wave_area',
                cql_filter: 'at eq ' + year,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}

// 风区图   
function WIND_AREA(isBase, isSelect, year) {
    var layer = new OpenLayers.Layer.WMS(
            year + "年风区图", WmsServer,
            {
                layers: 'gz_pg:wind_area',
                cql_filter: 'at eq ' + year,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}

//// 所有线路 根据线路id过滤
function POWERLINE_ALL_BYLINEID(isBase, isSelect, filter, title) {
    var layer2 = new OpenLayers.Layer.WMS(
       title, WmsServer,
        {
            layers: 'gz_pg:power_line_all',
            cql_filter: 'id eq ' + filter,
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer2;
}


// 杆塔 线路id    
function TOWER_BYLINEID(isBase, isSelect, filter, title) {
    var vectors = new OpenLayers.Layer.WMS(
            title, WmsServer,
            {
                layers: 'gz_pg:tower',
                cql_filter: 'line_id eq ' + filter,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}

//// 所有线路 根据线路id过滤
function POWERLINE_ALL_V_BYLINEID(isBase, isSelect, filter, title) {
    var layer2 = new OpenLayers.Layer.WMS(
       title, WmsServer,
        {
            layers: 'gz_pg:power_line_v_all',
            cql_filter: 'id eq ' + filter,
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer2;
}


// 杆塔 线路id    
function TOWER_V_BYLINEID(isBase, isSelect, filter, title) {
    var vectors = new OpenLayers.Layer.WMS(
            title, WmsServer,
            {
                layers: 'gz_pg:tower_v',
                cql_filter: 'line_id eq ' + filter,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}

function GOOGLE_WXT() {
    var ghyb = new OpenLayers.Layer.Google(
        "Google 卫星图-中文",
        { type: G_HYBRID_MAP, numZoomLevels: 20 }
    );
    return ghyb;
}

function GOOGLE_PMDT() {
    var gmap = new OpenLayers.Layer.Google(
        "Google 平面地图", // the default
        {numZoomLevels: 20 }
    );
    return gmap;
}

function GOOGLE_DXT() {
    var gphy = new OpenLayers.Layer.Google(
        "Google 地形图",
        { type: G_PHYSICAL_MAP }
    );
    return gphy;
}

function VirtualEarth() {
    var velayer = new OpenLayers.Layer.VirtualEarth(
        "微软虚拟地球",
        { minZoomLevel: 4, maxZoomLevel: 6, 'type': VEMapStyle.Aerial });
    return velayer;
}
var map;
var measureControls;
function MapToolsEventSetting(map, measureCtr) {
    map = map;
    measureControls = measureCtr;
    sketchSymbolizers = {
        "Point": {
            pointRadius: 4,
            graphicName: "square",
            fillColor: "white",
            fillOpacity: 1,
            strokeWidth: 1,
            strokeOpacity: 1,
            strokeColor: "#333333"
        },
        "Line": {
            strokeWidth: 3,
            strokeOpacity: 1,
            strokeColor: "#666666"
        },
        "Polygon": {
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeColor: "#666666",
            fillColor: "white",
            fillOpacity: 0.3
        }
    };
    style = new OpenLayers.Style();
    style.addRules([
        new OpenLayers.Rule({ symbolizer: sketchSymbolizers })
    ]);

    measureControls = {
        line: new OpenLayers.Control.Measure(
            OpenLayers.Handler.Path, {
                handlerOptions: {
                    persist: true,
                    geodesic: true

                }
            }
        ),
        polygon: new OpenLayers.Control.Measure(
            OpenLayers.Handler.Polygon, {
                handlerOptions: {
                    persist: true,
                    geodesic: true

                }
            }
        )
    };
    var control;
    for (var key in measureControls) {
        control = measureControls[key];
        control.events.on({
            "measure": handleMeasurements,
            "measurepartial": handleMeasurements
        });
        map.addControl(control);
    }
}


function handleMeasurements(event) {
    var geometry = event.geometry;
    var units = event.units;
    var order = event.order;
    var measure = event.measure;
    var element = document.getElementById('output');
    var out = "";
    if (order == 1) {
        out += "总长: " + measure.toFixed(3) + " " + units;
    } else {
        out += "总面积: " + measure.toFixed(3) + " " + units + "<sup>2</" + "sup>";
    }
    element.innerHTML = out;
}

function displayLayer() {
    toggleControl("none");
    for (var i = 0; i < map.layers.length; i++) {
        if (map.layers[i].isBaseLayer == false) {
            map.layers[i].setVisibility(false);
        }
    }
}

function reload() {
    toggleControl("none");
//    for (var i = 0; i < map.layers.length; i++) {
//        if (i == 0) {
//            map.layers[i].setVisibility(true);
//        }
//        else {
//            map.layers[i].setVisibility(false);
//        }
//    }
    // map.layers[map.layers.length - 1].setVisibility(true);
    //    map.zoomTo(1);
    map.zoomToExtent(new OpenLayers.Bounds(103.60022099967614, 24.621376000127043, 109.59095800005555, 29.224294000067214));
}

function toggleControl(element) {
    for (key in measureControls) {
        var control = measureControls[key];
        if (element == key) {
            control.activate();
        } else {
            control.deactivate();
        }
    }
    if (element == "none") {
        var element = document.getElementById('output');
        element.innerHTML = "";
    }
}


function addTools(map, tool_arr) {
    var arr = new Array();
    arr = tool_arr;

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "Navigation":
                map.addControl(new OpenLayers.Control.Navigation());
                break;
            case "NavigationHistory":
                var panel = new OpenLayers.Control.Panel({ div: document.getElementById("panel") });
                var nav = new OpenLayers.Control.NavigationHistory();
                map.addControl(nav);
                panel.addControls([nav.next, nav.previous]);
                map.addControl(panel);
                break;
            case "PanZoomBar":
                map.addControl(new OpenLayers.Control.PanZoomBar({ position: new OpenLayers.Pixel(2, 15) }));
                break;
            case "Scale":
                map.addControl(new OpenLayers.Control.Scale());
                break;
            case "ScaleLine":
                map.addControl(new OpenLayers.Control.ScaleLine());
                break;
            case "MousePosition":
                map.addControl(new OpenLayers.Control.MousePosition());
                break;
            case "LayerSwitcher":
                map.addControl(new OpenLayers.Control.LayerSwitcher());
                break;
            case "OverviewMap":
                map.addControl(new OpenLayers.Control.OverviewMap({ layers: [OverviewMap()] }));
                break;
            case "NavToolbar":
                var panelNTB = new OpenLayers.Control.NavToolbar({ 'div': OpenLayers.Util.getElement('panelNTB') });
                map.addControl(panelNTB);
                break;
        }
    }
}


var currentPopup;
var stylees, popupClass, popupContentHTML, samplePopupContentsHTML;
popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {
    'autoSize': true
});

//显示弹出窗口
function addMarker(currentPopup, map, markers, stylees, popupClass, popupContentHTML, closeBox, overflow) {
    var feature = new OpenLayers.Feature(markers, stylees);
    feature.closeBox = closeBox;
    feature.popupClass = popupClass;
    feature.data.popupContentHTML = popupContentHTML;
    feature.data.overflow = (overflow) ? "auto" : "hidden";
    var marker = feature.createMarker();
    var markerClick = function (evt) {
        if (this.popup == null) {

            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        } else {

            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(evt);
    };
    marker.events.register("dblclick", feature, markerClick);
    markers.addMarker(marker);
}



function addMarkerEx2(currentPopup, map, markers, stylees, popupClass, popupContentHTML, closeBox, overflow) {
    var feature = new OpenLayers.Feature(markers, stylees);
    feature.closeBox = closeBox;
    feature.popupClass = popupClass;
    feature.data.popupContentHTML = popupContentHTML;
    feature.data.overflow = (overflow) ? "auto" : "hidden";
    var marker = feature.createMarker();
    var markerClick = function (evt) {
        if (this.popup == null) {
            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        } else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(evt);
    };
    marker.events.register("hove", feature, markerClick);
    markers.addMarker(marker);
}

function addMarkerEx(map, markers, stylees, popupClass, popupContentHTML, closeBox, overflow) {
    var feature = new OpenLayers.Feature(markers, stylees);
    feature.closeBox = closeBox;
    feature.popupClass = popupClass;
    feature.data.popupContentHTML = popupContentHTML;
    feature.data.overflow = (overflow) ? "auto" : "hidden";
    var marker = feature.createMarker();
    var markerClick = function (evt) {
        if (currentPopup != null)
            currentPopup.hide();
        if (this.popup == null) {
            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        } else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(evt);
    };

    if (currentPopup != null)
        currentPopup.hide();

    if (feature.popup == null) {
        feature.popup = feature.createPopup(feature.closeBox);
        map.addPopup(feature.popup);
        feature.popup.show();
        currentPopup = feature.popup;
    }
    markers.events.register("dblclick", feature, markerClick);
    markers.addMarker(marker);
}

function convertPoint2LonLat(origStr) {
    var pointStr = origStr.replace(/POINT\(/, '');
    pointStr = pointStr.replace(/\)/, '');
    return pointStr.split(' ');
}

function addFeaturesAndEvent(map, vectors) {
    var point = null;
    $("input[id$='hidGeom']").each(function () {
        point = $(this).val();
        var features = new OpenLayers.Format.WKT(map.baseLayer.projection).read(point);
        vectors.addFeatures(features);
    });
    if (point != null && point != "") {
        var arr = convertPoint2LonLat(point);
    }

    $("a[id$='lnkName']").click(function () {
        var pointID = $(this).attr("id").replace("lnkName", "hidGeom");
        var point = $("#" + pointID).val();
        var features = new OpenLayers.Format.WKT(map.baseLayer.projection).read(point);

        if (features) {
            if (features.constructor != Array) {
                features = [features];
            }
            vectors.destroyFeatures();
            vectors.addFeatures(features);
            var arr = convertPoint2LonLat(point);
            map.setCenter(new OpenLayers.LonLat(arr[0], arr[1]), 9);
        } else {
            map.zoomTo(1);
        }
    });
}


function AddDataGridPointToMap(map, data) {
    for (var i = 0; i < data.rows.length; i++) {
        var point = data.rows[i].geom;
        if (point != null || point != "") {
            var features = new OpenLayers.Format.WKT(map.baseLayer.projection).read(point);
            vectors.addFeatures(features);
        }

    }
}

function ZoomToPoint(map, point) {
    var features = new OpenLayers.Format.WKT(map.baseLayer.projection).read(point);
    if (features) {
        if (features.constructor != Array) {
            features = [features];
        }
        vectors.destroyFeatures();
        vectors.addFeatures(features);
        var arr = convertPoint2LonLat(point);
        map.setCenter(new OpenLayers.LonLat(arr[0], arr[1]), 10);
    } else {
        map.zoomTo(1);
    }
}

function GetPointFromMapToControl_EventRegister(map, Long_CName, Lat_CName) {
    map.events.register('click', map, function (e) {
        var lonlat = map.getLonLatFromViewPortPx(e.xy);
        $('#' + Long_CName).val(lonlat.lon);
        $('#' + Lat_CName).val(lonlat.lat);
        OpenLayers.Event.stop(e);
    });
}



function Pol_Level_Graph_Title(isBase, isSelect, year, lineid, title) {
    var layer = new OpenLayers.Layer.WMS(
            title, WmsServer,
            {
                layers: 'gz_pg:pol_level_graph',
                cql_filter: 'year = ' + year + ' and lineid= ' + lineid,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
function Ice_Level_Graph(isBase, isSelect, year, lineid, tabtype) {
    var iceType;
    if (tabtype == "2")
        iceType = "50年";
    else if (tabtype == "3")
        iceType = "100年";
    else
        iceType = "30年";
    var layer = new OpenLayers.Layer.WMS(
            year + "年冰区等级区段" + iceType + "重现期" + "分布图", WmsServer,
            {
                layers: 'gz_pg:ice_level_graph',
                cql_filter: 'year = ' + year + ' and lineid= ' + lineid + ' and tabtype=' + tabtype,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
function Ice_Level_Graph_Title(isBase, isSelect, year, lineid, tabtype, title) {
    var layer = new OpenLayers.Layer.WMS(
          title, WmsServer,
            {
                layers: 'gz_pg:ice_level_graph',
                cql_filter: 'year = ' + year + ' and lineid= ' + lineid + ' and tabtype=' + tabtype,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
function Wave_Level_Graph(isBase, isSelect, year, lineid) {
    var layer = new OpenLayers.Layer.WMS(
            year + "年舞区等级区段" + "分布图", WmsServer,
            {
                layers: 'gz_pg:wave_level_graph',
                cql_filter: 'year = ' + year + ' and lineid= ' + lineid,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}
function Wave_Level_Graph_Title(isBase, isSelect, year, lineid, title) {
    var layer = new OpenLayers.Layer.WMS(
       title, WmsServer,
            {
                layers: 'gz_pg:wave_level_graph',
                cql_filter: 'year = ' + year + ' and lineid= ' + lineid,
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return layer;
}

/*定位到线路中心杆塔*/
function zoomToPowerLineCenter(line_id) {   
    $.ajax({
      
        type: "post",
        data: { code: "1E84DBA5-F7D3-480A-8805-DEC7EE006D57", lineid: line_id },
        url: "ActionBase.do",
        success: function (data) {
            if (data == "") map.zoomTo(1);       
            var arr = eval(data);
            if (arr[0] != "" && arr[1] != "") {             
                map.setCenter(new OpenLayers.LonLat(arr[0], arr[1]), 12);
            }
        }
    });
}
/*定位到新建模拟线路中心杆塔*/
function zoomToVPowerLineCenter(line_id) {
    $.ajax({

        type: "post",
        data: { code: "1C5BBCE3-3A2A-4538-979F-4F28F9A4C1FE", lineid: line_id },
        url: "ActionBase.do",
        success: function (data) {
            if (data == "") map.zoomTo(1);
            var arr = eval(data);
            if (arr[0] != "" && arr[1] != "") {
                map.setCenter(new OpenLayers.LonLat(arr[0], arr[1]), 12);
            }
        }
    });
}



/*影响线路集合图层*/
function POWERLINE_INLINEIDS(isBase, isSelect, filter, title) {
    var layer2 = new OpenLayers.Layer.WMS(
       title, WmsServer,
        {
            layers: 'gz_pg:power_line_byid',
            cql_filter: 'line_id in (' + filter + ')',
            styles: '',
            srs: 'EPSG:4326',
            format: 'image/png',
            tiled: true,
            transparent: true
        },
        {
            visibility: isSelect,
            singleTile: false,
            isBaseLayer: isBase
        }
    );
    return layer2;
}
/*影响杆塔集合图层*/
function TOWER_INLINEIDS(isBase, isSelect, filter, title) {
    var vectors = new OpenLayers.Layer.WMS(
            title, WmsServer,
            {
                layers: 'gz_pg:tower',
                cql_filter: 'line_id in (' + filter + ')',
                styles: '',
                srs: 'EPSG:4326',
                format: 'image/png',
                tiled: 'true',
                transparent: 'true'
            },
            {
                visibility: isSelect,
                singleTile: false,
                isBaseLayer: isBase
            }
        );
    return vectors;
}




 