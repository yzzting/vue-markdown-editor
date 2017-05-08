<template>
    <div class="output-main" :class="{outputThemeBlack:changeTheme}" :style="{float:themeOutputFloat,margin:themeMargin}">
        <yzz-outputtoolbar></yzz-outputtoolbar>
        <div class="markdown-body" v-html="ripeTxt" id="output" :style="{fontFamily: updatedFont}">
        </div>
    </div>
</template>

<script>
    import yzzOutputtoolbar from './output-toolbar'
    import { mapGetters,mapState } from 'vuex'

    
    export default {
        name: 'outputer',
        components: {
            yzzOutputtoolbar
        },
        computed: {
            ...mapGetters({
                ripeTxt: 'articleMd',
                updatedFont: 'articleFont'
            }),
            ...mapState({
                changeTheme: state => !state.theme,
                themeOutputFloat: state => state.themeOutputFloat,
                themeMargin: state => state.themeMargin
            })
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_output';
</style>