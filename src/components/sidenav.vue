<template>
    <div class="sidenav-main">
        <md-toolbar class="toolbar-color">
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("**Bold**")'>
                <md-icon>format_bold</md-icon>
                <md-tooltip md-direction="bottom">粗体</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("*Italic*")'>
                <md-icon>format_italic</md-icon>
                <md-tooltip md-direction="bottom">斜体</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("[Link](http://)")'>
                <md-icon>link</md-icon>
                <md-tooltip md-direction="bottom">插入链接</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("\n> ")'>
                <md-icon>format_quote</md-icon>
                <md-tooltip md-direction="bottom">引用</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("`code`")'>
                <md-icon>code</md-icon>
                <md-tooltip md-direction="bottom">插入代码</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("![](http://)")'>
                <md-icon>insert_photo</md-icon>
                <md-tooltip md-direction="bottom">插入图片</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("\n\n---\n\n")'>
                <md-icon>format_underline</md-icon>
                <md-tooltip md-direction="bottom">下划线</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |")' title="表格">
                <md-icon>view_module</md-icon>
                <md-tooltip md-direction="bottom">表格</md-tooltip>
            </md-button>
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='buttonFunction("\n# ")'>
                <md-icon>title</md-icon>
                <md-tooltip md-direction="bottom">标题</md-tooltip>
            </md-button>
            
            <md-button class="md-icon-button md-raised button-color" md-elevation="9" @click.native='fullPage'>
                <md-icon>aspect_ratio</md-icon>
                <md-tooltip md-direction="bottom">全屏</md-tooltip>
            </md-button>
    
            <md-button class="md-icon-button md-raised button-color font-color" @click.native='buttonFunction("\n- [ ] ")'>
                <md-icon>check circle</md-icon>
                <md-tooltip md-direction="bottom">复选框</md-tooltip>
            </md-button>
    
            <md-button class="md-raised button-color font-color" title="选择字体" md-fab-trigger>
                <md-input-container>
                    <md-icon class="font-underline">font_download</md-icon>
                    <label for="font"></label>
                    <md-select name="font" id="font" v-model="font">
                        <md-option value="georgia" @click.native="selectFont">Georgia</md-option>
                        <md-option value="helvetica" @click.native="selectFont">Helvetica</md-option>
                        <md-option value='"courier new"' @click.native="selectFont">Courier New</md-option>
                        <md-option value='"Microsoft Yahei"' @click.native="selectFont">Microsoft Yahei</md-option>
                        <md-option value='monospace' @click.native="selectFont">Monospace</md-option>
                        <md-option value="Arial" @click.native="selectFont">Arial</md-option>
                        <md-option value="Segoe UI" @click.native="selectFont">Segoe UI</md-option>
                    </md-select>
                </md-input-container>
            </md-button>
    
            <md-layout md-flex md-flex-medium="33" md-hide-small class="button-add-offset">
                <md-button class="md-icon-button md-raised button-color button-add" md-elevation="9" @click.native="articleAdd">
                    <md-icon>note_add</md-icon>
                    <md-tooltip md-direction="bottom">添加文章</md-tooltip>
                </md-button>
    
                <a href="https://github.com/yzzting/vue-markdown-editor" target="_blank" rel="noopener" class="md-button md-icon-button github md-theme-default button-color" data-v-abcb0686=""> <i class="md-icon md-theme-default" data-v-abcb0686=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.69 418.13 350.16 485.81 25.59 4.69 34.94-11.12 34.94-24.62 0-12.19-0.47-52.56-0.72-95.31C242 908.81 211.91 817.5 211.91 817.5c-23.31-59.12-56.84-74.87-56.84-74.87-46.53-31.75 3.53-31.12 3.53-31.12 51.41 3.56 78.47 52.75 78.47 52.75 45.69 78.25 119.88 55.63 149 42.5 4.65-33 17.9-55.62 32.5-68.37C304.91 725.44 185.34 681.5 185.34 485.31c0-55.94 19.97-101.56 52.66-137.41-5.22-13-22.84-65.09 5.06-135.56 0 0 42.94-13.75 140.81 52.5 40.81-11.41 84.59-17.03 128.13-17.22 43.5 0.19 87.31 5.88 128.19 17.28 97.69-66.31 140.69-52.5 140.69-52.5 28 70.53 10.38 122.56 5.13 135.5 32.81 35.84 52.63 81.47 52.63 137.41 0 196.69-119.75 240-233.81 252.69 18.44 15.88 34.75 47 34.75 94.75 0 68.44-0.69 123.63-0.69 140.5 0 13.63 9.31 29.56 35.25 24.56C877.44 930 1024 738.13 1024 512 1024 229.25 794.75 0 512 0z"></path></svg></i>
                    <div class="md-ink-ripple">
                        <div class="md-ripple md-active" style="width: 40px; height: 40px; top: 0px; left: -9px;"></div>
                    </div>
                </a>
            </md-layout>
        </md-toolbar>
    
        <md-sidenav class="md-left" ref="leftSidenav" id="closepage">
            <md-toolbar class="md-large">
                <div class="md-toolbar-container">
                    <h3 class="md-title">vue-markdown-editor</h3>
                </div>
            </md-toolbar>
            <yzz-menu></yzz-menu>
        </md-sidenav>
    
    </div>
