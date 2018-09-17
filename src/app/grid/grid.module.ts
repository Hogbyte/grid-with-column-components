import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";

import { GridComponent } from "./grid.component";
import { ColumnComponent } from "./column/column.component";
import { GridItemFormatPipe } from "./grid-item-format.pipe";

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [
    GridComponent,
    ColumnComponent,
    GridItemFormatPipe
  ],
  exports: [
    GridComponent,
    ColumnComponent
  ]
})
export class GridModule { }
