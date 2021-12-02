import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicoItensComponent } from './lista-servico-itens.component';

describe('ListaServicoItensComponent', () => {
  let component: ListaServicoItensComponent;
  let fixture: ComponentFixture<ListaServicoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaServicoItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServicoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
