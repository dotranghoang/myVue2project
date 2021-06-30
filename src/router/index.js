import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from "@/components/layout/Auth";
import login from "@/components/view/login";
import register from "@/components/view/register";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Auth,
            children: [
                {
                    path: '/login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        }
    ]
});

export default router;