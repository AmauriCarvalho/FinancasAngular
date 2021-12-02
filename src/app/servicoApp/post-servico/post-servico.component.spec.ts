import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostServicoComponent } from './post-servico.component';

describe('PostServicoComponent', () => {
  let component: PostServicoComponent;
  let fixture: ComponentFixture<PostServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
