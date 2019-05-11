import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  private socket$: WebSocketSubject<any>;
  public position = { X: 1, Y: 2, Z: 3 };

  constructor() {

  }

  ngOnInit() {
    this.socket$ = WebSocketSubject.create('ws://localhost:8088');
    this.socket$ = webSocket('ws://localhost:8088');

    this.socket$
      .subscribe((message) => {
        //console.log(message);
        // console.log(JSON.parse(message))
        let res = message.split(" ");
        console.log(res);

        res.forEach(element => {
          if (element.substr(0, 2) === 'X:') { this.position.X = element.substr(2) }
          if (element.substr(0, 2) === 'Y:') { this.position.Y = element.substr(2) }
          if (element.substr(0, 2) === 'Z:') { this.position.Z = element.substr(2) }
        });

        console.log(this.position);
      },
        (err) => console.error(err),
        () => console.warn('Completed!')
      );
  }

}
