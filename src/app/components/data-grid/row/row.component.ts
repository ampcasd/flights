import {
    Component,
    Input
} from "@angular/core";
import { IFlight } from "app/models/flight.interface";
import { ModalService } from "../../../services/modal.service";

@Component({
  selector: "data-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"],
})

export class RowComponent {
  constructor(private modalService: ModalService) {}

    @Input() row: IFlight;

    showModal(registrationId, flightDate) {
      this.modalService.modalVisible = true;
      this.modalService.registrationId = registrationId;
      this.modalService.flightDate = flightDate;
    }
}
