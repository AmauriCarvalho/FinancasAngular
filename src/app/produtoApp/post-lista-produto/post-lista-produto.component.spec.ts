import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListaProdutoComponent } from './post-lista-produto.component';

describe('PostListaProdutoComponent', () => {
  let component: PostListaProdutoComponent;
  let fixture: ComponentFixture<PostListaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListaProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
