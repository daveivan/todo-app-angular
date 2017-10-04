import { TodoList } from './todo-list.model';

export class Todo {
    text: String;
    completed: boolean;
    created: Date;
    expanded: boolean;
    subList: TodoList;

    constructor(text: String) {
        this.text = text;
        this.completed = false;
        this.created = new Date();
        this.expanded = false;
        this.subList = null;
    }

    toggle() {
        let currentStatus = this.completed = !this.completed;

        if(this.subList) {
            this.subList.todos.forEach((subTodo) => {
                subTodo.completed = currentStatus;
            });
        }
    }
}