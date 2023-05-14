import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import store from './store/index.js';
import mitt from 'mitt'

const emitter = mitt();
const app = createApp(App).use(router).use(store);
app.config.globalProperties.emitter = emitter
app.mount('#app');

//Vue.config.productionTip = false

//createApp(App).use(router).use(store).mount('#app');

// new Vue({
//     render: h => h(App),
//     //router,
// }).$mount('#app')
