import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderSkillsPanelComponent } from './hero-builder-skills-panel.component';

describe('HeroBuilderSkillsPanelComponent', () => {
  let component: HeroBuilderSkillsPanelComponent;
  let fixture: ComponentFixture<HeroBuilderSkillsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderSkillsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderSkillsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
