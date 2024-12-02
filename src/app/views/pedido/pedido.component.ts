import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService, Product} from '../../services/product/product.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  produtos: Product[] = [];
  produto1: number | null = null; // Agora armazena o ID do produto
  quantidade1: number = 1;
  precoProduto: number = 0;
  totalPrice: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();

    // Recupera os parâmetros da query string
    this.route.queryParams.subscribe((params) => {
      const productId = params['id'] ? +params['id'] : null;
      if (productId) {
        this.produto1 = productId;
        this.setProductDetails(productId);
      }
    });
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.produtos = data;
        if (this.produto1) {
          this.setProductDetails(this.produto1);
        }
      },
      (error) => console.error('Erro ao buscar produtos:', error)
    );
  }

  setProductDetails(productId: number): void {
    const selectedProduct = this.produtos.find((product) => product.id === productId);
    if (selectedProduct) {
      this.precoProduto = selectedProduct.preco;
      this.updateTotal();
    }
  }

  onProductChange(productId: number): void {
  const selectedProduct = this.produtos.find((product) => product.id === +productId);
  if (selectedProduct) {
    this.precoProduto = selectedProduct.preco; // Atualiza o preço do produto selecionado
    this.updateTotal(); // Recalcula o preço total
  }
}

  updateTotal(): void {
    if (this.quantidade1 > 0) {
      this.totalPrice = this.precoProduto * this.quantidade1;
    } else {
      this.totalPrice = 0;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
