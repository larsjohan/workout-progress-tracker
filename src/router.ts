import Vue from 'vue';
import Router from 'vue-router';
import Log from './views/Log.vue';
import Graph from './views/Graph.vue';
import Excercise from './views/Excercise.vue';
import Measurement from './views/Measurements.vue';
import Nutrition from './views/Nutrition.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/log'
    },
    {
      path: '/log',
      component: Log
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    },
    {
      path: '/excercise',
      name: 'excercise',
      component: Excercise
    },
    {
      path: '/measurement',
      name: 'measurement',
      component: Measurement
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: Nutrition
    }
  ]
})
