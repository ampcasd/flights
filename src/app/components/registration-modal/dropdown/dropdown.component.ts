import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  public filteredRegistrations = this.modalService.filteredRegistrations;

  constructor(public modalService: ModalService) {}

  changeValue() {
    console.log(this.modalService.query);
  }
}
