import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ITariff } from './models/tarif-interface.model';
import { ApiService } from './services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DestructorComponent } from './destructor/destructor.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent extends DestructorComponent
  implements OnInit {
  public tariffs$: Observable<ITariff[]>;
  public filtersForm: FormGroup;
  public sort = {
    way: 'asc',
    field: 'name'
  };

  constructor(private service: ApiService, private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.tariffs$ = this.service.getTariff(this.sort);
    this.initializeFilters();
    this.initListeners();
  }

  public seeMore(): void {}

  private initListeners() {
    this.filterSubscriber = this.filtersForm.valueChanges
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(() => {
        this.tariffs$ = this.service.getTariff(
          this.sort,
          this.filtersForm.getRawValue()
        );
      });
  }

  public sortPrice(way: string, field: string): void {
    this.sort = {
      ...this.sort,
      way,
      field
    };

    this.tariffs$ = this.service.getTariff(
      this.sort,
      this.filtersForm.getRawValue()
    );
  }

  public isActiveSort(field: string, way: string): boolean {
    return this.sort.field === field && this.sort.way === way;
  }

  private initializeFilters(): void {
    this.filtersForm = this.fb.group({
      name: [''],
      downloadSpeed: [''],
      price: ['']
    });
  }
}
