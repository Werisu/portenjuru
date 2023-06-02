import { Component } from '@angular/core';
import { Portfolios } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})
export class PortfoliosComponent {
  public portfolios: Portfolios = [
    {
      id: 1,
      tags: ['Angular 15', 'Tailwind', 'Evento de tecla'],
      title: 'Twitter Clone',
      urlGitHub: 'https://github.com/Werisu/tw-angula',
      urlImage: 'assets/image/clone-twitter.png',
    },
    {
      id: 2,
      tags: ['Angular 14', 'API', 'Formulário Reativos', 'Rotas'],
      title: 'Memoteca',
      urlGitHub: 'https://github.com/Werisu/memoteca',
      urlImage: 'assets/image/perfil-github.png',
    },
    {
      id: 3,
      tags: ['Angular 15', 'Bootstrap', 'Fontawesome'],
      title: 'BuzzFeed Clone',
      urlGitHub: 'https://github.com/Werisu/angular-buzzfeed',
      urlImage: 'assets/image/buzzfeed.png',
    },
    {
      id: 4,
      tags: ['Angular 14', 'API', 'RxJS', 'Pipes'],
      title: 'Buscante',
      urlGitHub: 'https://github.com/Werisu/angular-rxjs',
      urlImage: 'assets/image/buscante.png',
    },
    {
      id: 5,
      tags: ['Angular 13', 'API', 'FormsModule'],
      title: 'Formulário',
      urlGitHub: 'https://github.com/Werisu/formulario-angular/tree/master',
      urlImage: 'assets/image/perfil-github.png',
    },
    {
      id: 6,
      tags: ['Angular 13', 'Bootstrap', 'Angular Material'],
      title: 'Sanduicheria do Cowboy',
      urlGitHub: 'https://github.com/Werisu/cowboy',
      urlImage: 'assets/image/cowboy.png',
    },
  ];
}
