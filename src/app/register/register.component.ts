import {Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';
import {timeout} from "rxjs";
import {FormsModule, NgForm} from "@angular/forms";
import {RegisterRequest} from "../../Model/RegisterRequest";
import {NgIf} from "@angular/common";
import {UserService} from "../../Service/User/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isDisabled: boolean= false;

  Constructor() {
    console.log(1)
  }



onUpdate($event: Event){
    console.log("Hai inserito: ", (<HTMLInputElement>$event.target).value)
}

  RegisterRequest: RegisterRequest= new RegisterRequest();

constructor(protected UserService: UserService, private  Router: Router) {
}


  OnSubmit(form:NgForm){
    if(form.valid){

      this.UserService.PostReg(this.UserService.UtenteReg).subscribe(response =>{
          this.UserService.isRegistered=true;
          console.log('Utente Registrato');
        this.Router.navigate(['/Home'])
      })
  }

}


}
