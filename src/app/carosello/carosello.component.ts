import { Component } from '@angular/core';
import {LogoBarComponent} from "../logo-bar/logo-bar.component";

@Component({
  selector: 'app-carosello',
  standalone: true,
    imports: [
        LogoBarComponent
    ],
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css'
})
export class CaroselloComponent {

}
