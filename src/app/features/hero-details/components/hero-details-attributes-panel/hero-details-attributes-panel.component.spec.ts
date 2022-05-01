import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsAttributesPanelComponent } from './hero-details-attributes-panel.component';

describe('HeroDetailsAttributesPanelComponent', () => {
  let component: HeroDetailsAttributesPanelComponent;
  let fixture: ComponentFixture<HeroDetailsAttributesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsAttributesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsAttributesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
