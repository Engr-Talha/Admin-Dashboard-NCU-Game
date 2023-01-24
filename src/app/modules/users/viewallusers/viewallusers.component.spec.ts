import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallusersComponent } from './viewallusers.component';

describe('ViewallusersComponent', () => {
  let component: ViewallusersComponent;
  let fixture: ComponentFixture<ViewallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
