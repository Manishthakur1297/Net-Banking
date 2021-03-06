import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response'
import { Customers } from 'src/app/Customers';
import 'rxjs/rx';
import { Contact } from 'src/app/Contact';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url : string = "http://localhost:3000/customers/";
  contactUrl : string = "http://localhost:3000/contact/";

  UID : any ;

  constructor(private http : Http) {
   }

  postCustomer(customer : Customers)
  {
    return this.http.post(this.url,customer)
    .map((response : any ) => response);
  }

  getCustomer(id)
  {
    return this.http.get(this.url+id)
    .map((response : any ) => response.json());
  }

  updateCustomer(customer : Customers, id)
  {
    return this.http.put(this.url+id,customer)
    .map((response : any ) => response);
  }

  postMessage(contact : Contact)
  {
    return this.http.post(this.contactUrl,contact)
    .map((response : any) => response);
  }

  

  // setter-------------

  setUID(i)
  {
      this.UID = i;
  }

  getUID(): any
  {
    return this.UID;
  }
}
