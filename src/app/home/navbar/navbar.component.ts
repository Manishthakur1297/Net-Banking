import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private lc : LoginCheckService, private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
      this.lc.setLogin(false);
      this.router.navigate([""]);
  }

}
