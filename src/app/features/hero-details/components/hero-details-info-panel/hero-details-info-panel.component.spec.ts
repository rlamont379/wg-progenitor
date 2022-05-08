import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsInfoPanelComponent } from './hero-details-info-panel.component';

describe('HeroDetailsInfoPanelComponent', () => {
  let component: HeroDetailsInfoPanelComponent;
  let fixture: ComponentFixture<HeroDetailsInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsInfoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
