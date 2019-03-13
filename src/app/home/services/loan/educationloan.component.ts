import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'educationloan',
  templateUrl: './educationloan.component.html',
  styleUrls: ['./educationloan.component.css']
})
export class EducationloanComponent implements OnInit {

  li : number = 6;
  emi : number= 0;
  constructor(private ls : LoanService) { }

  ngOnInit() {
  }

  getEmi(p,t,r):void
  {
    this.emi = this.ls.emi(p,r,t);
  }
  

}
