exports.ids = [5];
exports.modules = {

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=03fbe59b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-container"},[_c('el-form',{ref:"registerForm",staticClass:"login-form",attrs:{"label-width":"100px","model":_vm.form,"rules":_vm.rules}},[_c('div',{staticClass:"title-container"},[_c('img',{attrs:{"src":"/logo.png","alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"email","label":"邮箱"}},[_c('el-input',{attrs:{"placeholder":"请输入邮箱"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"captcha-container",attrs:{"prop":"captcha","label":"图片验证码"}},[_c('div',{staticClass:"captcha"},[_c('img',{attrs:{"src":_vm.code.captcha},on:{"click":_vm.resetCaptcha}})]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入验证码"},model:{value:(_vm.form.captcha),callback:function ($$v) {_vm.$set(_vm.form, "captcha", $$v)},expression:"form.captcha"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"nickname","label":"昵称"}},[_c('el-input',{attrs:{"placeholder":"请输入昵称"},model:{value:(_vm.form.nickname),callback:function ($$v) {_vm.$set(_vm.form, "nickname", $$v)},expression:"form.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"passwd","label":"密码"}},[_c('el-input',{attrs:{"type":"password","placeholder":"请输入密码"},model:{value:(_vm.form.passwd),callback:function ($$v) {_vm.$set(_vm.form, "passwd", $$v)},expression:"form.passwd"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"repasswd","label":"确认密码"}},[_c('el-input',{attrs:{"type":"password","placeholder":"请再次输入密码"},model:{value:(_vm.form.repasswd),callback:function ($$v) {_vm.$set(_vm.form, "repasswd", $$v)},expression:"form.repasswd"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":" "}},[_c('el-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleRegister($event)}}},[_vm._v("注册")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=03fbe59b&

// EXTERNAL MODULE: external "md5"
var external_md5_ = __webpack_require__(92);
var external_md5_default = /*#__PURE__*/__webpack_require__.n(external_md5_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&
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

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  layout: 'login',
  methods: {
    resetCaptcha() {
      this.code.captcha = '/api/captcha?_t' + new Date().getTime();
    },

    handleRegister() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          console.log('校验成功'); // @todo 发送注册请求

          let obj = {
            email: this.form.email,
            nickname: this.form.nickname,
            passwd: external_md5_default()(this.form.passwd),
            captcha: this.form.captcha
          };
          let ret = await this.$http.post('/user/register', obj); // code=0 就是成功

          console.log(ret);

          if (ret.code == 0) {
            this.$alert('注册成功', '成功', {
              confirmButtonText: "去登录",
              callback: () => {
                this.$router.push("/login");
              }
            });
          } else {
            this.$message.error(ret.message);
          }
        } else {
          console.log('校验失败');
        }
      });
    }

  },

  data() {
    return {
      form: {
        email: "1017665401@qq.com",
        nickname: "Will",
        passwd: "123456",
        repasswd: "123456",
        captcha: ""
      },
      rules: {
        email: [{
          required: true,
          message: "请输入邮箱"
        }, {
          type: 'email',
          message: "请输入正确的邮箱格式"
        }],
        captcha: [{
          required: true,
          message: "请输入验证码"
        }],
        nickname: [{
          required: true,
          message: "请输入昵称"
        }],
        passwd: [{
          required: true,
          pattern: /^[\w_-]{6,12}$/g,
          message: "请输入6~12位密码"
        }],
        repasswd: [{
          required: true,
          message: "请再次输入密码"
        }, {
          validator: (rule, value, callback) => {
            if (value !== this.form.passwd) {
              callback(new Error('两次密码不一致'));
            }

            callback();
          }
        }]
      },
      code: {
        captcha: "/api/captcha"
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "20340e07"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map