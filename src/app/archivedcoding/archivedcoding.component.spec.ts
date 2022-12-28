import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedcodingComponent } from './archivedcoding.component';

describe('ArchivedcodingComponent', () => {
  let component: ArchivedcodingComponent;
  let fixture: ComponentFixture<ArchivedcodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedcodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedcodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
