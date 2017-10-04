import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { TodoList } from '../todo-list.model';
import { Todo } from '../todo-item.model';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: TodoList;
  @Input() isRootList: boolean;
  @ViewChild('textInput') textInputRef: ElementRef; 

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  onTodoDeleted(index: number) {
    this.todoList.todos.splice(index, 1);
  }

  onAddTodoClick() {
    const text = this.textInputRef.nativeElement.value;
    if(text !== '') {
      if(this.isRootList) {
        this.todosService.addRootTodo(text);
      } else {
        let newTodo: Todo = new Todo(text);
        this.todoList.addTodo(new Todo(text));
      }
      this.textInputRef.nativeElement.value = '';
    }
  }
}
