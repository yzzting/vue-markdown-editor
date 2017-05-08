<template>
  <div class="input-main" :style="{float:themeIuputFloat,margin:themeIuputMargin}">
    <yzz-inputtoolbar ref="inputtoolbar" :class="{fontWhile:changeTheme}"></yzz-inputtoolbar>
    <textarea id="inputer" @input="inputting" @scroll="syncScroll" :value="rawTxt" :style="{fontFamily: updatedFont}" :class="{inputThemeBlack:changeTheme}"></textarea>
  </div>
</template>

<script>
  import yzzInputtoolbar from './input-toolbar'
  import {
    mapState,
    mapGetters
  } from 'vuex'
  export default {
    name: 'input',
    components: {
      yzzInputtoolbar,
    },
    methods: {
      inputting(e) {
        this.$store.dispatch('textInput', e.target.value)
        this.$store.dispatch('saveCatch')
      },
      syncScroll(e) {
        let outputer = document.getElementById('output')
        outputer.scrollTop = e.target.scrollTop
      },
    },
    computed: {
      ...mapState({
        changeTheme: state => !state.theme,
        themeIuputFloat: state => state.themeIuputFloat,
        themeIuputMargin: state => state.themeMargin
      }),
      ...mapGetters({
        rawTxt: 'articleRaw',
        updatedFont: 'articleFont'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../static/sass/components/_input';
</style>
