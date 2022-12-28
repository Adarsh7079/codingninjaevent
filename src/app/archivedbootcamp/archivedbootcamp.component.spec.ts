import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedbootcampComponent } from './archivedbootcamp.component';

describe('ArchivedbootcampComponent', () => {
  let component: ArchivedbootcampComponent;
  let fixture: ComponentFixture<ArchivedbootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedbootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedbootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
