(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teste-midia-teste-midia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/teste-midia/teste-midia.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/teste-midia/teste-midia.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Ionic Image Upload\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content padding>\r\n  <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n \r\n  <ion-list>\r\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-img [src]=\"img.path\"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        {{ img.name }}\r\n      </ion-label>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\r\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n \r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n      Select Image</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/teste-midia/teste-midia.module.ts":
/*!***************************************************!*\
  !*** ./src/app/teste-midia/teste-midia.module.ts ***!
  \***************************************************/
/*! exports provided: TesteMidiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteMidiaPageModule", function() { return TesteMidiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teste_midia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teste-midia.page */ "./src/app/teste-midia/teste-midia.page.ts");







const routes = [
    {
        path: '',
        component: _teste_midia_page__WEBPACK_IMPORTED_MODULE_6__["TesteMidiaPage"]
    }
];
let TesteMidiaPageModule = class TesteMidiaPageModule {
};
TesteMidiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_teste_midia_page__WEBPACK_IMPORTED_MODULE_6__["TesteMidiaPage"]]
    })
], TesteMidiaPageModule);



/***/ }),

/***/ "./src/app/teste-midia/teste-midia.page.scss":
/*!***************************************************!*\
  !*** ./src/app/teste-midia/teste-midia.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlLW1pZGlhL3Rlc3RlLW1pZGlhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/teste-midia/teste-midia.page.ts":
/*!*************************************************!*\
  !*** ./src/app/teste-midia/teste-midia.page.ts ***!
  \*************************************************/
/*! exports provided: TesteMidiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesteMidiaPage", function() { return TesteMidiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TesteMidiaPage = class TesteMidiaPage {
    constructor() { }
    ngOnInit() {
    }
};
TesteMidiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teste-midia',
        template: __webpack_require__(/*! raw-loader!./teste-midia.page.html */ "./node_modules/raw-loader/index.js!./src/app/teste-midia/teste-midia.page.html"),
        styles: [__webpack_require__(/*! ./teste-midia.page.scss */ "./src/app/teste-midia/teste-midia.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TesteMidiaPage);



/***/ })

}]);
//# sourceMappingURL=teste-midia-teste-midia-module-es2015.js.map