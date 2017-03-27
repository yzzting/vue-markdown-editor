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
            }
        }
    }
</script>

<style lang="scss">
    @import "../../static/sass/components/_sidenav";
</style>