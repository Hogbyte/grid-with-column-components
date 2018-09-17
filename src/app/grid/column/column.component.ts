import { Component, Input } from "@angular/core";

@Component({
  selector: "app-column",
  template: ""
})
export class ColumnComponent {
  @Input() headerText: string = "";
  @Input() dataField: string = "";
  @Input() colCssClass: string = "";
  @Input() thCssClass: string = "";
  @Input() tdCssClass: string = "";
  @Input() clickEnabled: boolean = true;
}
