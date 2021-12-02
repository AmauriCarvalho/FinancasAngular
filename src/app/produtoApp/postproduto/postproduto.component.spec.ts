import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostprodutoComponent } from './postproduto.component';

describe('PostprodutoComponent', () => {
  let component: PostprodutoComponent;
  let fixture: ComponentFixture<PostprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
