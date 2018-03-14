import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataGridModule } from "./components/data-grid/data-grid.module"
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
