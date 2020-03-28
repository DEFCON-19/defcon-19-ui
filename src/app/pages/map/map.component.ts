import {
  Component,
  NgZone,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { latLng, Map, marker, tileLayer } from "leaflet";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import * as   am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import { DataService } from "./data.service";
// am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {

  map = null;
  mapHeight = 395;
  constructor(){

  }
  ngOnInit() {    
  }

  get options(){
    return {
    layers: [
      tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }
      )
    ],
    zoom: 4,
    center: latLng(65, 19)
    }
  };
  mapCenter = latLng(35.679966, 19);

  onMapReady(map: Map) {
    this.map = map;
  }
  mapOnClick(evt) {
  }
}
