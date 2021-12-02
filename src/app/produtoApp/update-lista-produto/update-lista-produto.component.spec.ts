import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListaProdutoComponent } from './update-lista-produto.component';

describe('UpdateListaProdutoComponent', () => {
  let component: UpdateListaProdutoComponent;
  let fixture: ComponentFixture<UpdateListaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListaProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
