import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent {

  review: boolean = false;


  @Input() formData: any = {
    buyerOne: '',
    BuyerTwo: ''
  };

  @Output() editData = new EventEmitter();

  displayFormData(data) {
    if (data.buyerOne && data.BuyerTwo) {
      this.formData.buyerOne = data.buyerOne;
      this.formData.BuyerTwo = data.BuyerTwo;
      this.review = true;
    } else {
      alert('Please fill out form!');
    }
  }
  edit() {
    this.review = false;
  }


  handleEditClick() {
    this.editData.emit('edit');
  }
  handleSubmitClick() {
    alert('Submitting data!');
  }
}