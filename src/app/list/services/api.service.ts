import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITariff } from '../models/tarif-interface.model';
import { TariffData } from '../models/tarif.constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getTariff(sortData = { way: 'asc', field: 'name' }, filterData?): Observable<ITariff[]> {
    const data = this.sort(this.filter(TariffData, filterData), sortData);
    return of(data);
  }

  private filter(data: ITariff[], filterData: any): ITariff[] {
    return data.filter(item => {
      return filterData ? Object.keys(filterData).some(key => filterData[key] && item[key].includes(filterData[key])) : true;
    });
  }

  private sort(data: ITariff[], sortData: any): ITariff[] {
    return data;
  }
}
