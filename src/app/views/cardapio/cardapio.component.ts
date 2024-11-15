import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  menuItems: MenuItem[] = [
    {
      title: 'X-Vegan',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    },
    {
      title: 'X-Fitness',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    },
    {
      title: 'X-Infarto',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png'
    }
  ];

}
