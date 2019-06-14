(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backoffice/backoffice"],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);



let BackOfficeApp = class BackOfficeApp extends vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Vue"] {
    constructor() {
        super(...arguments);
        this.swiperOption = {
            pagination: {
                el: '.swiper-pagination'
            }
        };
        this.swiperSlides = [1, 2, 3, 4, 5];
    }
    mounted() {
        console.log('Hello World');
        setInterval(() => {
            console.log('simulate async data');
            if (this.swiperSlides.length < 10) {
                this.swiperSlides.push(this.swiperSlides.length + 1);
            }
        }, 3000);
    }
};
BackOfficeApp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        components: {
            swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiper"],
            swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiperSlide"]
        }
    })
], BackOfficeApp);
/* harmony default export */ __webpack_exports__["default"] = (BackOfficeApp);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm._v("\n    From back office app component\n\n    "),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#exampleModal"
          }
        },
        [_vm._v("\n        Launch demo modal\n    ")]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "swiper",
        { attrs: { options: _vm.swiperOption } },
        [
          _vm._l(_vm.swiperSlides, function(slide, index) {
            return _c("swiper-slide", { key: index }, [
              _vm._v("I'm Slide " + _vm._s(slide))
            ])
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "swiper-pagination",
            attrs: { slot: "pagination" },
            slot: "pagination"
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [_vm._v("Modal title")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v("\n                    ...\n                ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "button" } },
                  [_vm._v("Save changes")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backoffice/BackOfficeApp.vue":
/*!***************************************************!*\
  !*** ./resources/js/backoffice/BackOfficeApp.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackOfficeApp.vue?vue&type=template&id=7b2cb960& */ "./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960&");
/* harmony import */ var _BackOfficeApp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackOfficeApp.vue?vue&type=script&lang=ts& */ "./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackOfficeApp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backoffice/BackOfficeApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts&":
/*!****************************************************************************!*\
  !*** ./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOfficeApp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./BackOfficeApp.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/BackOfficeApp.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOfficeApp_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BackOfficeApp.vue?vue&type=template&id=7b2cb960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backoffice/BackOfficeApp.vue?vue&type=template&id=7b2cb960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackOfficeApp_vue_vue_type_template_id_7b2cb960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backoffice/backoffice.ts":
/*!***********************************************!*\
  !*** ./resources/js/backoffice/backoffice.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackOfficeApp_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackOfficeApp.vue */ "./resources/js/backoffice/BackOfficeApp.vue");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_3__);




new vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]({
    render: h => h(_BackOfficeApp_vue__WEBPACK_IMPORTED_MODULE_2__["default"]),
}).$mount('#app');


/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./resources/js/backoffice/backoffice.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jessicayeoh/Sites/laravel-mix-multiple-vendors/resources/js/backoffice/backoffice.ts */"./resources/js/backoffice/backoffice.ts");


/***/ })

},[[0,"/js/backoffice/manifest","/js/backoffice/vendor"]]]);