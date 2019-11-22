import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Forms';
  review: boolean = false;
  formData: any = {
    buyerOne: '',
    buyerTwo: ''
  };

  appDisplayData(data) {
    if (data.buyerOne && data.buyerTwo) {
      this.formData.buyerOne = data.buyerOne;
      this.formData.buyerTwo = data.buyerTwo;
      this.review = true;
    } else {
      alert('Please fill out form!');
    }
  }
  edit() {
    this.review = false;
  }
}

