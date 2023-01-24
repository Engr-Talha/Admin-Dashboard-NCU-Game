import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDragonComponent } from './add-new-dragon.component';

describe('AddNewDragonComponent', () => {
  let component: AddNewDragonComponent;
  let fixture: ComponentFixture<AddNewDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDragonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
