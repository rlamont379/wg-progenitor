import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderFactionComponent } from './hero-builder-faction.component';

describe('HeroBuilderFactionComponent', () => {
  let component: HeroBuilderFactionComponent;
  let fixture: ComponentFixture<HeroBuilderFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
