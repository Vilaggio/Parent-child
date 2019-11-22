import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.scss']
})
export class Sibling1Component implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>()
  nameForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.nameForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.nameForm);
  }
}

