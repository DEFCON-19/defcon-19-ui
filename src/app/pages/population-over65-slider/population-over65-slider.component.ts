import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";
@Component({
  selector: "app-population-over65-slider",
  templateUrl: "./population-over65-slider.component.html",
  styleUrls: ["./population-over65-slider.component.scss"]
})
export class PopulationOver65SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "10%" },
      { value: 2 },
      { value: 3, legend: "25%" },
      { value: 4 },
      { value: 5, legend: "45%" },
      { value: 6 },
      { value: 7, legend: "60%" },
      { value: 8 },
      { value: 9, legend: "85%" }
    ]
  };
}
