import { Component, OnInit, HostListener, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { HttpClient } from '@angular/common/http';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RegistrationModalComponent implements OnInit {
  @ViewChild('dropdownComponent') dropdownComponent: DropdownComponent;

  public allRegistrations = [];
  public flightDate = this.modalService.flightDate;
  public registrationsDataPath = 'assets/mock-data/mockRegistrations.csv';
  public escapeKeyCode = 27;
  public selectedFlight = this.modalService.selectedFlight;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === this.escapeKeyCode) {
      this.cancelModal();
    }
  }

  constructor(public modalService: ModalService,
              private http: HttpClient) {
  }

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

  cancelModal() {
    this.modalService.inputValue.next(null);
    this.modalService.modalVisible = false;
  }

  save() {
    this.modalService.inputValue.next(this.dropdownComponent.value);
    this.modalService.modalVisible = false;
  }
}
