import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
