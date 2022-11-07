import { Component, OnInit } from '@angular/core';
import { Response } from '../models/response';
import { ApiclienteService } from '../services/apicliente.service';
import { DialogClienteComponent } from './dialog/dialogCliente.component';
import { MatDialog } from '@angular/material/dialog';

import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ImpresionService } from '../services/impresion.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public lst: any[];
  public cuerpo: any[];


  public columnas: string[] = ['id','nombre', 'actions'];
  readonly width: string = '300px';
  public snackBar: MatSnackBar;


  constructor(
    private apiCliente: ApiclienteService,
    public dialog: MatDialog,
    private impresionService: ImpresionService
  ) {
    
   }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.apiCliente.getAllClientes().subscribe( response => {
      this.lst = response.data;

    })
  }

  openAdd() {
    const dialogRef = this.dialog.open(DialogClienteComponent, {

      width : this.width


    })
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }


  openEdit(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width : this.width,
      data: cliente
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }


  deleteCliente(cliente: Cliente) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width : this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiCliente.eliminar(cliente.idCliente).subscribe(response => {
          if (response.exito === 1) {
            this.getClientes();       
          }
        })
      }
    });
  }

  onImprimir() {
    const encabezado = ['Id', 'Nombre'];
    
    this.apiCliente.getAllClientes().subscribe( async response => {
      const cuerpo = Object(response)['data']?.map(
        (object : any) => {
          const data = [
            object.idCliente,
            object.nombre
          ]
          return data;
        }
      )
      this.impresionService.imprimir(encabezado, cuerpo, "Listado de clientes");
    })
  }
}
