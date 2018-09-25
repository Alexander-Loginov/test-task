import { TrafficSpeedModule } from './traffic-speed.module';

describe('TrafficSpeedModule', () => {
  let trafficSpeedModule: TrafficSpeedModule;

  beforeEach(() => {
    trafficSpeedModule = new TrafficSpeedModule();
  });

  it('should create an instance', () => {
    expect(trafficSpeedModule).toBeTruthy();
  });
});
