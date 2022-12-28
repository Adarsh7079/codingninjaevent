import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedworkshopComponent } from './archivedworkshop.component';

describe('ArchivedworkshopComponent', () => {
  let component: ArchivedworkshopComponent;
  let fixture: ComponentFixture<ArchivedworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedworkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
