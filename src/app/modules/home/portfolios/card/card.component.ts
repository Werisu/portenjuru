import { Component, Input } from '@angular/core';
import { Portfolios } from 'src/app/models/portfolio';

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardPortfolioComponent {

  @Input() portfolios!: Portfolios;

}
