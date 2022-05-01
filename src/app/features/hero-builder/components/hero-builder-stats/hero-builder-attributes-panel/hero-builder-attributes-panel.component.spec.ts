import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderAttributesPanelComponent } from './hero-builder-attributes-panel.component';

describe('HeroBuilderAttributesPanelComponent', () => {
  let component: HeroBuilderAttributesPanelComponent;
  let fixture: ComponentFixture<HeroBuilderAttributesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderAttributesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderAttributesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
