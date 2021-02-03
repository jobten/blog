exports.ids = [6];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uc_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uc_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uc_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uc_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_uc_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#drag{height:100px;line-height:100px;border:2px dashed #eee;text-align:center}.cube-container .cube{width:14px;height:14px;line-height:12px;border:1px solid #000;background:#eee;float:left}.cube-container .cube>.success{background:green}.cube-container .cube>.uploading{background:#00f}.cube-container .cube>.error{background:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/uc.vue?vue&type=template&id=3f40559b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>用户中心</h1> <i class=\"el-icon-loading\"></i> <div id=\"drag\"><input type=\"file\" name=\"file\"></div> "),_vm._ssrNode("<div>","</div>",[_c('el-progress',{attrs:{"stroke-width":20,"text-inside":true,"percentage":_vm.uploadProgress}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('el-button',{on:{"click":_vm.uploadFile}},[_vm._v("上传")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p>计算hash的进度</p> "),_c('el-progress',{attrs:{"stroke-width":20,"text-inside":true,"percentage":_vm.hashProgress}})],2),_vm._ssrNode(" <div><div class=\"cube-container\""+(_vm._ssrStyle(null,{width:_vm.cubeWidth+'px'}, null))+">"+(_vm._ssrList((_vm.chunks),function(chunk){return ("<div class=\"cube\"><div"+(_vm._ssrClass(null,{
            'uploading':chunk.progress>0&&chunk.progress<100,
            'success':chunk.progress==100,
            'error':chunk.progress<0
          }))+(_vm._ssrStyle(null,{height:chunk.progress+'%'}, null))+">"+((chunk.progress<100 && chunk.progress>0)?("<i class=\"el-icon-loading\" style=\"color:#f56c6c\"></i>"):"<!---->")+"</div></div>")}))+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/uc.vue?vue&type=template&id=3f40559b&

