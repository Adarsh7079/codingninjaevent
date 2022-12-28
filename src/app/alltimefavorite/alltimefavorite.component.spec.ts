import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimefavoriteComponent } from './alltimefavorite.component';

describe('AlltimefavoriteComponent', () => {
  let component: AlltimefavoriteComponent;
  let fixture: ComponentFixture<AlltimefavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltimefavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltimefavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
