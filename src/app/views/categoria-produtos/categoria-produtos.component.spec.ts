import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProdutosComponent } from './categoria-produtos.component';

describe('CategoriaProdutosComponent', () => {
  let component: CategoriaProdutosComponent;
  let fixture: ComponentFixture<CategoriaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
