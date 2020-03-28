import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-air-pollution-radiobutton",
  templateUrl: "./air-pollution-radiobutton.component.html",
  styleUrls: ["./air-pollution-radiobutton.component.scss"]
})
export class AirPollutionRadiobuttonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  radioModel = "Healthy";
}
