import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerEditDialog } from './wrestler-edit-dialog';

describe('WrestlerEditDialog', () => {
  let component: WrestlerEditDialog;
  let fixture: ComponentFixture<WrestlerEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrestlerEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrestlerEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
