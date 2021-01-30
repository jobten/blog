exports.ids = [1];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("06add996", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".article{padding:10px;background:#fff}.rotate{transform:rotate(180deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=template&id=50e7b214&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kkb-container"},[_c('UserDisplay',{attrs:{"user":_vm.article.author}},[(_vm.isFollow)?_c('el-button',{attrs:{"type":"success"},on:{"click":_vm.cancelfollow}},[_vm._v("已关注")]):_c('el-button',{on:{"click":_vm.follow}},[_vm._v("关注")])],1),_vm._ssrNode(" "),_c('el-divider'),_vm._ssrNode(" <div class=\"article\">"+(_vm._s(_vm.article.article_html))+"</div> "),_c('el-divider'),_vm._ssrNode(" "),_c('el-button',{attrs:{"type":_vm.likeStatus?'success':'default'},on:{"click":_vm.likeAction}},[_c('i',{staticClass:"el-icon-thumb"},[_vm._v(_vm._s(_vm.article.like))])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=template&id=50e7b214&

// EXTERNAL MODULE: ./components/UserDisplay.vue + 4 modules
var UserDisplay = __webpack_require__(28);

// EXTERNAL MODULE: external "highlight.js/lib/core"
var core_ = __webpack_require__(93);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_id.vue?vue&type=script&lang=js&
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




const highlightCode = () => {
  const preEl = document.querySelectorAll('pre');
  preEl.forEach(el => {
    core_default.a.highlightBlock(el);
  });
};

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    UserDisplay: UserDisplay["a" /* default */]
  },

  mounted() {
    let {
      id
    } = this.$route.params;
    this.id = id;
    this.getArticle(); // 用户已登录 

    const token = localStorage.getItem('KKB_USER_TOKEN');
    this.token = token;
  },

  data() {
    return {
      isFollow: false,
      likeStatus: false,
      dislikeStatus: false,
      article: {
        title: '',
        author: {}
      }
    };
  },

  updated() {
    highlightCode();
  },

  methods: {
    async getLikeStatus() {
      // 修改likeStatus
      let ret = await this.$http.get('/user/article/' + this.id);

      if (ret.code == 0) {
        this.likeStatus = ret.data.like;
        this.dislikeStatus = ret.data.dislike;
      } // if(ret.code==0){
      // this.likeStatus = ret.data.like
      // this.dislikeStatus = ret.data.dislike
      // }

    },

    async likeAction() {
      // 点赞和取消
      let type = this.likeStatus ? 'delete' : 'put';
      let ret = await this.$http[type]('/user/likeArticle/' + this.id);

      if (ret.code == 0) {
        // 取巧，简单粗暴
        this.getArticle(); // this.getLikeStatus()

        this.$notify({
          title: ret.message,
          type: 'success'
        });
      }
    },

    async getArticle() {
      let ret = await this.$http.get('/article/' + this.id);
      this.article = ret.data;

      if (this.token) {
        this.checkFollowStatus();
        this.getLikeStatus();
      }
    },

    async checkFollowStatus() {
      // 获取关注状态
      let ret = await this.$http.get('/user/follow/' + this.article.author._id);

      if (ret.code == 0) {
        this.isFollow = ret.data.isFollow;
      }
    },

    async follow() {
      let ret = await this.$http.put('/user/follow/' + this.article.author._id);
      this.checkFollowStatus();
    },

    async cancelfollow() {
      let ret = await this.$http.delete('/user/follow/' + this.article.author._id);
      this.checkFollowStatus();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0f5b016d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(8).default("03962918", content, true)

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=_id.js.map