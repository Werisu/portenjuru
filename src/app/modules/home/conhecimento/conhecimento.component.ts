import { Component } from '@angular/core';
import { Conhecimentos } from 'src/app/models/conhecimento';

@Component({
  selector: 'app-conhecimento',
  templateUrl: './conhecimento.component.html',
  styleUrls: ['./conhecimento.component.css']
})
export class ConhecimentoComponent {

  public conhecimentos: Conhecimentos = [
    { urlImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', title: 'Angular' },
    { urlImage: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg', title: 'TypeScript' },
    { urlImage: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg', title: 'JavaScript' },
    { urlImage: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', title: 'HTML5' },
    { urlImage: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', title: 'CSS3' },
    { urlImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', title: '.NET Core' },
    { urlImage: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', title: 'C#' },
    { urlImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', title: 'Bootstrap' },
  ];

}
