import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ITariff} from './models/tarif-interface.model';
import {ApiService} from './services/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {v} from '@angular/core/src/render3';
import {Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {
  public tariffs$: Observable<ITariff[]>;
  public filtersForm: FormGroup;
  private sort = {
    way: 'asc',
    field: 'name'
  };
  private filterSubscriber: Subscription;

  constructor(private service: ApiService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.tariffs$ = this.service.getTariff(this.sort);
    this.initializeFilters();
    this.initListeners();
  }

  public seeMore(): void {
  }

  private initListeners() {
    this.filterSubscriber = this.filtersForm.valueChanges
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
