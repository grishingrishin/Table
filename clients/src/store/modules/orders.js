const state = {
    orders: [
        {
            id: 1,
            name: 'Ivan Ivanov',
            email: 'test5@test.com',
            phone: '+79996666969',
        },
        {
            id: 2,
            name: 'Ivan Ivanov',
            email: 'test4@test.com',
            phone: '+79996666969',
        },
        {
            id: 3,
            name: 'Ivan Ivanov',
            email: 'test3@test.com',
            phone: '+79996666969',
        },
        {
            id: 4,
            name: 'Ivan Ivanov',
            email: 'test2@test.com',
            phone: '+79996666969',
        },
        {
            id: 5,
            name: 'Ivan Ivanov',
            email: 'test1@test.com',
            phone: '+79996666969',
        },
    ],
    sortBy: '',
};

const getters = {
    getOrders: (state, getters) => {
        const { sortBy, orders } = state;
        const { sortByEmail, sortByName } = getters;

        let sort = null;

        switch (sortBy) {
            case 'name':
                sort = sortByName;
                break;
            case 'email':
                sort = sortByEmail;
                break;
            default:
                sort = orders;
        }

        return sort;
    },
    sortByName: state => [...state.orders].sort((a, b) => (a.name < b.name ? -1 : 1)),
    sortByEmail: state => [...state.orders].sort((a, b) => (a.email < b.email ? -1 : 1)),
};

const mutations = {
    ADD_ORDER(state, order) {
        state.order.push(order);
    },
    REMOVED_ORDERS(state, id) {
        state.orders = state.orders.filter(order => order.id !== id);
    },
    SET_SORT_BY(state, sort) {
        state.sortBy = !state.sortBy ? sort : '';
    },
};

const actions = {
    addOrder({ commit }, order) {
        commit('ADD_ORDER', order);
    },
    removedOrder({ commit }, id) {
        commit('REMOVED_ORDERS', id);
    },
    sortBy({ commit }, sort) {
        commit('SET_SORT_BY', sort);
    },
};

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions,
};
