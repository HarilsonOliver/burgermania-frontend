import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

interface Categoria {
  name: string; // Nome da categoria
  items: CategoriaItem[]; // Produtos dentro dessa categoria
}
interface CategoriaItem {
  title: string;
  description: string;
  description_text: string;
  imageUrl: string;
  price: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [
    {
      name: 'X-Vegan',
      items: [
        {
          title: 'X-Alface-Premium',
          description: 'Delicioso hambúrguer vegano',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/burgersCat.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Tomate',
          description: 'Hambúrguer com muito tomate',
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
    }];

  categoriaItems: CategoriaItem[] = [
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

  ];

  filteredItems: CategoriaItem[] = [];
  categoryTitle: string = '';
  categoriaAtual: Categoria | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoriaName = params.get('title') || '';
      this.categoriaAtual = this.categorias.find((cat) => cat.name === categoriaName);
    });
  }

  irParaDetalhes(item: CategoriaItem) {
    this.router.navigate(['/detalhes', item.title], {
      queryParams: { description: item.description, imageUrl: item.imageUrl },
    });
  }

  navigateToProduct(productTitle: string) {
    this.router.navigate(['/produto', productTitle]);
  }
}
