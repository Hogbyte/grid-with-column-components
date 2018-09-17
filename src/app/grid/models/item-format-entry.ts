import { PipeTransform, Provider } from "@angular/core";

export interface IItemFormatEntry {
    formatType: string;
    usePipe?: Provider | PipeTransform;
    useFunction?: Function;
}
