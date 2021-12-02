import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicoComponent } from './update-servico.component';

describe('UpdateServicoComponent', () => {
  let component: UpdateServicoComponent;
  let fixture: ComponentFixture<UpdateServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
