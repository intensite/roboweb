import { Component, OnInit } from '@angular/core';
import { RobotComService, Movement, AbsolutePosition } from '../robot-com.service';

@Component({
  selector: 'app-jog',
  templateUrl: './jog.component.html',
  styleUrls: ['./jog.component.css']
})
export class JogComponent implements OnInit {

  constructor(private robotComService: RobotComService) { }

  ngOnInit() {
  }

  moveX(direction) {
    console.log('Inside moveX');
    let value = 50;
    if (direction < 0) {
      value *= -1;
    }
    const movement: Movement = { axis: 'X', mode: 'relative', value: value, speed: 50 };

    this.robotComService.moveARm(movement).subscribe((res) => {
      console.log(res);
    });
  }

  moveY(direction) {
    console.log('Inside moveY');
    let value = 50;
    if (direction < 0) {
      value *= -1;
    }
    const movement: Movement = { axis: 'Y', mode: 'relative', value: value, speed: 50 };

    this.robotComService.moveARm(movement).subscribe((res) => {
      console.log(res);
    });
  }

  moveZ(direction) {
    console.log('Inside moveZ');
    let value = 50;
    if (direction < 0) {
      value *= -1;
    }
    const movement: Movement = { axis: 'Z', mode: 'relative', value: value, speed: 30 };

    this.robotComService.moveARm(movement).subscribe((res) => {
      console.log(res);
    });
  }

  moveAbsolute(absolutePosition: AbsolutePosition) {
    console.log('Inside moveAbsolute');



    absolutePosition = {  X: 1, Y: 120, Z: 120, speed: 50 };

    this.robotComService.moveARmAbsolute(absolutePosition).subscribe((res) => {
      console.log(res);
    });
  }

} // class JogComponent
