import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/service/rest.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private lc : LoginCheckService, private rs : RestService) { }

  form1;

  ngOnInit()
  {
    this.form1 = new FormGroup
    (
      {
        uID: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            //Validators.minLength(6),
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
        this.rs.getCustomer(userForm.uID)
        .subscribe
        (
          (response : any )=>
          {
            let pwd = response.password;
            //console.log("pwd : "+pwd);
            //console.log("Password : "+userForm.password);
            if(pwd == userForm.password)
            {
              this.lc.setLogin(true);
              this.rs.setUID(userForm.uID);
              this.router.navigate(["./home"]);
              //alert("Login Successful !!! Welcome to Net Banking")
            }
            else
            {
              console.log("User ID and password do not match...");
              alert("User ID and password do not match...");
            }
          },

          (error : any )=> alert("User ID do not exist !!!!")
        )
        
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


