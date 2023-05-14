<template>
  <div id="app">   
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>    
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
//import bus from './utils/bus/bus';

 export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.log(process.env.VUE_APP_TITLE);
    this.emitter.on('start:spinner', this.startSpinner);
    this.emitter.on('end:spinner', this.endSpinner);
  },
  beforeUnmount() {
    this.emitter.off('start:spinner', this.startSpinner);
    this.emitter.off('end:spinner', this.endSpinner);
  }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
},

body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: 0;
}
a:hover {
  color:  #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* 라우터 트랜지션 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
