import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-ventas',
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent implements OnInit {

  cambio: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('home/reporteventas/cantidad')
  }

  switch(event: Event){

    let boton = event.target as HTMLButtonElement

    if (this.cambio) {
      this.cambio = false
      boton.textContent = 'Ingresos ($)'
      this.router.navigateByUrl('home/reporteventas/cantidad')
    }else{
      this.cambio = true
      boton.textContent = 'Cantidades'
      this.router.navigateByUrl('home/reporteventas/precios')
    }
  }

}
