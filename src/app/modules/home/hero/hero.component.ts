import { Component, OnInit } from '@angular/core';
import { bounceInUpOnEnterAnimation, fadeInOnEnterAnimation, flipInYOnEnterAnimation, flipOutYOnLeaveAnimation, shakeOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 400 }),
    fadeInOnEnterAnimation(),
    flipInYOnEnterAnimation(),
    flipOutYOnLeaveAnimation(),
    shakeOnEnterAnimation()
  ]
})
export class HeroComponent implements OnInit {

  isFlipped: boolean = false;
  estadoAcenar = false;

  imageUrl: { image: string, title: string }[] = [
    { image: 'assets/image/perfil-use.png', title: 'Perfil' },
    { image: 'assets/image/LOGO-01.png', title: 'Logo Job 1' },
    { image: 'assets/image/imagem-2.webp', title: 'Perfil 2' },
  ];

  isLoading = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.estadoAcenar = true;
    }, 1000);
  }

  onImageLoad(event: Event) {
    this.isLoading = false;
  }

  // Método para inverter a imagem
  flip() {
    this.isFlipped = !this.isFlipped;
  }

  acenar(){
    this.estadoAcenar = !this.estadoAcenar;
  }

}
