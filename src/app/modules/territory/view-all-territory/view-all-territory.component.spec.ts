import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTerritoryComponent } from './view-all-territory.component';

describe('ViewAllTerritoryComponent', () => {
  let component: ViewAllTerritoryComponent;
  let fixture: ComponentFixture<ViewAllTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTerritoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
