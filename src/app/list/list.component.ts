import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ITariff} from './models/tarif-interface.model';
import {ApiService} from './services/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {DestructorComponent} from './destructor/destructor.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends DestructorComponent implements OnInit, OnDestroy {
  public tariffs$: Observable<ITariff[]>;
  public filtersForm: FormGroup;
  private sort = {
    way: 'asc',
    field: 'name'
  };
  private filterSubscriber: Subscription;

  constructor(private service: ApiService, private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.tariffs$ = this.service.getTariff(this.sort);
    this.initializeFilters();
    this.initListeners();
  }

  public seeMore(): void {
  }

  private initListeners() {
    this.filterSubscriber = this.filtersForm.valueChanges
      .pipe(
        takeUntil(this.unsubscriber$)
      )
      .subscribe(() => {
        this.tariffs$ = this.service.getTariff(this.sort, this.filtersForm.getRawValue());
      });
  }

  public ngOnDestroy(): void {
    this.filterSubscriber.unsubscribe();
  }

  private initializeFilters(): void {
    this.filtersForm = this.fb.group({
      name: [''],
      downloadSpeed: [''],
      price: ['']
    });
  }
}
