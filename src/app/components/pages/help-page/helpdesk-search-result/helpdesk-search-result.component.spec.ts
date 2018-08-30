import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskSearchResultComponent } from './helpdesk-search-result.component';

describe('HelpdeskSearchResultComponent', () => {
  let component: HelpdeskSearchResultComponent;
  let fixture: ComponentFixture<HelpdeskSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
