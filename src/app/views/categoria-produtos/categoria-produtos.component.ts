import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product/product.service';

@Component({
  selector: 'app-categoria-produtos',
  templateUrl: './categoria-produtos.component.html',
  styleUrls: ['./categoria-produtos.component.scss'],
})
export class CategoriaProdutosComponent implements OnInit {
  products: Product[] = [];
  categoryId: number | null = null;
  showAll: boolean = false;
  categoryName: string = 'Produtos';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = Number(params.get('id'));
    });

    this.route.queryParams.subscribe((queryParams) => {
      this.categoryName = queryParams['name'] || 'Produtos';
    });

    if (this.categoryId) {
      this.loadProductsByCategory();
    }
  }

  loadProductsByCategory() {
    this.productService.getProducts().subscribe(
      (allProducts) => {
        this.products = allProducts.filter(
          (product) => product.categoriaId === this.categoryId
        );
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  openDetails(productId: number) {
    this.router.navigate(['/detalhes', productId]);
  }

  toggleMenu() {
    this.showAll = !this.showAll;
  }
}
