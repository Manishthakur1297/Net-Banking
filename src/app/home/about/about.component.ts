import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  ngOnInit() {
  }

  

}
