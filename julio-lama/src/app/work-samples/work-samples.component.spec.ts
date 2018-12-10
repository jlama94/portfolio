import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSamplesComponent } from './work-samples.component';

describe('WorkSamplesComponent', () => {
  let component: WorkSamplesComponent;
  let fixture: ComponentFixture<WorkSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
