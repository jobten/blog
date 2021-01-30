exports.ids = [2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3013f102", content, true, context)
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".md-editor{width:100%;height:100vh;outline:none}.write-btn{position:fixed;z-index:100;right:30px;top:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/new.vue?vue&type=template&id=5bd9737a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"write-btn\">","</div>",[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1),_vm._ssrNode(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('textarea',{ref:"editor",staticClass:"md-editor",domProps:{"value":_vm.content},on:{"input":_vm.update}})]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"markdown-body",domProps:{"innerHTML":_vm._s(_vm.compiledContent)}})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/new.vue?vue&type=template&id=5bd9737a&

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(95);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js/lib/core"
var core_ = __webpack_require__(93);
var core_default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/javascript"
var javascript_ = __webpack_require__(96);
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript_);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/new.vue?vue&type=script&lang=js&
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





const highlightCode = () => {
  const preEl = document.querySelectorAll('pre');
  preEl.forEach(el => {
    core_default.a.highlightBlock(el);
  });
};

/* harmony default export */ var newvue_type_script_lang_js_ = ({
  data() {
    return {
      // timer:
      content: ''
    };
  },

  mounted() {
    this.timer = null;
    this.bindEvents();
    core_default.a.registerLanguage('javascript', javascript_default.a);
    external_marked_default.a.setOptions({
      rendered: new external_marked_default.a.Renderer() // highlight(code, language){
      //       // highlightCode()
      //   if (hljs.getLanguage(language)) {
      //     return hljs.highlight(language, code).value
      //   }
      // }

    });
  },

  computed: {
    compiledContent() {
      return external_marked_default()(this.content, {});
    }

  },
  updated: function () {
    highlightCode();
  },
  // lodash/debounce
  methods: {
    bindEvents() {
      this.$refs.editor.addEventListener('paste', async e => {
        const files = e.clipboardData.files;
        console.log(files); // 直接上传
      });
      this.$refs.editor.addEventListener('drop', async e => {
        const files = e.dataTransfer.files;
        console.log(files); // @todo 文件上传

        e.preventDefault();
      });
    },

    update(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.content = e.target.value;
      }, 350);
    },

    async submit() {
      // 文章列表，点赞，关注，草稿
      // user =》 aticle  一对多
      let ret = await this.$http.post('/article/create', {
        content: this.content,
        //  selected:false
        compiledContent: this.compiledContent // 显示只读取这个

      });

      if (ret.code == 0) {
        this.$notify({
          title: '创建成功',
          type: 'success',
          message: `文章《${ret.data.title}》创建成功`
        });
        setTimeout(() => {
          this.$router.push({
            path: '/article/' + ret.data.id
          });
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var editor_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/new.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  editor_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ce49fe3c"
  
)

/* harmony default export */ var editor_new = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=new.js.map