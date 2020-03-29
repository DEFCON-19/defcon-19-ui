import { Component, OnInit } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
@Component({
  selector: "app-population-over65-slider",
  templateUrl: "./population-over65-slider.component.html",
  styleUrls: ["./population-over65-slider.component.scss"]
})
export class PopulationOver65SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 17;
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
      if (value <= 10) {
        return "yellow";
      }
      if (value <= 18) {
        return "orange";
      }
      if (value <= 100) {
        return "red";
      }
      return "#2AE02A";
    }
  };
}
