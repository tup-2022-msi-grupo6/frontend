import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent,  canActivate: [AuthGuard]},
  {path: 'stock', component: StockComponent,  canActivate: [AuthGuard]},
  {path: 'venta', component: VentaComponent,  canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
