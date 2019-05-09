import { TestBed } from '@angular/core/testing';

import { RobotComService } from './robot-com.service';

describe('RobotComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotComService = TestBed.get(RobotComService);
    expect(service).toBeTruthy();
  });
});
