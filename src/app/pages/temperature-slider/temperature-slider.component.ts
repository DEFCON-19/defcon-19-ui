import { Component, OnInit } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
@Component({
  selector: "app-temperature-slider",
  templateUrl: "./temperature-slider.component.html",
  styleUrls: ["./temperature-slider.component.scss"]
})
export class TemperatureSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 0;
  // options: Options = {
  //   ceil: 50,
  //   step: 10,
  //   floor: -40,
  //   showSelectionBar: true,
  //   showTicks: true,
  //   vertical: true,
  //   getTickColor: (value: number): string => {
  //     if (value <= 0) {
  //       return "blue";
  //     }
  //     if (value > 30 && value < 38) {
  //       return "orange";
  //     }
  //     if (value >= 38) {
  //       return "red";
  //     }
  //     return "#FFFFFF";
  //   },
  //   translate: (value: number, label: LabelType): string => {
  //     switch (label) {
  //       case LabelType.Low:
  //         return value + "℃";
  //       case LabelType.High:
  //         return value + "℃";
  //       default:
  //         return value + "℃";
  //     }
  //   },
  //   getSelectionBarColor: (value: number): string => {
  //     if (value <= 0) {
  //       return "blue";
  //     }
  //     if (value >= 30 && value < 38) {
  //       return "orange";
  //     }
  //     if (value >= 38) {
  //       return "red";
  //     }
  //     return "#FFFFFF";
  //   }
  // };
  options: Options = {
    floor: -40,
    ceil: 50,
    showTicks: true,
    vertical: true,
    tickStep: 10,
    showSelectionBar: true,
    getTickColor: (value: number): string => {
      if (value <= 0) {
        return "blue";
      }
      if (value > 30 && value < 38) {
        return "orange";
      }
      if (value >= 38) {
        return "red";
      }
      return "#FFFFFF";
    },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + "℃";
        case LabelType.High:
          return value + "℃";
        default:
          return value + "℃";
      }
    },
    getSelectionBarColor: (value: number): string => {
      if (value <= 0) {
        return "blue";
      }
      if (value >= 30 && value < 38) {
        return "orange";
      }
      if (value >= 38) {
        return "red";
      }
      return "#FFFFFF";
    }
  };
}
