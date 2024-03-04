import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coche } from './coche';

@Injectable({
  providedIn: 'root'
})
export class Servicio2Service {

  constructor( private httpCoche:HttpClient) {
  }
  insertarCoche(carro:Coche){
    console.log("carro:"+carro.matricula+carro.gps);
    return this.httpCoche.post('http://moralo.atwebpages.com/vehiculos/insertarCoche.php', carro,{responseType: 'text'});
  }
  obtenerCoches() :Observable<Coche[]>{
    return this.httpCoche.get<Coche[]>("http://moralo.atwebpages.com/vehiculos/obtenerCoches.php")
  }

}
