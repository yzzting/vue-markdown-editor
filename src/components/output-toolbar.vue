<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeThemeFloat('change')">
                    <md-icon>{{changeButton}}</md-icon>
                    <md-tooltip md-direction="bottom">交换左右视图</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeEditView('read-view')">
                    <md-icon>desktop_mac</md-icon>
                    <md-tooltip md-direction="bottom">阅读模式</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="openDialog('dialog3')">
                    <md-icon>help_outline</md-icon>
                    <md-tooltip md-direction="bottom">快捷键帮助</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native='fullPage'>
                    <md-icon>{{pageButton}}</md-icon>
                    <md-tooltip md-direction="bottom">全屏</md-tooltip>
                </md-button>
            </li>
        </ul>
    
        <md-dialog-alert :md-title="alert2.title" :md-content-html="alert2.contentHtml" ref="dialog3">
        </md-dialog-alert>
    </div>
</template>

<script>
    const screenfull = require('screenfull')
    
    export default {
        name: 'yzz-outputtoolbar',
        data() {
            return {
                pageButton: 'fullscreen',
                changeButton: 'keyboard_arrow_left',
                alert2: {
                    title: '快捷键帮助',
                    contentHtml: '<span>请将光标foucs在编辑区,快捷键才能生效</span> <br>' + '切换主题: F7 <br>' + '隐藏工具栏: F8 <br>' + ' 编辑模式: F9 <br>' + ' 阅读模式: F10 <br>' + '插入粗体: Ctrl+B <br>' + '插入斜体: Ctrl+I <br>' + '插入链接: Ctrl+L <br>' + '插入引用: Ctrl+Y <br>' + '插入斜体: Ctrl+I <br>' + '插入标题: Ctrl+H <br>' + '插入表格: Ctrl+[ <br>' + '插入下划线: Ctrl+U <br>' + '插入图片: Ctrl+Alt+I <br>' + '插入复选框: Ctrl+Alt+C <br>' + '新建文章: Ctrl+Alt+N <br>'
                }
            }
        },
        methods: {
            fullPage() {
                if (!screenfull.isFullscreen) {
                    screenfull.request()
                } else {
                    screenfull.exit()
                }
                this.pageButton = this.pageButton === 'fullscreen' ? 'fullscreen_exit' : 'fullscreen'
            },
            changeThemeFloat(change) {
                this.$store.dispatch('changeThemeFloat', 'change')
                this.changeButton = this.changeButton === 'keyboard_arrow_left' ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
            },
            changeEditView(change) {
                this.$store.dispatch('changeThemeFloat', 'read-view')
            },
            openDialog(ref) {
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>