import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListaServicoComponent } from './update-lista-servico.component';

describe('UpdateListaServicoComponent', () => {
  let component: UpdateListaServicoComponent;
  let fixture: ComponentFixture<UpdateListaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListaServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
