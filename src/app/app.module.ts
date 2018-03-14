import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataGridModule } from "./components/data-grid/data-grid.module"
import { HttpClientModule} from "@angular/common/http";
import { ModalService} from "./services/modal.service";

import { AppComponent } from "./app.component";
import { RegistrationModalComponent } from "./components/registration-modal/registration-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGridModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
