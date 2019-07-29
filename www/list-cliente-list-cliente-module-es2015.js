(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-cliente-list-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list-cliente/list-cliente.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-cliente/list-cliente.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button href=\"./home\"> <ion-icon\r\n          name=\"arrow-back\"></ion-icon></ion-button>\r\n          </ion-buttons>\r\n    <ion-title>Listar Clientes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-card *ngFor=\"let cliente of lista_clientes\">\r\n  <ion-card-header>\r\n    <ion-card-subtitle>Algo para se pensar</ion-card-subtitle>\r\n    <ion-card-title>Nome:{{cliente.nomeCliente }}</ion-card-title>\r\n    \r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    Celular:{{cliente.celularCliente }}<br>\r\n    Telefone:{{cliente.telefoneCliente }}<br>\r\n    CEP:{{cliente.cepCliente}}<br>\r\n    Número da casa:{{cliente.numCasaCliente}}<br>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n\r\n<ion-button color=\"light\" shape=\"round\" href=\"./cad-cliente\">Clique Aqui para Cadastrar Cliente</ion-button>\r\n<ion-button color=\"light\" shape=\"round\" href=\"./home\">Clique Aqui para Página Inicial</ion-button>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/list-cliente/list-cliente.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-cliente/list-cliente.module.ts ***!
  \*****************************************************/
/*! exports provided: ListClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientePageModule", function() { return ListClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-cliente.page */ "./src/app/list-cliente/list-cliente.page.ts");







const routes = [
    {
        path: '',
        component: _list_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ListClientePage"]
    }
];
let ListClientePageModule = class ListClientePageModule {
};
ListClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ListClientePage"]]
    })
], ListClientePageModule);



/***/ }),

/***/ "./src/app/list-cliente/list-cliente.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/list-cliente/list-cliente.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtY2xpZW50ZS9saXN0LWNsaWVudGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-cliente/list-cliente.page.ts":
/*!***************************************************!*\
  !*** ./src/app/list-cliente/list-cliente.page.ts ***!
  \***************************************************/
/*! exports provided: ListClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClientePage", function() { return ListClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _diarista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diarista.service */ "./src/app/diarista.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");




let ListClientePage = class ListClientePage {
    constructor(http, DiaristaService) {
        this.http = http;
        this.DiaristaService = DiaristaService;
        this.lista_clientes = new Array();
    }
    ngOnInit() {
        this.mostraTudoCliente();
    }
    mostraTudoCliente() {
        this.DiaristaService.getCliente().subscribe(data => {
            const response = data;
            const objeto_retorno = JSON.parse(response._body);
            this.lista_clientes = objeto_retorno;
            console.log(objeto_retorno);
        }, error => {
            console.log("erro Aqui: " + error);
        });
    }
};
ListClientePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"] }
];
ListClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-cliente',
        template: __webpack_require__(/*! raw-loader!./list-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-cliente/list-cliente.page.html"),
        styles: [__webpack_require__(/*! ./list-cliente.page.scss */ "./src/app/list-cliente/list-cliente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"]])
], ListClientePage);



/***/ })

}]);
//# sourceMappingURL=list-cliente-list-cliente-module-es2015.js.map