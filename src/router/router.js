/**
 * app的路由配置
 * create by liupeiqing
 *  2019/6/11 14:53
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//路由配置
const RouterConfig = {
    routes:[{
        path: '/index',
        component: require('../views/index'),
        children: [
            {
                path: 'rage',
                component: require('../views/rage')
            }
        ]
    }]
};

const router = new VueRouter(RouterConfig);

export default router;
