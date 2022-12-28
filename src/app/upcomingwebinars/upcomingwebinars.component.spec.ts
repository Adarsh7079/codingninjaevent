import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingwebinarsComponent } from './upcomingwebinars.component';

describe('UpcomingwebinarsComponent', () => {
  let component: UpcomingwebinarsComponent;
  let fixture: ComponentFixture<UpcomingwebinarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingwebinarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingwebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
