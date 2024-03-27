import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DetMoviesPage } from './det-movies.page';

describe('DetMoviesPage', () => {
  let component: DetMoviesPage;
  let fixture: ComponentFixture<DetMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
