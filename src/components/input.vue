<template>
  <div class="input-main">
    <yzz-inputtoolbar></yzz-inputtoolbar>
    <textarea id="inputer" @click="updatedFont" @input="inputting" @scroll="synvScroll" :value="rawTxt" autofocus :style="{fontFamily: updatedFont}"></textarea>
  </div>
</template>

<script>
  import yzzInputtoolbar from './input-toolbar'
  
  export default {
    name: 'input',
    data() {
      return {
        font: ''
      }
    },
    components: {
      yzzInputtoolbar
    },
    methods: {
      inputting(e) {
        this.$store.dispatch('textInput', e.target.value)
        this.$store.dispatch('saveCatch')
      },
      synvScroll(e) {
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../static/sass/components/_input';
</style>
