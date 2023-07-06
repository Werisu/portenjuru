import { Component } from '@angular/core';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

}
