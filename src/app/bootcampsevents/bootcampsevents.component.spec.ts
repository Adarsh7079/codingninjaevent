import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampseventsComponent } from './bootcampsevents.component';

describe('BootcampseventsComponent', () => {
  let component: BootcampseventsComponent;
  let fixture: ComponentFixture<BootcampseventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampseventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootcampseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
