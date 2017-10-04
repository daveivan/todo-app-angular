import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  onDeleteCompleted() {
    this.todosService.deleteCompleted();
  }

  onExpandAll() {
    this.todosService.expandAll();
  }

  onToggleAll() {
    this.todosService.toggleAll();
  }
}
