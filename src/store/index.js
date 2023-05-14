// import { createApp } from 'vue';
import { createStore } from "vuex";
// import Vuex from 'vuex';

import mutations from "./mutations.js";
import actions from "./actions.js";

// createApp(Vuex);

const store = createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
        list: []
    },
    getters: {
        fetchedAsk(state) {
            console.log(state.ask);
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions,
});

export default store;