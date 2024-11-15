import { Component } from '@angular/core';

interface CategoriaItem {
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categoriaItems: CategoriaItem[] = [
    {
      title: 'X-Alface-Premium',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    },
    {
      title: 'X-Tomate',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    },
    {
      title: 'X-Frutas',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    }
  ];


}
