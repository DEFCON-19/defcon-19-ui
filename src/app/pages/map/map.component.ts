import {
  Component,
  NgZone,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { data } from "./consData";
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
  constructor(private data: SliderDataService) {}

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
  socialDistanceValue: number;
  map = null;
  mapHeight = 900;
  mapCenter = L.latLng(35.679966, 19);

  ngOnInit() {}

  // onMapReady(map: L.Map) {
  //   this.map = map;
  //   const newAddressPoints = this.getAddressPoints();
  //   this.data.socialDistanceValue.asObservable().subscribe(value => {
  //     this.socialDistanceValue = value;
  //     console.log("VALUE ON MAP:", value);
  //     console.log("ADDRESS", newAddressPoints);

  //     for (let i = 0; i < newAddressPoints.length; i++) {
  //       console.log("BEFORE", newAddressPoints[i][2]);

  //       console.log("AFTER:", newAddressPoints[i][2] * value);
  //       //newAddressPoints[i][2] =* value
  //     }

  //     const heat = L.heatLayer(newAddressPoints, {
  //       minOpacity: 0.05,
  //       maxZoom: 18,
  //       radius: 17,
  //       blur: 15,
  //       max: 1.0,
  //       // radius: 4,
  //       // blur:12,
  //       // maxZoom:10,
  //       // minOpacity: 1,
  //       // max:29,
  //       gradient: {
  //         0.05: "purple",
  //         0.15: "orange",
  //         0.5: "red",
  //         0.65: "yellow",
  //         0.9: "white"
  //       }
  //     }).addTo(map);
  //   });

  //   // const heat = L.heatLayer(newAddressPoints).addTo(this.map);
  // }
  onMapReady(map: L.Map) {
    this.map = map;
    console.log("==========", this.map);
    // let newAddressPoints = data.map(function (p) {
    //   var a = [p[1], p[2], p[0] ]
    //   return a;
    // });
    // console.log(newAddressPoints);

    // var heat = L.heatLayer(newAddressPoints , {
    //     minOpacity: 0.05,
    //     maxZoom: 18,
    //     radius: 17,
    //     blur: 15,
    //     max: 1.0,
    //   // radius: 4,
    //   // blur:12,
    //   // maxZoom:10,
    //   // minOpacity: 1,
    //   // max:29,
    //   gradient:{
    //     0.05: 'purple', 0.15: 'orange', 0.5: 'red', 0.65:'yellow',0.9:'white'
    //   }
    // }).addTo(map);

    // const heat = L.heatLayer(newAddressPoints).addTo(this.map);
    this.data.socialDistanceValue.asObservable().subscribe(value => {
      for (let i = 0; i < data.length; i++) {
        console.log("Slider val:", value);
        const point = data[i];
        var size = (point.KM2 + value * 20) / 500;
        console.log("SIZE:", size);
        // console.log(size);
        var iconUrl = "assets/icons/point_4.png";
        // if(size > 5){
        //   iconUrl = "assets/icons/point_1.png";
        //   if(size > 7){
        //     iconUrl = "assets/icons/point_2.png";
        //     if(size > 9){
        //       iconUrl = "assets/icons/point_3.png";
        //     }
        //     if(size > 12){
        //       iconUrl = "assets/icons/point_4.png";
        //     }
        //   }
        // }

        var greenIcon = L.icon({
          iconUrl: iconUrl,
          iconSize: size, // size of the icon
          popupAnchor: [point.Latitude, point.Longitude] // point from which the popup should open relative to the iconAnchor
        });
        L.marker([point.Latitude, point.Longitude], {
          icon: greenIcon,
          zIndexOffset: Math.round(size)
        }).addTo(this.map);
      }
    });
  }
  mapOnClick(evt) {}

  getAddressPoints() {
    return data.map(function(p) {
      const a: number[] = [
        parseFloat(p[1].toString()),
        parseFloat(p[2].toString()),
        parseFloat(p[0].toString())
      ];
      return a;
    });
  }
}
