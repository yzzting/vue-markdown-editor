<template>
  <div class="input-main" :style="{float:themeIuputFloat,margin:themeIuputMargin}">
    <yzz-inputtoolbar :class="{fontWhile:changeTheme}"></yzz-inputtoolbar>
    <textarea id="inputer" @input="inputting" @scroll="syncScroll" :value="rawTxt" :style="{fontFamily: updatedFont}" :class="{inputThemeBlack:changeTheme}"></textarea>
  </div>
</template>

<script>

  import yzzInputtoolbar from './input-toolbar'

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
      }
    },
    computed: {
      rawTxt() {
        return this.$store.getters.articleRaw
      },
      updatedFont() {
        return this.$store.getters.articleFont
      },
      changeTheme() {
        return !this.$store.state.theme
      },
      themeIuputFloat() {
        return this.$store.state.themeIuputFloat
      },
      themeIuputMargin() {
        return this.$store.state.themeMargin
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../sass/components/_input';
</style>
