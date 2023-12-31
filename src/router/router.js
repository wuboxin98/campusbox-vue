import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
import CompusRecruiteActivity from '../components/campusrecruiteactivity.vue'
import ResumeDeliveryRecord from '../components/deliveryrecord.vue'
import HelloWorld from '../components/HelloWorld.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]
const routes = [
    { path: '/compusrecruiteactivity', component: CompusRecruiteActivity },
    { path: '/resume-delivery-record', component: ResumeDeliveryRecord },
    { path: '/HelloWorld', component: HelloWorld }
  ]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = new VueRouter({  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
// const app = Vue.createApp({})
//确保 _use_ 路由实例使
//整个应用支持路由。
// app.use(router)
// app.mount('#app')


export default router
