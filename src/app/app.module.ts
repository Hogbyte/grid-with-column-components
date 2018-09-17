import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GridModule } from "./grid/grid.module";
import { IItemFormatEntry } from "./grid/models/item-format-entry";
import { DatePipe, UpperCasePipe } from "@angular/common";

const GRID_FORMAT_CONFIG: IItemFormatEntry[] = [
  // Pipe from dependency injection
  { formatType: "date", usePipe: DatePipe },
  // Specific pipe instance
  { formatType: "uppercase", usePipe: new UpperCasePipe() },
  // Specific function
  { formatType: "reverse", useFunction: (value: string) => value.split("").reverse().join("") }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule
  ],
  providers: [
    { provide: "app-grid-format-config", useValue: GRID_FORMAT_CONFIG },
    DatePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
