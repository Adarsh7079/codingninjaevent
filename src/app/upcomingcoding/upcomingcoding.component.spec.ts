import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingcodingComponent } from './upcomingcoding.component';

describe('UpcomingcodingComponent', () => {
  let component: UpcomingcodingComponent;
  let fixture: ComponentFixture<UpcomingcodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingcodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingcodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
