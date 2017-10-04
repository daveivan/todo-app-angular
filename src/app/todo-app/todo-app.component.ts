import { Component, OnInit } from '@angular/core';
import { TodoList } from './todo-list.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  rootList: TodoList;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.rootList = this.todosService.getRootList();
    this.todosService.fillWithTestData();
  }

}
