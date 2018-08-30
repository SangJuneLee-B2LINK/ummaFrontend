import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryListPageComponent } from './inquiry-list-page.component';

describe('InquiryListPageComponent', () => {
  let component: InquiryListPageComponent;
  let fixture: ComponentFixture<InquiryListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
