import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  produto1: string = '';
  quantidade1: number = 1;
  observacao: string = '';
  precoProduto: number = 0; // Preço unitário do produto
  totalPrice: number = 0; // Preço total baseado na quantidade

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      console.log('Parâmetros recebidos:', params); // Log dos parâmetros
      if (params['nome']) {
        this.produto1 = params['nome'];
      }
      if (params['preco']) {
        this.precoProduto = +params['preco']; // Converte o preço para número
        this.updateTotal(); // Atualiza o total ao inicializar
      }
    });
  }

  // Atualiza o preço total baseado na quantidade
  updateTotal(): void {
    if (this.quantidade1 && this.quantidade1 > 0) {
      this.totalPrice = this.precoProduto * this.quantidade1;
    } else {
      this.totalPrice = 0; // Reseta o preço total se a quantidade for inválida
    }
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
