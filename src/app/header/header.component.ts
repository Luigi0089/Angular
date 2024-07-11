import {Component, Input, OnInit} from '@angular/core';
import {loginRequest} from "../../Model/loginRequest";
import {FormsModule} from "@angular/forms";
import {RegisterRequest} from "../../Model/RegisterRequest";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {RouterLink} from "@angular/router";
import {UserService} from "../../Service/User/user.service";
import {LocalStorageService} from "../../Service/Local-Storage/local-storage.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgSwitchCase,
    NgSwitch,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input('utente') utente: loginRequest;

@Input('registrato') registrato:RegisterRequest;

constructor(protected UserService: UserService, private LocalStorage: LocalStorageService,) {
}


Submit(){
  this.LocalStorage.removeItem('token')
  this.UserService.isLogged=false
  this.UserService.isRegistered=false
}

}
