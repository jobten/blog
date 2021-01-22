<template>
    <div :key="article._id" class="article-item">
        <nuxt-link :to="'/article/' + this.article._id">
            <h3>
                {{ this.article.title }}
            </h3>
        </nuxt-link>
        <p>
            <span class="user">
                {{this.article.author.nickname}}
                <img class="user-avatar" :src="this.article.author.avatar" alt="">
            </span>
            <span class="action">
                <i class="el-icon-view">{{this.article.views}}</i>
            </span>
            
            <span class="action">
                <i class="el-icon-thumb">{{this.article.like}}</i>
            </span>

            <span class="action">
                <i class="el-icon-thumb rotate180"></i>
                {{article.dislike}}
            </span>
   
        </p>

    </div>
</template>
<script>
export default {
    props: ['article'],
    mounted() {
        console.log('article - ', this.article)
    }
}
</script>

<style lang="scss" scoped>
.article-item{
    padding:10px 15px;
    border-bottom:2px solid #eee;
    a{
        color:#67C23A;
    }
    .action{
        display: inline-block;
        width:50px;
        i{
            letter-spacing: 5px;
        }

    }
    .user{
        display: inline-block;
        width:100px;
    }
}
</style>