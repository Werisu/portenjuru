import { Component, Input } from '@angular/core';
import { Conhecimentos } from 'src/app/models/conhecimento';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() conhecimentos!: Conhecimentos;

}
