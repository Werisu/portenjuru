import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HeroComponent } from './hero/hero.component';
import { ConhecimentoComponent } from './conhecimento/conhecimento.component';
import { CardComponent } from './conhecimento/card/card.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { CardPortfolioComponent } from './portfolios/card/card.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardReposComponent } from './portfolios/card-repos/card-repos.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ConhecimentoComponent,
    CardComponent,
    CardReposComponent,
    CardPortfolioComponent,
    PortfoliosComponent,
    RedesSociaisComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
