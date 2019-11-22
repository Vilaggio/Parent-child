import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  @Input() formData: any;

  buyerOne = new FormControl('');
  buyerTwo = new FormControl('');

  handleClick() {
    const formData = {
      buyerOne: this.buyerOne.value,
      buyerTwo: this.buyerTwo.value,
    };
    this.formSubmit.emit(formData);
  }

  ngOnInit() {
    this.formData && this.buyerOne.setValue(this.formData.buyerOne);
    this.formData && this.buyerTwo.setValue(this.formData.buyerTwo);
  }
}