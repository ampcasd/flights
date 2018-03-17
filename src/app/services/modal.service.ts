import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ModalService {
  public modalVisible = false;
  public selectedFlight: string;
  public flightDate: string;
  public inputValue = new Subject<string>();
  public newRegistrationId = this.inputValue.asObservable();
}
