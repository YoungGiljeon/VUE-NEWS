<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <template v-slot:username> {{ fetchedItem.user }}  </template>
        <!-- <router-link v-bind:to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }} 
          </router-link>  -->
        <template v-slot:time> {{ 'Posted ' + fetchedItem.time_ago }} </template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문댓글 -->
      <div v-html="fetchedItem.content" >

      </div>
    </section>    
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
  computed: {
      ...mapGetters(['fetchedItem']),
    },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5;
}
.fa-user {
  font-size: 2.rem;
}
.user-description{
  padding-left: 8px;
}
.time {
  font-size: 0.7.rem;
}

</style>