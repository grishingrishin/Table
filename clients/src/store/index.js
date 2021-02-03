import Vue from 'vue';
import Vuex from 'vuex';
import authorization from './modules/authorization.js';
import table from './modules/table.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        authorization,
        table,
    },
});

export default store;
