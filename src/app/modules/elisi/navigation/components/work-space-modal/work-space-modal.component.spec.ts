import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceModalComponent } from './work-space-modal.component';

describe('WorkSpaceModalComponent', () => {
  let component: WorkSpaceModalComponent;
  let fixture: ComponentFixture<WorkSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
