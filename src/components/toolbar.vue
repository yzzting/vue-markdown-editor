<template>
    <div class="toolbar-main">
        <ul class="toolbar-list">
            <li class="toolbar-item">
                <md-button class="md-icon-button md-size-2x">
                    <md-icon>search</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_up</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button">
                    <md-icon>desktop_mac</md-icon>
                </md-button>
            </li>
            <li class="toolbar-item">
                <md-button class="md-icon-button">
                    <md-icon>help_outline</md-icon>
                </md-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'yzz-toolbar'
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/toolbar';
</style>