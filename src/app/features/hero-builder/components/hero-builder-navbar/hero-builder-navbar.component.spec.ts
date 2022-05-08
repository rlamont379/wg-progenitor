import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderNavbarComponent } from './hero-builder-navbar.component';

describe('HeroBuilderNavbarComponent', () => {
  let component: HeroBuilderNavbarComponent;
  let fixture: ComponentFixture<HeroBuilderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
