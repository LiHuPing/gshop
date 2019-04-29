<template>
  <div id="app">
    <router-view/>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar/Tabbar.vue";
export default {
  components: { Tabbar }
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

  
 

