import Vue from 'vue'
import Router from 'vue-router'
import Car from '@/components/car/car.vue'

import goods from '@/components/car/goods/goods.vue'
import ratings from '@/components/car/ratings/ratings.vue'
import seller from '@/components/car/seller/seller.vue'
import home from '@/components/homePage/homepage.vue'
Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/home',
    name: 'home',
    component: home,
    children:[
        {
      path: '/home/car',
      name: 'Car',
      component: Car,
      children:[
      {
         path:'/home/car/goods',
         name: 'goods',
         component: goods,
      },
      {
         path:'/home/car/seller',
         name: 'seller',
         component: seller,
      },
      {
         path:'/home/car/ratings',
         name: 'ratings',
         component: ratings,
      },{
        path:'/home/car/',
         redirect: {
          name:'goods'
         }
      }
      ]
    }
    ]
  },
  {
    path: '/',
    redirect: {
      name:'home'
    }
    }
  ]
})
