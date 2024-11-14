import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './components/pages/pedido/pedido.component';
import { CardapioComponent } from './components/pages/cardapio/cardapio.component';
import { CategoriaComponent } from './components/pages/categoria/categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/pedido', pathMatch: 'full' },
  { path: 'pedido', component: PedidoComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio/:categoria', component: CategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

