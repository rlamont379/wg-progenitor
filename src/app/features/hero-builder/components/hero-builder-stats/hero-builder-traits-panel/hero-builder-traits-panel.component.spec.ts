import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderTraitsPanelComponent } from './hero-builder-traits-panel.component';

describe('HeroBuilderTraitsPanelComponent', () => {
  let component: HeroBuilderTraitsPanelComponent;
  let fixture: ComponentFixture<HeroBuilderTraitsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderTraitsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderTraitsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
