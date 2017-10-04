import { TodoList } from './todo-app/todo-list.model';
import { Todo } from './todo-app/todo-item.model';

export class TodosService {
    private rootList: TodoList;

    constructor() {
        this.rootList = new TodoList();
    }

    getRootList(): TodoList {
        return this.rootList;
    }

    addRootTodo(text: String) {
        let newTodo: Todo = new Todo(text);
        newTodo.subList = new TodoList();
        this.rootList.addTodo(newTodo);
    }

    fillWithTestData() {
        this.addRootTodo('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
        this.rootList.todos[0].subList.addTodo(new Todo('Sub todo first'));
        this.rootList.todos[0].subList.addTodo(new Todo('Sub todo second'));
        this.addRootTodo('Cras non pulvinar arcu. Etiam in convallis sapien');
    }

    deleteAll() {
        this.rootList.todos.length = 0;
    }

    deleteCompleted() {
        for(let i = this.rootList.todos.length-1; i >= 0; i--) {
            let todo = this.rootList.todos[i];
            todo.subList.todos = todo.subList.todos.filter((todo) => {
                return !todo.completed;
            });
            if(todo.subList.todos.length === 0 && todo.completed) {
                this.rootList.todos.splice(i, 1);
            }
        }
    }

    getNumOfCompleted(): number {
        let completed = 0;
        completed += this.rootList.getNumOfCompleted();
        this.rootList.todos.forEach((todo) => {
            completed += todo.subList.getNumOfCompleted();
        });
        return completed;
    }

    expandAll() {
        let isAllExpanded = true;
        isAllExpanded = this.rootList.todos.every((todo, i) => {
            if(!todo.expanded) {
                return false;
            }

            return true;
        });

        this.rootList.todos.forEach((todo) => {
            if(isAllExpanded) {
                todo.expanded = false;
            } else {
                todo.expanded = true;
            }
        });
    }

    toggleAll() {
        let total = this.rootList.getNumOfTodos();
        let completed = this.rootList.getNumOfCompleted();
        
        this.rootList.todos.forEach((todo) => {
            total += todo.subList.getNumOfTodos();
            completed += todo.subList.getNumOfCompleted();
        });

        if(total === completed) {
            this.rootList.makeAll(false);
        } else {
            this.rootList.makeAll(true);
        }
    }
}