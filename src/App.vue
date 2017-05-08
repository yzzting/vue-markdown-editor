<template>
  <div id="app" @keydown="keyListen">
    <sidenav ref="sidenav" />
    <div class="editor-box" :class="{show:showMenu}">
      <inputer v-if="themeEditView" />
      <outputer v-if="themeReadView" />
    </div>
  </div>
</template>

<script>
  import sidenav from './components/sidenav.vue';
  import inputer from './components/input.vue';
  import outputer from './components/output.vue';
  import yzzMenu from './components/menu.vue';
  import {
    mapState,
    mapGetters
  } from 'vuex'
  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch('articleListFromLocal')
    },
    computed: {
      ...mapState({
        showMenu: state => state.showMenu,
        themeEditView: state => state.themeEditView,
        themeReadView: state => state.themeReadView
      }),
      ...mapGetters({
        articleList: 'articleList'
      })
    },
    methods: {
      keyListen(e, i) {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
          //F
          switch (e.keyCode) {
            case 118:
              {
                e.preventDefault()
                this.$store.dispatch('changeTheme')
                break;
              }
            case 119:
              {
                e.preventDefault()
                this.$store.dispatch('showMenu')
                break;
              }
            case 120:
              {
                e.preventDefault()
                this.$store.dispatch('changeThemeFloat', 'edit-view')
                break;
              }
          }
  
        } else if (e.ctrlKey && e.altKey && !e.shiftKey) {
          // ctrl + alt
          switch (e.keyCode) {
            case 67:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("`code`")
              }
            case 73:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("![](http://)")
                break;
              }
            case 74:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("\n- [ ] ")
                break;
              }
            case 78:
              {
                e.preventDefault()
                this.$store.dispatch('newArticle')
                break;
              }
            case 188:
              {
                e.preventDefault()
                console.log(this.$store.state.articlePos)
                this.$store.dispatch('selectArticle', this.$store.state.articlePos - 1)
                break;
              }
            case 190:
              {
                e.preventDefault()
                console.log(this.$store.state.articlePos)
                this.$store.dispatch('selectArticle', this.$store.state.articlePos + 1)
                break;
              }
            case 220:
              {
                e.preventDefault()
                this.$refs.sidenav.toggleLeftSidenav()
                break;
              }
          }
        } else if (e.ctrlKey && !e.altKey && !e.shiftKey) {
          // ctrl +
          switch (e.keyCode) {
            case 66:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("**Bold**")
                break;
              }
            case 72:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("\n# ")
                break;
              }
            case 73:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("*Italic*")
                break;
              }
            case 76:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("[Link](http://)")
                break;
              }
            case 85:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("\n\n---\n\n")
                break;
              }
            case 89:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("\n> ")
                break;
              }
            case 219:
              {
                e.preventDefault()
                this.$refs.sidenav.buttonFunction("\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |")
                break;
              }
          }
        }
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
