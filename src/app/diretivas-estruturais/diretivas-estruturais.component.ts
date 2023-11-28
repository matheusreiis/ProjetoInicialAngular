import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas-estruturais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas-estruturais.component.html',
  styleUrl: './diretivas-estruturais.component.scss'
})
export class DiretivasEstruturaisComponent implements OnInit {

  // ngIf 
  public condition: boolean = true;
  public conditionClick: boolean = true;

  // ngFor
  public list: Array<{ nome: string, idade: number }> =
    [{ nome: "Matheus Cristiano", idade: 25 },
    { nome: "Matheus Reis", idade: 30 },
    { nome: "Matheus Siqueira", idade: 35 }
    ];

  // ngSwitchCase
  public nome: string = "Matheus";

  constructor() { }

  //ngIf

  ngOnInit(): void {
    // setInterval(() => {
    //   if (this.condition) {
    //     this.condition = false;
    //   } else {
    //     this.condition = true;
    //   }
    // }, 2000)
  }

  public onClick() {
    setInterval(() => {
      if (this.conditionClick) {
        this.conditionClick = false;
      } else {
        this.conditionClick = true;
      }
    }, 2000)
  }

  //ngFor

  public onClickAddList() {
    this.list.push({ nome: "Matheus", idade: 25 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }

}