</template>

<script>
    const setContent = (inputer, oldContent, newContent, content, endPosition, start, end) => {
        newContent = oldContent.substring(0, endPosition) + content + oldContent.substring(endPosition, oldContent.length)
        inputer.value = newContent
        inputer.setSelectionRange(endPosition + start, endPosition.length - end)
        return newContent
    }
    
    const updateContent = (inputer, oldContent, newContent, startPosition, endPosition, num1, num2) => {
        newContent = oldContent.substring(0, startPosition) + num1 + oldContent.substring(startPosition, endPosition) + num2 + oldContent.substring(endPosition, endPosition.length)
        inputer.value = newContent
        let len = newContent.length
        inputer.setSelectionRange(len, len)
        return newContent
    }
    
    const screenfull = require('screenfull')

    import yzzMenu from './menu'
    
    export default {
        name: 'sidenav',
        data() {
            return {
                font: 'georgia'
            }
        },
        components: {
            yzzMenu
        },
        methods: {
            selectFont() {
                this.$store.dispatch('updateFont', this.font)
            },
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            buttonFunction(content) {
                let inputer = document.querySelector('#inputer')
                let startPosition = inputer.selectionStart
                let endPosition = inputer.selectionEnd
                let oldContent = inputer.value
    
                inputer.focus()
    
                let newContent = ''
    
                if (startPosition === endPosition) {
                    switch (content) {
                        case '**Blod**':
                            newContent = setContent(inputer, oldContent, newContent, content, endPosition, 2, 2)
                            break
                        case '*Italic*':
                            newContent = setContent(inputer, oldContent, newContent, content, endPosition, 1, 1)
                            break
                        case '[Link](http://)':
                            newContent = setContent(inputer, oldContent, newContent, content, endPosition, 7, 2)
                            break
                        case '`code`':
                            newContent = setContent(inputer, oldContent, newContent, content, endPosition, 1, 1)
                            break
                        case '![](http://)':
                            newContent = setContent(inputer, oldContent, newContent, content, endPosition, 7, 2)
                            break
                        default:
                            newContent = oldContent.substring(0, endPosition) + content + oldContent.substring(endPosition, oldContent.length)
                            inputer.value = newContent
                            break
                    }
                } else {
                    switch (content) {
                        case '**Blod**':
                            newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '**', '**')
                            break
                        case '*Italic*':
                            newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '*', '*')
                            break
                        case '[Link](http://)':
                            newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '[', '](http://)')
                            break
                        case '`code`':
                            newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '`', '`')
                            break
                        case '![](http://)':
                            newContent = updateContent(inputer, oldContent, newContent, startPosition, endPosition, '[', '](http://)')
                            break
                        default:
                            return false
                            break
                    }
                }
    
                if (newContent.length) {
                    this.$store.dispatch('textInput', newContent)
                }
            },
            articleAdd() {
                this.$store.dispatch('newArticle')
            },
            fullPage() {
                if (screenfull.request()) {
                    screenfull.request()
                } else {
               screenfull.exit()
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../static/sass/components/_sidenav";
</style>