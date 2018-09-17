import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from "@angular/core";
import { ColumnComponent } from "./column/column.component";
import { IRowClickEvent } from "./models/row-click-event.model";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit, AfterContentInit {
  @Input() value: any[] = null;
  @Input() emptyMessageText: string = "No data found.";
  @Input() cssClass: string = "";

  @Output() rowClick: EventEmitter<IRowClickEvent> = new EventEmitter<IRowClickEvent>();

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent> = null;
  activeColumns: ColumnComponent[] = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // Initial columns
    this.activeColumns = this.columns.toArray();
    // Column changes
    this.columns.changes.subscribe((newColumns: any) => {
      this.activeColumns = newColumns.toArray();
    });
  }

  get hasData(): boolean { return this.value && this.value.length > 0; }

  processClick(dataItem: any, column: ColumnComponent): void {
    if (column.clickEnabled) {
      let oClickEvent: IRowClickEvent = {
        grid: this,
        column: column,
        dataItem: dataItem
      };
      this.rowClick.emit(oClickEvent);
    }
  }
}
