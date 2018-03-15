import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()

export class ModalService {
  public modalVisible = false;
  public registrationId: string;
  public flightDate: string;
  public newValue = '';
  // public newRegistrationId: BehaviorSubject<string> = new BehaviorSubject<string>('');

  saveValue(value) {
    this.newValue = value;
    console.log("registrationId = " + this.registrationId);
    console.log("newRegistrationId = " + this.newValue);
  }
}
