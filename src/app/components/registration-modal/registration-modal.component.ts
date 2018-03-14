import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { HttpClient } from "@angular/common/http";

// import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit {
  public registrationId = this.modalService.registrationId;
  public flightDate = this.modalService.flightDate;
  public inputFocused = false;
  public inputValue: string;
  private rows = [];
  public filteredRows = [];
  public filteredAmt = this.filteredRows.length;
  public registrationsDataPath = 'assets/mock-data/mockRegistrations.csv';

  ngOnInit() {
    this.loadData();
  }
  constructor(public modalService: ModalService, private http: HttpClient) { }

  hideModal() {
    this.modalService.modalVisible = false;
  }
  inputClicked() {
    this.inputFocused = true;
  }
  searchSimilar() {
    this.filteredRows = this.rows.filter(row => row.contains(this.inputValue));
  //to contains powyżej chyba nei działa - skonfrontuj czy potrzeba tego lodasha do tego.
  }
  loadData() {
    this.http.get(this.registrationsDataPath, {responseType: 'text'}).subscribe(csvData => {
        const separateLines = csvData.split('\n');
        separateLines.forEach(data => {
          this.rows.push(data);
        });
      });
  }
}
