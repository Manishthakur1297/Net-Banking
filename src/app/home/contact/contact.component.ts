import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/service/login-check.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private lc : LoginCheckService) { }

  ngOnInit() {
  }

}
