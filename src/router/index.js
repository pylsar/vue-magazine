import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Homepage';
import TheCatalog from '../views/TheCatalog';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'TheCatalog',
    component: TheCatalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
