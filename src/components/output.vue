<template>
    <div class="output-main">
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
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_output';
</style>