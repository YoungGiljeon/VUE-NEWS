<template>
  <div>
    <list-item></list-item>
  </div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin  from '@/mixins/ListMixin';

export default {
  components: {
    ListItem
  }, 
  // mounted() {
  //   this.emitter.emit('end:spinner');
  // }
  mixins: [ListMixin],
  // created() {
  //   this.emitter.emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched');
  //         this.emitter.emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // }    
}
</script>
