import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})

export class TitleComponent implements OnInit, OnChanges{

  @Input() public title:string = "Bem vindo";

  constructor() { }

  ngOnInit(): void { }
  
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso.");
  }

}
