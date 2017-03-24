<template>
    <div class="output-main" v-html="ripeTxt">

    </div>
</template>
<script>
    export default {
        name: 'outputer',
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