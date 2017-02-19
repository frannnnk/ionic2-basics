import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  goBuyout(product: {name: string, quantity: number}){
		this.navCtrl.push(BuyoutPage, product);
   }

  ionViewCanEnter() : boolean | Promise<boolean> {
    console.log('ionViewCanEnter HomePage');
    const rnd = Math.random();
    console.log(rnd);
    return rnd > 0.5;
  }

}
