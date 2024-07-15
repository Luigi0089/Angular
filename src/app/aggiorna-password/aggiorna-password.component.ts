import {Component, DoCheck, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {ModificaPassword} from "../../Model/ModificaPassword";
import {NgIf} from "@angular/common";
import {UserService} from "../../Service/User/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aggiorna-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './aggiorna-password.component.html',
  styleUrl: './aggiorna-password.component.css'
})
export class AggiornaPasswordComponent implements DoCheck {


  modificaPassword: ModificaPassword = new ModificaPassword();
  errore: boolean;


  constructor(protected UserService: UserService, private Router:Router) {
  }

  ngDoCheck() {
    if (this.modificaPassword.vecchiaPassword !== this.UserService.UtenteLog.password || this.modificaPassword.email !== this.UserService.UtenteLog.email) {
      this.errore = true;
    } else {
      this.errore = false;
    }
    console.log(this.modificaPassword.vecchiaPassword !== this.UserService.UtenteLog.password)
    console.log(this.modificaPassword.email !== this.UserService.UtenteLog.email)
   console.log('il loggato è: ' + this.UserService.UtenteLog.email+ ' '+ this.UserService.UtenteLog.password);
    console.log('l inserito è: ' + this.modificaPassword.email+' '+ this.modificaPassword.vecchiaPassword);
    console.log('errore è: ' + this.errore);
  }

  OnSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.modificaPassword);
      this.UserService.PutPassword(this.modificaPassword).subscribe(response => {
        console.log(response);

        if(this.errore){
          this.Router.navigate(['modifica'])
        }
        else{
          this.Router.navigate(['modifica'])
        }

      })
    }
  }
}
