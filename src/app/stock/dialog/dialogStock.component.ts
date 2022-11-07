import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Stock } from 'src/app/models/stock';
import { ApistockService } from 'src/app/services/apistock.service';

@Component({
  templateUrl: 'dialogStock.component.html',
})
export class DialogStockComponent {

  public tipo_producto: string;
  public descripcion: string;
  public id_tipo_pintura: number;
  public id_marca: number;
  public id_color: number;
  public acabado: string;
  public tamano: number;
  public precio: number;
  public id_sector: number;

  constructor(
    public dialogRef: MatDialogRef<DialogStockComponent>,
    public apiStock: ApistockService,

    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public stock: Stock
  ) {
    if (this.stock !== null) {
      this.tipo_producto = stock.tipo_producto;
      this.descripcion = stock.descripcion;
      this.id_tipo_pintura = stock.id_tipo_pintura;
      this.id_marca = stock.id_marca;
      this.id_color = stock.id_color;
      this.acabado = stock.acabado;
      this.tamano = stock.tamano;
      this.precio = stock.precio;
      this.id_sector = stock.id_sector;
    }

  }

  close() {
    this.dialogRef.close();
  }

  addProducto() {
    const stock: Stock = { tipo_producto: this.tipo_producto, descripcion: this.descripcion, id_tipo_pintura: this.id_tipo_pintura, id_marca: this.id_marca,
    id_color: this.id_color, acabado: this.acabado, tamano: this.tamano, precio: this.precio, id_sector: this.id_sector, codigo: 0};

    this.apiStock.addProducto(stock).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Producto insertado con éxito', '',{
            duration: 2000
        })
        }
    });
   }

   editProducto() {
   const stock: Stock = {tipo_producto: this.tipo_producto, descripcion: this.descripcion, id_tipo_pintura: this.id_tipo_pintura, id_marca: this.id_marca,
    id_color: this.id_color, acabado: this.acabado, tamano: this.tamano, precio: this.precio, id_sector: this.id_sector,  codigo: this.stock.codigo };

    this.apiStock.editarProducto(stock).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Producto editado con éxito', '',{
            duration: 2000
        })
        }
    });
   }
  }
