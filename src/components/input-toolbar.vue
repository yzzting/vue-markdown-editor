<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>search</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button @click.native="showSidenav" class="md-icon-button md-raised md-dense">
                    <md-icon>keyboard_arrow_up</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>desktop_mac</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button md-raised md-dense">
                    <md-icon>help_outline</md-icon>
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
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>