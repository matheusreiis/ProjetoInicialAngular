import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <!--<app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais> 
  <app-diretivas-atributos>
  <h1>Aulas de Diretivas Atributo </h1>
  <hr>
  </app-diretivas-atributos>
  <router-outlet></router-outlet> -->
  
  <app-diretivas-atributos></app-diretivas-atributos>
  ` ,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
  ],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
