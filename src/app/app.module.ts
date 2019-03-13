import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { HttpModule } from '@angular/';
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./app-routing.module";
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

import { AppRoutingModule } from './app-routing.module';
import { LoanComponent } from './home/services/loan/loan.component';
import { EducationloanComponent } from './home/services/loan/educationloan.component';
import { LoanService } from './home/services/loan.service';
import { LoginCheckService } from 'src/service/login-check.service';
import { LoginSignupComponent } from './home/login-signup/login-signup.component';
import { RestService } from 'src/service/rest.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    CarloanComponent,
    HomeloanComponent,
    PersonalloanComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    DepositComponent,
    CardsComponent,
    LifecycleComponent,
    LoanComponent,
    EducationloanComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,AppRoutingModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(routes)
  ],
  providers: [LoanService, LoginCheckService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
