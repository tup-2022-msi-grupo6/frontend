import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAuthService } from "../services/apiauth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private apiAuthService: ApiAuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiAuthService.usuarioData;

        if (usuario) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${usuario.token}`
                }
            })
        }
        
        return next.handle(req);
    }
}