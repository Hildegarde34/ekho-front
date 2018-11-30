import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByConcertComponent } from './by-concert.component';

describe('ByConcertComponent', () => {
  let component: ByConcertComponent;
  let fixture: ComponentFixture<ByConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByConcertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
