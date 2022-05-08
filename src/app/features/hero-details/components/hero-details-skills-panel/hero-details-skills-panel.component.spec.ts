import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsSkillsPanelComponent } from './hero-details-skills-panel.component';

describe('HeroDetailsSkillsPanelComponent', () => {
  let component: HeroDetailsSkillsPanelComponent;
  let fixture: ComponentFixture<HeroDetailsSkillsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsSkillsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsSkillsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
