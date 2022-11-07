import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VentasService } from 'src/app/services/reportesServices/ventas.service';
import { Cantidad } from 'src/app/models/reportesModels/cantidad';

@Component({
  selector: 'app-cantidades',
  templateUrl: './cantidades.component.html',
  styleUrls: ['./cantidades.component.css']
})
export class CantidadesComponent implements OnInit, OnDestroy {

  suscripcion: Subscription = new Subscription();

  hoy: Date = new Date();

  fecha: Cantidad = {} as Cantidad

  cantidad: Cantidad = {} as Cantidad

  constructor(private srv: VentasService) { }

  ngOnInit(): void {
    this.fecha.dia = this.hoy.getDate();
    this.fecha.mes = this.hoy.getMonth() + 1;
    this.fecha.anio = this.hoy.getFullYear();

    this.suscripcion.add(this.srv.getTotales(this.fecha).subscribe({
      next: (response)=>{
        this.cantidad = response.data
      }
    }))

    //console.log(this.obtenerDiaMes(2022,11))
  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  //retorno la cantidad de dias del mes
  obtenerDiaMes(anio: number, mes: number){
    return new Date(anio, mes, 0).getDate();
  }

  

}
