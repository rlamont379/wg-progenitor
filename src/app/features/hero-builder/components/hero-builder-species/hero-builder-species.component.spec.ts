import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderSpeciesComponent } from './hero-builder-species.component';

describe('HeroBuilderSpeciesComponent', () => {
  let component: HeroBuilderSpeciesComponent;
  let fixture: ComponentFixture<HeroBuilderSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
