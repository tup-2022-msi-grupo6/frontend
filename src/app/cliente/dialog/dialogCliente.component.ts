import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from 'src/app/services/apicliente.service';

@Component({
  templateUrl: 'dialogCliente.component.html',
})
export class DialogClienteComponent {

  public nombre: string;

  constructor(
    public dialogRef: MatDialogRef<DialogClienteComponent>,
    public apiCliente: ApiclienteService,

    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente
  ) {
    if (this.cliente !== null) {
      this.nombre = cliente.nombre;
    }
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    const cliente: Cliente = { nombre: this.nombre, idCliente: 0 };

    this.apiCliente.addCliente(cliente).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Cliente insertado con éxito', '',{
            duration: 2000
        })
        }
    });
   }

   editCliente() {
    const cliente: Cliente = { nombre: this.nombre, idCliente: this.cliente.idCliente };

    this.apiCliente.editar(cliente).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Cliente editado con éxito', '',{
            duration: 2000
        })
        }
    });
   }

  }


