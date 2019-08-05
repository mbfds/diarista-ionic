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
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {
  private nomeCliente : string;
  private telefoneCliente : string;
  private celularCliente : string;
  private cepCliente : string;
  private numCasaCliente : string;
  private confirma : string;
  public endereco : any = { };
  public header:Text;
  public subHeader:Text;
  public message:Text;
  public arquivo:string;

  constructor(private DiaristaService:DiaristaService,public alertController: AlertController,private cepServico:ViacepService,private camera:Camera,private http:Http,private statusBar: StatusBar,public toastController: ToastController,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  
  setCliente(){
    if(this.nomeCliente==null ||this.telefoneCliente==null||this.celularCliente==null ||this.cepCliente==null ||this.numCasaCliente==null  ){
      this.teste('Não foi possível cadastrar','Algum campo em branco','Preencha todos os Campos');
    }else{
    this.DiaristaService.setCliente(this.nomeCliente,this.telefoneCliente,this.celularCliente,this.cepCliente,this.numCasaCliente,this.endereco.logradouro,this.endereco.bairro,this.endereco.localidade,this.endereco.uf).subscribe(
      data=>{
        const response = data as any;
        this.confirma= JSON.parse(response._body);
        console.log(this.confirma);
        if(this.confirma=='1'){
          console.log('gravou');
          this.teste('Parabéns!','Cadastro Realizado Sucesso','<br>Siga as dicas no email para completar seu cadastro');
        }else{
          console.log('Não foi possível cadastrar','Algum erro ao lado do servidor','Nós desculpe tente mais tarde!');

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
    this.cepServico.pegaCep(this.cepCliente).subscribe(
      data =>{
        const response = data as any;
        this.endereco= JSON.parse(response._body);
        console.log(this.endereco);
      },error=>{
        this.teste('Não foi possível localizar o cep','Por favor tente Novamente','Insira um CEP Válido!');
      }
    );
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
  
  async uploadImageData() {
    const loading = await this.loadingController.create({
      message: 'Espere enviando imagem...',
      spinner: 'crescent',
    });
    await loading.present();
    let postData = new FormData();
    postData.append("img",this.arquivo);
 
    this.http.post("http://marceloflorentino.000webhostapp.com/diarista/index.php/cliente/setImagem", postData)
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

