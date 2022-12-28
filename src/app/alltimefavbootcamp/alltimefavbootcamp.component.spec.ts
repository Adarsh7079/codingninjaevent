import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimefavbootcampComponent } from './alltimefavbootcamp.component';

describe('AlltimefavbootcampComponent', () => {
  let component: AlltimefavbootcampComponent;
  let fixture: ComponentFixture<AlltimefavbootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltimefavbootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltimefavbootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
