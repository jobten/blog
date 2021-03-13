exports.ids = [7];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article-item{padding:10px 15px;border-bottom:2px solid #eee}.article-item h2{height:60px}.article-item a{color:#67c23a}.article-item .action{display:inline-block;text-align:center;margin-left:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_id.vue?vue&type=template&id=312bc1a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kkb-container"},[_vm._ssrNode("<h1>用户中心</h1> "),_c('el-tabs',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":"文章"+_vm.articles.length,"name":"articles"}},_vm._l((_vm.articles),function(article){return _c('div',{key:article._id,attrs:{"article":article}},[_c('ArticleItem',{attrs:{"article":article}})],1)}),0),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"关注"+_vm.following.length,"name":"following"}},_vm._l((_vm.following),function(user){return _c('div',{key:user._id},[_c('UserDisplay',{attrs:{"user":user}})],1)}),0),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"粉丝"+_vm.followers.length,"name":"followers"}},_vm._l((_vm.followers),function(user){return _c('div',{key:user._id},[_c('UserDisplay',{attrs:{"user":user}})],1)}),0)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_id.vue?vue&type=template&id=312bc1a2&

// EXTERNAL MODULE: ./components/UserDisplay.vue + 4 modules
var UserDisplay = __webpack_require__(28);

// EXTERNAL MODULE: ./components/ArticleItem.vue + 4 modules
var ArticleItem = __webpack_require__(98);

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
      activeName: 'articles',
      articles: [],
      following: [],
      followers: []
    };
  },

  components: {
    UserDisplay: UserDisplay["a" /* default */],
    ArticleItem: ArticleItem["a" /* default */]
  },

  mounted() {
    let userid = this.$route.params.id;
    this.userid = userid;

    if (userid) {
      // 加载关注的人
      this.loadFollowing(); // 加载粉丝

      this.loadFollowers(); // 加载文章

      this.loadArticles(userid);
    }
  },

  methods: {
    async loadArticles(userid) {
      let ret = await this.$http.get('/article');

      if (ret.code == 0) {
        this.articles = [];
        ret.data.forEach(article => {
          if (article.author._id === userid) {
            this.articles.push(article);
          }
        });
      }
    },

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
    }

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

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("93f7aa7c", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleItem.vue?vue&type=template&id=f15615a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-item"},[_vm._ssrNode("<h2 style=\"width:900px\">","</h2>",[_c('nuxt-link',{attrs:{"to":"/article/"+_vm.article._id}},[_vm._v("\n\n      "+_vm._s(_vm.article.title)+"\n  ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<p>","</p>",[_c('UserDisplay',{attrs:{"user":_vm.article.author}}),_vm._ssrNode(" <span class=\"action\"><i class=\"el-icon-view\">"+_vm._ssrEscape(_vm._s(_vm.article.views))+"</i></span> <span class=\"action\"><i class=\"el-icon-thumb\">"+_vm._ssrEscape(_vm._s(_vm.article.like))+"</i></span>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleItem.vue?vue&type=template&id=f15615a6&

// EXTERNAL MODULE: ./components/UserDisplay.vue + 4 modules
var UserDisplay = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleItem.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var ArticleItemvue_type_script_lang_js_ = ({
  props: ['article'],
  components: {
    UserDisplay: UserDisplay["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/ArticleItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleItemvue_type_script_lang_js_ = (ArticleItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ArticleItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c791709"
  
)

/* harmony default export */ var ArticleItem = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map