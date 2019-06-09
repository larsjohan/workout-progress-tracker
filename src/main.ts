import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DataAccessPlugin from './plugins/DataAccessPlugin';

Vue.config.productionTip = false;

// Install plugins
Vue.use(new DataAccessPlugin());

// Create app
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
