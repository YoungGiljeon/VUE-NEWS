<template>
  <div class="user-container">
    <div>
        <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">        
        <slot name="username">

        </slot>        
        <!-- <router-link v-bind:to="`/user/${userInfo.user}`">
        {{ userInfo.id }}  
        </router-link>           -->
        <div class="time">
        <!-- {{ info.created }} -->
        <slot name="time">

        </slot>
        </div>
        <slot name="karma">

        </slot>
    </div>
    <!-- <h2>{{ fetchedItem.title }}</h2> -->
    </div>
</template>

<script>
export default {
    props: {
        info: Object
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

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7.rem;
}
</style>