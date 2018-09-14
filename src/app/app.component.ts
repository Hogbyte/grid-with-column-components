import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input() bindData: boolean = false;

  cars: any[] = [
    { year: 1980, brand: "Ford", color: "blue" },
    { year: 1990, brand: "Chevrolet", color: "white" },
    { year: 2000, brand: "Dodge", color: "red" },
    { year: 2010, brand: "Cadillac", color: "black" },
  ];
}
