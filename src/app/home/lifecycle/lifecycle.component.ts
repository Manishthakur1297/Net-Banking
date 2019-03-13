import { Component, OnInit, OnChanges, OnDestroy, DoCheck } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  ngOnDestroy(): void {
    console.log("Component Destroyed.....");
  }

  ngDoCheck(): void {
    console.log("Do Check called.....");
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Component destroyed.....");
  }

  constructor() { }

  ngOnInit() {
    console.log("Component Intialized.....");
  }

}
