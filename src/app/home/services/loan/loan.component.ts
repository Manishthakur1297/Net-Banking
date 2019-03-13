import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

  type = "Home";
  emi : number;
  li : number = 10;

  getEmi(p,t,r):void
  {
    this.emi = p*r*t/100;
  }

  abc(t1)
  {
    if(t1==10)
    {
      this.type = "Home";
    }
    else if(t1==8)
    {
      this.type = "Car";
    }
    else if(t1==15)
    {
      this.type = "Personal";
    }
    else
    {
      this.type = "Education"
    }
    this.li = t1;
  }


}
