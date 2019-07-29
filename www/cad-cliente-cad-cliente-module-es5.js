(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cad-cliente-cad-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cad-cliente/cad-cliente.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cad-cliente/cad-cliente.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button href=\"./home\"> <ion-icon\n          name=\"arrow-back\"></ion-icon></ion-button>\n          </ion-buttons>\n    <ion-title>Cadastro de Cliente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label >Digite aqui seu nome:</ion-label>\n    <ion-input [(ngModel)]=\"nomeCliente\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >Telefone:</ion-label>\n    <ion-input [(ngModel)]=\"telefoneCliente\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label >Celular:</ion-label>\n    <ion-input [(ngModel)]=\"celularCliente\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label >Numero da casa:</ion-label>\n    <ion-input [(ngModel)]=\"numCasaCliente\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label >Digite Seu cep:</ion-label>\n    <ion-input [(ngModel)]=\"cepCliente\" (focusout)=\"listaCep()\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >Lorgadouro:</ion-label>              \n    <ion-input type=\"text\" *ngIf=\"endereco.logradouro\">{{endereco.logradouro}}</ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >Complemento:</ion-label>\n    <ion-input type=\"text\" *ngIf=\"endereco.complemento\">{{endereco.complemento}}</ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >Bairro:</ion-label>\n    <ion-input type=\"text\" *ngIf=\"endereco.bairro\">{{endereco.bairro}}</ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >Cidade:</ion-label>\n    <ion-input type=\"text\" *ngIf=\"endereco.localidade\">{{endereco.localidade}}</ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label >UF:</ion-label>\n    <ion-input type=\"text\" *ngIf=\"endereco.uf\">{{endereco.uf}}</ion-input>\n  </ion-item>\n  \n \n  <ion-button (click)=\"setCliente()\" shape=\"round\" >Cadastrar como um Cliente </ion-button>\n  <ion-button color=\"light\" shape=\"round\" href=\"./list-cliente\">Clique Aqui para Listar Clientes</ion-button>\n  <ion-button color=\"light\" shape=\"round\" href=\"./home\">Clique Aqui para Página Inicial</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cad-cliente/cad-cliente.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cad-cliente/cad-cliente.module.ts ***!
  \***************************************************/
/*! exports provided: CadClientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadClientePageModule", function() { return CadClientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cad_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cad-cliente.page */ "./src/app/cad-cliente/cad-cliente.page.ts");







var routes = [
    {
        path: '',
        component: _cad_cliente_page__WEBPACK_IMPORTED_MODULE_6__["CadClientePage"]
    }
];
var CadClientePageModule = /** @class */ (function () {
    function CadClientePageModule() {
    }
    CadClientePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cad_cliente_page__WEBPACK_IMPORTED_MODULE_6__["CadClientePage"]]
        })
    ], CadClientePageModule);
    return CadClientePageModule;
}());



/***/ }),

/***/ "./src/app/cad-cliente/cad-cliente.page.scss":
/*!***************************************************!*\
  !*** ./src/app/cad-cliente/cad-cliente.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZC1jbGllbnRlL2NhZC1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cad-cliente/cad-cliente.page.ts":
/*!*************************************************!*\
  !*** ./src/app/cad-cliente/cad-cliente.page.ts ***!
  \*************************************************/
/*! exports provided: CadClientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadClientePage", function() { return CadClientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _diarista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diarista.service */ "./src/app/diarista.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viacep_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viacep.service */ "./src/app/viacep.service.ts");





var CadClientePage = /** @class */ (function () {
    function CadClientePage(DiaristaService, alertController, cepServico) {
        this.DiaristaService = DiaristaService;
        this.alertController = alertController;
        this.cepServico = cepServico;
        this.endereco = {};
    }
    CadClientePage.prototype.ngOnInit = function () {
    };
    CadClientePage.prototype.setCliente = function () {
        var _this = this;
        if (this.nomeCliente == null || this.telefoneCliente == null || this.celularCliente == null || this.cepCliente == null || this.numCasaCliente == null) {
            this.teste('Não foi possível cadastrar', 'Algum campo em branco', 'Preencha todos os Campos');
        }
        else {
            this.DiaristaService.setCliente(this.nomeCliente, this.telefoneCliente, this.celularCliente, this.cepCliente, this.numCasaCliente).subscribe(function (data) {
                var response = data;
                _this.confirma = JSON.parse(response._body);
                console.log(_this.confirma);
                if (_this.confirma == '1') {
                    console.log('gravou');
                    _this.teste('Parabéns!', 'Cadastro Realizado Sucesso', '<br>Siga as dicas no email para completar seu cadastro');
                }
                else {
                    console.log('Não foi possível cadastrar', 'Algum erro ao lado do servidor', 'Nós desculpe tente mais tarde!');
                }
            }, function (error) {
                console.log("Erro ao busca: " + error);
            });
        }
    };
    CadClientePage.prototype.teste = function (cabecalho, subcabecalho, mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: cabecalho,
                            subHeader: subcabecalho,
                            message: mensagem,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadClientePage.prototype.listaCep = function () {
        var _this = this;
        this.cepServico.pegaCep(this.cepCliente).subscribe(function (data) {
            var response = data;
            _this.endereco = JSON.parse(response._body);
            console.log(_this.endereco);
        }, function (error) {
            console.log("Erro ao busca: " + error);
        });
    };
    CadClientePage.ctorParameters = function () { return [
        { type: _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _viacep_service__WEBPACK_IMPORTED_MODULE_4__["ViacepService"] }
    ]; };
    CadClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cad-cliente',
            template: __webpack_require__(/*! raw-loader!./cad-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/cad-cliente/cad-cliente.page.html"),
            styles: [__webpack_require__(/*! ./cad-cliente.page.scss */ "./src/app/cad-cliente/cad-cliente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _viacep_service__WEBPACK_IMPORTED_MODULE_4__["ViacepService"]])
    ], CadClientePage);
    return CadClientePage;
}());



/***/ })

}]);
//# sourceMappingURL=cad-cliente-cad-cliente-module-es5.js.map