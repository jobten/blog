<template>
    <div class="kkb-container">
        <el-tabs v-model="activeName" @tab-click="handelClick">
            <el-tab-pane :label="'关注' + following.length" name="following">
                <div v-for="user in following" :key="user._id">
                    <UserDisplay :user="user" />
                </div>
            </el-tab-pane>
            <el-tab-pane :label="'粉丝' + followers.length" name="followers">
                <div v-for="user in followers" :key="user._id">
                    <UserDisplay :user="user" />
                </div>
            </el-tab-pane>
            <el-tab-pane :label="'文章' + articles.length" name="articles">
                <ArticleItem v-for="article in articles" :article="article" :key="article._id">
                </ArticleItem>
            </el-tab-pane>

        </el-tabs>
    </div>
</template>
<script>
import UserDisplay from '~/components/UserDisplay.vue'
import ArticleItem from '~/components/ArticleItem.vue'

export default {
    components: {
        ArticleItem,
        UserDisplay
    },
    data() {
        return {
            activeName: 'following',
            following: [],
            followers: [],
            articles: []
        }
    },
    mounted() {
        let userid = this.$route.params.id
        this.userid = userid
        if(userid){
            this.loadFollowing()
            this.loadFollowers()
            this.loadArticle()
        }
    },
    methods: {
        handelClick() {

        },
        async loadFollowers() {
            let ret = await this.$http.get('/user/' + this.userid + '/followers')
            if(ret.code === 0){
                this.followers = ret.data
            }
        },

        async loadFollowing() {
            // 关注
            let ret = await this.$http.get('/user/' + this.userid + '/following')
            if(ret.code === 0){
                this.following = ret.data
            }
        },

        async loadArticle(){
            let ret = await this.$http.get('/article')
            if(ret.code === 0){
                this.articles = ret.data
            }
        }
    }
}
</script>