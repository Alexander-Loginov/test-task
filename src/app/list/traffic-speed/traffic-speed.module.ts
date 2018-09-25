import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrafficSpeedComponent} from './traffic-speed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrafficSpeedComponent],
  exports: [TrafficSpeedComponent]
})
export class TrafficSpeedModule { }
