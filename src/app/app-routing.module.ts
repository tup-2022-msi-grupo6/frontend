import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { RolesGuard } from './guards/roles.guard';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { Usuarioabm } from './models/usuarioabm';
import { AuthGuard } from './security/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'usuario',
   component: UsuarioComponent,
  loadChildren: () =>
    import('./models/usuarioabm').then((m: Usuarioabm: Usuarioabm) => m.),
    data: {
      role: 1
    }
    canActive: [RolesGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
