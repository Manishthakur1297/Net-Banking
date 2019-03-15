export class LoginCheckService {

  constructor() { }
  loginCheck : boolean = false;

  setLogin(lc : boolean)
  {
    return this.loginCheck = lc;
  }
}
