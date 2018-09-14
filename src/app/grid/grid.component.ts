import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  cars: any[] = [
    { year: 1980, brand: "Ford", color: "blue" },
    { year: 1990, brand: "Chevrolet", color: "white" },
    { year: 2000, brand: "Dodge", color: "red" },
    { year: 2010, brand: "Cadillac", color: "black" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
