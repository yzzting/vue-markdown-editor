<template>
  <div id="app">
    <sidenav />
    <div class="editor-box" :class="{show:showMenu}">
      <inputer v-if="themeEditView"/>
      <outputer v-if="themeReadView"/>
    </div>
  </div>
</template>

<script>
  import sidenav from './components/sidenav.vue';
  import inputer from './components/input.vue';
  import outputer from './components/output.vue';
  import yzzMenu from './components/menu.vue';
  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch('articleListFromLocal')
    },
    computed: {
      showMenu() {
        return !this.$store.state.showMenu
      },
      themeEditView() {
        return this.$store.state.themeEditView
      },
      themeReadView() {
        return this.$store.state.themeReadView
      }
    },
    components: {
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
