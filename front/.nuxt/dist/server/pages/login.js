exports.ids = [4];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=719ba5f9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-container"},[_c('el-form',{ref:"loginForm",staticClass:"login-form",attrs:{"label-width":"100px","model":_vm.form,"rules":_vm.rules}},[_c('div',{staticClass:"title-container"},[_c('img',{attrs:{"src":"/logo.png","alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"email","label":"邮箱"}},[_c('el-input',{attrs:{"placeholder":"请输入邮箱"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"captcha-container",attrs:{"prop":"captcha","label":"图片验证码"}},[_c('div',{staticClass:"captcha"},[_c('img',{attrs:{"src":_vm.code.captcha},on:{"click":_vm.resetCaptcha}})]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入验证码"},model:{value:(_vm.form.captcha),callback:function ($$v) {_vm.$set(_vm.form, "captcha", $$v)},expression:"form.captcha"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"captcha-container",attrs:{"prop":"emailcode","label":"邮箱验证码"}},[_c('div',{staticClass:"captcha"},[_c('el-button',{attrs:{"disabled":_vm.send.timer>0,"type":"primary"},on:{"click":_vm.sendEmailCode}},[_vm._v(_vm._s(_vm.sendText))])],1),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入邮件验证码"},model:{value:(_vm.form.emailcode),callback:function ($$v) {_vm.$set(_vm.form, "emailcode", $$v)},expression:"form.emailcode"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"passwd","label":"密码"}},[_c('el-input',{attrs:{"type":"password","placeholder":"请输入密码"},model:{value:(_vm.form.passwd),callback:function ($$v) {_vm.$set(_vm.form, "passwd", $$v)},expression:"form.passwd"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":" "}},[_c('el-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleLogin($event)}}},[_vm._v("登录")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/register"}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("注册")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=719ba5f9&

// EXTERNAL MODULE: external "md5"
var external_md5_ = __webpack_require__(92);
var external_md5_default = /*#__PURE__*/__webpack_require__.n(external_md5_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'login',
  methods: {
    async sendEmailCode() {
      // @todo
      await this.$http.get('/sendcode?email=' + this.form.email);
      this.send.timer = 10;
      this.timer = setInterval(() => {
        this.send.timer -= 1;

        if (this.send.timer === 0) {
          clearInterval(this.timer);
        }
      }, 1000);
    },

    resetCaptcha() {
      this.code.captcha = '/api/captcha?_t' + new Date().getTime();
    },

    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // @todo 发送注册请求
          let obj = {
            email: this.form.email,
            passwd: external_md5_default()(this.form.passwd),
            captcha: this.form.captcha,
            emailcode: this.form.emailcode
          };
          let ret = await this.$http.post('/user/login', obj); // code=0 就是成功

          console.log(ret);

          if (ret.code == 0) {
            // ttoken的存储 登录成功，返回token
            this.$message.success('登录成功');
            localStorage.setItem('KKB_USER_TOKEN', ret.data.token);
            setTimeout(() => {
              this.$router.push("/");
            }, 500);
          } else {
            this.$message.error(ret.message);
          }
        } else {
          console.log('校验失败');
        }
      });
    }

  },
  computed: {
    sendText() {
      if (this.send.timer <= 0) {
        return '发送';
      }

      return `${this.send.timer}s后发送`;
    }

  },

  data() {
    return {
      send: {
        timer: 0
      },
      form: {
        email: "1017665401@qq.com",
        passwd: "123456",
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
        emailcode: [{
          required: true,
          message: "请输入邮箱验证码"
        }],
        passwd: [{
          required: true,
          pattern: /^[\w_-]{6,12}$/g,
          message: "请输入6~12位密码"
        }]
      },
      code: {
        captcha: "/api/captcha"
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1c43da96"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map