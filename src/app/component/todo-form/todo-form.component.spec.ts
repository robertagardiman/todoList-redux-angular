import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {TodoFormComponent} from './todo-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output the value to be added to the list if form is valid', () => {
    spyOn(component.todoValue, 'emit').and.callThrough();
    component.todoForm.setValue({todoInputValue: 'ciccio'});
    fixture.detectChanges();
    expect(component.todoForm.valid).toBe(true);
    component.onSubmit();
    expect(component.todoValue.emit).toHaveBeenCalledWith('ciccio');
  });

  it('should disable button if form is not valid', () => {
    const submitBtn = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(component.todoForm.valid).toBe(false);
    expect(submitBtn.disabled).toBe(true);
  });
});
