import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogClienteComponent } from './cliente/dialog/dialogCliente.component';
import { DialogStockComponent } from './stock/dialog/dialogStock.component';

import { DialogDeleteComponent } from './common/delete/dialogDelete.component';
import { MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';


import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ReporteVentasComponent } from './reportes/reporte-ventas/reporte-ventas.component';
import { CantidadesComponent } from './reportes/reporte-ventas/cantidades/cantidades.component';
import { PreciosComponent } from './reportes/reporte-ventas/precios/precios.component';
import { PieTopSellersComponent } from './reportes/reporte-ventas/precios/pie-top-sellers/pie-top-sellers.component';
import { PieTopSellersYComponent } from './reportes/reporte-ventas/precios/pie-top-sellers-y/pie-top-sellers-y.component';

import { VentasService } from './services/reportesServices/ventas.service';
import { NgChartsModule } from "ng2-charts";

import { StockComponent } from './stock/stock.component';

import { VentaComponent } from './venta/venta.component';
import { DialogVentaComponent } from './venta/dialog/dialogVenta.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent,
    DialogDeleteComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ReporteVentasComponent,
    CantidadesComponent,
    PreciosComponent,
    PieTopSellersComponent,
    PieTopSellersYComponent,
    DialogStockComponent,
    LoginComponent,
    StockComponent,
    DialogVentaComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, VentasService,

    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
