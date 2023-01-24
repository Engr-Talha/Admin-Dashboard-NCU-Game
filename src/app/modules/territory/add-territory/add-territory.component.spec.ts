import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerritoryComponent } from './add-territory.component';

describe('AddTerritoryComponent', () => {
  let component: AddTerritoryComponent;
  let fixture: ComponentFixture<AddTerritoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTerritoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
