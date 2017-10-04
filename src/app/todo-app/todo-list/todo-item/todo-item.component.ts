import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo-item.model';
import { TodoList } from '../../todo-list.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() displayToggleBtn: boolean;
  @Input() index: number;
  @Output() todoDeleted = new EventEmitter<number>();
  isMenuActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCheckboxClick() {
    this.todo.toggle();
  }

  onToggleClick() {
    this.todo.expanded = !this.todo.expanded;
  }

  onMoreClick() {
    this.isMenuActive = !this.isMenuActive;
  }

  onDeleteTodoClick() {
    this.todoDeleted.emit(this.index);
  }
}
