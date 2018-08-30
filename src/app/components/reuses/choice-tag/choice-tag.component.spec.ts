import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTagComponent } from './choice-tag.component';

describe('ChoiceTagComponent', () => {
  let component: ChoiceTagComponent;
  let fixture: ComponentFixture<ChoiceTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
