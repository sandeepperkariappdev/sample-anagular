import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import {LoginComponent} from "../Components/login/login.component";
import {HomeComponent} from "../Components/home/home.component";


const routes:Routes = [
{ path:"", redirectTo:'/login', pathMatch:'full' },
{ path:"login", component:LoginComponent },
{ path:"home", component:HomeComponent }
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[
        RouterModule
    ]    
})
 
export class AppRoutingModule{}