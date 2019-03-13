import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  form1;

  ngOnInit()
  {
    this.form1 = new FormGroup
    (
      {
        uname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
          ]
        )),

        password: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6),
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        ))
      });

    }
      clickLogin(userForm)
      {
        console.log(userForm);
      }
  }

  // e_str : string = "";
  // p_str : string = "";

  // emailID(e1) : string
  // {
  //   if(e1.value.length<1)
  //   {
  //       return this.e_str="Email can't be empty....";
  //   }
  //   else 
  //   {
  //     return this.e_str="*";        
  //   }
  // }

  // password(p1) : string
  // {
  //   if(p1.value.length<9)
  //   {
  //       return this.p_str="Password must be more than 8 characters";
  //   }
  //   else 
  //   {
  //     return this.p_str="*";        
  //   }
  // }


