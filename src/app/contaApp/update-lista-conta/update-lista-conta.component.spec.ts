import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListaContaComponent } from './update-lista-conta.component';

describe('UpdateListaContaComponent', () => {
  let component: UpdateListaContaComponent;
  let fixture: ComponentFixture<UpdateListaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
