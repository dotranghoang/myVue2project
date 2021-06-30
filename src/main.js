import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router/index';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
  ;
Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin);
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
