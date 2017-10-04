import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { TodoItemComponent } from './todo-app/todo-list/todo-item/todo-item.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
