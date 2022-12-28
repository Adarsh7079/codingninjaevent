import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedwebinarsComponent } from './recordedwebinars.component';

describe('RecordedwebinarsComponent', () => {
  let component: RecordedwebinarsComponent;
  let fixture: ComponentFixture<RecordedwebinarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedwebinarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordedwebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
