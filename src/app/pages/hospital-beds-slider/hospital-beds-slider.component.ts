import { Component, OnInit } from "@angular/core";
import { Options } from "ng5-slider";
@Component({
  selector: "app-hospital-beds-slider",
  templateUrl: "./hospital-beds-slider.component.html",
  styleUrls: ["./hospital-beds-slider.component.scss"]
})
export class HospitalBedsSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  value: number = 39;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 38) {
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
