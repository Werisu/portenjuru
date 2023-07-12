import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { faHeart, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
      stagger(200, [
        animate('300ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)',
            offset: 0.4,
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1,
          }),
        ])),
      ]),
    ], { optional: true })
  ]),
]);

@Component({
  selector: 'app-may-modal',
  templateUrl: './may-modal.component.html',
  styleUrls: ['./may-modal.component.css'],
  animations: [listStateTrigger]
})
export class MayModalComponent {
  @Input() name!:string;

  faXmark = faXmark;
  faHeart = faHeart;

  public photos = [
    { image: 'assets/amor/1.jpg', title: 'Perfil' },
    { image: 'assets/amor/2.jpg', title: 'Perfil' },
    { image: 'assets/amor/3.jpg', title: 'Perfil' },
    { image: 'assets/amor/5.jpg', title: 'Perfil' },
  ]

  constructor(public activeModal: NgbActiveModal) {}

}
