import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        time: 0,
    },
    plugins: [createPersistedState()],
    mutations: {
        changeTime: (state) => state.time,
    }
});
