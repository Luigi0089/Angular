import {Component, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {Corso} from "../../Model/Corso";
import {loginRequest} from "../../Model/loginRequest";
import {Corso_get} from "../../Model/Corso_get";

@Component({
  selector: 'app-card-gallery',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.css'
})

export class CardGalleryComponent {

  @Input() corso: Corso_get;

}
