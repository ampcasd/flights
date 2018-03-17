import { Injectable } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class GridDataService {
  private flightsDataPath = 'assets/mock-data/mockFlights.csv';
  public data = [];

  constructor( public http: HttpClient ) {}

  public loadData() {
    this.http.get(this.flightsDataPath, {responseType: 'text'}).subscribe(csvData => {

      // creating an array of rows
      const separateLines = csvData.split('\n');
      // looping through rows to push correct types and values
      separateLines.forEach(data => {

        const noCommaRow = data.split(',');

        // omitting first and last row with if statement
        if (noCommaRow[0] !== 'uniqueid' && noCommaRow[0] !== '') {
          const properTypeRows: IFlight[] = [
            {
              flightNumber: noCommaRow[1],
              scheduledDate: new Date(parseInt(noCommaRow[2], 10)),
              originDestination: noCommaRow[3],
              registration: noCommaRow[4]
            }
          ];
          this.data.push(properTypeRows[0]);
        }
      });
    });
  }
}
