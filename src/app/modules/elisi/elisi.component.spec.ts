import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElisiComponent } from './elisi.component';

describe('ElisiComponent', () => {
  let component: ElisiComponent;
  let fixture: ComponentFixture<ElisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
