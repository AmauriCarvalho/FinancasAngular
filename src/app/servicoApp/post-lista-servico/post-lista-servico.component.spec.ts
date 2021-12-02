import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListaServicoComponent } from './post-lista-servico.component';

describe('PostListaServicoComponent', () => {
  let component: PostListaServicoComponent;
  let fixture: ComponentFixture<PostListaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListaServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
