import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Fitness',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Infarto',
      description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Gourmet',
      description: 'Pão artesanal, hambúrguer gourmet, queijo brie e rúcula',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Fresco',
      description: 'Pão artesanal, hambúrguer gourmet, queijo brie e rúcula',
      imageUrl: '/burgersCat.png',
    },
    {
      title: 'X-Mole',
      description: 'Pão artesanal, hambúrguer gourmet, queijo brie e rúcula',
      imageUrl: '/burgersCat.png',
    },
  ];

  showAll: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.showAll = !this.showAll;
  }

  viewCategory(title: string) {
    this.router.navigate(['/categoria', title]);
  }
}

