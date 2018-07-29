import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Components/login/login.component';
import {LoginService} from "../Components/login/login.service";
import {HttpModule} from "@angular/http";
import { HomeComponent } from '../Components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProfileComponent } from '../Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
