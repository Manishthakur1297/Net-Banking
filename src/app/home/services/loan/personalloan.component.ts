import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {

  li : number = 15;
  emi : number= 0;
  constructor(private ls : LoanService) { }

  ngOnInit() {
  }

  getEmi(p,t,r):void
  {
    this.emi = this.ls.emi(p,r,t);
  }
  

}

