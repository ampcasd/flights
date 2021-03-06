import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'registration-search',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  @Input() values: string[];
  public filteredRegistrations = [];
  public selectedFlight = this.modalService.selectedFlight;
  public inputValue = this.selectedFlight;
  public inputFocused;

  public get value(): string {
    return this.inputValue;
  }

  constructor(public modalService: ModalService,
              private domSanitizer: DomSanitizer) {
  }

  boldify(row: string) {
    const value = row.replace(this.inputValue, '<span style="font-weight: bold">' + this.inputValue + '</span>');
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

  /**
   * selectedFlight cleared in order to trigger searching
   * which is blocked by default to prevent displaying dropdown with just one ID that was already set
   */
  searchSimilar() {
    this.selectedFlight = '';
    this.filteredRegistrations = this.values.filter(row => {
      return row.indexOf(this.inputValue.toUpperCase()) === 0;
    });
  }
}
