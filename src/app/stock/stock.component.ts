import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { ApistockService } from '../services/apistock.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogStockComponent } from './dialog/dialogStock.component';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { ImpresionService } from '../services/impresion.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public lst: any[];

  readonly width: string = '300px';
  public columnas: string[] = ['codigo','tipo_producto', 'descripcion', 'id_tipo_pintura', 'id_marca', 'id_color', 'acabado', 'tamano', 'precio', 'id_sector' ,'actions'];
  public snackbar: MatSnackBar;

  constructor(private stockService : ApistockService,  public dialog: MatDialog, private impresionService : ImpresionService ) { }

  ngOnInit(): void {
    this.getProductos();

  }

  getProductos(){
    this.stockService.getAllProductos().subscribe(Response => {this.lst = Response.data})
  }

  openAdd() {
    const dialogRef = this.dialog.open(DialogStockComponent, {

      width : this.width

    })
    dialogRef.afterClosed().subscribe(result => {
      this.getProductos();
    });
  }

  openEdit(stock: Stock) {
    const dialogRef = this.dialog.open(DialogStockComponent, {
      width : this.width,
      data: stock
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getProductos();
    });
  }

  deleteProducto(stock: Stock) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width : this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stockService.eliminar(stock.codigo).subscribe(response => {
          if (response.exito === 1) {
            this.getProductos();
          }
        })
      }
    });
  }

  onImprimir() {
    const encabezado = ['Id', 'Producto', 'Descripcion', 'Tipo Pintura', 'Marca', 'Color', 'Acabado', 'Tamaño', 'Precio', 'Sector'];

    this.stockService.getAllProductos().subscribe( async response => {
      const cuerpo = Object(response)['data']?.map(
        (object : any) => {
          const data = [
            object.codigo,
            object.tipoProducto,
            object.descripcion,
            object.idTipoPintura,
            object.idMarca,
            object.idColor,
            object.acabado,
            object.tamano,
            object.precio,
            object.idSector

          ]
          return data;
        }
      )
      this.impresionService.imprimir(encabezado, cuerpo, "Listado de Stock");
    })
  }


}
