import { ColumnComponent } from "../column/column.component";
import { GridComponent } from "../grid.component";

export interface IRowClickEvent {
    grid: GridComponent;
    column: ColumnComponent;
    dataItem: any;
}
