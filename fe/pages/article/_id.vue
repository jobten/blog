<template>
    <div class="kkb-container">
        <UserDisplay :user="article.author">
            <el-button type="success" v-if="isFollow" @click="unfollow">已关注</el-button>
            <el-button type="success" v-else @click="follow">关注</el-button>
        </UserDisplay>
    </div>
</template>
<script>
import UserDisplay from '~/components/UserDisplay.vue'

export default {
    components: { UserDisplay },
    data() {
        return {
            isFollow: false,
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
    },
    methods: {
        getArticle() {
            let ret = await this.$http.get('/article/'+this.id)
            this.article = ret.data
        },
        follow() {

        },
        unfollow() {

        }
    }
}
</script>