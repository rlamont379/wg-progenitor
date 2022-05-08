import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsTraitsPanelComponent } from './hero-details-traits-panel.component';

describe('HeroDetailsTraitsPanelComponent', () => {
  let component: HeroDetailsTraitsPanelComponent;
  let fixture: ComponentFixture<HeroDetailsTraitsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsTraitsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsTraitsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
