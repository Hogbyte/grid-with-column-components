import { Component } from "@angular/core";
import { IRowClickEvent } from "./grid/models/row-click-event.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  bindData: boolean = false;
  showColor: boolean = true;
  showYear: boolean = true;
  showNotes: boolean = false;
  lastRowClick: any = null;

  cars: any[] = [
    { year: 1980, brand: "Ford", color: "blue", notes: "Ford notes here..." },
    { year: 1990, brand: "Chevrolet", color: "white", notes: "Chevy notes here..." },
    { year: 2000, brand: "Dodge", color: "red", notes: "A pattern emerges..." },
    { year: 2010, brand: "Cadillac", color: "black", notes: "..and is broken." },
  ];

  formatTableValues: any[] = [
    { dateValue: new Date(), textValue: "lowercase in raw data "}
  ];

  onRowClick(event: IRowClickEvent): void {
      this.lastRowClick = event.dataItem;
  }
}
