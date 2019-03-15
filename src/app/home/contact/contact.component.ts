import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';
import { Router } from '@angular/router';
import { RestService } from 'src/service/rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private lc : LoginCheckService, private rs : RestService) { }

  form1;

  ngOnInit()
  {
    this.form1 = new FormGroup
    (
      {
        fname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.maxLength(15)
          ]
        )),

        lname: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

        email: new FormControl("", Validators.compose
        (
          [
            Validators.required
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),

        subject: new FormControl("", Validators.compose
        (
          [
            Validators.required,
            Validators.minLength(6)
            // Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        ))
      });

    }
      sendMessage(f)
      {
        let c1 = new Contact(this.rs.UID,f.fname,f.lname,f.email,f.subject);
        this.rs.postMessage(c1)
        .subscribe
        (
          (response : any )=>
          {
            
            console.log("Data : "+f);
            alert("Message Sent Successfully !!!");
            this.router.navigate(["./home"]);
          },

          (error : any )=> alert("Message not sent !!!! Try Again Later")
        )
      }
  }
