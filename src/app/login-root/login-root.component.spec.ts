import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRootComponent } from './login-root.component';

describe('LoginRootComponent', () => {
  let component: LoginRootComponent;
  let fixture: ComponentFixture<LoginRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
