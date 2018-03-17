import {Component, OnInit, HostListener, ViewEncapsulation} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegistrationModalComponent implements OnInit {
  private allRegistrations = [];
  public selectedFlight = this.modalService.selectedFlight;
  public flightDate = this.modalService.flightDate;
  public inputFocused = false;
  public inputValue = this.selectedFlight;
  public filteredRegistrations = [];
  public registrationsDataPath = 'assets/mock-data/mockRegistrations.csv';
  public escapeKeyCode = 27;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === this.escapeKeyCode) {
      this.cancelModal();
    }
  }

  constructor(public modalService: ModalService,
              private http: HttpClient,
              private domSanitizer: DomSanitizer) { }

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
    // selectedFlight cleared in order to trigger searching
    // which is blocked by default in case registrationId is already set
    this.selectedFlight = '';
    this.filteredRegistrations = this.allRegistrations.filter(row => {
      return row.indexOf(this.inputValue.toUpperCase()) === 0;
    });
  }
  boldify(row: string) {
    const value = row.replace(this.inputValue, '<span style="font-weight: bold">' + this.inputValue + '</span>');
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
  cancelModal() {
    this.modalService.inputValue.next(null);
    this.modalService.modalVisible = false;
  }
  save() {
    this.modalService.inputValue.next(this.inputValue);
    this.modalService.modalVisible = false;
  }
}


  // loadData() {
  //   if (this.modalService.allRegistrations.length <= 1) {
  //   this.http.get(this.registrationsDataPath, {responseType: 'text'}).subscribe(csvData => {
  //     const separateLines = csvData.split('\n');
  //     separateLines.forEach(data => {
  //       this.modalService.allRegistrations.push(data);
  //     });
  //     console.log('done');
  //   });
  // }}

  // searchSimilar() {
  //   // this.modalService.query = this.inputVal;
  //   this.modalService.searchSimilar();
  // }
