import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderArchetypeComponent } from './hero-builder-archetype.component';

describe('HeroBuilderArchetypeComponent', () => {
  let component: HeroBuilderArchetypeComponent;
  let fixture: ComponentFixture<HeroBuilderArchetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderArchetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderArchetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
