import { Component, OnInit } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
@Component({
  selector: "app-population-obese-slider",
  templateUrl: "./population-obese-slider.component.html",
  styleUrls: ["./population-obese-slider.component.scss"]
})
export class PopulationObeseSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 23;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + "%";
        case LabelType.High:
          return value + "%";
        default:
          return value + "%";
      }
    },
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 15) {
        return "yellow";
      }
      if (value <= 24) {
        return "orange";
      }
      if (value <= 100) {
        return "red";
      }
      return "#2AE02A";
    }
  };
}
