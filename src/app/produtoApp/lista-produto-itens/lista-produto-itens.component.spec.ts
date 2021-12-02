import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoItensComponent } from './lista-produto-itens.component';

describe('ListaProdutoItensComponent', () => {
  let component: ListaProdutoItensComponent;
  let fixture: ComponentFixture<ListaProdutoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutoItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
