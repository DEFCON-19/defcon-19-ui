import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layouts/layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from "ngx-perfect-scrollbar";
import { TopbarComponent } from "./layouts/topbar/topbar.component";
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { CountryComponent } from "./pages/country/country.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CountupComponent } from "./shared/countup/countup.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { MapComponent } from "./pages/map/map.component";
import { Ng5SliderModule } from "ng5-slider";
import { DateSliderComponent } from "./pages/date-slider/date-slider.component";
import { SocialDistancingSliderComponent } from "./pages/social-distancing-slider/social-distancing-slider.component";
import { HandwashingSliderComponent } from "./pages/handwashing-slider/handwashing-slider.component";
import { WearMasksRadiobuttonComponent } from "./pages/wear-masks-radiobutton/wear-masks-radiobutton.component";
import { AirPollutionRadiobuttonComponent } from "./pages/air-pollution-radiobutton/air-pollution-radiobutton.component";
import { PopulationOver65SliderComponent } from "./pages/population-over65-slider/population-over65-slider.component";
import { FormsModule } from "@angular/forms";
import { PopulationSmokingSliderComponent } from "./pages/population-smoking-slider/population-smoking-slider.component";
import { PopulationObeseSliderComponent } from "./pages/population-obese-slider/population-obese-slider.component";
import { HospitalBedsSliderComponent } from "./pages/hospital-beds-slider/hospital-beds-slider.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { TemperatureSliderComponent } from "./pages/temperature-slider/temperature-slider.component";
import { WearMasksSliderComponent } from "./pages/wear-masks-slider/wear-masks-slider.component";
import { SliderDataService } from "./services/sliderDataService";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    CountryComponent,
    NotFoundComponent,
    CountupComponent,
    MapComponent,
    DateSliderComponent,
    SocialDistancingSliderComponent,
    HandwashingSliderComponent,
    WearMasksRadiobuttonComponent,
    AirPollutionRadiobuttonComponent,
    PopulationOver65SliderComponent,
    PopulationSmokingSliderComponent,
    PopulationObeseSliderComponent,
    HospitalBedsSliderComponent,
    TemperatureSliderComponent,
    WearMasksSliderComponent
  ],
  imports: [
    LeafletModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    Ng5SliderModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerImmediately"
    })
  ],
  providers: [
    SliderDataService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
