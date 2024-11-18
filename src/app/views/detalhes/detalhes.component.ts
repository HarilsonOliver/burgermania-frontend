import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface CategoriaItem {
  title: string;
  description: string;
  description_text: string;
  imageUrl: string;
  price: string;
}

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  produto: CategoriaItem | undefined;

  categorias = [
    {
      name: 'X-Vegan',
      items: [
        {
          title: 'X-Alface-Premium',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Um hambúrguer vegano suculento feito com uma base de grão-de-bico e quinoa, temperado com especiarias defumadas, cebola caramelizada e alho, garantindo uma textura rica e saborosa. Servido em um pão macio, ele vem acompanhado de fatias frescas de tomate, alface crocante, picles, abacate cremoso e uma generosa camada de maionese de ervas vegana. Finalizado com molho barbecue agridoce e uma pitada de pimenta-do-reino moída na hora, proporcionando uma combinação deliciosa de sabores e texturas em cada mordida.',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Tomate',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Frutas',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productTitle = params.get('productTitle');
      this.produto = this.categorias
        .flatMap((categoria) => categoria.items)
        .find((item) => item.title === productTitle);
    });
  }
}
