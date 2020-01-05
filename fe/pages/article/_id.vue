<template>
    <div class="kkb-container">
        <UserDisplay :user="article.author">
            <el-button type="success" v-if="isFollow" @click="unfollow">已关注</el-button>
            <el-button v-else @click="follow">关注</el-button>
        </UserDisplay>

        <el-divider></el-divider>

        <div class="article" v-html="article.article_html"></div>

        <el-divider></el-divider>

        <el-button @click="likeAction" :type="likeStatus ?  'success': 'info' ">
            <i class="el-icon-thumb">{{ article.like }}</i>
        </el-button>

        <el-button @click="dislikeAction" :type="dislikeStatus ?  'success': 'info' ">
            <i class="el-icon-thumb rotate180">{{ article.dislike }}</i>
        </el-button>


    </div>
</template>
<script>
import UserDisplay from '~/components/UserDisplay.vue'

const TOKEN_KEY = 'KKB_USER_TOKEN'

export default {
    components: { UserDisplay },
    data() {
        return {
            isFollow: false,
            likeStatus:false,
            dislikeStatus:false,
            article: {
                titles: "",
                views: 0,
                like: 0,
                dislike: 0,
                author: {

                }
            }
        }
    },
    mounted() {
        let { id } = this.$route.params
        this.id = id
        if (id) {
            this.getArticle()
        }

        let token = localStorage.getItem(TOKEN_KEY)
        if(token){
            // 用户登录状态
            this.getLikeStatus()
        }
    },
    methods: {
        async getArticle() {
            let ret = await this.$http.get('/article/'+this.id)
            this.article = ret.data
            this.checkFollowStatus()
        },

        async follow() {
            let ret = await this.$http.put('/user/follow/' + this.article.author._id)
            this.checkFollowStatus()
        },

        async unfollow() {
            let ret = await this.$http.delete('/user/follow/' + this.article.author._id)
            this.checkFollowStatus()
        },

        async checkFollowStatus() {
            const isFollow = await this.$http.get('/user/isfollow/' + this.article.author._id)
            if (isFollow) {
                this.isFollow = isFollow.data.isFollow
            }
        },

        async getLikeStatus(){
            // 获取喜欢状态
            let ret = await this.$http.get('/user/article/'+this.id)
            if(ret.code==0){
            this.likeStatus = ret.data.like
            this.dislikeStatus = ret.data.dislike
            }
        },

        async likeAction() {
            let type = this.likeStatus ? 'delete': 'put'
            const ret = await this.$http[type]('/user/likeArticle/' + this.id)
            if (ret.code == 0) {
                this.getLikeStatus()
                this.getArticle()
                this.$notify({
                title:ret.message,
                type:'success'
                })
            }
        },

        async dislikeAction() {
            let type = this.dislikeStatus ? 'delete':'put'
            let ret = await this.$http[type]('/user/dislikeArticle/'+this.id)
            if(ret.code==0){
                this.getArticle()
                this.getLikeStatus()
                this.$notify({
                title:ret.message,
                type:'success'
                })
            }
        }

    }
}
</script>

<style scoped>
    .article{
    padding:20px;
    }
</style>