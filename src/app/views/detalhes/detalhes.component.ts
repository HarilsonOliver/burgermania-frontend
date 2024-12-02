import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product/product.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  produto: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      console.log('ID recebido da URL:', productId); // Log do ID na URL
      if (productId) {
        this.loadProductDetails(+productId);
      }
    });
  }

  navigateToPedido(produto: Product): void {
    if (produto) {
      this.router.navigate(['/pedido'], {
        queryParams: {
          nome: produto.nome,
          preco: produto.preco,
          id: produto.id
        },
      });
    }
  }

  loadProductDetails(productId: number) {
    console.log('Carregando produto com ID:', productId); // Log do ID recebido
    this.productService.getProductById(productId).subscribe(
      (product) => {
        console.log('Produto carregado:', product); // Log do produto recebido
        this.produto = product;
      },
      (error) => {
        console.error('Erro ao carregar o produto:', error);
      }
    );
  }
}
