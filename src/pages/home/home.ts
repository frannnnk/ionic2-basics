import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersPage = UsersPage;

  constructor(public navCtrl: NavController) {
    
  }

  goToUsers() {
  	this.navCtrl.push(UsersPage).catch( (error) => console.log("Access denided, augument was:" + error)  );
  }

  goToShop (){
    this.navCtrl.push(ShopPage).catch( (error) => console.log("Access denided, augument was:" + error)  );
  }

  ionViewCanEnter() : boolean | Promise<boolean> {
    console.log('ionViewCanEnter HomePage');
    const rnd = Math.random();
    console.log(rnd);
     console.log("If rnd > 0.1 then you can enter the page, otherwise please try again.");
    return rnd > 0.1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  ionViewCanLeave() : boolean | Promise<{}> {
    console.log('ionViewCanLeave HomePage');
    console.log('wait one second then you can leave.');
    const promise = new Promise((resolve, reject) => {
        setTimeout (()=>{ 
            resolve()
        }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave HomePage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload HomePage');
  }



}
