(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cad-diarista-cad-diarista-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cad-diarista/cad-diarista.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cad-diarista/cad-diarista.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar><ion-buttons slot=\"start\">\r\n    <ion-button href=\"./home\"> <ion-icon\r\n    name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cadastro de Fornecedores</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Digite aqui seu nome:</ion-label>\r\n  <ion-input [(ngModel)]=\"nomeFornecedor\"></ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Telefone:</ion-label>\r\n  <ion-input [(ngModel)]=\"telefoneFornecedor\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label position=\"floating\">Celular:</ion-label>\r\n  <ion-input [(ngModel)]=\"celularFornecedor\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label position=\"floating\">Experiência:</ion-label>\r\n  <ion-input [(ngModel)]=\"experienciaFornecedor\"></ion-input>\r\n</ion-item>\r\n<ion-item>\r\n    <ion-label position=\"floating\">Digite Seu cep:</ion-label>\r\n    <ion-input [(ngModel)]=\"cepFornecedor\"></ion-input>\r\n  </ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Lorgadouro:</ion-label>              \r\n  <ion-input type=\"text\" *ngIf=\"endereco.logradouro\">{{endereco.logradouro}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Complemento:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.complemento\">{{endereco.complemento}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Bairro:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.bairro\">{{endereco.bairro}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >Cidade:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.localidade\">{{endereco.localidade}}</ion-input>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label >UF:</ion-label>\r\n  <ion-input type=\"text\" *ngIf=\"endereco.uf\">{{endereco.uf}}</ion-input>\r\n</ion-item>\r\n<ion-list>\r\n  <ion-item *ngFor=\"let item of items\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <ion-img [src]=\"arquivo\"></ion-img>\r\n    </ion-thumbnail>\r\n    <ion-label>{{item.text}}</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n<ion-button (click)=\"takePhoto()\" >Tirar Foto</ion-button><br>\r\n\r\n<ion-button (click)=\"verGaleria()\" >Ver Galeria</ion-button><br>\r\n<ion-button (click)=\"upload()\" >Upload</ion-button><br>\r\n<ion-img [src]=\"img\"></ion-img>\r\n\r\n\r\n<ion-button (click)=\"setDiarista()\" shape=\"round\" >Cadastrar como um Fornecedor </ion-button>\r\n\r\n\r\n<ion-button color=\"light\" shape=\"round\" href=\"./list-diarista\">Clique Aqui para Listar Fonecedores</ion-button>\r\n<ion-button color=\"light\" shape=\"round\" href=\"./home\">Clique Aqui para Página Inicial</ion-button>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/cad-diarista/cad-diarista.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cad-diarista/cad-diarista.module.ts ***!
  \*****************************************************/
/*! exports provided: CadDiaristaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadDiaristaPageModule", function() { return CadDiaristaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cad_diarista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cad-diarista.page */ "./src/app/cad-diarista/cad-diarista.page.ts");







const routes = [
    {
        path: '',
        component: _cad_diarista_page__WEBPACK_IMPORTED_MODULE_6__["CadDiaristaPage"]
    }
];
let CadDiaristaPageModule = class CadDiaristaPageModule {
};
CadDiaristaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cad_diarista_page__WEBPACK_IMPORTED_MODULE_6__["CadDiaristaPage"]]
    })
], CadDiaristaPageModule);



/***/ }),

/***/ "./src/app/cad-diarista/cad-diarista.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cad-diarista/cad-diarista.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZC1kaWFyaXN0YS9jYWQtZGlhcmlzdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cad-diarista/cad-diarista.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cad-diarista/cad-diarista.page.ts ***!
  \***************************************************/
/*! exports provided: CadDiaristaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadDiaristaPage", function() { return CadDiaristaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _diarista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diarista.service */ "./src/app/diarista.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _viacep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../viacep.service */ "./src/app/viacep.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");







let CadDiaristaPage = class CadDiaristaPage {
    constructor(DiaristaService, alertController, cepServico, camera, http) {
        this.DiaristaService = DiaristaService;
        this.alertController = alertController;
        this.cepServico = cepServico;
        this.camera = camera;
        this.http = http;
        this.confirma = {};
        this.endereco = {};
        this.photo = '';
    }
    ngOnInit() {
    }
    verGaleria() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
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
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.img = imageData;
            this.arquivo = 'data:image/jpeg;base64,' + imageData;
            console.log(this.arquivo);
        }, (err) => {
            // Handle error
        });
    }
    setDiarista() {
        if (this.nomeFornecedor == null || this.telefoneFornecedor == null || this.celularFornecedor == null || this.cepFornecedor == null || this.experienciaFornecedor == null) {
            this.teste('Não foi possível cadastrar', 'Algum campo em branco', 'Preencha todos os Campos');
        }
        else {
            this.DiaristaService.setDiarista(this.nomeFornecedor, this.telefoneFornecedor, this.celularFornecedor, this.cepFornecedor, this.experienciaFornecedor).subscribe(data => {
                const response = data;
                this.confirma = JSON.parse(response._body);
                console.log(this.confirma);
                if (this.confirma == 1) {
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
        this.cepServico.pegaCep(this.cepFornecedor).subscribe(data => {
            const response = data;
            this.endereco = JSON.parse(response._body);
            console.log(this.endereco);
        }, error => {
            console.log("Erro ao busca: " + error);
        });
    }
    upload() {
        let url = "http://marceloflorentino.000webhostapp.com/diarista/index.php/upload/setImagem";
        let postData = new FormData();
        postData.append("file", this.arquivo);
        let data = this.http.post(url, postData);
        data.subscribe((result) => {
            console.log(result);
        });
    }
};
CadDiaristaPage.ctorParameters = () => [
    { type: _diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _viacep_service__WEBPACK_IMPORTED_MODULE_5__["ViacepService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"] }
];
CadDiaristaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cad-diarista',
        template: __webpack_require__(/*! raw-loader!./cad-diarista.page.html */ "./node_modules/raw-loader/index.js!./src/app/cad-diarista/cad-diarista.page.html"),
        styles: [__webpack_require__(/*! ./cad-diarista.page.scss */ "./src/app/cad-diarista/cad-diarista.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_diarista_service__WEBPACK_IMPORTED_MODULE_2__["DiaristaService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _viacep_service__WEBPACK_IMPORTED_MODULE_5__["ViacepService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"]])
], CadDiaristaPage);



/***/ })

}]);
//# sourceMappingURL=cad-diarista-cad-diarista-module-es2015.js.map