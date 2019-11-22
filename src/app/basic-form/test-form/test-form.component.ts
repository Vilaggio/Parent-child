import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/regFormValidator';
import { phoneValidator } from '../../shared/phoneValidator';
import { PasswordValidator } from '../../shared/passwordValidator';
import { RegistrationService } from '../../API/registration.service';



@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})

export class TestFormComponent implements OnInit {

  userprofileForm: FormGroup;

  get firstName() {
    return this.userprofileForm.get('firstName');
  }

  get lastName() {
    return this.userprofileForm.get('lastName');
  }

  get email() {
    return this.userprofileForm.get('email');
  }

  get phone() {
    return this.userprofileForm.get('phone');
  }

  get password() {
    return this.userprofileForm.get('password')
  }

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit() {

    this.userprofileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, phoneValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
      subscribe: [false, [Validators.required]],
    },

      { validator: PasswordValidator }
    )
  }


  onSubmit() {
    console.log(this.userprofileForm.value);
    this.registrationService.register(this.userprofileForm.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.log('Registration failed', error)
      );
  }
}

