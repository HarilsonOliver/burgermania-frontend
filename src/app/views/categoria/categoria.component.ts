import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService, Categoria} from '../../services/categoria/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categoryItems: Categoria[] = [];
  showAll: boolean = false;

  constructor(private router: Router, private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {

    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        console.log('Dados recebidos do backend:', categorias);
        this.categoryItems = categorias;
      },
      (error) => {
        console.error('Erro ao carregar os produtos:', error);
      }
    );
  }

  viewCategoryProducts(categoryId: number, categoryName: string) {
    this.router.navigate(['/categoria-produtos', categoryId], {
      queryParams: { name: categoryName },
    });
  }

  toggleMenu() {
    this.showAll = !this.showAll;
  }
}
