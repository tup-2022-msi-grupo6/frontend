import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { VentasService } from 'src/app/services/reportesServices/ventas.service';
import { Cantidad } from 'src/app/models/reportesModels/cantidad';
import { Ingreso } from 'src/app/models/reportesModels/ingreso';
import { ChartData, ChartOptions } from "chart.js";
import { PieTopSellersComponent } from './pie-top-sellers/pie-top-sellers.component';
import { PieTopSellersYComponent } from './pie-top-sellers-y/pie-top-sellers-y.component';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit, OnDestroy {

  @ViewChild(PieTopSellersComponent) hijo1: PieTopSellersComponent
  @ViewChild(PieTopSellersYComponent) hijo2: PieTopSellersYComponent

  selected: Date = new Date();

  suscripcion: Subscription = new Subscription();

  hoy: Date = new Date();

  fecha: Cantidad = {} as Cantidad

  cantidadHoy: Cantidad = {} as Cantidad

  cantidad: Cantidad = {} as Cantidad

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

      this.suscripcion.add(this.srv.getIngresos(this.fecha).subscribe({
        next: (response) => {
          this.cantidadHoy = response.data
          this.cantidad = this.cantidadHoy
        }
      }))

      this.cargarIASeleccionados()

    }, 200)

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

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  datos: ChartData<'bar'> = {
    labels: this.meses,
    datasets: [
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Ingresos' }
    ]
  }

  opciones: ChartOptions = {
    responsive: true,
    plugins: {
      title: { text: "Ventas por mes", display: true, font: { size: 26 }, fullSize: true }
    }
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

  cargarTotalIASeleccionado() {
    this.suscripcion.add(this.srv.getIngresos(this.fecha).subscribe({
      next: (response) => {
        this.cantidad = response.data
      }
    }))
  }


  cargarIASeleccionados() {
    this.suscripcion.add(this.srv.getIngresosXmeses(this.fecha).subscribe({
      next: (response) => {

        for (let index = 0; index < this.ingresos.length; index++) {
          this.ingresos[index] = 0
        }

        for (let index = 0; index < this.ingresos.length; index++) {

          try {
            let e: Ingreso = response.data[index]

            this.ingresos[e.mes - 1] = e.ingreso

          } catch (error) {

            if (this.ingresos[index] == null) {

              this.ingresos[index] = 0
            }

          }

        }

        this.datos = {
          labels: this.meses,
          datasets: [
            { data: this.ingresos, label: 'Ingresos ($)' }
          ]
        }

        this.opciones = {
          responsive: true,
          plugins: {
            title: { text: "Ingresos por ventas del " + this.fecha.anio, display: true, font: { size: 26 }, fullSize: true }
          }
        }

      }
    }))
  }

  buscar() {

    this.obtenerDiaSeleccionado()
    setTimeout(() => {
      this.cargarIASeleccionados()
      this.cargarTotalIASeleccionado()
      this.hijo1.buscar();
      this.hijo2.buscar();
    }, 200)

  }

  //retorno la cantidad de dias del mes
  obtenerDiaMes(anio: number, mes: number) {
    return new Date(anio, mes, 0).getDate();
  }

}
