import Vue from 'vue';
import router from './routes.js';
import store from './store/index.js';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
