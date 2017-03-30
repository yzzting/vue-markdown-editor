<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>list</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>desktop_mac</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>cached</md-icon>
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
                pageButton: 'fullscreen'
            }
        },
        methods: {
            fullPage() {
                if (screenfull.request()) {
                    screenfull.request()
                } else {
                    screenfull.exit()
                    if (this.pageButton == 'fullscreen') {
                        this.pageButton = 'fullscreen_exit'
                    } else {
                        this.pageButton = 'fullscreen'
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>