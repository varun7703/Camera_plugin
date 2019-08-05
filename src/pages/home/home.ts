import { Component } from '@angular/core';
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Shake } from '@ionic-native/shake';
import { Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
im:any;
  constructor(private camera: Camera ) {

  }

fullscreen(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.im = base64Image;
   }, (err) => {
    // Handle error
   });
}
}
