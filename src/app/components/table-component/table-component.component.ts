import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailsStateService } from 'src/app/services/details-state.service';
import { ITableData } from './../../interfaces/ITableData';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.sass'],
})
export class TableComponentComponent implements OnInit {
  dataSource: ITableData[] = [
    {
      date: 'July 23',
      listName: 'Test_30_results',
      numberOfEntities: 28,
      description: 'This is description for Test_30_results',
    },
    {
      date: 'June 28',
      listName: 'To_Index',
      numberOfEntities: 100,
      description: 'This is description for To_Index',
    },
    {
      date: 'April 10',
      listName: 'KPMG Requested Companies',
      numberOfEntities: 34,
      description: 'This is description for KPMG Requested Companies',
    },
    {
      date: 'Mar 12',
      listName: 'Error Case',
      numberOfEntities: 24,
      description: 'This is description for Error Case',
    },
    {
      date: 'Dec 14',
      listName: 'Two Companies',
      numberOfEntities: 2,
      description: 'This is description for Two Companies',
    },
    {
      date: 'Nov 01',
      listName: 'Mumbai',
      numberOfEntities: 30,
      description: 'This is description for Mumbai',
    },
    {
      date: 'Oct 29',
      listName: 'Custom',
      numberOfEntities: 3,
      description: 'This is description for Custom',
    },
  ];
  filteredData: BehaviorSubject<any> = new BehaviorSubject([]);
  displayedColumns: string[] = [
    'date',
    'listName',
    'numberOfEntities',
    'description',
  ];

  constructor(private detailsService: DetailsStateService) {}

  ngOnInit(): void {
    this.filteredData.next([...this.dataSource]);
  }

  filterTable(event: any) {
    this.filteredData.next(
      this.dataSource.filter((val) =>
        JSON.stringify(val)
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
      )
    );
  }

  toggleDetails(element: ITableData) {
    this.detailsService.detailsCurrentState.next(element);
    this.detailsService.detailsToggle.next(true);
  }
}
