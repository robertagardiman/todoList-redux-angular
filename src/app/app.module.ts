import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodosComponent } from './containers/todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './containers/filters/filters.component';
import {StoreModule} from '@ngrx/store';
import {toDoReducer} from './store/reducers';
import {filterReducer} from './store/reducers/filter.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodosComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreModule.forRoot({todos: toDoReducer, filterType: filterReducer}),
    EffectsModule.forRoot(effects)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
