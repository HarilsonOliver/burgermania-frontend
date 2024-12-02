import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { HomeComponent } from './views/home/home.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';
import { CategoriaProdutosComponent } from './views/categoria-produtos/categoria-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: 'categoria-produtos/:id', component: CategoriaProdutosComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'detalhes/:title', component: DetalhesComponent },
  { path: 'produto/:productTitle', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

