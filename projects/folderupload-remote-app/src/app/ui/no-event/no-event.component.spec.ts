import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEventComponent } from './no-event.component';

describe('NoEventComponent', () => {
  let component: NoEventComponent;
  let fixture: ComponentFixture<NoEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoEventComponent]
    });
    fixture = TestBed.createComponent(NoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
