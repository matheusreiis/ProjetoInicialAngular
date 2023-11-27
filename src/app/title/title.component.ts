import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})

export class TitleComponent implements OnInit{

  public title:string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {

  }

}
