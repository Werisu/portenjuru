import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private elementRef: ElementRef) {}

  scrollParaElemento(elementId: string): void {
    const elemento = this.elementRef.nativeElement.querySelector('#' + elementId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
