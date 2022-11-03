import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
<<<<<<< Updated upstream
=======
import { UsuarioComponent } from './usuario/usuario.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent,  canActivate: [AuthGuard]},
<<<<<<< Updated upstream
  {path: 'login', component: LoginComponent}
=======
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent}
>>>>>>> Stashed changes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
