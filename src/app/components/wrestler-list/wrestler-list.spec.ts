import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrestlerList } from './wrestler-list';

describe('WrestlerList', () => {
  let component: WrestlerList;
  let fixture: ComponentFixture<WrestlerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrestlerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrestlerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
