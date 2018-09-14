import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";

import { GridComponent } from "./grid.component";

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
