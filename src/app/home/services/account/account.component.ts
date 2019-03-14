import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCheckService } from 'src/service/login-check.service';
import { RestService } from 'src/service/rest.service';
import { Customers } from 'src/app/Customers';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/PasswordValidation';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private lc : LoginCheckService, private rs : RestService) 
  {
    this.rs.getCustomer(this.rs.getUID())
    .subscribe
    (
      (response : any) => 
      {
        this.account = response;
        console.log(response);
      },
      (error)=>
      {
        console.log("Error occured while fetching....");
      }
    )
  }

  account : Customers = new Customers("","","","","","","","");

  form3 : FormGroup;
  
  ngOnInit() 
  {
    this.form3 = new FormGroup
    (
      {
        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14)
          ]
        )),

        lname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14)
          ]
        )),

        dob: new FormControl("", Validators.compose
        (
          [
            
            Validators.required
          ]
        )),

        number: new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        email: new FormControl("", Validators.compose
        (
          [
            Validators.required
            //Validators.pattern("/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/")
          ]
        )),

        address : new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )),

        pwd: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
          ]
        )),

        Cpwd: new FormControl("",Validators.compose
        (
          [
              Validators.required,
              Validators.minLength(6),
              PasswordValidation.MatchPassword
          ]
        ))
      });
    

  }
 

    clickUpdate(f)
    {
      console.log(f.number);
      let c1 = new Customers(f.number, f.fname,f.lname,f.dob,f.number,f.email,f.address,f.pwd);
      console.log(c1);
      
      this.rs.updateCustomer(c1,f.number)
      .subscribe
      (
        (response : any)=>
        {
          alert("Updated Successfully !!! Login Now Again....");
          this.lc.setLogin(false);
          //this.rs.setUID(userForm.uID);
          this.router.navigate(["./login"]);
        }
        ,
        (error) => 
          {
              console.log("Record with id "+f.number+" does not exists!!!" + error);
              alert("Record with id "+f.number+" does not exists!!!");
          }
    )
  }

  backToServices()
  {
    this.router.navigate(["./services"]);
  }



}
