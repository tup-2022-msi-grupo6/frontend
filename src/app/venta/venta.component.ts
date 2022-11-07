import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { DetalleVenta } from '../models/detalleVenta';
import { Venta } from '../models/venta';
import { ApiventaService } from '../services/apiventa.service';
import { DialogVentaComponent } from './dialog/dialogVenta.component';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  readonly width: string = '600px';
  public columnas: string[] = ['id','id_cliente', 'fecha_venta', 'precio','descripcion', 'actions'];
  public lst: any[];
  public cuerpo: any[];

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar,private apiVenta: ApiventaService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas() {
    this.apiVenta.getAllVentas().subscribe( response => {
      this.lst = response.data;
      console.log(this.lst)
    })
  }

  openAdd() {
    const dialogRef = this.dialog.open(DialogVentaComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getVentas();
    });
  }

  deleteVenta(detalle: DetalleVenta) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width : this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiVenta.eliminar(detalle.nroFac).subscribe(response => {
          console.log(detalle.nroFac)
          if (response.exito === 1) {
            this.getVentas();      
          }
        })
      }
    });
  }

}
