import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndexeddbComponent } from './form-indexeddb.component';

describe('FormIndexeddbComponent', () => {
  let component: FormIndexeddbComponent;
  let fixture: ComponentFixture<FormIndexeddbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIndexeddbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormIndexeddbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
