import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SliderDataService {
  value = 0;
  socialDistanceValue: BehaviorSubject<number>;

  constructor() {
    this.socialDistanceValue = new BehaviorSubject(88);
  }

  setSocialDistanceValue(value: number) {
    this.socialDistanceValue.next(value);
  }
}
