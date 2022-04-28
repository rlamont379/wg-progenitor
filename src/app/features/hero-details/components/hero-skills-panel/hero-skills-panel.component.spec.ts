import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSkillsPanelComponent } from './hero-skills-panel.component';

describe('HeroSkillsPanelComponent', () => {
  let component: HeroSkillsPanelComponent;
  let fixture: ComponentFixture<HeroSkillsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSkillsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSkillsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
