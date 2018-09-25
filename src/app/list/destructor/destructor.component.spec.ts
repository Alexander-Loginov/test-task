import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructorComponent } from './destructor.component';

describe('DestructorComponent', () => {
  let component: DestructorComponent;
  let fixture: ComponentFixture<DestructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
