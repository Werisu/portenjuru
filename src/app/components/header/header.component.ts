import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<string>;

  public mode = false;
  public showNotification = false;
  public showMenu = false;
  public isChecked: boolean = false;
  public isSelect = '';

  constructor(private elementRef: ElementRef) {}

  public toggle(){
    this.isChecked = !this.isChecked;
    const theme = document.body.classList.toggle('dark-theme');
  }

}
