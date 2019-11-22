import { TestFormComponent } from './basic-form/test-form/test-form.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ClientRegistrationComponent } from '../app/client-registration/client-registration.component';
import { ParentComponent } from '../app/parent/parent.component';
import { ContractComponent } from '../app/contract/contract.component';
import { ChildComponent } from '../app/child/child.component';
import { DisplaydataComponent } from '../app/displaydata/displaydata.component';
import { Sibling1Component } from '../app/sibling1/sibling1.component';
import { FormInputComponent } from '../app/form-input/form-input.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', component: TestFormComponent },
  { path: '', pathMatch: 'full', component: ClientRegistrationComponent },
  { path: '', pathMatch: 'full', component: ContractComponent },
  { path: '', pathMatch: 'full', component: ChildComponent },
  { path: '', pathMatch: 'full', component: ParentComponent },
  { path: '', pathMatch: 'full', component: Sibling1Component },
  { path: '', pathMatch: 'full', component: DisplaydataComponent },
  { path: '', pathMatch: 'full', component: FormInputComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);