import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventAmaComponent } from './create-event-ama.component';

describe('CreateEventAmaComponent', () => {
  let component: CreateEventAmaComponent;
  let fixture: ComponentFixture<CreateEventAmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventAmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventAmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
