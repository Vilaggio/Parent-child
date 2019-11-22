import { AbstractControl } from '@angular/forms'

export function phoneValidator(control: AbstractControl): { [key: string]: any } | null {
  const valueMatchesPattern = /^\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(control.value);
  if (!control.value) { return null } if (valueMatchesPattern) {
    return null;
  }


  return { 'invalidNumber': { valid: false, value: control.value } };
}