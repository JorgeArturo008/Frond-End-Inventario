import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';
import { DataServiceService } from '../Services/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateLogGuard implements CanActivate {

  constructor(private Token: DataServiceService, private router: Router) {}

  async canActivate():Promise<boolean | UrlTree>{
    const RESULTADO = await this.estado();
    if(RESULTADO !== ''){
    return true
    }else{
    return this.router.navigate(['/home'])
    }

    
  }

  estado(){
    let Data  = ''
    
      this.Token.getData().subscribe((res) => {
        Data = res
    });

  

    return Data
  }

  }
  

