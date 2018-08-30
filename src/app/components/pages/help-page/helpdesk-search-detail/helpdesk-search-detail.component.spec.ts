import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskSearchDetailComponent } from './helpdesk-search-detail.component';

describe('HelpdeskSearchDetailComponent', () => {
  let component: HelpdeskSearchDetailComponent;
  let fixture: ComponentFixture<HelpdeskSearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskSearchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
