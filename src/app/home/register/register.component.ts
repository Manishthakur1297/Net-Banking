import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  form2 : FormGroup;

  ngOnInit()
  {
    this.form2 = new FormGroup
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
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        )),

        email: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
          ]
        )),

        address : new FormControl("", Validators.compose
        (
          [
            Validators.required
          ]
        )),

        pwd: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6),
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

        Cpwd: new FormControl("",Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6),
            
          ]
        ))
      });

    }

    // passwordValidator(control)
    // {
    //     if(control.value==this.form2.controls.pwd.value)
    //     {
    //       return {"Cpwd":true};
    //     }
    // }

    

      clickRegister(userForm)
      {
          
      }
  }

//   f : string = "";
//   l : string = "";
//   m : string = "";
//   p : string = "";
//   cp : string = "";
//   e : string = "";
//   pass : string;


//   firstName(f1)
// {
//     if((f1.value.length)<4)
//     {
//       return this.f="Firstname must be more than 3 characters";        
//     }
//     else 
//     {
//         return this.l="*";        
//     }
// }

// lastName(l1)
// {
//     if((l1.value.length)<4)
//     { 
//         return this.l="lastname must be more than 3 characters";      
//     }
//     else 
//     {
//       return this.l="*";        
//     }
// }

// mobileNumber(m1)
// {
//     if((m1.value.length)==10)
//     {
//       return this.m="*";        
//     }
//     else 
//     {
//       return this.m="Number must be 10 digits";        
//     }
// }

// emailID(e1) : string
// {
//   if(e1.value.length<1)
//   {
//       return this.e="Email can't be empty....";
//   }
//   else 
//   {
//     return this.e="*";        
//   }
// }

// password(p1) : string
// {
//   if(p1.value.length<9)
//   {
//       return this.p="Password must be more than 8 characters";
//   }
//   else 
//   {
//     this.pass = p1.value; 
//     return this.p="*";        
//   }
// }

// cPassword(cp1) : string
// {
//     if((cp1.value == this.pass))
//     {
//       return this.cp="*";
//     }
//     else 
//     {
//       return this.cp="Password do not match....";
//     }
// }
// }