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
  value: number = 88;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value >= 0) {
        return "red";
      }
    }
  };
}
