import { isObjectLike, sortArray } from './../../utils/utils';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITariff } from '../models/tarif-interface.model';
import { TariffData } from '../models/tarif.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  public getTariff(
    sortData = { way: 'asc', field: 'name' },
    filterData?
  ): Observable<ITariff[]> {
    const data = this.sort(this.filter(TariffData, filterData), sortData);
    return of(data);
  }

  private filter(data: ITariff[], filterData: any): ITariff[] {
    return data.filter(item => {
      if (!isObjectLike(filterData)) {
        return true;
      }

      const filterValue = Object.values(filterData).filter(Boolean);

      if (filterValue.length === 0) {
        return true;
      }

      return Object.keys(filterData).some(key => {
        return (
          filterData[key] &&
          this.normalizeString(item[key]).includes(
            this.normalizeString(filterData[key])
          )
        );
      });
    });
  }

  private sort(data: ITariff[], sort: any): ITariff[] {
    return sortArray(data, sort);
  }

  private normalizeString(value: string): string {
    return value.toLowerCase();
  }
}
