import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSpeedComponent } from './traffic-speed.component';

describe('TrafficSpeedComponent', () => {
  let component: TrafficSpeedComponent;
  let fixture: ComponentFixture<TrafficSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
