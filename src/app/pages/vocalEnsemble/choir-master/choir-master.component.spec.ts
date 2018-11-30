import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirMasterComponent } from './choir-master.component';

describe('ChoirMasterComponent', () => {
  let component: ChoirMasterComponent;
  let fixture: ComponentFixture<ChoirMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoirMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoirMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
