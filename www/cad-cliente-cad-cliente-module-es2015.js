(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cad-cliente-cad-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cad-cliente/cad-cliente.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cad-cliente/cad-cliente.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button href=\"./home\"> <ion-icon\r\n          name=\"arrow-back\"></ion-icon></ion-button>\r\n          </ion-buttons>\r\n    <ion-title>Cadastro de Cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label >Digite aqui seu nome:</ion-label>\r\n    <ion-input [(ngModel)]=\"nomeCliente\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label >Telefone:</ion-label>\r\n    <ion-input [(ngModel)]=\"telefoneCliente\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label >Celular:</ion-label>\r\n    <ion-input [(ngModel)]=\"celularCliente\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label >Numero da casa:</ion-label>\r\n    <ion-input [(ngModel)]=\"numCasaCliente\"></ion-input>\r\n  </ion-item>\r\n <ion-item>\r\n    <ion-label position=\"floating\">Digite Seu cep:</ion-label>\r\n    <ion-input [(ngModel)]=\"cepCliente\" (focusout)=\"listaCep()\"></ion-input>\r\n  </ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Lorgadouro:</ion-label>              \r\n  <ion-input type=\"text\" *ngIf=\"endereco.logradouro\">{{endereco.logradouro}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Complemento:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.complemento\">{{endereco.complemento}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Bairro:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.bairro\">{{endereco.bairro}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Cidade:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.localidade\">{{endereco.localidade}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >UF:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.uf\">{{endereco.uf}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-button (click)=\"takePhoto()\" >Foto<ion-icon name=\"camera\"></ion-icon></ion-button>\r\n\r\n<ion-button (click)=\"verGaleria()\" >Galeria<ion-icon name=\"images\"></ion-icon></ion-button>\r\n<ion-button (click)=\"uploadImageData()\" >Enviar Imagem<ion-icon name=\"cloud-upload\"></ion-icon></ion-button><br>\r\n\r\n \r\n  <ion-button (click)=\"setCliente()\" shape=\"round\" >Cadastrar como um Cliente <ion-icon name=\"create\"></ion-icon></ion-button>\r\n  <ion-button color=\"light\" shape=\"round\" href=\"./list-cliente\">Clique Aqui para Listar Clientes<ion-icon name=\"list-box\"></ion-icon></ion-button>\r\n  <ion-button color=\"light\" shape=\"round\" href=\"./home\">Clique Aqui para Página Inicial<ion-icon name=\"home\"></ion-icon></ion-button>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cad_cliente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cad-cliente.page */ "./src/app/cad-cliente/cad-cliente.page.ts");







const routes = [
    {
        path: '',
        component: _cad_cliente_page__WEBPACK_IMPORTED_MODULE_6__["CadClientePage"]
    }
];
let CadClientePageModule = class CadClientePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _diarista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diarista.service */ "./src/app/diarista.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _viacep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viacep.service */ "./src/app/viacep.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let CadClientePage = class CadClientePage {
    constructor(DiaristaService, alertController, cepServico, camera, http, statusBar, toastController, loadingController) {
        this.DiaristaService = DiaristaService;
        this.alertController = alertController;
        this.cepServico = cepServico;
        this.camera = camera;
        this.http = http;
        this.statusBar = statusBar;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.endereco = {};
    }
    ngOnInit() {
    }
    setCliente() {
        if (this.nomeCliente == null || this.telefoneCliente == null || this.celularCliente == null || this.cepCliente == null || this.numCasaCliente == null) {
            this.teste('Não foi possível cadastrar', 'Algum campo em branco', 'Preencha todos os Campos');
        }
        else {
            this.DiaristaService.setCliente(this.nomeCliente, this.telefoneCliente, this.celularCliente, this.cepCliente, this.numCasaCliente, this.endereco.logradouro, this.endereco.bairro, this.endereco.localidade, this.endereco.uf).subscribe(data => {
                const response = data;
                this.confirma = JSON.parse(response._body);
                console.log(this.confirma);
                if (this.confirma == '1') {
                    console.log('gravou');
                    this.teste('Parabéns!', 'Cadastro Realizado Sucesso', '<br>Siga as dicas no email para completar seu cadastro');
                }
                else {
                    console.log('Não foi possível cadastrar', 'Algum erro ao lado do servidor', 'Nós desculpe tente mais tarde!');
                }
            }, error => {
                console.log("Erro ao busca: " + error);
            });
        }
    }
    teste(cabecalho, subcabecalho, mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: cabecalho,
                subHeader: subcabecalho,
                message: mensagem,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    listaCep() {
        this.cepServico.pegaCep(this.cepCliente).subscribe(data => {
            const response = data;
            this.endereco = JSON.parse(response._body);
            console.log(this.endereco);
        }, error => {
            this.teste('Não foi possível localizar o cep', 'Por favor tente Novamente', 'Insira um CEP Válido!');
        });
    }
    verGaleria() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.arquivo = 'data:image/jpeg;base64,' + imageData;
            console.log(this.arquivo);
        }, (err) => {
            // Handle error
        });
    }
    takePhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.arquivo = 'data:image/jpeg;base64,' + imageData;
            console.log(this.arquivo);
        }, (err) => {
            // Handle error
        });
    }
    uploadImageData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Espere enviando imagem...',
                spinner: 'crescent',
            });
            yield loading.present();
            let postData = new FormData();
            postData.append("img", this.arquivo);
            this.http.post("http://marceloflorentino.000webhostapp.com/diarista/index.php/cliente/setImagem", postData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                if (res['success']) {
                    this.presentToast('Sua Imagem Foi enviada.');
                }
                else {
                    this.presentToast('Sua Imagem Foi enviada.');
                }
            });
        });
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
};
CadClientePage.ctorParameters = () => [
    { type: _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _viacep_service__WEBPACK_IMPORTED_MODULE_5__["ViacepService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
CadClientePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cad-cliente',
        template: __webpack_require__(/*! raw-loader!./cad-cliente.page.html */ "./node_modules/raw-loader/index.js!./src/app/cad-cliente/cad-cliente.page.html"),
        styles: [__webpack_require__(/*! ./cad-cliente.page.scss */ "./src/app/cad-cliente/cad-cliente.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _viacep_service__WEBPACK_IMPORTED_MODULE_5__["ViacepService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], CadClientePage);



/***/ })

}]);
//# sourceMappingURL=cad-cliente-cad-cliente-module-es2015.js.map