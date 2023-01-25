import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBattlesComponent } from './user-battles.component';

describe('UserBattlesComponent', () => {
  let component: UserBattlesComponent;
  let fixture: ComponentFixture<UserBattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBattlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
