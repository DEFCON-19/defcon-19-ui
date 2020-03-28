import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearMasksRadiobuttonComponent } from './wear-masks-radiobutton.component';

describe('WearMasksRadiobuttonComponent', () => {
  let component: WearMasksRadiobuttonComponent;
  let fixture: ComponentFixture<WearMasksRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearMasksRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearMasksRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
