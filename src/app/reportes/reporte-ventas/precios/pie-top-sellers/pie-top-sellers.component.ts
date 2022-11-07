import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { VentasService } from 'src/app/services/reportesServices/ventas.service';
import { ChartData, ChartOptions } from "chart.js";
import { Cantidad } from 'src/app/models/reportesModels/cantidad';
import { IngresoE } from 'src/app/models/reportesModels/ingresoE';

@Component({
  selector: 'app-pie-top-sellers',
  templateUrl: './pie-top-sellers.component.html',
  styleUrls: ['./pie-top-sellers.component.css']
})
export class PieTopSellersComponent implements OnInit, OnDestroy {

  @Input() fecha: Cantidad = {} as Cantidad
  @Input() meses: string[] = []

  ingresos: IngresoE[] = []

  suscripcion: Subscription = new Subscription();

  constructor(private srv: VentasService) { }

  ngOnInit(): void {

    this.buscar()

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  resetear() {
    this.datos = {
      labels: ['', '', '', ''],
      datasets: [
        { data: [0, 0, 0, 0] }
      ]
    }

    this.opciones = {
      responsive: true,
      plugins: {
        title: { text: '', display: true, font: { size: 26 }, fullSize: true }
      }
    }
  }

  datos: ChartData<'bar'> = {
    labels: ['', '', '', ''],
    datasets: [
      { data: [0, 0, 0, 0] }
    ]
  }

  opciones: ChartOptions = {
    responsive: true,
    plugins: {
      title: { text: '', display: true, font: { size: 26 }, fullSize: true }
    }
  }

  cargarIMSeleccionados() {
    this.suscripcion.add(this.srv.getIngresosMXempleados(this.fecha).subscribe({
      next: (response) => {

        let empleados: string[] = []
        let totales: number[] = []

        response.data.forEach((e: IngresoE) => {

          empleados.push(e.empleado)
          totales.push(e.total)

        });

        this.datos = {
          labels: empleados,
          datasets: [
            { data: totales }
          ]
        }

        let mes = ''

        for (let i = 0; i < this.meses.length; i++) {

          if ((i + 1) == this.fecha.mes) {
            mes = this.meses[i]
          }

        }

        this.opciones = {
          responsive: true,
          plugins: {
            title: { text: 'Top vendedores ' + mes, display: true, font: { size: 20 }, fullSize: true }
          }
        }

        

      }
    }))
  }

  buscar() {

    this.resetear()

    setTimeout(() => {

      this.cargarIMSeleccionados()

    }, 200)

  }

}
