import {
    Component,
    Input
} from "@angular/core";
import { IFlight } from "app/models/flight.interface";

@Component({
  selector: "data-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"]
})
export class RowComponent {
    @Input() row: IFlight;
}
