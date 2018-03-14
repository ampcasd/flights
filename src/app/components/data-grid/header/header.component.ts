import {
    Component,
    Input
} from "@angular/core";

@Component({
  selector: "grid-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class GridHeaderComponent {
    @Input() headers: string[];
}
