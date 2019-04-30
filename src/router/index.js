import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite',
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showTarbar: true
      }

    },
    {
      path: '/order',
      component: Order,
      meta: {
        showTarbar: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showTarbar: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showTarbar: true
      }
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})
