import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiusuarioService } from '../services/apiusuario.service';
import { DialogUserComponent } from './dialog/dialogUser.component';
import { Usuarioabm } from '../models/usuarioabm';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public lst: any[];
  public columnas: string[] = ['id_usuario','email', 'password','nombre', 'id_rol','actions'];
  readonly width: string = '300px';
  public snackBar: MatSnackBar;

  constructor(
    private apiUsuario: ApiusuarioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.apiUsuario.getAllUsuarios().subscribe(response => {
      this.lst = response.data;
    })
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogUserComponent, {
      width : this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuarios();
    });
  }

  openEdit(usuario: Usuarioabm){
    const dialogRef = this.dialog.open(DialogUserComponent, {
      width : this.width,
      data: usuario
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuarios();
    });
  }

  deleteUser(usuario: Usuarioabm){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiUsuario.eliminar(usuario.idUsuario).subscribe(response => {
          if(response.exito === 1){
            this.getUsuarios();
          }
        })
      }
    })
  }

}
