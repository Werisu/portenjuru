import { Component, OnInit } from '@angular/core';
import { bounceInUpAnimation, bounceInUpOnEnterAnimation, fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 400 }),
    fadeInOnEnterAnimation()
  ]
})
export class HeroComponent implements OnInit {

  imageUrl: { image: string, title: string }[] = [
    { image: 'assets/image/imagem-1.jpeg', title: 'Perfil' },
    { image: 'assets/image/LOGO-01.png', title: 'Logo Job 1' },
  ];

  isLoading = true;

  constructor() {}

  ngOnInit(): void {

  }

  onImageLoad(event: Event) {
    this.isLoading = false;
  }

}
