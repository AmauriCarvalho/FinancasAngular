import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContaItensComponent } from './lista-conta-itens.component';

describe('ListaContaItensComponent', () => {
  let component: ListaContaItensComponent;
  let fixture: ComponentFixture<ListaContaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContaItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
