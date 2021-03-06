import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
    },
    {
      path: '/LogIn',
      name: 'Log In',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "LogIn" */ './views/LogIn.vue')
    },
    {
      path: '/SignUp',
      name: 'Sign Up',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "SignUp" */ './views/SignUp.vue')
    }
  ]
})
