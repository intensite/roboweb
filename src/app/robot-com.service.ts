import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RobotComService {

  constructor(private http: HttpClient) { }

  // moveARm (movement: Movement): Observable<HttpEvent<any>> {
  moveARm(movement: Movement) {
    console.log(movement);
    return this.http.post<any>('http://localhost:3000/move', movement);
  }

  moveARmAbsolute(absolutePosition: AbsolutePosition) {
    console.log(absolutePosition);
    return this.http.post<any>('http://localhost:3000/movefull', absolutePosition);
  }

}

export interface Movement {
  axis: string;
  mode: String;
  value: number;
  speed: number;
}

export interface AbsolutePosition {
  X: number;
  Y: number;
  Z: number;
  speed: number;
}
