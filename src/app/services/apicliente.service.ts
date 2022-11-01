import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  URL: string = 'https://localhost:44363/api/cliente';


  constructor(
    private _http : HttpClient
  ) { }

  getAllClientes () : Observable<Response> {
    return this._http.get<Response>(this.URL);
  }

  addCliente (cliente: Cliente) : Observable<Response> {
    return this._http.post<Response>(this.URL, cliente, httpOption);
  }

  editar (cliente: Cliente) : Observable<Response> {
    return this._http.put<Response>(this.URL, cliente, httpOption);
  }
  
  eliminar (id: number) : Observable<Response> {
    return this._http.delete<Response>(`${this.URL}/${id}`);
  }

}
