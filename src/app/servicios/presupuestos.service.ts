import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-6285f.firebaseio.com/presupuestos.json';

  constructor(private http: HttpClient) { }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto); /*Convierte el parámetro presupuesto en una cadena ya que así lo necesita el método post.*/
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.presURL, newpres, {headers});
  }

  getPresupuestos() {
  return this.http.get(this.presURL);
  }
}
