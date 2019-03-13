// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LoginCheckService {

  constructor() { }
  loginCheck : boolean = false;

  setLogin(lc : boolean)
  {
    this.loginCheck = lc;
  }
}
