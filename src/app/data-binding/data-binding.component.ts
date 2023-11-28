import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  //Interpolations
  public nome: string = "Matheus";
  public idade: number = 24;

  //Property Binding
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2019/08/logo-4.png";
  public imgTitle: string = "Imagem teste";
  public ImgAlt: string = "Imagem FullStack";

  //Event Binding

  public position: {x: number, y: number} = {x: 0, y: 0};

  public alerInfo(valor: MouseEvent) {
    console.log(valor)
  }

  public mouseMoveTest(valor: MouseEvent) {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
