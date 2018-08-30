import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailPageComponent } from './transaction-detail-page.component';

describe('TransactionDetailPageComponent', () => {
  let component: TransactionDetailPageComponent;
  let fixture: ComponentFixture<TransactionDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
