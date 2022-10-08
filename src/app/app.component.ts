import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetailsStateService } from './services/details-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'PrivateCircle-Table';
  toggleDetails: BehaviorSubject<boolean> | undefined;

  constructor(private detailsService: DetailsStateService) {
    this.toggleDetails = detailsService.detailsToggle;
  }
}
