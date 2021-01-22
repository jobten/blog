<template>

    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="0">
            <img class="logo" src="http://pax.cn/zh/images/logo2.png" alt="">
          </el-menu-item>

        <el-menu-item index="1">
          <nuxt-link to="/">首页</nuxt-link>
        </el-menu-item>


        <el-menu-item @click="logout" v-if="userinfo.id" index="5" class="pull-right">
            <span>退出</span>
        </el-menu-item>

        <el-menu-item v-if="userinfo.id" index="3" class="pull-right">
          <nuxt-link to="/editor/new">
            <el-button type='primary'>写文章</el-button>
          </nuxt-link>
          <UserDisplay :user="userinfo">

          </UserDisplay>
        </el-menu-item>

        <el-menu-item v-if="!userinfo.id" index="2" class="pull-right">
          <nuxt-link to="/register">注册</nuxt-link>
        </el-menu-item>

          <el-menu-item v-if="!userinfo.id" index="3" class="pull-right">
          <nuxt-link to="/login">登录</nuxt-link>
        </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>

        <nuxt />
      </el-main>
    </el-container>



</template>
<script>
import UserDisplay from '~/components/UserDisplay.vue'


export default {
  components:{
    UserDisplay
  },

  mounted(){
    this.getUserInfo()
  },

  computed:{
    userinfo(){
      return this.$store.state.user
    }
  },
  methods:{
    getUserInfo(){
      // 获取用户个人信息，如果有登录状态
      let token = localStorage.getItem('KKB_USER_TOKEN')
      if(token){
        this.$store.dispatch('user/detail')
      }
    },
    logout(){
      localStorage.removeItem('KKB_USER_TOKEN')
      this.$store.commit('user/LOGOUT')
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.pull-right{
  float:right !important;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.logo{
  height:48px;
}
a{
  text-decoration: none;
}
i.rotate180{
  transform: rotate(180deg);
}
.el-icon-thumb{
  letter-spacing: 5px;
}

</style>
