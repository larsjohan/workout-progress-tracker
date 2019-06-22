import Vue from 'vue';
import Router from 'vue-router';
import LogComponent from './views/LogComponent.vue';
import StatisticsComponent from './views/StatisticsComponent.vue';
import ExcerciseComponent from './views/ExcerciseComponent.vue';
import MeasurementComponent from './views/MeasurementsComponent.vue';
import NutritionComponent from './views/NutritionComponent.vue';

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
      component: LogComponent
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsComponent
    },
    {
      path: '/excercise',
      name: 'excercise',
      component: ExcerciseComponent
    },
    {
      path: '/measurement',
      name: 'measurement',
      component: MeasurementComponent
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: NutritionComponent
    }
  ]
})
