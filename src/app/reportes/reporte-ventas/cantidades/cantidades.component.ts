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

  selected: Date = new Date()

  cantidadHoy: Cantidad = {} as Cantidad

  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  mesHoy: String = ''

  mes: String = ''

  ingresos = new Array<number>(12)

  constructor(private srv: VentasService) { }

  ngOnInit(): void {
    this.obtenerDiaHoy()

    this.obtenerMesActual()

    this.obtenerMes()

    setTimeout(() => {

      this.suscripcion.add(this.srv.getTotales(this.fecha).subscribe({
        next: (response) => {
          this.cantidadHoy = response.data
          this.cantidad = this.cantidadHoy
        }
      }))

    }, 200)

  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  obtenerMesActual() {

    for (let i = 0; i < this.meses.length; i++) {

      if ((i + 1) == this.hoy.getMonth()) {
        this.mesHoy = this.meses[i+1]
      }

    }
  }

  obtenerMes() {

    for (let i = 0; i < this.meses.length; i++) {

      if ((i + 1) == this.fecha.mes) {
        this.mes = this.meses[i]
      }

    }
  }

  //retorno la cantidad de dias del mes
  obtenerDiaMes(anio: number, mes: number){
    return new Date(anio, mes, 0).getDate();
  }

  obtenerDiaHoy() {

    this.fecha.dia = this.hoy.getDate();
    this.fecha.mes = this.hoy.getMonth() + 1;
    this.fecha.anio = this.hoy.getFullYear();

    this.selected = this.hoy

  }

  obtenerDiaSeleccionado() {

    this.fecha.dia = this.selected.getDate();
    this.fecha.mes = this.selected.getMonth() + 1;
    this.fecha.anio = this.selected.getFullYear();

    this.obtenerMes()
  }

  buscar() {

    this.obtenerDiaSeleccionado()
    setTimeout(() => {
      //this.cargarIASeleccionados()
      //this.cargarTotalIASeleccionado()
      //this.hijo1.buscar();
      //this.hijo2.buscar();
    }, 200)

  }

  

}
