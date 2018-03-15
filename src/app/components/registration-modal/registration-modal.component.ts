import {Component, OnInit} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})

export class RegistrationModalComponent implements OnInit {
  private allRegistrations = [];
  public clickedRegistrationId = this.modalService.registrationId;
  public flightDate = this.modalService.flightDate;
  public inputFocused = false;
  public inputValue = '';
  public filteredRegistrations = [];
  public registrationsDataPath = 'assets/mock-data/mockRegistrations.csv';
  public dropdownClick: boolean;

  constructor(public modalService: ModalService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.http.get(this.registrationsDataPath, {responseType: 'text'}).subscribe(csvData => {
      const separateLines = csvData.split('\n');
      separateLines.forEach(data => {
        this.allRegistrations.push(data);
      });
    });
  }
  searchSimilar() {
    this.filteredRegistrations = this.allRegistrations.filter(row => {
      return row.indexOf(this.inputValue) === 0;
    });
  }
  hideModal() {
    this.modalService.modalVisible = false;
  }
}
