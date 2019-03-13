 
export class LoanService {

  constructor() { }

  emi(p,r,t) : number
  {
    let emi = p*r*t/100;
    return emi;
  }

}
