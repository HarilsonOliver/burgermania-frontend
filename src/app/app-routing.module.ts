import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { HomeComponent } from './views/home/home.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:title', component: CategoriaComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'detalhes/:title', component: DetalhesComponent },
  { path: 'produto/:productTitle', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

