import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutsListComponent } from './prodcuts-list.component';

describe('ProdcutsListComponent', () => {
  let component: ProdcutsListComponent;
  let fixture: ComponentFixture<ProdcutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
