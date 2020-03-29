import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
@Component({
  selector: "app-wear-masks-slider",
  templateUrl: "./wear-masks-slider.component.html",
  styleUrls: ["./wear-masks-slider.component.scss"]
})
export class WearMasksSliderComponent implements OnInit {
  @Output() sendValue: EventEmitter<number> = new EventEmitter<number>();

  public sendRecord() {
    this.sendValue.emit(this.value);
  }
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
