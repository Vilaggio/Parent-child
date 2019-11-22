import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],

})

export class ChildComponent {

  @Output() formReady = new EventEmitter<FormGroup>()
  labelForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.labelForm = this.fb.group({
      hot: Boolean,
      cold: Boolean,
      ready: Boolean,
      test: Boolean,
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.labelForm);
    console.log(this.labelForm.value)
  }
}
