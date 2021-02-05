const state = {
    orders: [
        {
            id: 1,
            name: 'Ivan Ivanov5',
            email: 'test5@test.com',
            phone: '+79996666969',
        },
        {
            id: 2,
            name: 'Ivan Ivanov4',
            email: 'test4@test.com',
            phone: '+79996666969',
        },
        {
            id: 3,
            name: 'Ivan Ivanov3',
            email: 'test3@test.com',
            phone: '+79996666969',
        },
        {
            id: 4,
            name: 'Ivan Ivanov2',
            email: 'test2@test.com',
            phone: '+79996666969',
        },
        {
            id: 5,
            name: 'Ivan Ivanov1',
            email: 'test1@test.com',
            phone: '+79996666969',
        },
    ],
    sortBy: '',
    editOrder: null,
};

const getters = {
    getOrders: (state, getters) => {
        const { sortBy, orders } = state;
        const { getSortByEmail, getSortByName } = getters;

        let sort = null;

        switch (sortBy) {
            case 'name':
                sort = getSortByName;
                break;
            case 'email':
                sort = getSortByEmail;
                break;
            default:
                sort = orders;
        }

        return sort;
    },
    getSortByName: state => [...state.orders].sort((a, b) => (a.name < b.name ? -1 : 1)),
    getSortByEmail: state => [...state.orders].sort((a, b) => (a.email < b.email ? -1 : 1)),
    getEditOrderID: state => state.editOrder,
};

const mutations = {
    ADD_ORDER(state, order) {
        state.order.push(order);
    },
    REMOVE_ORDER(state, id) {
        state.orders = state.orders.filter(order => order.id !== id);
    },
    SORT_BY(state, sort) {
        state.sortBy = !state.sortBy ? sort : '';
    },
    SELECT_ORDER(state, id) {
        state.editOrder = id;
    },
    CHANGE_ORDER(state, editedOrder) {
        const { orders } = state;
        const findOrderById = orders.find(order => order.id === editedOrder.id);

        console.log(findOrderById);
    },
    CANCEL_EDIT(state) {
        state.editOrder = null;
    },
};

const actions = {
    addOrder({ commit }, order) {
        commit('ADD_ORDER', order);
    },
    selectOrder({ commit }, id) {
        commit('SELECT_ORDER', id);
    },
    changeOrder({ commit }, order) {
        commit('CHANGE_ORDER', order);
        commit('CANCEL_ORDER');
    },
    cancelEdit({ commit }) {
        commit('CANCEL_EDIT');
    },
    removeOrder({ commit }, id) {
        commit('REMOVE_ORDER', id);
    },
    sortBy({ commit }, sort) {
        commit('SORT_BY', sort);
    },
};

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions,
};
