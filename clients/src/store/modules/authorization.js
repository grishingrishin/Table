import axios from 'axios';

const state = {
    status: '',
    token: localStorage.token ?? '',
};

const getters = {
    getToken: state => state.token,
};

const mutations = {
    AUTH_REQUEST(state) {
        state.status = 'requiest authorization';
    },
    AUTH_SUCCESS(state, token) {
        state.status = 'success authorization';
        state.token = token;
    },
    AUTH_FAILED(state) {
        state.status = 'failed authorization';
    },
};

const actions = {
    authorization({ commit }, data) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            const query = { url: 'http://localhost:5000/auth', data, method: 'POST' };
            axios(query)
                .then(res => {
                    const { token } = res.data;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = token;
                    commit('AUTH_SUCCESS', token);
                    resolve(res);
                })
                .catch(err => {
                    commit('AUTH_FAILED');
                    localStorage.removeItem('token');
                    reject(err);
                });
        });
    },
};

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions,
};
