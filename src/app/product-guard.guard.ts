import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardGuard implements CanActivate {
  
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id= Number(route.paramMap.get('Id'));
    if(isNaN(id) || id < 1 || id > 5)
    {
      alert(' Selected Invalid Product id');
      this.router.navigate(['/productlist']);
      return false;
    }
    return true;

  //   debugger
  //   console.log(id);
  //     return false;
   }
  
}



