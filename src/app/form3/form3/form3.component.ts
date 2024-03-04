import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Coche } from 'src/app/coche';
import { Servicio2Service } from 'src/app/servicio2.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  form: FormGroup;
  carro!:Coche;
  dataSource= new MatTableDataSource<Coche>();
  listaCoches: Coche[] = [];
  columnas: string[]=['matricula','motor','climatizador','cargadorElectrico','gps','neumatico'];
    constructor(private fb: FormBuilder,private servicio:Servicio2Service) {
      this.form = this.fb.group({
        matricula: [
          '',
          [Validators.required, Validators.pattern(/^\d{4}[A-Z]{3}$/)],
        ],
        motor: ['', Validators.required],
        gps: [false, Validators.required],
        climatizador: [false, Validators.required],
        cargadorElectrico: [false, Validators.required],
        neumaticos: ['', Validators.required],
      });
    }
    ngOnInit(): void {
    this.servicio.obtenerCoches().
    subscribe((ch:Coche[])=>{this.listaCoches=ch;
      this.dataSource.data=ch;});
    }

    submitForm() {
      if (this.form.valid) {
        console.log(this.form.value);

        const formData = this.form.value;
        this.servicio.insertarCoche(formData).subscribe(
          response => {
            console.log('Inserción correcta:', response);
            if (response.includes("Duplicate"))
            alert ("error Matrícula duplicada")
            else{
              this.dataSource.data.push(this.form.value);
              this.dataSource._updateChangeSubscription();
              this.form.reset();
              alert ("OK, insertado correctamente")
            }



          },
          error => {
            console.error('Error: inserción no correcta', error);
            alert("clave duplicada");
          });


    }
}
}
