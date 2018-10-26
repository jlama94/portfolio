import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactInterviewComponent } from './artifact-interview.component';

describe('ArtifactInterviewComponent', () => {
  let component: ArtifactInterviewComponent;
  let fixture: ComponentFixture<ArtifactInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
