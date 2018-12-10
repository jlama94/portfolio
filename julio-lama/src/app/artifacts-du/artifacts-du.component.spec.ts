
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsDUComponent } from './artifacts-du.component';

describe('ArtifactsDUComponent', () => {
  let component: ArtifactsDUComponent;
  let fixture: ComponentFixture<ArtifactsDUComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactsDUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactsDUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
