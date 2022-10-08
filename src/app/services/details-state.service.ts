import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITableData } from '../interfaces/ITableData';

@Injectable({
  providedIn: 'root',
})
export class DetailsStateService {
  constructor() {}
  detailsCurrentState: BehaviorSubject<ITableData> = new BehaviorSubject({
    date: '',
    listName: '',
    numberOfEntities: 0,
    description: '',
  });
  detailsToggle: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
