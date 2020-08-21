export default [
    {
        path: '/',
        component: resolve => require(['@/components/layout/Home.vue'], resolve),
        meta: { title: '地图' },
        children:[
            {
                path: '/olMap',
                component: resolve => require(['./olMap.vue'], resolve),
                meta: { title: '综合地图' }
            }
        ]
    }
]
