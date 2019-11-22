import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ContractService } from '../../../../forms/services/contract.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  totalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.totalForm = this.fb.group({
      fullName: [''],
    })
  }
  formInitialized(name: string, form: FormGroup) {
    this.totalForm.setControl(name, form);
    console.log(this.totalForm.value);
  }
}

