import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import your router configuration

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
