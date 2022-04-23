import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBuilderInfoComponent } from './hero-builder-info.component';

describe('HeroBuilderInfoComponent', () => {
  let component: HeroBuilderInfoComponent;
  let fixture: ComponentFixture<HeroBuilderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBuilderInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBuilderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
