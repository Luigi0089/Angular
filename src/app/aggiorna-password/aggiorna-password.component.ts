import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {ModificaPassword} from "../../Model/ModificaPassword";
import {NgIf} from "@angular/common";
import {UserService} from "../../Service/User/user.service";

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
export class AggiornaPasswordComponent{

  modificaPassword:ModificaPassword=new ModificaPassword();

  constructor(private UserService:UserService) {
  }

  OnSubmit(form:NgForm){
    if(form.valid){
      console.log(this.modificaPassword);
      this.UserService.PutPassword(this.modificaPassword).subscribe(response => {
        console.log(response);


  })
}
  }
}
