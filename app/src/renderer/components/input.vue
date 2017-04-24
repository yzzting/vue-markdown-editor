<template>
  <div class="input-main" :style="{float:themeIuputFloat,margin:themeIuputMargin}">
    <yzz-inputtoolbar :class="{fontWhile:changeTheme}"></yzz-inputtoolbar>
    <!--<textarea id="inputer" @input="inputting" @scroll="syncScroll" :value="rawTxt" :style="{fontFamily: updatedFont}" :class="{inputThemeBlack:changeTheme}"></textarea> -->
    <codemirror ref="editor" v-model="rawTxt" :options="editorOption" @change="onEditorCursorActivity" id="inputer" @scroll="syncScroll">
    </codemirror>
  </div>
</template>

<script>
  import yzzInputtoolbar from './input-toolbar'
  import bus from '../common/eventsBus'
  import {
    codemirror,
    CodeMirror
  } from 'vue-codemirror'
  // require active-line.js
  require('codemirror/addon/selection/active-line.js')
  // styleSelectedText
  require('codemirror/addon/selection/mark-selection.js')
  require('codemirror/addon/search/searchcursor.js')
  // highlightSelectionMatches
  require('codemirror/addon/scroll/annotatescrollbar.js')
  require('codemirror/addon/search/matchesonscrollbar.js')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/match-highlighter.js')
  // keyMap
  require('codemirror/mode/clike/clike.js')
  require('codemirror/addon/edit/matchbrackets.js')
  require('codemirror/addon/comment/comment.js')
  require('codemirror/addon/dialog/dialog.js')
  require('codemirror/addon/dialog/dialog.css')
  require('codemirror/addon/search/searchcursor.js')
  require('codemirror/addon/search/search.js')
  require('codemirror/keymap/sublime.js')
  require('codemirror/keymap/vim.js')
  require('codemirror/keymap/emacs.js')
  // foldGutter
  require('codemirror/addon/fold/foldgutter.css')
  require('codemirror/addon/fold/brace-fold.js')
  require('codemirror/addon/fold/comment-fold.js')
  require('codemirror/addon/fold/foldcode.js')
  require('codemirror/addon/fold/foldgutter.js')
  require('codemirror/addon/fold/indent-fold.js')
  require('codemirror/addon/fold/markdown-fold.js')
  require('codemirror/addon/fold/xml-fold.js')
  export default {
    name: 'input',
    components: {
      yzzInputtoolbar,
      codemirror
    },
    data() {
      return {
        keyMode: 'sublime',
        editorOption: {
          tabSize: 4,
          foldGutter: true,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          keyMap: 'sublime',
          mode: 'text/x-markdown',
          theme: 'mdn-like',
          scroll:this.syncScroll(),
          // typewriterScrolling: true,
          highlightSelectionMatches: {
            showToken: /\w/,
            annotateScrollbar: true
          },
        }
      }
    },
    methods: {
      syncScroll(e) {
        // let outputer = document.getElementById('output')
        // outputer.scrollTop = e.target.scrollTop
        console.log('outputer.scrollTop')
      },
      onEditorCursorActivity(editor) {
        this.$store.dispatch('textInput', editor)
        this.$store.dispatch('saveCatch')
      }
    },
    mounted() {
      bus.$on('keymapMode', (mode) => {
        let self = this
        self.editorOption.keyMap = mode
      });
    },
    computed: {
      editor() {
        this.$refs.editor.editor
      },
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
