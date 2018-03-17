import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataGridModule } from "./components/data-grid/data-grid.module"
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RegistrationModalComponent } from "./components/registration-modal/registration-modal.component";
import { FormsModule } from "@angular/forms";
import { GridDataService } from "./services/grid-data.service";
import { ModalService} from "./services/modal.service";
import { DropdownComponent } from "./components/registration-modal/dropdown/dropdown.component";
import { BoldifyPipe } from "./boldify.pipe";


@NgModule({
  declarations: [
    AppComponent,
    RegistrationModalComponent,
    DropdownComponent,
    BoldifyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGridModule,
    FormsModule
  ],
  providers: [ModalService, GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
