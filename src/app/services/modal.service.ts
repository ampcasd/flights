import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ModalService {
  public modalVisible = false;
  public selectedFlight: string;
  public flightDate: string;
  public inputValue = new Subject<string>();
  public allRegistrations = [];
  public newRegistrationId = this.inputValue.asObservable();
  public filteredRegistrations = [];
  public query = '';

  searchSimilar() {
    this.filteredRegistrations = this.allRegistrations.filter(row => {
      // console.log(this.query);
      return row.indexOf(this.query) === 0;
    });
  }

}
