import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import { IFlight } from "app/models/flight.interface";
import {HttpClient} from "@angular/common/http";

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
  //   {flightNumber: 'asd246',
  //     scheduledDate: new Date(234212),
  //     originDestination: 'asdfl',
  //     registration: 'asdfs'}
  // ];
  public flightsDataPath = 'assets/mock-data/mockFlights.csv';

  ngOnInit() {
    this.loadData();
  }
  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get(this.flightsDataPath, {responseType: 'text'}).subscribe(csvData => {

      let separateLines = csvData.split('\n');
      // console.log(this.dataArray);

      separateLines.forEach(data => {
        let noCommas = data.split(',');
        if (noCommas[0] == 'uniqueid'){
          console.log('omitting header row')
        } else {
        let rose: IFlight[] = [
            { flightNumber: noCommas[1],
            scheduledDate: new Date(parseInt(noCommas[2])),
            originDestination: noCommas[3],
            registration: noCommas[0] }
        ];
        this.data.push(rose[0]);
        console.log()
      }});
    });
  }
}
