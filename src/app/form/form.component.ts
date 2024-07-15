import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {CreazioneCorso} from "../../Model/CreazioneCorso";
import {NgIf} from "@angular/common";
import {UserService} from "../../Service/User/user.service";
import {CorsoService} from "../../Service/Corso/corso.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  CreazioneCorso: CreazioneCorso=new CreazioneCorso();


 constructor(protected UserService:UserService, private CorsoService:CorsoService, private Router:Router) {
 }

  OnSubmit(form:NgForm){
    if(form.valid){

        this.CorsoService.CreaCorso(this.CreazioneCorso).subscribe(response => {
          this.CorsoService.getAll().subscribe(value => {
            this.CorsoService.corsi = value
            

          })
          this.Router.navigate(['Home'])})
      }


    }
  }


