import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  FRegistro!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.FRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Z].{8}[0-9]$/)]],
      repeatPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')!.value;
    const repeatPassword = formGroup.get('repeatPassword')!.value;

    return password === repeatPassword ? null : { passwordMismatch: true };
  }

  enviar() {
    if (this.FRegistro.valid) {
      console.log('Registration form submitted:', this.FRegistro.value);
    }
  }
}
