import { Component } from "@angular/core";
import { Options, LabelType } from "ng5-slider";

@Component({
  selector: "app-date-slider",
  templateUrl: "./date-slider.component.html"
})
export class DateSliderComponent {
  dateRange: Date[] = this.createDateRange();
  value: number = new Date(2020, 3, 10).getTime();
  options: Options = {
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };

  createDateRange(): Date[] {
    const dates: Date[] = [];
    for (let i: number = 1; i <= 31; i++) {
      dates.push(new Date(2020, 2, 10));
    }
    return dates;
  }
}
