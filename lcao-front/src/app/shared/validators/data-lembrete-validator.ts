import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

export function dataLembreteValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      const dataLembrete = new Date(control.value);
      const dataAtual = new Date();

      if (dataLembrete < dataAtual) {
        resolve({ dataInvalida: true });
      } else {
        resolve(null);
      }
    });
  };
}

