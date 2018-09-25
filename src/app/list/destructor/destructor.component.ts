import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-destructor',
  templateUrl: './destructor.component.html',
  styleUrls: ['./destructor.component.scss']
})
export class DestructorComponent implements OnDestroy {
  public unsubscriber$: Subject<boolean> = new Subject<boolean>();

  public ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.complete();
  }
}
