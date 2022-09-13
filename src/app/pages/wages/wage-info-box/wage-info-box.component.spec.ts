import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageInfoBoxComponent } from './wage-info-box.component';

describe('WageInfoBoxComponent', () => {
  let component: WageInfoBoxComponent;
  let fixture: ComponentFixture<WageInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageInfoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
