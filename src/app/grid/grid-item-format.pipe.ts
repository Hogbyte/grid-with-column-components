import { Inject, Pipe, PipeTransform, Provider, Injector } from "@angular/core";

import { ColumnComponent } from "./column/column.component";
import { IItemFormatEntry } from "./models/item-format-entry";

@Pipe({
  name: "gridItemFormat"
})
export class GridItemFormatPipe implements PipeTransform {

  constructor(
    @Inject("app-grid-format-config") private itemFormatConfig: IItemFormatEntry[],
    private injector: Injector) {}

  transform(value: any, column: ColumnComponent): any {
    // Verify formatting is needed
    if (!column || !column.formatType) {
      return value;
    }

    // Determine if the format type is configured
    let oEntry: IItemFormatEntry = this.itemFormatConfig.find((entry: IItemFormatEntry) => entry.formatType === column.formatType);
    if (!oEntry) {
      console.error(`No entry for format type: ${column.formatType}.`);
      return value;
    }
  
    if (oEntry.usePipe) {
      let oPipe: PipeTransform = this.getPipe(oEntry.usePipe);
      if (!oPipe) {
        console.error(`Invalid pipe configuration for format type: ${column.formatType}.`);
        return value;
      }

      let oNewValue: any = oPipe.transform(value);
      console.info(`New value from ${column.formatType} pipe: ${oNewValue} [old value: ${value}].`);
      return oNewValue;

    } else if (oEntry.useFunction) {
      let oNewValue: any = oEntry.useFunction(value);
      console.info(`New value from ${column.formatType} function: ${oNewValue} [old value: ${value}]`);
      return oNewValue;

    } else {
      console.error(`Invalid entry for format type: ${column.formatType}.`);
      return value;
    }
  }

  private getPipe(setting: Provider | PipeTransform): PipeTransform {
    if ("transform" in (setting as Object)) {
      return setting as PipeTransform;
    }
    return this.injector.get(setting);
  }
}
