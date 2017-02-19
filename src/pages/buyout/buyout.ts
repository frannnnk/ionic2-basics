import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {

  product: {name:string, quantity:number};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.product = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  goCheckout(){
  	this.navCtrl.popToRoot();
    
  }

}

