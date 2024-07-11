import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {loginRequest} from "../../Model/loginRequest";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title: string = "";
  loginRequest: loginRequest = new loginRequest();


  @Output()
  loginEvent: EventEmitter<loginRequest> = new EventEmitter<loginRequest>();


myForm: FormGroup;

  constructor(private fb: FormBuilder, private Rooter: Router) {

  }


@Input('errore') errore:boolean;



  OnSubmit(form:NgForm){
    if(form.valid){

      this.loginRequest.isLoggedIn = true;
      this.loginEvent.emit(this.loginRequest);

    }


  }






}

