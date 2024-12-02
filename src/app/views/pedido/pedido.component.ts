import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  produto1: string = '';
  quantidade1: number | null = null;
  observacao: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      console.log('Parâmetros recebidos:', params); // Adicione este log
      if (params['nome']) {
        this.produto1 = params['nome']; // Inicialize com o valor do parâmetro
      }
    });
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
