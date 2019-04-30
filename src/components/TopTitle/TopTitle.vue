<template>
  <section class="header">
    <!-- 占位组件 -->
    <slot name="search"/>
    <a class="header_title ellipsis">
      <span class="header_title_text">{{title}}</span>
    </a>
    <slot name="login"/>
  </section>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="stylus" >
@import '../../common/stylus/mixins.styl';

.header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
}
</style>
