import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDragonsComponent } from './view-all-dragons.component';

describe('ViewAllDragonsComponent', () => {
  let component: ViewAllDragonsComponent;
  let fixture: ComponentFixture<ViewAllDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDragonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
