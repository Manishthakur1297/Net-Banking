import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  ngOnInit() {
  }

  disp: boolean = true;
  abc():void
  {
    this.disp = !this.disp;
  }

}
