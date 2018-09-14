import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";

import { GridComponent } from "./grid.component";
import { ColumnComponent } from "./column/column.component";

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [
    GridComponent,
    ColumnComponent
  ],
  exports: [
    GridComponent,
    ColumnComponent
  ]
})
export class GridModule { }
