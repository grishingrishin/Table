import Vue from 'vue';
import store from './store/';
import Router from 'vue-router';
import Orders from './views/Orders.vue';
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
            component: Orders,
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
