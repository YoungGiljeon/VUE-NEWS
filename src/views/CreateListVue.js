import ListView from '../views/ListView.vue';
import {h} from 'vue'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            this.emitter.emit('start:spinner');
            setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                console.log('fetched');
                this.emitter.emit('end:spinner');
                })
                .catch((error) => {
                console.log(error);
                });
            }, 3000);
        },
        //createElents는 vue3에서는  h 함수로 대체되었음
        render : function() {
            return h(ListView);
        }
    }
}