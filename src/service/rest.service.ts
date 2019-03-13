import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response'
import { Customers } from 'src/app/Customers';
import 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url : string = "http://localhost:3000/customers/";

  constructor(private http : Http) { }

  postCustomer(customer : Customers)
  {
    return this.http.post(this.url,customer)
    .map((response : any ) => response);
  }



  
}
