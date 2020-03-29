import {
  Component,
  NgZone,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { data } from "./consData_v2";
import 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js'
declare let L;
//import * as L from "leaflet";

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
  mapHeight = 900;
  constructor() {

  }
  ngOnInit() {
  }

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
    }
  };
  mapCenter = L.latLng(35.679966, 19);

  onMapReady(map: L.Map) {
    this.map = map;
    console.log("==========", this.map)
    let newAddressPoints = data.map(function (p) {
      var a = [p[1], p[2], p[0] ]
      return a;
    });
    console.log(newAddressPoints);
       
    var heat = L.heatLayer(newAddressPoints , { 
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
      gradient:{
        0.05: 'purple', 0.15: 'orange', 0.5: 'red', 0.65:'yellow',0.9:'white'
      }
    }).addTo(map);

    // const heat = L.heatLayer(newAddressPoints).addTo(this.map);    
  }
  mapOnClick(evt) {
  }

}
