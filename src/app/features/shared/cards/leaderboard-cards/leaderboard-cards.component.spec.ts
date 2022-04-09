import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardCardsComponent } from './leaderboard-cards.component';

describe('LeaderboardCardsComponent', () => {
  let component: LeaderboardCardsComponent;
  let fixture: ComponentFixture<LeaderboardCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
