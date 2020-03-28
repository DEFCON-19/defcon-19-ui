import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";
@Component({
  selector: "app-social-distancing-slider",
  templateUrl: "./social-distancing-slider.component.html",
  styleUrls: ["./social-distancing-slider.component.scss"]
})
export class SocialDistancingSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "Very poor" },
      { value: 2 },
      { value: 3, legend: "Fair" },
      { value: 4 },
      { value: 5, legend: "Average" },
      { value: 6 },
      { value: 7, legend: "Good" },
      { value: 8 },
      { value: 9, legend: "Excellent" }
    ]
  };
}
