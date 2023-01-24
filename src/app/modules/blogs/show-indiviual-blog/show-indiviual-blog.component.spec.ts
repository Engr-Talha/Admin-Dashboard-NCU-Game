import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndiviualBlogComponent } from './show-indiviual-blog.component';

describe('ShowIndiviualBlogComponent', () => {
  let component: ShowIndiviualBlogComponent;
  let fixture: ComponentFixture<ShowIndiviualBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndiviualBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIndiviualBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
