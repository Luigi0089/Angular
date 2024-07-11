import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiornaPasswordComponent } from './aggiorna-password.component';

describe('AggiornaPasswordComponent', () => {
  let component: AggiornaPasswordComponent;
  let fixture: ComponentFixture<AggiornaPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiornaPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiornaPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
