import { Component, OnInit } from '@angular/core';
import { Repositorios } from 'src/app/interfaces/repositorio';
import { Portfolios } from 'src/app/models/portfolio';
import { RepositorioService } from 'src/app/service/repositorio.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css'],
})
export class PortfoliosComponent implements OnInit {
  public repositorios: Repositorios = [];
  public portfolios: Portfolios = [
    {
      id: 1,
      tags: ['Angular 15', 'Tailwind', 'Evento de tecla'],
      title: 'Twitter Clone',
      urlGitHub: 'https://github.com/Werisu/tw-angular',
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

  constructor(private reposService: RepositorioService) {}

  ngOnInit(): void {
    // this.getRepositorios();
    this.getProjetosSelecionados();
  }

  public getRepositorios() {
    return this.reposService.getAll().subscribe({
      next: (res) => {
        this.repositorios = res;
        console.log(res);
      },
      error: (err) => {},
    });
  }

  public getProjetosSelecionados() {
    this.reposService.getProjetosSelecionados().subscribe({
      next: (repos) => {
        const projetosSelecionados = repos.filter(repo => {
          return repo.name === 'tw-angular' || repo.name === 'memoteca' || repo.name === 'angular-buzzfeed' || repo.name === 'angular-rxjs' || repo.name === 'formulario-angular' || repo.name === 'cowboy' || repo.name === 'buscante' || repo.name === 'memorando' ;
          // Substitua 'name' pelo atributo correto que identifica o nome do projeto nos dados da resposta da API do GitHub.
        });

        console.log(projetosSelecionados);
        this.repositorios = projetosSelecionados.map((repo) => {
          return {...repo, image: `assets/image/${repo.name}.png`}
        });
        // Faça o que quiser com os projetos selecionados.
      },
      error: (err) => {},
    });
  }
}
