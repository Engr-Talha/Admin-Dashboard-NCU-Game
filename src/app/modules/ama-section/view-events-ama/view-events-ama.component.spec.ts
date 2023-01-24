import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventsAmaComponent } from './view-events-ama.component';

describe('ViewEventsAmaComponent', () => {
  let component: ViewEventsAmaComponent;
  let fixture: ComponentFixture<ViewEventsAmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventsAmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventsAmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
