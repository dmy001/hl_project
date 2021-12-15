import Vue from "vue";
import Router from "vue-router";
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
const router = new Router({
    routes: [
        // { path: "/", redirect: "/login" },
        { path: "/", name: 'HelloWorld', component: HelloWorld, exact: true },
        { path: "/login", name: 'login', component: Login, exact: true }
    ]
})
export default router