import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from "./App.vue";

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import TheNavbar from "./components/nav/TheNavbar.vue";

Vue.component('the-navbar', TheNavbar);

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount("#app");