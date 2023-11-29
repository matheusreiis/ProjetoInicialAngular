import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas-atributos.component.html',
  styleUrl: './diretivas-atributos.component.scss'
})
export class DiretivasAtributosComponent implements OnInit {

  // ngClass
  public valor: boolean = true;

  // ngStyle
  public heightPx: string = "20px";
  public backgroundColor: string = "red";

  // ngModel & ngTemplate
  public nome: string = "";
  public list: Array<{ nome: string }> = [{ nome: "Matheus Cristiano" }];

  // pipes
  public date: Date = new Date();


  ngOnInit(): void {

    //ngClass & ngStyle

    // setInterval(() => {
    //   if (this.valor) {
    //     this.valor = false;
    //   } else {
    //     this.valor = true;
    //   }

    //   if (this.heightPx == "20px") {
    //     this.heightPx = "50px";
    // this.backgroundColor = "blue";
    //   } else {
    //     this.heightPx == "20px"
    // this.backgroundColor = "red";
    //   }
    // }, 2000);
  }

  // ngModel

  public save() {
    this.list.push({ nome: this.nome });
    this.nome = "";
  }
}
