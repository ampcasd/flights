import {
  Component,
  Input
} from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'data-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})

export class RowComponent {
  public selected = false;
  @Input() row: IFlight;

  constructor(public modalService: ModalService) {
    this.modalService.newRegistrationId.subscribe(
      (data) => {
        if (data == null) {
          this.selected = false;
        } else if (this.selected) {
          this.row.registration = data;
          this.selected = false;
        }
      });
  }

  showModal(registrationId, flightDate) {
    this.selected = true;
    this.modalService.modalVisible = true;
    this.modalService.flightDate = flightDate;
    if (registrationId === null) {
      this.modalService.selectedFlight = '';
    } else {
      this.modalService.selectedFlight = registrationId;
    }
  }
}
