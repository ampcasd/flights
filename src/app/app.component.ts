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
    console.log(this.modalService.modalVisible);
  }
  constructor(private http: HttpClient, public modalService: ModalService) {}

  loadData() {
    this.http.get(this.flightsDataPath, {responseType: 'text'}).subscribe(csvData => {

      const separateLines = csvData.split('\n');

      separateLines.forEach(data => {
        const noCommas = data.split(',');
        if (noCommas[0] === 'uniqueid' || noCommas[0] === '') {
          console.log('omitting first or last row');
        } else {
        const properTypeRows: IFlight[] = [
            { flightNumber: noCommas[1],
            scheduledDate: new Date(parseInt(noCommas[2], 10)),
            originDestination: noCommas[3],
            registration: noCommas[4] }
        ];
        this.data.push(properTypeRows[0]);
      }});
    });
  }
}


// public registrationsDataPath = 'assets/mock-data/mockRegistrations.csv';
// private registrations: string[];
