import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksFilterComponent } from './snacks-filter.component';

describe('SnacksFilterComponent', () => {
  let component: SnacksFilterComponent;
  let fixture: ComponentFixture<SnacksFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
