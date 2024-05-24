import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';


export default new Vuex.Store({

    state: {
        theme: 'light' // default theme
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        }
    },
    actions: {
        initTheme({ commit }) {
            const savedTheme = localStorage.getItem('theme') || 'light';
            commit('setTheme', savedTheme);
        },
        toggleTheme({ commit, state }) {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            commit('setTheme', newTheme);
        }
    },

    modules: {
        stocks,
        portfolio
    }
});