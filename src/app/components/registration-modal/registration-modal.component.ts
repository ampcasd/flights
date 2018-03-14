import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit {
  public registrationId = this.modalService.registrationId;
  public flightDate = this.modalService.flightDate;
  public inputFocused = false;

  ngOnInit() {
  }
  constructor(public modalService: ModalService) { }

  hideModal() {
    this.modalService.modalVisible = false;
  }
  inputClicked() {
    this.inputFocused = true;
  }
}
