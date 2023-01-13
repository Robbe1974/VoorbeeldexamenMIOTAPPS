import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockOperatingPageComponent } from './lock-operating-page.component';

describe('LockOperatingPageComponent', () => {
  let component: LockOperatingPageComponent;
  let fixture: ComponentFixture<LockOperatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LockOperatingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LockOperatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
