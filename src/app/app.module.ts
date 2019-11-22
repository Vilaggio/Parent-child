const routes: Routes = [
  { path: 'test-form', component: TestFormComponent },
  { path: 'client-registration', component: ClientRegistrationComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'displaydata', component: DisplaydataComponent },
  { path: 'form-input', component: FormInputComponent },
]

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './basic-form/test-form/test-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule

} from '@angular/material';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { ContractComponent } from './contract/contract.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { FormInputComponent } from './form-input/form-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    ClientRegistrationComponent,
    ContractComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    DisplaydataComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      TestFormComponent
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
