import { Component, OnInit } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
@Component({
  selector: "app-handwashing-slider",
  templateUrl: "./handwashing-slider.component.html",
  styleUrls: ["./handwashing-slider.component.scss"]
})
export class HandwashingSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 0;
  options: Options = {
    ceil: 100,
    step: 10,
    floor: 0,
    showSelectionBar: true,
    showTicks: true,
    getTickColor: (value: number): string => {
      if (value < 30) {
        return "red";
      }
      if (value < 60) {
        return "orange";
      }
      if (value < 80) {
        return "yellow";
      }
      return "#2AE02A";
    },
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
    getSelectionBarColor: (value: number): string => {
      if (value <= 30) {
        return "red";
      }
      if (value <= 60) {
        return "orange";
      }
      if (value <= 80) {
        return "yellow";
      }
      return "#2AE02A";
    }
  };
}
