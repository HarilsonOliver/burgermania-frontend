import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio/:categoria', component: CategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

