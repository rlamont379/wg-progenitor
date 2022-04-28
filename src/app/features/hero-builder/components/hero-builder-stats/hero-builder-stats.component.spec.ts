import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderStatsComponent } from './hero-builder-stats.component';

describe('HeroBuilderStatsComponent', () => {
  let component: HeroBuilderStatsComponent;
  let fixture: ComponentFixture<HeroBuilderStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
