import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegisterComponent from '@/components/RegisterComponent'
import LoginComponent from '@/components/LoginComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'hello'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent,
      meta: {
        title: 'register'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})
