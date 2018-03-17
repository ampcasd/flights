import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { ModalService } from './services/modal.service';
import { GridDataService } from './services/grid-data.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../assets/css/reset.css',
    './app.component.css',
    '../assets/css/fonts.css'
  ]
})
export class AppComponent implements OnInit {
  public data: Array<IFlight> = this.gridDataService.data;

  constructor(public modalService: ModalService,
              public gridDataService: GridDataService) {}

  ngOnInit() {
    this.gridDataService.loadData();
  }
}




