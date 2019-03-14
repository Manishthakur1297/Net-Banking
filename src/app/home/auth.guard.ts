import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginCheckService } from 'src/service/login-check.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  constructor(private lc : LoginCheckService)
  {
    
  }


  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.lc.setLogin(true);
  }

  
}
