import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingbootcampComponent } from './upcomingbootcamp.component';

describe('UpcomingbootcampComponent', () => {
  let component: UpcomingbootcampComponent;
  let fixture: ComponentFixture<UpcomingbootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingbootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingbootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
