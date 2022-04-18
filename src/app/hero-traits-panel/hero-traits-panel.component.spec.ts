import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTraitsPanelComponent } from './hero-traits-panel.component';

describe('HeroTraitsPanelComponent', () => {
  let component: HeroTraitsPanelComponent;
  let fixture: ComponentFixture<HeroTraitsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTraitsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTraitsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
