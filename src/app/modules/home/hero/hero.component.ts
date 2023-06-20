import { Component } from '@angular/core';
import { bounceInUpAnimation, bounceInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 200 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 400 })
  ]
})
export class HeroComponent {

}
