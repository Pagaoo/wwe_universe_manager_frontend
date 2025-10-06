import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerCreateDialog } from './wrestler-create-dialog';

describe('WrestlerCreateDialog', () => {
  let component: WrestlerCreateDialog;
  let fixture: ComponentFixture<WrestlerCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrestlerCreateDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrestlerCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
