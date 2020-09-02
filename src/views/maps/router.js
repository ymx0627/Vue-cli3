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
            path: '/aMap',
            component: resolve => require(['./aMap.vue'], resolve),
            meta: {
                title: 'gaode'
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