import {
  Component,
  Input, OnInit
} from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'data-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})

export class RowComponent implements OnInit{
  @Input() row: IFlight;

  // public newValue = this.modalService.newValue;

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    if (this.modalService.newValue) {
      this.row.registration = this.modalService.newValue;
    }
  }


  showModal(registrationId, flightDate) {
    this.modalService.modalVisible = true;
    this.modalService.registrationId = registrationId;
    this.modalService.flightDate = flightDate;
  }
}
