import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConetntAreaComponent } from './conetnt-area.component';

describe('ConetntAreaComponent', () => {
  let component: ConetntAreaComponent;
  let fixture: ComponentFixture<ConetntAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConetntAreaComponent]
    });
    fixture = TestBed.createComponent(ConetntAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
