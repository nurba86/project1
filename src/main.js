import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  
    el: '#app',
    data: {
      items: [
        'Home',
        'About',
        'Blog',
        'Map',
        'Contacts',
      ],
      show: false,
    },
  
}).$mount("#app");