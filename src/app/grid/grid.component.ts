import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from "@angular/core";
import { ColumnComponent } from "./column/column.component";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit, AfterContentInit {
  @Input() value: any[] = null;
  @Input() emptyMessageText: string = "No data found.";
  @Input() cssClass: string = "";

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

}
