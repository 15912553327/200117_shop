<template>
  <div id="app">
    <router-view></router-view>
    <footer-guider v-show="$route.meta.showFooter"></footer-guider>
  </div>
</template>

<script>
  import FooterGuider from './components/guide/FooterGuider.vue'
export default {
    components: {
      FooterGuider
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
