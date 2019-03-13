import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'carloan',
  templateUrl: './carloan.component.html',
  styleUrls: ['./carloan.component.css']
})
export class CarloanComponent implements OnInit {

  li : number = 8;
  emi : number= 0;
  constructor(private ls : LoanService) { }

  ngOnInit() {
  }

  getEmi(p,t,r):void
  {
    this.emi = this.ls.emi(p,r,t);
  }
  

}
