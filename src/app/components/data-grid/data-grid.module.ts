import { NgModule } from "@angular/core";
import { ModalService } from "../../services/modal.service";

import { DataGridComponent } from "./data-grid.component";
import { GridHeaderModule } from "./header/header.module"
import { RowModule } from "./row/row.module"
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [DataGridComponent],
    exports: [ DataGridComponent],
    imports: [ GridHeaderModule, RowModule, CommonModule ],
    providers: [ ModalService ]
})
export class DataGridModule {}
