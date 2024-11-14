import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DescriptionComponent } from './components/description/description.component';
import { InputComponent } from './components/input/input.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    DescriptionComponent,
    InputComponent,
    PedidoComponent,
    CardapioComponent,
    CategoriaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
