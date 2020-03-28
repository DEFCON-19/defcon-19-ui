import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPollutionRadiobuttonComponent } from './air-pollution-radiobutton.component';

describe('AirPollutionRadiobuttonComponent', () => {
  let component: AirPollutionRadiobuttonComponent;
  let fixture: ComponentFixture<AirPollutionRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPollutionRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollutionRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
