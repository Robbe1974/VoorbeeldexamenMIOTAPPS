import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMongoDBComponent } from './list-mongo-db.component';

describe('ListMongoDBComponent', () => {
  let component: ListMongoDBComponent;
  let fixture: ComponentFixture<ListMongoDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMongoDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMongoDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
