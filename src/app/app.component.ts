import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>`,
  imports: [CommonModule, RouterOutlet, TitleComponent, DataBindingComponent],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
