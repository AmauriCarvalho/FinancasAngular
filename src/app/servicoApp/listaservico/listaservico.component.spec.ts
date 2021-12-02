import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaservicoComponent } from './listaservico.component';

describe('ListaservicoComponent', () => {
  let component: ListaservicoComponent;
  let fixture: ComponentFixture<ListaservicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaservicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
