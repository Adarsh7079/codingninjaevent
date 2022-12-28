import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimefavwebinarsComponent } from './alltimefavwebinars.component';

describe('AlltimefavwebinarsComponent', () => {
  let component: AlltimefavwebinarsComponent;
  let fixture: ComponentFixture<AlltimefavwebinarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltimefavwebinarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltimefavwebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
