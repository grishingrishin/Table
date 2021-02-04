import Vue from 'vue';
import Vuex from 'vuex';
import authorization from './modules/authorization.js';
import orders from './modules/orders.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        authorization,
        orders,
    },
});

export default store;
