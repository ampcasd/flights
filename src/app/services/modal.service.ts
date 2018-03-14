import { Injectable } from '@angular/core';
import { DataGridComponent } from "../components/data-grid/data-grid.component";

@Injectable()

export class ModalService {
  public modalVisible = false;
  public registrationId: string;
  public flightDate: string;
}
