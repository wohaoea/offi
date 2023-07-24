import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        meta:{
          title:'浏览',
          rules:[1,2,3]
        },
        name: "浏览",
        redirect:'/main',

    },
    {
        path: "/main",
        meta:{
            title:'首页',
            rules:[1,2,3]
        },
        name: "首页",
        component:()=> import('../components/official.vue'),
    }
]
// console.log(routes)
const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
});
// 路由跳转前验证
router.beforeEach((to, from, next) => {
    // console.log(to,'to');
    // console.log(from,'from');
    // if(to.name=='')
    //走
    next()

})

router.afterEach(() => {
    // console.log('离开');

})
export default router;
