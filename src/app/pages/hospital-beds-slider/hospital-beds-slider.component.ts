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
  value: number = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
    showTicks: true,
    tickStep: 10
  };
}
