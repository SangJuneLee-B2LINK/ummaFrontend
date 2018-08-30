import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskSearchListComponent } from './helpdesk-search-list.component';

describe('HelpdeskSearchListComponent', () => {
  let component: HelpdeskSearchListComponent;
  let fixture: ComponentFixture<HelpdeskSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
