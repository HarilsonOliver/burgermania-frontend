import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product} from '../../services/product/product.service';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {
  menuItems: Product[] = [];
  showAll: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.productService.getProducts().subscribe(
      (products) => {
        console.log('Dados recebidos do backend:', products); // Log dos dados
        this.menuItems = products;
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error); // Log de erro
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
