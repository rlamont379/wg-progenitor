import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationNavComponent } from './authentication-nav.component';

describe('AuthenticationNavComponent', () => {
  let component: AuthenticationNavComponent;
  let fixture: ComponentFixture<AuthenticationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
