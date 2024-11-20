import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss'
})
export class PedidoComponent {

  produto1: string = '';
  quantidade1: number | null = null;
  produto2: string = '';
  quantidade2: number | null = null;
  observacao: string = '';

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
