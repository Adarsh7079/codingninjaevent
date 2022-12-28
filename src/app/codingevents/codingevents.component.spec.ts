import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingeventsComponent } from './codingevents.component';

describe('CodingeventsComponent', () => {
  let component: CodingeventsComponent;
  let fixture: ComponentFixture<CodingeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
