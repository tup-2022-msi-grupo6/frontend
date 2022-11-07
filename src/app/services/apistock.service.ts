import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApistockService {

  URL: string = 'https://localhost:44363/api/Producto';

  constructor(private _http : HttpClient) { }


  getAllProductos () : Observable<Response> {
    return this._http.get<Response>(this.URL);
  }

   addProducto (stock: Stock) : Observable<Response> {
    return this._http.post<Response>(this.URL, stock, httpOption);
  }

  editarProducto (stock: Stock) : Observable<Response> {
    return this._http.put<Response>(this.URL, stock, httpOption);
  }

  eliminar (Codigo: number) : Observable<Response> {
    return this._http.delete<Response>(`${this.URL}/${Codigo}`);
  }

}
