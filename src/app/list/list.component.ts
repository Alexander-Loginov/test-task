import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ITariff} from './models/tarif-interface.model';
import {ApiService} from './services/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  public tariffs: ITariff[];
  public filtersForm: FormGroup;
  private sort = {
    way: 'asc',
    field: 'name'
  };
  private filter;

  constructor(private service: ApiService, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.service.getTariff(this.sort)
      .subscribe((data) => {
        this.tariffs = data;
      });
    this.initializeFilters();
    this.initListeners();
  }

  public seeMore(): void {
  }

  private initListeners() {
    this.filtersForm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.filtersForm.getRawValue();
      })

  }

  private initializeFilters(): void {
    this.filtersForm = this.fb.group({
      name: ['']
    });
  }
}
