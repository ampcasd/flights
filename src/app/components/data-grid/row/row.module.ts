import { NgModule } from "@angular/core";

import { RowComponent } from "./row.component";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
    declarations: [RowComponent],
    exports: [ RowComponent],
    imports: [ CommonModule ]
})
export class RowModule {}
