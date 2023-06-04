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


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ConhecimentoComponent,
    CardComponent,
    CardPortfolioComponent,
    PortfoliosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class HomeModule { }
