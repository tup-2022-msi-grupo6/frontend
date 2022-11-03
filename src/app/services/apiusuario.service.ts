import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Usuarioabm } from '../models/usuarioabm';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiusuarioService {

  URL: string = 'https://localhost:44363/api/usuario';


  constructor(
    private _http : HttpClient
  ) { }

  getAllUsuarios () : Observable<Response> {
    return this._http.get<Response>(this.URL);
  }

  addUsuario (usuario: Usuarioabm) : Observable<Response> {
    return this._http.post<Response>(this.URL, usuario, httpOption);
  }

  editarUsuario (usuario: Usuarioabm) : Observable<Response> {
    return this._http.put<Response>(this.URL, usuario, httpOption);
  }
  
  eliminar (idUsuario: number) : Observable<Response> {
    return this._http.delete<Response>(`${this.URL}/${idUsuario}`);
  }
}
