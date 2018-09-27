import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output current filter', () => {
    spyOn(component.currentFilterType, 'emit').and.callThrough();
    component.setFilterType('filtro');
    expect(component.currentFilterType.emit).toHaveBeenCalledWith('filtro');
  });

  it('should output filters list', () => {
    spyOn(component.filtersList, 'emit').and.callThrough();
    component.ngOnInit();
    expect(component.filtersList.emit).toHaveBeenCalledWith(['all', 'todo', 'done']);
  });
});
