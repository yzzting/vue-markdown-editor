<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>list</md-icon>
                    <md-tooltip md-direction="bottom">内容目录</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeThemeFloat('change')">
                    <md-icon>{{changeButton}}</md-icon>
                    <md-tooltip md-direction="bottom">交换左右视图</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>desktop_mac</md-icon>
                    <md-tooltip md-direction="bottom">阅读模式</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native="changeTheme">
                    <md-icon>cached</md-icon>
                    <md-tooltip md-direction="bottom">主题切换</md-tooltip>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense" @click.native='fullPage'>
                    <md-icon>{{pageButton}}</md-icon>
                    <md-tooltip md-direction="bottom">全屏</md-tooltip>
                </md-button>
            </li>
        </ul>
    </div>
</template>

<script>
    const screenfull = require('screenfull')
    
    export default {
        name: 'yzz-outputtoolbar',
        data() {
            return {
                pageButton: 'fullscreen',
                changeButton: 'keyboard_arrow_left'
            }
        },
        methods: {
            fullPage() {
                if (screenfull.request()) {
                    screenfull.request()
                } else {
                    screenfull.exit()
                    this.pageButton = this.pageButton === 'fullscreen' ? 'fullscreen_exit' : 'fullscreen'
                }
            },
            changeTheme() {
                this.$store.dispatch('changeTheme')
            },
            changeThemeFloat(change) {
                this.$store.dispatch('changeThemeFloat','change')
                this.changeButton = this.changeButton === 'keyboard_arrow_left' ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>