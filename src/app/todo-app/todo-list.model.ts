import { Todo } from './todo-item.model'; 

export class TodoList {
    todos: Array<Todo>;

    constructor() {
        this.todos = new Array<Todo>();
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    getNumOfTodos(): number {
        return this.todos.length;
    }

    getNumOfCompleted(): number {
        let completed = 0;
        this.todos.forEach((todo) => {
            if(todo.completed) {
                completed++;
            }
        });

        return completed;
    }

    makeAll(completed: boolean) {
        this.todos.forEach((todo) => {
            todo.completed = completed;

            if(todo.subList) {
                todo.subList.makeAll(completed);
            }
        });
    }
}