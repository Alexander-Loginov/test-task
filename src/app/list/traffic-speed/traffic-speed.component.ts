import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-traffic-speed',
  templateUrl: './traffic-speed.component.html',
  styleUrls: ['./traffic-speed.component.scss']
})
export class TrafficSpeedComponent implements OnInit {
  @Input()
  public tariffData: any;

  constructor() { }

  ngOnInit() {
  }

}
