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
  produtoNome: string = ''; // Adicionar essa propriedade
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
      const productName = params['nome'] || null; // Obtém o nome do produto
      if (productId) {
        this.produto1 = productId;
        this.setProductDetails(productId);
      }
      else {
        this.produto1 = null; // Define o placeholder como selecionado
      }
      // Opcionalmente, usar o nome para exibir ou registrar em logs
      if (productName) {
        console.log(`Produto selecionado: ${productName}`);
      }
    });
  }


  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.produtos = data;
        if (this.produto1) {
          this.setProductDetails(this.produto1); // Sincroniza detalhes ao carregar
        }
      },
      (error) => console.error('Erro ao buscar produtos:', error)
    );
  }


  setProductDetails(productId: number): void {

    const selectedProduct = this.produtos.find((product) => product.id === productId);
    if (selectedProduct) {
      this.produto1 = selectedProduct.id; // Assegura que o ID é refletido no dropdown
      this.produtoNome = selectedProduct.nome;
      this.precoProduto = selectedProduct.preco;
      this.updateTotal();
    }
  }


  onProductChange(productId: number): void {
    const selectedProduct = this.produtos.find((product) => product.id === +productId);
    if (selectedProduct) {
      this.produto1 = selectedProduct.id;
      this.produtoNome = selectedProduct.nome; // Atualiza o nome
      this.precoProduto = selectedProduct.preco;
      this.updateTotal();
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
