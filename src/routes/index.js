import {createRouter, createWebHistory} from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from "../views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
//import createListView from "@/views/CreateListVue";
//import mitt from 'mitt'
//const emitter = mitt();
// let emitter = this.emitter;
import store from "../store/index.js";

//const spinnerOn = this.emitter.emit('start:spinner');

//vue3부터 router 사용 시 createRouter를 이용해 router 생성 -> npm install vue-router@next

const routes = [
    {
        path: '/',
        redirect : '/news'
    },
    {
                
        //path : url 정보
        //component : url로 이동했을 때 보여줄 컴포넌트(페이지라고 보면 됨)
        path: '/news',
        name: 'news',
        //component: createListView('NewsView')
        component: NewsView,
        beforeEnter: (to, from, next) => {
            //emitter.emit('start:spinner');
            //spinnerOn;
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    //emitter.emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    {
        path: '/ask',
        name: 'ask',
        //component: createListView('AskView')
        component: AskView,
        beforeEnter: (to, from, next) => {
            // app.vue에 정의된 emitter를 사용하지 못함.
            // beforeEnter에서는 this 예약어 인식이 안됨
            //emitter.emit('start:spinner');
            //spinnerOn;
            
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    //emitter.emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    {
        path: '/jobs',
        name: 'jobs',        
        //component: createListView('JobsView')
        component: JobsView,
        beforeEnter: (to, from, next) => {
            //emitter.emit('start:spinner');
            //spinnerOn;
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // console.log('fetched');
                    // emitter.emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    {
        path: '/user/:id',
        component: UserView
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

const router = createRouter({
    history: createWebHistory(),
    //요건 원래 구조는 routes : [{path : String, component : 컴포넌트},]로 es6문법에 의해 축약해서 쓴 것(routes : routes)
    routes
})

export default router;

//console.log(router);