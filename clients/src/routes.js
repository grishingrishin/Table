import Vue from 'vue';
import store from './store/';
import Router from 'vue-router';
import Table from './components/Table.vue';
import Authorization from './components/Authorization.vue';

Vue.use(Router);

// prettier-ignore
const ifNotAuthenticated = (to, from, next) => !store.getters.getToken ? next() : next('/');

// prettier-ignore
const ifAuthenticated = (to, from, next) => store.getters.getToken ? next() : next('/auth');

const routes = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Table,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/auth',
            component: Authorization,
            beforeEnter: ifNotAuthenticated,
        },
    ],
});

export default routes;
