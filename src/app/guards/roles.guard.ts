import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiusuarioService } from '../services/apiusuario.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  
  constructor(private usuario: ApiusuarioService,private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }
  
  checkUserLogin(route: ActivatedRouteSnapshot): boolean{
    const {scopes = []} = this.usuario.getAllUsuarios() //hacer metodo para traer usuario actual
    if(scopes.includes(route.data.role)){
      return true;
    }
    else{
      this.router.navigate(commands:['/', 'home'])
      return false
    }
  }

}
