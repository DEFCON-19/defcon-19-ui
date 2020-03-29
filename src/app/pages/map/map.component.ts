import {
  Component,
  NgZone,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { data } from "./consData_v2";
import "leaflet";
import "leaflet.heat/dist/leaflet-heat.js";
import { number } from "@amcharts/amcharts4/core";
import { SliderDataService } from "src/app/services/sliderDataService";
declare let L;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  socialDistanceValue: number;
  map = null;
  mapHeight = 900;
  constructor(private data: SliderDataService) {}

  ngOnInit() {}

  get options() {
    return {
      layers: [
        L.tileLayer(
          "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
          {
            maxZoom: 15,
            attribution:
              '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          }
        )
      ],
      zoom: 4,
      center: L.latLng(65, 19)
    };
  }
  mapCenter = L.latLng(35.679966, 19);

  onMapReady(map: L.Map) {
    this.map = map;
    let newAddressPoints = this.getAddressPoints();
    this.data.socialDistanceValue.asObservable().subscribe(value => {
      this.socialDistanceValue = value;
      console.log("VALUE ON MAP:", value);
      console.log("ADDRESS", newAddressPoints);

      for (let i = 0; i < newAddressPoints.length; i++) {
        console.log("BEFORE:", newAddressPoints[i][2]);
        if (newAddressPoints[i][2] != 0) {
          newAddressPoints[i][2] *= this.socialDistanceValue;
        }
        console.log("AFTER:", newAddressPoints[i][2]);
      }

      var heat = L.heatLayer(newAddressPoints, {
        minOpacity: 0.05,
        maxZoom: 18,
        radius: 17,
        blur: 15,
        max: 1.0,
        // radius: 4,
        // blur:12,
        // maxZoom:10,
        // minOpacity: 1,
        // max:29,
        gradient: {
          0.05: "purple",
          0.15: "orange",
          0.5: "red",
          0.65: "yellow",
          0.9: "white"
        }
      }).addTo(map);
    });

    // const heat = L.heatLayer(newAddressPoints).addTo(this.map);
  }
  mapOnClick(evt) {}

  getAddressPoints() {
    return data.map(function(p) {
      var a = [p[1], p[2], p[0]];
      return a;
    });
  }
}
