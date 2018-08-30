import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryDetailPageComponent } from './inquiry-detail-page.component';

describe('InquiryDetailPageComponent', () => {
  let component: InquiryDetailPageComponent;
  let fixture: ComponentFixture<InquiryDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
