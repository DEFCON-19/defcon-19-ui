import { Injectable } from "@angular/core";
import {Subject} from 'rxjs';

@Injectable()
export class SliderDataService {
  value = 0;
  socialDistanceValue: Subject<number>;

  constructor() {
    this.socialDistanceValue = new Subject<number>();
  }

  setSocialDistanceValue(value: number) {
    this.socialDistanceValue.next(value);
  }
}
