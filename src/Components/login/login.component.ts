import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {LoginResponse } from "../../Models/Models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginResp: Array<LoginResponse> = [];
  public username:string;
  public password:string;
  constructor(public loginService:LoginService) { 
    this.username = "shjbf";
    this.password= "aksjbdfjashb";
  }

  ngOnInit() {
  }

  onSubmitButtonClicked(){
    this.loginService.makeLoginServiceCall(this.username, this.password).subscribe((r)=>{        
      console.log(r.json());
      this.loginResp.push(r.json());
    }, (error)=>{

    });
    console.log(this.loginResp);


  } 

}
