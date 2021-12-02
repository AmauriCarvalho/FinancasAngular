import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacontaComponent } from './listaconta.component';

describe('ListacontaComponent', () => {
  let component: ListacontaComponent;
  let fixture: ComponentFixture<ListacontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacontaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
