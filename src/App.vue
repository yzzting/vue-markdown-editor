<template>
  <div id="app">
    <sidenav />
    <div class="editor-box">
      <inputer />
      <outputer />
    </div>
  </div>
</template>

<script>
import sidenav from './components/sidenav.vue';
import inputer from'./components/input.vue';
import outputer from './components/output.vue';
import yzzMenu from './components/menu.vue';
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('articleListFromLocal')
  },
  components:{
    inputer,
    outputer,
    sidenav,
    yzzMenu
  }
}
</script>

<style lang="scss">
  @import "../static/sass/app";
  @import "../static/sass/components/_editor"
</style>
