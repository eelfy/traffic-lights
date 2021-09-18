import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLighter from '../components/TrafficLighter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/red',
    name: 'main',
  },
  {
    path: '/red',
    name: 'Red',
    component: TrafficLighter,
    props: { currentColorIs: 'red', time: 10 },

  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: TrafficLighter,
    props: { currentColorIs: 'yellow', time: 3 },

  },
  {
    path: '/green',
    name: 'Green',
    component: TrafficLighter,
    props: { currentColorIs: 'lime', time: 15 },

  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})


export default router
