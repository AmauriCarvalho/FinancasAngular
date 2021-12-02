import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcontaComponent } from './postconta.component';

describe('PostcontaComponent', () => {
  let component: PostcontaComponent;
  let fixture: ComponentFixture<PostcontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcontaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
