import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})


export class BodyComponent {
  cards = [
    {
      img: 'assets/urlo.jpg',
      title: 'Web storm',
      text: 'La prima impressione che avrai provando web Storm',
      buttonText: 'Prova'
    },
    {
      img: 'assets/urlo.jpg',
      title: 'Web storm',
      text: 'La prima impressione che avrai provando web Storm',
      buttonText: 'Prova'
    },
    {
      img: 'assets/urlo.jpg',
      title: 'Web storm',
      text: 'La prima impressione che avrai provando web Storm',
      buttonText: 'Prova'
    }
  ];
}
