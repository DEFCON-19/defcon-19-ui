import { Component, OnInit } from "@angular/core";
import { Options, LabelType } from "ng5-slider";

@Component({
  selector: "app-population-smoking-slider",
  templateUrl: "./population-smoking-slider.component.html",
  styleUrls: ["./population-smoking-slider.component.scss"]
})
export class PopulationSmokingSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 22;
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
      if (value <= 12) {
        return "yellow";
      }
      if (value <= 23) {
        return "orange";
      }
      if (value <= 100) {
        return "red";
      }
      return "#2AE02A";
    }
  };
}
