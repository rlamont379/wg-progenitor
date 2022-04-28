import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoPanelComponent } from './hero-info-panel.component';

describe('HeroInfoPanelComponent', () => {
  let component: HeroInfoPanelComponent;
  let fixture: ComponentFixture<HeroInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInfoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
