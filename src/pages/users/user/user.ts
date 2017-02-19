import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit{
	name: string;

	constructor (
		private navParams: NavParams, 
		private navCtrl: NavController
	) {}

	ngOnInit () {
		this.name = this.navParams.get('userName');
	}

	goBack(){
		// go back, remove the page
		this.navCtrl.pop();
	}

	goBackToRoot(){
		// go back, remove the page
		this.navCtrl.popToRoot();
	}
}
