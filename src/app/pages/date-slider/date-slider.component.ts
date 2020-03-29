import { Component } from "@angular/core";
import { Options, LabelType } from "ng5-slider";

@Component({
  selector: "app-date-slider",
  templateUrl: "./date-slider.component.html"
})
export class DateSliderComponent {
  dateRange: Date[] = this.createDateRange(
    new Date(2020, 2, 10),
    new Date(2020, 3, 30)
  );
  value: number = this.dateRange[0].getTime();
  options: Options = {
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };

  createDateRange(start, end): Date[] {
    const dates: Date[] = [];
    for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      dates.push(new Date(dt));
    }
    return dates;
  }
}
