<template>
  <div class="input-main" :style="{float:themeIuputFloat,margin:themeIuputMargin}" @keydown="keyListen">
    <yzz-inputtoolbar ref="inputtoolbar" :class="{fontWhile:changeTheme}"></yzz-inputtoolbar>
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
      },
      keyListen(e) {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
          switch (e.keyCode) {
            case 120:
              {
                e.preventDefault()
                this.$refs.inputtoolbar.changeEditView()
                break;
              }
            case 119:
              {
                e.preventDefault()
                this.$refs.inputtoolbar.showSidenav()
                break;
              }
            case 118:
              {
                e.preventDefault()
                this.$refs.inputtoolbar.changeTheme()
                break;
              }
          }
  
        } else if (e.ctrlKey && e.altKey && !e.shiftKey) {
          // ctrl + alt
          switch (e.keyCode) {
            case 78:
              {
                e.preventDefault()
                this.$store.dispatch('newArticle')
                break;
              }
          }
        }
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
  @import '../../static/sass/components/_input';
</style>
