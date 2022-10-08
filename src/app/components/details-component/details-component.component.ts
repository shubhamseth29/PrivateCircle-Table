import { Component, OnInit } from '@angular/core';
import { DetailsStateService } from './../../services/details-state.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.sass'],
})
export class DetailsComponentComponent implements OnInit {
  element: any = {};
  constructor(private detailsService: DetailsStateService) {}

  ngOnInit(): void {
    this.detailsService.detailsCurrentState.subscribe((value) => {
      this.element = value;
    });
  }

  closeDetails() {
    this.detailsService.detailsToggle.next(false);
  }
}
