<template>
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
        methods:{
            seleteArticle(i) {
                this.$store.dispatch('selectArticle',i-1)
                // this.$refs.leftSidenav.close();
                // let closePage = document.getElementById('closepage')

                // closePage.classList.remove('md-active')
            },
            deleteArticle(i) {
                console.log('1')
                this.$store.dispatch('deleteArticle',i-1)
            }
        }
    }
</script>

<style lang="scss">
    @import '../../static/sass/components/_menu';
</style>