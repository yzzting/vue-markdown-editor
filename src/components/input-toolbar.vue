<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
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
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeEditView('view')">
                    <md-icon>desktop_mac</md-icon>
                    <md-tooltip md-direction="bottom">编辑模式</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>help_outline</md-icon>
                    <md-tooltip md-direction="bottom">Markdown语法帮助</md-tooltip>
                </md-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'yzz-inputtoolbar',
        methods: {
            showSidenav() {
                this.$store.dispatch('showMenu')
            },
            changeEditView(change) {
                console.log('123')
                this.$store.dispatch('changeThemeFloat', 'view')
    
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>