import { HomePage } from './../home/home';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Logout page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class Logout {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public nativeStorage: NativeStorage) {
      this.nativeStorage.remove('hib').then(
        () => {
          this.navCtrl.push(HomePage);
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logout');
  }

}
