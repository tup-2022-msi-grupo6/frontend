import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuarioabm } from 'src/app/models/usuarioabm';
import { ApiusuarioService } from 'src/app/services/apiusuario.service';

@Component({
  templateUrl: 'dialogUser.component.html',
})
export class DialogUserComponent {

  public Nombre: string;
  public Email: string;
  public Password: string;
  public IdRol: number;


  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>,
    public apiUsuario: ApiusuarioService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public usuarioABM: Usuarioabm
  ) {
    if (this.usuarioABM !== null) {
      this.Nombre = usuarioABM.nombre;
      this.Email = usuarioABM.email;
      this.Password = usuarioABM.password;
      this.IdRol = usuarioABM.id_rol;
    }
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    const usuarioABM: Usuarioabm = { nombre: this.Nombre, email: this.Email, password: this.Password, id_rol: this.IdRol, idUsuario: 0 };

    this.apiUsuario.addUsuario(usuarioABM).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Usuario insertado con éxito', '',{
            duration: 2000
        })
        }
    });
   }

   editUsuario() {
    const usuario: Usuarioabm = { nombre: this.Nombre,email: this.Email, password: this.Password, id_rol: this.IdRol,  idUsuario: this.usuarioABM.idUsuario  };

    this.apiUsuario.editarUsuario(usuario).subscribe((response) => {
      if (response.exito === 1) {
        this.dialogRef.close();
        this.snackBar.open('Usuario editado con éxito', '',{
            duration: 2000
        })
        }
    });
   }
}
