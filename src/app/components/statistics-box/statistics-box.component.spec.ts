import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBoxComponent } from './statistics-box.component';

describe('StatisticsBoxComponent', () => {
  let component: StatisticsBoxComponent;
  let fixture: ComponentFixture<StatisticsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
