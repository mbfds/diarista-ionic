import { Component, OnInit } from '@angular/core';
import { DiaristaService } from '../diarista.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ViacepService } from '../viacep.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { finalize } from 'rxjs/operators';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-cad-diarista',
  templateUrl: './cad-diarista.page.html',
  styleUrls: ['./cad-diarista.page.scss'],
})
export class CadDiaristaPage implements OnInit {
  public confirma : any = { };
  public nomeFornecedor : string ;
  public cepFornecedor : string ;
  public telefoneFornecedor : string ;
  public celularFornecedor : string ;
  public experienciaFornecedor : string ;
  public header:Text;
  public subHeader:Text;
  public message:Text;
  public endereco : any = { };
  public arquivo:string;
  




  constructor(private DiaristaService:DiaristaService,public alertController: AlertController,private cepServico:ViacepService,private camera:Camera,private http:Http,private statusBar: StatusBar,public toastController: ToastController,public loadingController: LoadingController) { }
  photo: string = '';

  ngOnInit() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff');

  }
  
   verGaleria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.arquivo = 'data:image/jpeg;base64,' + imageData;

   console.log(this.arquivo);
  }, (err) => {
   // Handle error
  });
  }



  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.arquivo = 'data:image/jpeg;base64,' + imageData;
   console.log(this.arquivo);
  }, (err) => {
   // Handle error
  });}
  
  setDiarista(){
    if(this.nomeFornecedor==null ||this.telefoneFornecedor==null||this.celularFornecedor==null ||this.cepFornecedor==null ||this.experienciaFornecedor==null  ){
      this.teste('Não foi possível cadastrar','Algum campo em branco','Preencha todos os Campos');
    }else{
    this.DiaristaService.setDiarista(this.nomeFornecedor,this.telefoneFornecedor,this.celularFornecedor,this.cepFornecedor,this.experienciaFornecedor,this.endereco.logradouro,this.endereco.bairro,this.endereco.localidade,this.endereco.uf).subscribe(
      data=>{
        const response = data as any;
        this.confirma= JSON.parse(response._body);
        console.log(this.confirma);
        if(this.confirma==1){
          this.teste('Parabéns!','Cadastro Realizado Sucesso','<br>Siga as dicas no email para completar seu cadastro');
        }else{
          this.teste('Não foi possível cadastrar','Algum erro ao lado do servidor','Nós desculpe tente mais tarde!');

        }


      },error=>{
        console.log("Erro ao busca: "+error);
      }

    );}
  }
  async teste(cabecalho,subcabecalho,mensagem) {
    const alert = await this.alertController.create({
      header: cabecalho,
      subHeader: subcabecalho,
      message: mensagem ,
      buttons: ['OK']
    });

    await alert.present();
  }
  listaCep(){
    this.cepServico.pegaCep(this.cepFornecedor).subscribe(
      data =>{
        const response = data as any;
        this.endereco= JSON.parse(response._body);
        console.log(this.endereco);
      },error=>{
        this.teste('Não foi possível localizar o cep','Por favor tente Novamente','Insira um CEP Válido!');
      }
    );
  }




  async uploadImageData() {
    const loading = await this.loadingController.create({
      message: 'Espere enviando imagem...',
      spinner: 'crescent',
    
    });
    await loading.present();
    let postData = new FormData();
    postData.append("img",this.arquivo);
 
    this.http.post("http://marceloflorentino.000webhostapp.com/diarista/index.php/fornecedor/setImagem", postData)
        .pipe(
            finalize(() => {
                loading.dismiss();
            })
        )
        .subscribe(res => {
            if (res['success']) {
                this.presentToast('Sua Imagem Foi enviada.')
            } else {
                this.presentToast('Sua Imagem Foi enviada.')
            }
        });
}
async presentToast(text) {
  const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
  });
  toast.present();
}
}
