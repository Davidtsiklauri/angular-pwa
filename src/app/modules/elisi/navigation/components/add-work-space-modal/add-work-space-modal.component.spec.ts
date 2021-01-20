import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkSpaceModalComponent } from './add-work-space-modal.component';

describe('AddWorkSpaceModalComponent', () => {
  let component: AddWorkSpaceModalComponent;
  let fixture: ComponentFixture<AddWorkSpaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkSpaceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkSpaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
