import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayModalComponent } from './may-modal.component';

describe('MayModalComponent', () => {
  let component: MayModalComponent;
  let fixture: ComponentFixture<MayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
