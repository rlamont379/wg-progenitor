import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSurvivalPanelComponent } from './hero-survival-panel.component';

describe('HeroSurvivalPanelComponent', () => {
  let component: HeroSurvivalPanelComponent;
  let fixture: ComponentFixture<HeroSurvivalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSurvivalPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSurvivalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
