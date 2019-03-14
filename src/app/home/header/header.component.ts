import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(e)
  {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password =  e.target.elements[1].value;
    console.log(username);
  }

}
