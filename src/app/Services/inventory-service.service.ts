import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventoryModel } from '../Models/InventoryModel';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryServiceService {
  constructor(
    private http: HttpClient,
    private dataservice: DataServiceService
  ) {}

  UrlUpdate = 'http://localhost:3000/api/v1/inventory/updateItem/';
  UrlDelete = 'http://localhost:3000/api/v1/inventory/deleteItem/';
  URL = 'http://localhost:3000/api/v1/inventory';

  CreateProduct(Product: InventoryModel, Token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + Token,
    });

    return this.http.post(this.URL, Product, { headers });
  }

  GetInventory(Token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + Token,
    });

    return this.http.get(this.URL, { headers });
  }

  deleteObject(id : string | undefined , Token : string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + Token,
    });

      return(this.http.delete(this.UrlDelete + id  , { headers } ))
  }

  UpdateObject(Product: InventoryModel, id : string | undefined , Token : string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + Token,
    });

      return(this.http.put(this.UrlUpdate + id , Product , { headers } ))
  }
}
