(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-cliente-list-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list-cliente/list-cliente.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-cliente/list-cliente.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button href=\"./home\"> <ion-icon\n          name=\"arrow-back\"></ion-icon></ion-button>\n          </ion-buttons>\n    <ion-title>Listar Clientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card *ngFor=\"let cliente of lista_clientes\">\n  <ion-card-header>\n    <ion-card-subtitle>Algo para se pensar</ion-card-subtitle>\n    <ion-card-title>Nome:{{cliente.nomeCliente }}</ion-card-title>\n    \n  </ion-card-header>\n\n  <ion-card-content>\n    Celular:{{cliente.celularCliente }}<br>\n    Telefone:{{cliente.telefoneCliente }}<br>\n    CEP:{{cliente.cepCliente}}<br>\n    Número da casa:{{cliente.numCasaCliente}}<br>\n  </ion-card-content>\n</ion-card>\n\n\n\n<ion-button color=\"light\" shape=\"round\" href=\"./cad-cliente\">Clique Aqui para Cadastrar Cliente</ion-button>\n<ion-button color=\"light\" shape=\"round\" href=\"./home\">Clique Aqui para Página Inicial</ion-button>\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-cliente.page */ "./src/app/list-cliente/list-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _list_cliente_page__WEBPACK_IMPORTED_MODULE_6__["ListClientePage"]
    }
];
var ListClientePageModule = /** @class */ (function () {
    function ListClientePageModule() {
    }
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
    return ListClientePageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _diarista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diarista.service */ "./src/app/diarista.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var ListClientePage = /** @class */ (function () {
    function ListClientePage(http, DiaristaService) {
        this.http = http;
        this.DiaristaService = DiaristaService;
        this.lista_clientes = new Array();
    }
    ListClientePage.prototype.ngOnInit = function () {
        this.mostraTudoCliente();
    };
    ListClientePage.prototype.mostraTudoCliente = function () {
        var _this = this;
        this.DiaristaService.getCliente().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.lista_clientes = objeto_retorno;
            console.log(objeto_retorno);
        }, function (error) {
            console.log("erro Aqui: " + error);
        });
    };
    ListClientePage.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"] }
    ]; };
    ListClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-cliente',
            template: __webpack_require__(/*! raw-loader!./list-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-cliente/list-cliente.page.html"),
            styles: [__webpack_require__(/*! ./list-cliente.page.scss */ "./src/app/list-cliente/list-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"]])
    ], ListClientePage);
    return ListClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=list-cliente-list-cliente-module-es5.js.map