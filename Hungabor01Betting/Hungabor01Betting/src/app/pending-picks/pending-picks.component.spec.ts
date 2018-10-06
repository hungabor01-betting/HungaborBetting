import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPicksComponent } from './pending-picks.component';

describe('PendingPicksComponent', () => {
  let component: PendingPicksComponent;
  let fixture: ComponentFixture<PendingPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
