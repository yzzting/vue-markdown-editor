<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" id="custom" @click.native="openDialog('dialog4')">
                    <md-icon>search</md-icon>
                    <md-tooltip md-direction="bottom">查找内容</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button @click.native="showSidenav" class="md-icon-button md-raised md-dense">
                    <md-icon>keyboard_arrow_up</md-icon>
                    <md-tooltip md-direction="bottom">隐藏工具栏</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeEditView('edit-view')">
                    <md-icon>desktop_mac</md-icon>
                    <md-tooltip md-direction="bottom">编辑模式</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeTheme">
                    <md-icon>cached</md-icon>
                    <md-tooltip md-direction="bottom">主题切换</md-tooltip>
                </md-button>
            </li>
    
        </ul>
    
        <md-dialog-alert :md-title="alert2.title" :md-content-html="alert2.contentHtml" ref="dialog4">
        </md-dialog-alert>
    
    </div>
</template>

<script>
    export default {
        name: 'yzz-inputtoolbar',
        data: () => ({
            alert2: {
                title: '溫馨提示',
                contentHtml: '這個功能暫時待定...正在構思中'
            }
        }),
        methods: {
            showSidenav() {
                this.$store.dispatch('showMenu')
            },
            changeEditView(change) {
                this.$store.dispatch('changeThemeFloat', 'edit-view')
            },
            openDialog(ref) {
                this.$refs[ref].open();
            },
            changeTheme() {
                this.$store.dispatch('changeTheme')
            },
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>
