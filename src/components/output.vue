<template>
    <div class="output-main" :class="{outputThemeBlack:changeTheme}" :style="{float:themeOutputFloat,margin:themeMargin}">
        <yzz-outputtoolbar></yzz-outputtoolbar>
        <div class="markdown-body" v-html="ripeTxt" id="output">
        </div>
    </div>
</template>

<script>
    import yzzOutputtoolbar from './output-toolbar'
    
    export default {
        name: 'outputer',
        components: {
            yzzOutputtoolbar
        },
        computed: {
            ripeTxt() {
                return this.$store.getters.articleMd
            },
            changeTheme() {
                return !this.$store.state.theme
            },
            themeOutputFloat() {
                return this.$store.state.themeOutputFloat
            },
            themeMargin() {
                return this.$store.state.themeMargin
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_output';
</style>