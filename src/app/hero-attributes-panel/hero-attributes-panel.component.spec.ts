import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAttributesPanelComponent } from './hero-attributes-panel.component';

describe('HeroAttributesPanelComponent', () => {
  let component: HeroAttributesPanelComponent;
  let fixture: ComponentFixture<HeroAttributesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAttributesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAttributesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
