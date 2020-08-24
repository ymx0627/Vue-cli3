import ol from 'ol'
let projection = ol.proj.get('EPSG:4326')
let projectionExtent = projection.getExtent()
let res = [
    1.40625,
    0.703125,
    0.3515625,
    0.17578125,
    0.087890625,
    0.0439453125,
    0.02197265625,
    0.010986328125,
    0.0054931640625,
    0.00274658203125,
    0.001373291015625,
    0.0006866455078125,
    0.00034332275390625,
    0.000171661376953125,
    0.0000858306884765625,
    0.00004291534423828125,
    0.000021457672119140625,
    0.000010728836059570312,
    0.000005364418029785156,
    0.000002682209014892578,
    0.000001341104507446289
]
let requestParams = {
    srsName: 'EPSG:4490',
    featureNS: 'https://gis.dcyun.com:48164/geoserver/QiantangjiangBasin',
    featurePrefix: 'QiantangjiangBasin',
    featureTypes: ['city'],
    outputFormat: 'application/json',
    filter: ol.format.filter.like('admin_div_code', '33*'),
}
let mapConfig = {

    viewOption: {
        projection: 'EPSG:4326', // 使用这个坐标系
        center: [120.0929, 29.1722], // 浙江
        zoom: 7.6,
        minZoom: 7,
        maxZoom: 20,
        extent: [110, 20, 130, 35]
    },
    projectionExtent: projectionExtent,
    res: res,
    mapStyle: "amap://styles/c3990e6b74ee98fb63c0fc5490329036",
    matrixIds: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
    ],
    controlOption: {
        attribution: false,
        zoom: false,
        rotate: false
    },
    renderOption: ['canvas', 'webgl'],
    requestParams: requestParams,
    queryUrl: requestParams.featureNS + "/wfs",
    coverStyle: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0,0,0, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2
        })
    }),
    boundStyle: [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: "rgba(255, 255, 255, 1)",
                width: 2,
            }),
            fill: new ol.style.Fill({
                color: "rgba(77,162,255, 0.8)",
            }),
            text: new ol.style.Text({
                // font: "bold 11px Arial", //'bold 16px "times", "Arial Unicode MS", "sans-serif"',
                font: "11px Arial", //'bold 16px "times", "Arial Unicode MS", "sans-serif"',
                fill: new ol.style.Fill({
                    color: "black",
                }),
                // overflow:true,
                // backgroundFill: new ol.style.Fill({
                //   color: "rgba(121,110,110, 1)"
                // }),
                offsetY: 5
            })
        }),
        new ol.style.Style({
            text: new ol.style.Text({
                font: "16px Arial", //'bold 16px "times", "Arial Unicode MS", "sans-serif"',
                fill: new ol.style.Fill({
                    color: "black",
                }),
                // overflow:true,
                backgroundFill: new ol.style.Fill({
                    color: 'rgba(230,230,230, 0.8)',
                }),
                backgroundStroke: new ol.style.Stroke({
                    color: 'rgba(230,230,230, 0.8)',
                    width: 3,
                }),
                padding: [3, 2, 3, 2],
                offsetY: -20
            })
        }),
    ],
    basinBoundStyle: new ol.style.Style({
        stroke: new ol.style.Stroke({
            // color: "rgba(141,157,185, 1)",
            color: "rgba(255,0,0, 1)",
            width: 4,
            lineCap: "square",
            lineDash: [6, 10] //or other combinations[length,interval]
        }),
        // fill: new ol.style.Fill({
        //   color: "rgba(0,0,255, 0)"
        // })
    }),
    qgjVecOption: {
        name: '钱管局矢量1-19级',
        url: 'https://sldtptgis.zjwater.com/arcgis/rest/services/basemap/WYX1029/MapServer/WMTS',
        layer: 'basemap_WYX1029',
        style: 'default',
        matrixSet: 'default028mm',
        format: 'image/png'
    },
    qgjImgOption: {
        name: '钱管局影像1-19级',
        url: 'https://sldtptgis.zjwater.com/arcgis/rest/services/basemap/ZJRasterMap/MapServer/WMTS',
        layer: 'basemap_ZJRasterMap',
        style: 'default',
        matrixSet: 'default028mm',
        format: 'image/png',
        wrapX: true
    },
    qgjTerOption: {
        name: '钱管局影像1-19级',
        url: 'https://sldtptgis.zjwater.com/arcgis/rest/services/basemap/QTJMap/MapServer/WMTS',
        layer: 'basemap_QTJMap',
        style: 'default',
        matrixSet: 'default028mm',
        format: 'image/png',
        wrapX: true
    },
    chinaVecOption: {
        name: '中国矢量1-19级',
        url: 'http://t{0-6}.tianditu.gov.cn/vec_c/wmts?tk=e5abca32c01cf5fa9a82cd58d677fddd',
        layer: 'vec',
        style: 'default',
        matrixSet: 'c',
        format: 'tiles'
    },
    chinaImgOption: {
        name: '中国影像1-19级',
        url: 'http://t{0-6}.tianditu.gov.cn/img_c/wmts?tk=e5abca32c01cf5fa9a82cd58d677fddd',
        layer: 'img',
        style: 'default',
        matrixSet: 'c',
        format: 'tiles'
    },
    chinaImgTextOption: {
        name: '中国影像1-19级',
        url: 'http://t{0-6}.tianditu.gov.cn/cia_c/wmts?tk=e5abca32c01cf5fa9a82cd58d677fddd',
        layer: 'cia',
        style: 'default',
        matrixSet: 'c',
        format: 'tiles'
    },
    chinaTerOption: {
        name: '中国地形1-19级',
        url: 'http://t{0-6}.tianditu.gov.cn/ter_c/wmts?tk=e5abca32c01cf5fa9a82cd58d677fddd',
        layer: 'ter',
        style: 'default',
        matrixSet: 'c',
        format: 'tiles'
    }
}

export default mapConfig