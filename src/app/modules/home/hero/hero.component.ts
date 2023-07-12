import { Component, OnInit } from '@angular/core';
import { bounceInUpOnEnterAnimation, fadeInAnimation, fadeInOnEnterAnimation, flipInYOnEnterAnimation, flipOutYOnLeaveAnimation, shakeOnEnterAnimation, tadaAnimation } from 'angular-animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { faHeart, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MayModalComponent } from './may-modal/may-modal.component';
// hand-point-right

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
    shakeOnEnterAnimation(),
    fadeInAnimation(),
    tadaAnimation()
  ]
})
export class HeroComponent implements OnInit {

  faHeart = faHeart;
  faHandPointRight = faHandPointRight;

  isFlipped: boolean = false;
  estadoAcenar = false;
  isMobile: boolean = false;

  imageUrl: { image: string, title: string }[] = [
    { image: 'assets/image/perfil-use.png', title: 'Perfil' },
    { image: 'assets/image/LOGO-01.png', title: 'Logo Job 1' },
    { image: 'assets/image/imagem-2.webp', title: 'Perfil 2' },
  ];

  isLoading = true;

  constructor(private bk: BreakpointObserver, private modalService: NgbModal) {}

  ngOnInit(): void {
    setInterval(() => {
      this.estadoAcenar = true;
    }, 1000);

    this.breakPointMobile();
  }

  onImageLoad(event: Event) {
    this.isLoading = false;
  }

  breakPointMobile(){
    this.isMobile = this.bk.isMatched('(max-width: 599px)');
  }

  // Método para inverter a imagem
  flip() {
    this.isFlipped = !this.isFlipped;
  }

  acenar(){
    this.estadoAcenar = !this.estadoAcenar;
  }

  open() {
		const modalRef = this.modalService.open(MayModalComponent);
		modalRef.componentInstance.name = 'May';
	}

}
