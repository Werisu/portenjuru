import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Repositorios } from 'src/app/interfaces/repositorio';

@Component({
  selector: 'app-card-repos',
  templateUrl: './card-repos.component.html',
  styleUrls: ['./card-repos.component.css']
})
export class CardReposComponent implements OnInit, OnChanges {

  @Input() repositorios!: Repositorios;
  @Input() title!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit() {
    console.log(this.repositorios);
  }

}
