import {
  Component,
  Input, OnInit
} from "@angular/core";
import { IFlight } from "app/models/flight.interface";

@Component({
  selector: "data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.css"]
})

export class DataGridComponent {
  public sampleHeaders = ["flight", "sch. date", "sch.time", "o/d", "registration"];

  @Input() public rows: Array<IFlight>;
}
