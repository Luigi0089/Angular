import {Component, DoCheck, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {CaroselloComponent} from "./carosello/carosello.component";
import {LogoBarComponent} from "./logo-bar/logo-bar.component";
import {CardGalleryComponent} from "./card-gallery/card-gallery.component";
import {loginRequest} from "../Model/loginRequest";
import {RegisterRequest} from "../Model/RegisterRequest";
import {NgForOf, NgIf, NgSwitch} from "@angular/common";
import {UserService} from "../Service/User/user.service";
import {CorsoService} from "../Service/Corso/corso.service";
import {Corso_get} from "../Model/Corso_get";
import {UtenteReg} from "../Model/UtenteReg";
import {CreazioneCorso} from "../Model/CreazioneCorso";
import {FormComponent} from "./form/form.component";
import {ModificaPassword} from "../Model/ModificaPassword";
import {AggiornaPasswordComponent} from "./aggiorna-password/aggiorna-password.component";
import {LocalStorageService} from "../Service/Local-Storage/local-storage.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HeaderComponent, BodyComponent, FooterComponent, CaroselloComponent, LogoBarComponent, CardGalleryComponent, NgIf, NgForOf, NgSwitch, FormComponent, AggiornaPasswordComponent],
  providers: [LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gestionale_corsi';

  isLogged: boolean = false;
  isRegistered: boolean = false;


  constructor(protected UserService: UserService, protected CorsoService: CorsoService, private LocalStorage: LocalStorageService, private router: Router) {
    this.UserService.getAll().subscribe(result => {
      console.log(result)
    })

    this.UserService.getById(7).subscribe(result => {
      console.log(result)
    })



    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        this.isLogged = this.router.url === '/login';
      }
    })
  }





  utente = new loginRequest();
  registrato: RegisterRequest = new RegisterRequest();













  corsi: Corso_get[] = [];


  ngOnInit(): void {
    this.CorsoService.getAll().subscribe(value => {
      this.CorsoService.corsi = value
      console.log(value)

    })
  }

}
