import { NgModule } from "@angular/core";

import { RowComponent } from "./row.component";
import { CommonModule, DatePipe } from "@angular/common";
import { ModalService } from "../../../services/modal.service";

@NgModule({
  declarations: [ RowComponent ],
  exports: [ RowComponent ],
  imports: [ CommonModule ],
  providers: [ ModalService ]
})
export class RowModule {}
