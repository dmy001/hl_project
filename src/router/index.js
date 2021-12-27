import Vue from "vue";
import Router from "vue-router";
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Board from '@/components/Board'
import Cube from '@/components/Cube'
Vue.use(Router)
const router = new Router({
    routes: [
        // { path: "/", redirect: "/login" },
        { path: "/", name: 'HelloWorld', component: HelloWorld, },
        { path: "/login/:id", name: 'login', component: Login, },
        { path: "/main", name: 'main', component: Main, },
        { path: "/board", name: 'board', component: Board },
        { path: "/cube", name: 'cube', component: Cube }

    ]
})
export default router