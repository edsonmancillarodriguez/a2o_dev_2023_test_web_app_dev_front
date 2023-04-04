import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Problema1 from '@/./components/Problema1.vue'
import Problema2 from '@/./components/Problema2.vue'

const routes = [
    {
        path: '/problema-1',
        name: 'Problema1',
        component: Problema1
    },
    {
        path: '/problema-2',
        name: 'Problema2',
        component: Problema2
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
