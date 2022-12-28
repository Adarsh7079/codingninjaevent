import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimefavworkshopComponent } from './alltimefavworkshop.component';

describe('AlltimefavworkshopComponent', () => {
  let component: AlltimefavworkshopComponent;
  let fixture: ComponentFixture<AlltimefavworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltimefavworkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltimefavworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
