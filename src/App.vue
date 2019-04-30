<template>
  <div id="app">
    <router-view/>
    <!-- 登录页隐藏 -->
    <Tabbar v-show="$route.meta.showTarbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar/Tabbar.vue";
export default {
  components: { Tabbar },
  created(){
    this.$store.dispatch('getAddress')
  }
};
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>

  
 

