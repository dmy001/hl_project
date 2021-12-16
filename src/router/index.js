import Vue from "vue";
import Router from "vue-router";
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
Vue.use(Router)
const router = new Router({
    routes: [
        // { path: "/", redirect: "/login" },
        { path: "/", name: 'HelloWorld', component: HelloWorld, },
        { path: "/login/:id", name: 'login', component: Login, },
        { path: "/main", name: 'main', component: Main, }

    ]
})
export default router