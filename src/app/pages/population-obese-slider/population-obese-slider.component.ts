import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";
@Component({
  selector: "app-population-obese-slider",
  templateUrl: "./population-obese-slider.component.html",
  styleUrls: ["./population-obese-slider.component.scss"]
})
export class PopulationObeseSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: "10%" },
      { value: 2 },
      { value: 3, legend: "30%" },
      { value: 4 },
      { value: 5, legend: "55%" },
      { value: 6 },
      { value: 7, legend: "80%" },
      { value: 8 },
      { value: 9, legend: "95%" }
    ]
  };
}
