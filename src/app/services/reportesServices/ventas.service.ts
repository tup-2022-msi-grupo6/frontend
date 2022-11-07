import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cantidad } from 'src/app/models/reportesModels/cantidad';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  URL: string = 'https://localhost:44363/api/reporte/ventas';

  constructor(private http: HttpClient) { }

  getTotales(fecha: Cantidad):Observable<any>{
    return this.http.post<any>(this.URL+'/cantidades', fecha)
  }

  getIngresos(fecha: Cantidad):Observable<any>{
    return this.http.post<any>(this.URL+'/ingresos', fecha)
  }

  getIngresosXmeses(fecha: Cantidad):Observable<any>{
    return this.http.post<any>(this.URL+'/ingresosxmeses', fecha)
  }

  getIngresosAXempleados(fecha: Cantidad):Observable<any>{
    return this.http.post<any>(this.URL+'/ingresoanualxempleado', fecha)
  }

  getIngresosMXempleados(fecha: Cantidad):Observable<any>{
    return this.http.post<any>(this.URL+'/ingresomensualxempleado', fecha)
  }
}
