import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'  ;
import { HomePage } from '../pages/home/home';
import { SigninPage } from "../pages/signin/signin"
const config = {
  apiKey: 'AIzaSyCleHylVwpEMXi8FVbzd73360PsNBMweC8',
  authDomain: 'ffsample-2188e.firebaseapp.com',
  databaseURL: 'https://ffsample-2188e.firebaseio.com',
  projectId: 'ffsample-2188e',
  storageBucket: 'ffsample-2188e.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

