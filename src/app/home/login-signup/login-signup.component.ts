import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCheckService } from 'src/service/login-check.service';
@Component({
  selector: 'login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  // lC : boolean;
  constructor(private router: Router, private lc : LoginCheckService) { }

    navigateLogin() {
        this.lc.setLogin(true);
        this.router.navigate(["./login/"]);
    }

    navigateRegister() {
      this.lc.setLogin(true);
      // this.lC = this.lc.loginCheck;
      this.router.navigate(["./register/"]);
  }

  ngOnInit() {
  }

}
