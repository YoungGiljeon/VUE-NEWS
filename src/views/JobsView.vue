<template>
  <div>
    <list-item></list-item>
       </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import ListMixin from '@/mixins/ListMixin';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
  // mounted() {
  //   this.emitter.emit('end:spinner');
  // }

}
</script>