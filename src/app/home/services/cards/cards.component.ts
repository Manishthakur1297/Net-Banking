import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  ngOnInit() {
  }

}
