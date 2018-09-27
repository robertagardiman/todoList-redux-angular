import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TodosComponent} from './containers/todos/todos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoFormComponent} from './component/todo-form/todo-form.component';
import {FiltersComponent} from './containers/filters/filters.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodosComponent,
        TodoFormComponent,
        FiltersComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
