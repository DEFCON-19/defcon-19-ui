import { Component,NgZone ,OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as L from 'leaflet';
import 'simpleheat/simpleheat.js';
import "leaflet.heat/src/HeatLayer.js";
import {data} from "./consData";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map') map: ElementRef<any>;


  constructor(){

  }
  ngOnInit() {    
  }
  public testData ={
    max: 999,
    data: [
      {        
        lat: 69.2729772,
        lng: 15.9594706,       
      ['Count']:232,
      },
      {        
        lat: 67.9322397,
        lng: 13.0903687,       
        count:233,
      },
      {        
        lat: 67.8890439,
        lng: 13.0166629,       
        count:454,
      },
      {        
        lat: 58.4297984,
        lng: 7.4682002,       
        count:344,
      },
      {        
        lat: 62,
        lng: 10,       
        count:553,
      },
      {        
        lat: 68.8012505,
        lng: 16.5201176,       
        count:2173,
      },
      {        
        lat: 69.662238,
        lng: 18.9414284,       
        count:273,
      },
      {        
        lat: 60.9862581,
        lng: 9.2363406,       
        count:223,
      },
      {        
        lat: 69.6338778,
        lng: 18.0053465,       
        count:239,
      },
      {        
        lat: 69.6944211,
        lng: 18.6208343,       
        count:623,
      },
      {        
        lat: 69.7102485,
        lng: 19.0944588,       
        count:273,
      },
      {        
        lat: 59.1520272,
        lng: 9.0162129,       
        count:123,
      },
      {        
        lat: 68.7753991,
        lng: 16.1772767,       
        count:113,
      },
      {        
        lat: 59.3899651,
        lng: 10.4283708,       
        count:223,
      },
      {        
        lat: 67.2812,
        lng: 14.5461,       
        count:322,
      },
      {        
        lat: 68.6753699,
        lng: 17.1241585,       
        count:122,
      },
      {        
        lat: 68.8686591,
        lng: 17.4736685,       
        count:232,
      },
      {        
        lat: 68.8615136,
        lng: 18.3463924,       
        count:654,
      },
      {        
        lat: 68.873378,
        lng: 17.8433191,       
        count:743,
      },
      {        
        lat: 58.5586086,
        lng: 8.8032167,       
        count:231,
      },
      {        
        lat: 59.5050838,
        lng: 5.5898821,       
        count:564,
      },
      {        
        lat: 69.048711,
        lng: 18.5091151,       
        count:324,
      },
      {        
        lat: 69.06554,
        lng: 18.51552,       
        count:34,
      },
      {        
        lat: 69.0926176,
        lng: 18.5820334,       
        count:144,
      },
      {        
        lat: 69.1455251,
        lng: 18.1632424,       
        count:123,
      },
      {        
        lat: 69.3614045,
        lng: 17.0590759,       
        count:213,
      },
      {        
        lat: 69.3384643,
        lng: 17.1024982,       
        count:243,
      },
      {        
        lat: 62,
        lng: 10,       
        count:445,
      },
      {        
        lat: 69.2322815,
        lng: 17.9805425,       
        count:652,
      },
      {        
        lat: 69.2447188,
        lng: 17.9417404,       
        count:543,
      },
      {        
        lat: 69.3545091,
        lng: 18.0764109,       
        count:322,
      },
      {        
        lat: 69.5436744,
        lng: 17.6617343,       
        count:723,
      },
      {        
        lat: 69.6127948,
        lng: 19.8801856,       
        count:273,
      },
      {        
        lat: 69.2186366,
        lng: 19.5580286,       
        count:623,
      },
      {        
        lat: 69.9670084,
        lng: 19.6246551,       
        count:323,
      },
      {        
        lat: 69.4404401,
        lng: 20.1576656,       
        count:723,
      },
      {        
        lat: 69.5761478,
        lng: 20.2157335,       
        count:283,
      },
      {        
        lat: 69.6045934,
        lng: 20.5401747,       
        count:823,
      },
      {        
        lat: 69.495056,
        lng: 20.8306318,       
        count:293,
      },
      {        
        lat: 70.0353443,
        lng: 20.9775752,       
        count:923,
      },
      {        
        lat: 69.7903789,
        lng: 20.9463114,       
        count:823,
      },
      {        
        lat: 69.7681817,
        lng: 21.0245482,       
        count:423,
      },
      {        
        lat: 69.9389231,
        lng: 22.0492671,       
        count:423,
      },
      {        
        lat: 68.7465811,
        lng: 17.8070961,       
        count:723,
      },
      {        
        lat: 69.3912822,
        lng: 20.2678866,       
        count:623,
      },
      {        
        lat: 69.6453264,
        lng: 18.9940426,       
        count:723,
      },
      {        
        lat: 69.6953085,
        lng: 18.8708572,       
        count:723,
      },
      {        
        lat: 69.6970469,
        lng: 19.0801049,       
        count:232,
      },
      {        
        lat: 69.1700361,
        lng: 17.7460947,       
        count:423,
      },
      {        
        lat: 70.6636329,
        lng: 23.6791211,       
        count:4323,
      },
      {        
        lat: 70.7212911,
        lng: 23.8033848,       
        count:723,
      },
      {        
        lat: 70.3677049,
        lng: 31.0997854,       
        count:63,
      },
      {        
        lat: 70.2868638,
        lng: 30.9975698,       
        count:242,
      },
      {        
        lat: 70.0745265,
        lng: 29.7525051,       
        count:132,
      },
      {        
        lat: 70.1110398,
        lng: 29.3353413,       
        count:234,
      },
      {        
        lat: 69.0110992,
        lng: 23.0368311,       
        count:544,
      },
      {        
        lat: 69.9668853,
        lng: 23.2725891,       
        count:534,
      },
      {        
        lat: 70.0204298,
        lng: 23.5326196,       
        count:234,
      },
      {        
        lat: 69.9239547,
        lng: 23.4917223,       
        count:375,
      },
      {        
        lat: 69.9915454,
        lng: 23.296265,       
        count:323,
      },
      {        
        lat: 70.2388023,
        lng: 22.3499099,       
        count:257,
      },
      {        
        lat: 70.5884131,
        lng: 22.2862653,       
        count:578,
      },
      {        
        lat: 70.4869023,
        lng: 22.1619387,       
        count:567,
      },
      {        
        lat: 70.6458189,
        lng: 23.6728432,       
        count:466,
      },
      {        
        lat: 62.343051,
        lng: 5.5871904,       
        count:687,
      },
      {        
        lat: 70.9962623,
        lng: 24.6606854,       
        count:456,
      },
      {        
        lat: 70.9827154,
        lng: 25.9743779,       
        count:266,
      },
      {        
        lat: 59.9375584,
        lng: 10.606272,       
        count:255,
      },
      {        
        lat: 70.0524656,
        lng: 24.9636392,       
        count:888,
      },
      {        
        lat: 69.447887,
        lng: 25.2997436,       
        count:346,
      },
      {        
        lat: 70.9467347,
        lng: 27.3264608,       
        count:346,
      },
      {        
        lat: 71.0349713,
        lng: 27.8517178,       
        count:684,
      },
      {        
        lat: 71.0633365,
        lng: 28.2468821,       
        count:848,
      },
      {        
        lat: 70.8578739,
        lng: 29.087526,       
        count:943,
      },
      {        
        lat: 70.1991514,
        lng: 28.1964607,       
        count:361,
      },
      {        
        lat: 70.6343997,
        lng: 29.7178252,       
        count:366,
      },
      {        
        lat: 69.6890768,
        lng: 29.9900178,       
        count:781,
      },
      {        
        lat: 69.666422,
        lng: 29.9860696,       
        count:785,
      },
      {        
        lat: 69.7263374,
        lng: 30.049768,       
        count:664,
      },
      {        
        lat: 69.7080385,
        lng: 30.0415543,       
        count:634,
      }
    ]
  }
  ;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 65 ,19 ],
      zoom: 4,
      zoomControl:true
    });
    this.map['scrollWheelZoom'].disable();    
    // var heat = L.heatLayer([
    //   [50.5, 30.5, 0.2], // lat, lng, intensity
    //   [50.6, 30.4, 0.5],      
    // ], {radius: 25}).addTo(this.map)

    var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    Stadia_AlidadeSmoothDark.addTo(this.map);
    for(var i=0;i<data.length-1;i++){
      var elem = data[i];
      console.log(elem);
      var color;
        if(elem.KM2 > 200){
          if (elem.KM2 > 400) {
            if (elem.KM2 > 600) {
              if (elem.KM2 > 800) {
                color= "#3f1081";
              }else{
  
                color = "#8654cb";
              }
            }else{
  
              color = "#893df1";
            }
          }else{
  
            color = "#caa7fb";
          }
        }
  
        var circle = L.circleMarker([elem.Latitude ,elem.Longitude ], {
          color: color,
          radius: 0.2,
          fillColor: color,
          fillOpacity: 0.2,
          
        }).addTo(this.map);
      
    }


  }
  ngAfterViewInit(): void {
    this.initMap();
  }



}


