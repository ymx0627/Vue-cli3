export default [{
    path: '/',
    component: resolve => require(['@/components/layout/Home.vue'], resolve),
    meta: {
        title: '地图'
    },
    children: [{
            path: '/olMap',
            component: resolve => require(['./olMap.vue'], resolve),
            meta: {
                title: 'openlayers'
            }
        },
        {
            path: '/leafletMap',
            component: resolve => require(['./leafletMap.vue'], resolve),
            meta: {
                title: 'leaflet'
            }
        },
        {
            path: '/mapboxMap',
            component: resolve => require(['./mapboxMap.vue'], resolve),
            meta: {
                title: 'mapbox'
            }
        },
        {
            path: '/aMap',
            component: resolve => require(['./aMap.vue'], resolve),
            meta: {
                title: 'gaode'
            }
        }, {
            path: '/cesium',
            component: resolve => require(['./cesiumMap.vue'], resolve),
            meta: {
                title: 'cesium'
            }
        },
        {
            path: '/webgl',
            component: resolve => require(['./webgl.vue'], resolve),
            meta: {
                title: 'webgl'
            }
        },
    ]
}]