// EXTERNAL MODULE: external "spark-md5"
var external_spark_md5_ = __webpack_require__(94);
var external_spark_md5_default = /*#__PURE__*/__webpack_require__.n(external_spark_md5_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/uc.vue?vue&type=script&lang=js&
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

const CHUNK_SIZE = 10 * 1024 * 1024;
/* harmony default export */ var ucvue_type_script_lang_js_ = ({
  async mounted() {
    const ret = await this.$http.get('/user/info');
    this.bindEvents();
  },

  data() {
    return {
      file: null,
      // uploadProgress:0,
      hashProgress: 0,
      chunks: []
    };
  },

  computed: {
    cubeWidth() {
      return Math.ceil(Math.sqrt(this.chunks.length)) * 16;
    },

    uploadProgress() {
      if (!this.file || this.chunks.length) {
        return 0;
      }

      const loaded = this.chunks.map(item => item.chunk.size * item.progress).reduce((acc, cur) => acc + cur, 0);
      return parseInt((loaded * 100 / this.file.size).toFixed(2));
    }

  },
  methods: {
    bindEvents() {
      const drag = this.$refs.drag;
      drag.addEventListener('dragover', e => {
        drag.style.borderColor = 'red';
        e.preventDefault();
      });
      drag.addEventListener('dragleave', e => {
        drag.style.borderColor = '#eee';
        e.preventDefault();
      });
      drag.addEventListener('drop', e => {
        const fileList = e.dataTransfer.files;
        drag.style.borderColor = '#eee';
        this.file = fileList[0];
        e.preventDefault(); // const e.dataTrans
      });
    },

    async blobToString(blob) {
      return new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = function () {
          console.log(reader.result);
          const ret = reader.result.split('').map(v => v.charCodeAt()).map(v => v.toString(16).toUpperCase()) // .map(v=>v.padStart(2,'0'))
          .join('');
          resolve(ret); // const ret = reader.
        };

        reader.readAsBinaryString(blob);
      });
    },

    async isGif(file) {
      // GIF89a 和GIF87a
      // 前面6个16进制，'47 49 46 38 39 61' '47 49 46 38 37 61'
      // 16进制的抓安环
      const ret = await this.blobToString(file.slice(0, 6));
      const isGif = ret == '47 49 46 38 39 61' || ret == '47 49 46 38 37 61';
      return isGif;
    },

    async isPng(file) {
      const ret = await this.blobToString(file.slice(0, 8));
      const ispng = ret == "89 50 4E 47 0D 0A 1A 0A";
      return ispng;
    },

    async isJpg(file) {
      const len = file.size;
      const start = await this.blobToString(file.slice(0, 2));
      const tail = await this.blobToString(file.slice(-2, len));
      const isjpg = start == 'FF D8' && tail == 'FF D9';
      return isjpg;
    },

    async isImage(file) {
      // 通过文件流来判定
      // 先判定是不是gif
      return (await this.isGif(file)) || (await this.isPng(file));
    },

    createFileChunk(file, size = CHUNK_SIZE) {
      const chunks = [];
      let cur = 0;

      while (cur < this.file.size) {
        chunks.push({
          index: cur,
          file: this.file.slice(cur, cur + size)
        });
        cur += size;
      }

      return chunks;
    },

    async calculateHashWorker() {
      return new Promise(resolve => {
        this.worker = new Worker('/hash.js');
        this.worker.postMessage({
          chunks: this.chunks
        });

        this.worker.onmessage = e => {
          const {
            progress,
            hash
          } = e.data;
          this.hashProgress = Number(progress.toFixed(2));

          if (hash) {
            resolve(hash);
          }
        };
      });
    },

    // 60fps
    // 1秒渲染60次 渲染1次 1帧，大概16.6ms
    // |帧(system task，render，script)空闲时间  |帧 painting idle   |帧   |帧   |
    // 借鉴fiber架构
    async calculateHashIdle() {
      const chunks = this.chunks;
      return new Promise(resolve => {
        const spark = new external_spark_md5_default.a.ArrayBuffer();
        let count = 0;

        const appendToSpark = async file => {
          return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);

            reader.onload = e => {
              spark.append(e.target.result);
              resolve();
            };
          });
        };

        const workLoop = async deadline => {
          // timeRemaining获取当前帧的剩余时间
          while (count < chunks.length && deadline.timeRemaining() > 1) {
            // 空闲时间，且有任务
            await appendToSpark(chunks[count].file);
            count++;

            if (count < chunks.length) {
              this.hashProgress = Number((100 * count / chunks.length).toFixed(2));
            } else {
              this.hashProgress = 100;
              resolve(spark.end());
            }
          }

          window.requestIdleCallback(workLoop);
        }; // 浏览器一旦空闲，就会调用workLoop


        window.requestIdleCallback(workLoop);
      });
    },

    async calculateHashSample() {
      // 布隆过滤器  判断一个数据存在与否
      // 1个G的文件，抽样后5M以内
      // hash一样，文件不一定一样
      // hash不一样，文件一定不一样
      return new Promise(resolve => {
        const spark = new external_spark_md5_default.a.ArrayBuffer();
        const reader = new FileReader();
        const file = this.file;
        const size = file.size;
        const offset = 2 * 1024 * 1024; // 第一个2M，最后一个区块数据全要

        let chunks = [file.slice(0, offset)];
        let cur = offset;

        while (cur < size) {
          if (cur + offset >= size) {
            // 最后一个区快
            chunks.push(file.slice(cur, cur + offset));
          } else {
            // 中间的区块
            const mid = cur + offset / 2;
            const end = cur + offset;
            chunks.push(file.slice(cur, cur + 2));
            chunks.push(file.slice(mid, mid + 2));
            chunks.push(file.slice(end - 2, end));
          }

          cur += offset;
        } // 中间的，取前中后各2各字节


        reader.readAsArrayBuffer(new Blob(chunks));

        reader.onload = e => {
          spark.append(e.target.result);
          this.hashProgress = 100;
          resolve(spark.end());
        };
      });
    },

    async uploadFile() {
      if (!this.file) {
        return;
      } // console.log(this.file)
      // if(!await this.isImage(this.file)){
      //   console.log('文件格式不对')
      // }else{
      //   console.log('格式正确')
      // }


      const chunks = this.createFileChunk(this.file); // const hash = await this.calculateHashWorker()
      // const hash1 = await this.calculateHashIdle()
      // console.log('文件hash',hash)
      // console.log('文件hash1',hash1)

      const hash = await this.calculateHashSample();
      this.hash = hash; // 问一下后端，文件是否上传过，如果没有，是否有存在的切片

      const {
        data: {
          uploaded,
          uploadedList
        }
      } = await this.$http.post('/checkfile', {
        hash: this.hash,
        ext: this.file.name.split('.').pop()
      });

      if (uploaded) {
        // 秒传
        return this.$message.success('秒传成功');
      } // console.log('文件hash2',hash2)
      // 两个hash配合
      // 抽样hash 不算全量
      // 布隆过滤器 损失一小部分的精度，换取效率


      this.chunks = chunks.map((chunk, index) => {
        // 切片的名字 hash+index
        const name = hash + '-' + index;
        return {
          hash,
          name,
          index,
          chunk: chunk.file,
          // 设置进度条，已经上传的，设为100
          progress: uploadedList.indexOf(name) > -1 ? 100 : 0
        };
      });
      await this.uploadChunks(uploadedList);
    },

    async uploadChunks(uploadedList = []) {
      const requests = this.chunks.filter(chunk => uploadedList.indexOf(chunk.name) == -1).map((chunk, index) => {
        // 转成promise
        const form = new FormData();
        form.append('chunk', chunk.chunk);
        form.append('hash', chunk.hash);
        form.append('name', chunk.name); // form.append('index',chunk.index)

        return {
          form,
          index: chunk.index,
          error: 0
        };
      }).map(({
        form,
        index
      }) => this.$http.post('/uploadfile', form, {
        onUploadProgress: progress => {
          // 不是整体的进度条了，而是每个区块有自己的进度条，整体的进度条需要计算
          this.chunks[index].progress = Number((progress.loaded / progress.total * 100).toFixed(2));
        }
      })); // @todo 并发量控制 
      // 尝试申请tcp链接过多，也会造成卡顿
      // 异步的并阿叔控制，
      // await Promise.all(requests)
      // await this.sendRequest(requests)

      await Promise.all(requests);
      await this.mergeRequest(); // const form = new FormData()
      // form.append('name','file')
      // form.append('file',this.file)
      // const ret = await this.$http.post('/uploadfile',form,{
      //   onUploadProgress:progress=>{
      //     this.uploadProgress = Number(((progress.loaded/progress.total)*100).toFixed(2))
      //   }
      // })
      // console.log(ret)
    },

    // TCP慢启动，先上传一个初始区块，比如10KB，根据上传成功时间，决定下一个区块仕20K，hi是50K，还是5K
    // 在下一个一样的逻辑，可能编程100K，200K，或者2K
    // 上传可能报错
    // 报错之后，进度条变红，开始重试
    // 一个切片重试失败三次，整体全部终止
    async sendRequest(chunks, limit = 4) {
      // limit仕并发数
      // 一个数组,长度仕limit
      // [task12,task13,task4]
      return new Promise((resolve, reject) => {
        const len = chunks.length;
        let counter = 0;
        let isStop = false;

        const start = async () => {
          if (isStop) {
            return;
          }

          const task = chunks.shift();

          if (task) {
            const {
              form,
              index
            } = task;

            try {
              await this.$http.post('/uploadfile', form, {
                onUploadProgress: progress => {
                  // 不是整体的进度条了，而是每个区块有自己的进度条，整体的进度条需要计算
                  this.chunks[index].progress = Number((progress.loaded / progress.total * 100).toFixed(2));
                }
              });

              if (counter == len - 1) {
                // 最后一个任务
                resolve();
              } else {
                counter++; // 启动下一个任务

                start();
              }
            } catch (e) {
              this.chunks[index].progress = -1;

              if (task.error < 3) {
                task.error++;
                chunks.unshift(task);
                start();
              } else {
                // 错误三次
                isStop = true;
                reject();
              }
            }
          }
        };

        while (limit > 0) {
          // 启动limit个任务
          // 模拟一下延迟
          setTimeout(() => {
            start();
          }, Math.random() * 2000);
          limit -= 1;
        }
      });
    },

    async mergeRequest() {
      const ret = await this.$http.post('/mergefile', {
        ext: this.file.name.split('.').pop(),
        size: CHUNK_SIZE,
        hash: this.hash
      });
      const url = ret.data.url;
      await this.$http.put('/user/info', {
        url: "/api" + url
      });
    },

    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.file = file;
    }

  }
});
// CONCATENATED MODULE: ./pages/uc.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ucvue_type_script_lang_js_ = (ucvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/uc.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ucvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0349a972"
  
)

/* harmony default export */ var uc = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("041bdd28", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=uc.js.map