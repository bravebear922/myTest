import Vue from 'vue'
import Router from 'vue-router'

//直接加载
import HelloWorld from '@/components/HelloWorld'
import ScientificAmerican from '@/components/ScientificAmerican'
import Index from '@/components/Index'
import Full from '@/containers/Full'
import Login from '@/components/Login'
import Project from '@/components/Project'
import Register from '@/components/Register'

//延迟加载
//const HelloWorld = () => import('@/components/HelloWorld');

// Router.prototype.goBack = function () {
//   window.history.go(-1);
// }

Vue.use(Router)

export const constantRouterMap = [
 {
    path: '/',
    redirect: '/login',
    component: Full,
    children: [
    	{
    		path: "/sss",
    		component: ScientificAmerican
    	},
		{
		 	path: '/index',
		 	component: Index
		},
        {
            path: '/login',
            component: Login
        },
        {
            path: '/project',
            component: Project
        },
        {
            path: '/register',
            component: Register
        },
    ]
 },
 {
 	path: '/Login',
 	component: Login
 }
]


export default new Router({
  routes: constantRouterMap
})
