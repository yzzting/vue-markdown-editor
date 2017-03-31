<template>
    <div class="output-main" :class="{outputThemeBlack:changeTheme}">
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
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_output';
</style>