import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais> 
  <router-outlet></router-outlet>`,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
