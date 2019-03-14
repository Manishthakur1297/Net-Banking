import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  ngOnInit() {
  }

}
