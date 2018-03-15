import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { IFlight } from "app/models/flight.interface";
import { HttpClient } from "@angular/common/http";
import { ModalService } from "./services/modal.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "../assets/css/reset.css",
    "./app.component.css",
    "../assets/css/fonts.css"
  ]
})
export class AppComponent implements OnInit {
  public data: Array<IFlight> = [];

  private flightsDataPath = 'assets/mock-data/mockFlights.csv';


  ngOnInit() {
    this.loadData();
  }
  constructor(private http: HttpClient, public modalService: ModalService) {}

  loadData() {
    this.http.get(this.flightsDataPath, {responseType: 'text'}).subscribe(csvData => {

      const separateLines = csvData.split('\n');
      separateLines.forEach(data => {
        const noCommaRow = data.split(',');
        if (noCommaRow[0] === 'uniqueid' || noCommaRow[0] === '') {
          console.log('omitting first or last row');
        } else {
        const properTypeRows: IFlight[] = [
            { flightNumber: noCommaRow[1],
            scheduledDate: new Date(parseInt(noCommaRow[2], 10)),
            originDestination: noCommaRow[3],
            registration: noCommaRow[4] }
        ];
        this.data.push(properTypeRows[0]);
      }});
    });
  }
}



