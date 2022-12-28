import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingworkshopComponent } from './upcomingworkshop.component';

describe('UpcomingworkshopComponent', () => {
  let component: UpcomingworkshopComponent;
  let fixture: ComponentFixture<UpcomingworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingworkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
