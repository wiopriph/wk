<template>
  <div class="layout">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="stylus">
  .layout {
    width 100%
    max-width 104rem
    margin 0 auto
    min-height 100vh
    display flex
    flex-direction column
    background-image url('../assets/bg_desktop.png')
    background-size cover
  }
</style>
