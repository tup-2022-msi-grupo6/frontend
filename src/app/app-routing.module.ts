import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
import { VentaComponent } from './venta/venta.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './security/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReporteVentasComponent } from './reportes/reporte-ventas/reporte-ventas.component';
import { CantidadesComponent } from './reportes/reporte-ventas/cantidades/cantidades.component';
import { PreciosComponent } from './reportes/reporte-ventas/precios/precios.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent, children:[
   {path: 'stock', component: StockComponent,  canActivate: [AuthGuard]},
   {path: 'venta', component: VentaComponent,  canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]  },
    {path: 'cliente', component: ClienteComponent , canActivate: [AuthGuard]  },
    {path: 'reporteventas', component: ReporteVentasComponent , children: [
      {path: 'cantidad', component: CantidadesComponent , canActivate: [AuthGuard]  },
      {path: 'precios', component: PreciosComponent , canActivate: [AuthGuard]  },
    ],canActivate: [AuthGuard]  },
  ], canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
