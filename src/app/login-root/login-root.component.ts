import {Component, DoCheck} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {NgIf} from "@angular/common";
import {UtenteLog} from "../../Model/UtenteLog";
import {loginRequest} from "../../Model/loginRequest";
import {UserService} from "../../Service/User/user.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../Service/Local-Storage/local-storage.service";
import {HttpErrorResponse} from "@angular/common/http";
import {timeout} from "rxjs";

@Component({
  selector: 'app-login-root',
  standalone: true,
  imports: [
    LoginComponent,
    NgIf
  ],
  templateUrl: './login-root.component.html',
  styleUrl: './login-root.component.css'
})
export class LoginRootComponent{
  errore:boolean;
  isLogged:boolean=false;

  utente=new loginRequest();

  constructor(private UserService: UserService, private Router:Router, private LocalStorageService:LocalStorageService) {
  }



  setEmail(utente:loginRequest): void {
    this.utente=utente;
    this.UserService.UtenteLog.email=this.utente.mail;
    this.UserService.UtenteLog.password=this.utente.password;
    setTimeout(()=>{
      this.errore=true;
    }, 500)

    this.UserService.PostLog(this.UserService.UtenteLog).subscribe(response =>{

      if(response){

        this.LocalStorageService.setItem('token',response.token);
        if(this.LocalStorageService.getItem('token')){
          this.errore=false

        }

        console.log('item: ',this.LocalStorageService.getItem('token'));
       this.UserService.Token=response;
       this.UserService.Token.token=null;
        this.UserService.Token.ttl=null;
        this.UserService.Token.tokenCreationTime=null;

        this.UserService.isLogged=true;
        this.Router.navigate(['Home'])
      }

    })
  }
}
