import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const Users = () => import(/* webpackChunkName: "about" */ '../views/Users.vue')

const UsersDetail = () => import(/* webpackChunkName: "about" */ '../views/UsersDetail.vue')

const UsersEdit = () => import(/* webpackChunkName: "about" */ '../views/UsersEdit.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'users',
    beforeEnter: (to, from, next) => {
      console.log('before Enter')
      next()
    },
    component: Users,
    children: [
      {
        path: ':id',
        name: 'users-detail',
        component: UsersDetail
      },
      {
        path: ':id/edit',
        name: 'users-edit',
        component: UsersEdit
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: {
      name: 'users'
    }
  },
  {
    path: '/*',
    redirect: {
      name: 'home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
