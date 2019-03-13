import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NetBanking';

  constructor(private lc : LoginCheckService) { }

  // lC = this.lc.loginCheck;

  ngOnInit() {
  }

}
