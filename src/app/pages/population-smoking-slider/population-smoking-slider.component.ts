import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";

@Component({
  selector: "app-population-smoking-slider",
  templateUrl: "./population-smoking-slider.component.html",
  styleUrls: ["./population-smoking-slider.component.scss"]
})
export class PopulationSmokingSliderComponent implements OnInit {
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
