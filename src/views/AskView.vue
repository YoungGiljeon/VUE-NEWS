<template>
  
   <div>
    <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '@/mixins/ListMixin';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   this.emitter.emit('end:spinner');
  // }
  mixins: [ListMixin],

} 

</script>
