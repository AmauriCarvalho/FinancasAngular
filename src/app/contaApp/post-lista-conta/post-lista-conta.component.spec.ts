import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListaContaComponent } from './post-lista-conta.component';

describe('PostListaContaComponent', () => {
  let component: PostListaContaComponent;
  let fixture: ComponentFixture<PostListaContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListaContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
