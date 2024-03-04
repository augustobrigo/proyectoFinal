import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
interface UserData {
  codigoCIF: string;
  nombre: string;
  nota1: number;
  nota2:number;
  nota3:number;
}
@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {
  form: FormGroup;

  dataSource=new MatTableDataSource<UserData>([]);
  displayedColumns: string[] = ['codigoCIF', 'nombre', 'nota1','nota2','nota3'];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      codigoCIF: [
        '',
        [Validators.required, Validators.pattern(/^\d{8}[a-zA-Z]$/)],
      ],
      nombre: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(50)],
      ],
      nota1: [
        null,
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
      nota2: [
        null,
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
      nota3: [
        null,
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
    });

  }

  submitForm() {
    if (this.form.valid) {
      const formData: UserData = this.form.value;

      // Add the form data to the MatTableDataSource
      this.dataSource.data.push(formData);
      //crea un nueva copia virtual del array actualizado
      //y se la vuelve a asignar al datasource de tabla
      this.dataSource.data = [...this.dataSource.data];
     //this.dataSource._updateChangeSubscription;
      this.form.reset();
    } else {
      alert ('Formulario no está validado');
    }
  }
}
