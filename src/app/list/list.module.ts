import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from './list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './services/api.service';
import {TrafficSpeedModule} from './traffic-speed/traffic-speed.module';
import { DestructorComponent } from './destructor/destructor.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrafficSpeedModule
  ],
  declarations: [
    ListComponent,
    DestructorComponent,
  ],
  providers: [ApiService],
})
export class ListModule { }
