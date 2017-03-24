<template>
  <div class="input-main">
    <textarea id="inputer" @click="updatedFont" @input="inputting" :value="rawTxt" autofocus :style="{fontFamily: this.$store.getters.articleFont}"></textarea>
  </div>
</template>

<script>

export default {
  name: 'input',
  data() {
    return {
      font: ''
    }
  },
  methods: {
    inputting(e) {
      this.$store.dispatch('textInput',e.target.value)
      this.$store.dispatch('saveCatch')
    },
    updatedFont() {
      return this.$store.getters.articleFont
    }
  },
  watch: {
    font: () => {
      this.font =  this.$store.getters.articleFont
    }
  },
  computed:{
    rawTxt() {
       return this.$store.getters.articleRaw
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../static/sass/components/_input';
</style>
