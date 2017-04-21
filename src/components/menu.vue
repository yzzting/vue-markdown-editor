<template>
    <md-sidenav ref="leftSidenav">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <h3 class="md-title">vue-markdown-editor</h3>
            </div>
        </md-toolbar>
        <div class="menu-main">
            <md-list-expand class="article-list">
                <md-list>
                    <template v-for='i in articleList.length'>
                        <md-list-item :class='{"current": articleList[i - 1].current}' class="article-list-item" @click.native="seleteArticle(i)">
                            <span class="article-title">
                                {{ articleList[i - 1].content.split('\n')[0] }}
                            </span>
                            <md-button @click.native="deleteArticle(i)" class="md-icon-button">
                                <md-icon>delete</md-icon>
                            </md-button>
                        </md-list-item>
                    </template>
                </md-list>
            </md-list-expand>
        </div>
    </md-sidenav>
</template>

<script>
    export default {
        name: 'yzz-menu',
        data() {
            return {}
        },
        computed: {
            articleList() {
                return this.$store.getters.articleList
            }
        },
        methods: {
            seleteArticle(i) {
                this.$store.dispatch('selectArticle', i - 1)
            },
            deleteArticle(i) {
                this.$store.dispatch('deleteArticle', i - 1)
                // this.toggleLeftSidenav()
                // this.$store.dispatch('selectArticle', i - 1)
            },
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_menu';
</style>