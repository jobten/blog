exports.ids = [7];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_id.vue?vue&type=template&id=0a664364&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kkb-container"},[_vm._ssrNode("<h1>用户中心</h1> "),_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"关注"+_vm.following.length,"name":"following"}},_vm._l((_vm.following),function(user){return _c('div',{key:user._id},[_c('UserDisplay',{attrs:{"user":user}})],1)}),0),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"粉丝"+_vm.followers.length,"name":"followers"}},_vm._l((_vm.followers),function(user){return _c('div',{key:user._id},[_c('UserDisplay',{attrs:{"user":user}})],1)}),0)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_id.vue?vue&type=template&id=0a664364&

// EXTERNAL MODULE: ./components/UserDisplay.vue + 4 modules
var UserDisplay = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      activeName: 'following',
      following: [],
      followers: []
    };
  },

  components: {
    UserDisplay: UserDisplay["a" /* default */]
  },

  mounted() {
    let userid = this.$route.params.id;
    this.userid = userid;

    if (userid) {
      // 加载关注的人
      this.loadFollowing(); // 加载粉丝

      this.loadFollowers(); // 加载文章

      this.loadArticles();
    }
  },

  methods: {
    async loadFollowing() {
      let ret = await this.$http.get(`/user/${this.userid}/following`);

      if (ret.code == 0) {
        this.following = ret.data;
      }
    },

    async loadFollowers() {
      let ret = await this.$http.get(`/user/${this.userid}/followers`);

      if (ret.code == 0) {
        this.followers = ret.data;
      }
    },

    loadArticles() {}

  }
});
// CONCATENATED MODULE: ./pages/user/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e09c94c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map