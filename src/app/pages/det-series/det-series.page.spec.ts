import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetSeriesPage } from './det-series.page';

describe('DetSeriesPage', () => {
  let component: DetSeriesPage;
  let fixture: ComponentFixture<DetSeriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
