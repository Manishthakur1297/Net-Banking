import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ServicesComponent } from './home/services/services.component';
import { CarloanComponent } from './home/services/loan/carloan.component';
import { HomeloanComponent } from './home/services/loan/homeloan.component';
import { PersonalloanComponent } from './home/services/loan/personalloan.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { AccountComponent } from './home/services/account/account.component';
import { DepositComponent } from './home/services/deposit/deposit.component';
import { CardsComponent } from './home/services/cards/cards.component';
import { LifecycleComponent } from './home/lifecycle/lifecycle.component';
import { LoanComponent } from './home/services/loan/loan.component';
import { EducationloanComponent } from './home/services/loan/educationloan.component';

export const routes: Routes = [

  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'services',
    component : ServicesComponent
  },
  {
    path : 'services/account',
    component : AccountComponent
  },
  {
    path : 'services/loan',
    component : LoanComponent
  },
  {
    path : 'services/deposit',
    component : DepositComponent
  },
  {
    path : 'services/cards',
    component : CardsComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'services/loan/car',
    component : CarloanComponent
  },
  {
    path : 'services/loan/personal',
    component : PersonalloanComponent
  },
  {
    path : 'services/loan/home',
    component : HomeloanComponent
  },
  {
    path : 'services/loan/education',
    component : EducationloanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
