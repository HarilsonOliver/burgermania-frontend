import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onOrderClick() {
    console.log("Fazer pedido clicado");
  }

  onMenuClick() {
    console.log("Acessar cardápio clicado");
  }

}
