import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('./views/Layout.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/other/Home.vue')
                },
                {
                    path: '/charts',
                    name: 'charts',
                    component: () => import('./views/other/Charts.vue')
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: () => import('./views/other/Setting.vue')
                },
                {
                    path: '/editor',
                    name: 'editor',
                    component: () => import('./views/extent/Editor.vue')
                },
                {
                    path: '/search',
                    name: 'search',
                    component: () => import('./views/other/Search.vue')
                },
            ]
        }
    ]
})
