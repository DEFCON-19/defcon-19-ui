import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-wear-masks-radiobutton",
  templateUrl: "./wear-masks-radiobutton.component.html",
  styleUrls: ["./wear-masks-radiobutton.component.scss"]
})
export class WearMasksRadiobuttonComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  radioModel = "Middle";

  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
