import { NgModule } from "@angular/core";

import { GridHeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [GridHeaderComponent],
    exports: [ GridHeaderComponent],
    imports: [ CommonModule ]
})
export class GridHeaderModule {}
