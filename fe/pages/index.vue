<template>
  <div class="kkb-container">
    <ArticleItem v-for="article in articles" :article="article" :key="article._id">

    </ArticleItem>
  </div>
</template>

<script>
import ArticleItem from '~/components/ArticleItem.vue'

export default {
  async asyncData({app,  params, store}){
    return await app.$axios.get('/user/article')
      .then(ret => ({
          articles: ret.data.data
        }))
      .catch(e => {
        error({statusCode: 404, message: 'Post not found'})
      })
  },
  components: {
    ArticleItem
  }
}
</script>

<style>

</style>
