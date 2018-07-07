import { TODO } from './../../models/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    title = 'My Todo App';
    resetInput = '';
    // todoService;
    todos: TODO[];
    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit() {
        this.getTodos();
    }
      
    getTodos() {
        this.todoService.getList()
            .subscribe(todosList => {
                this.todos = todosList;
                console.log('Fetched Todos', this.todos);
            } );
    }
    insert(title: string) {
        if (!title) { return; }
        const isCompleted = false;
	this.resetInput = '';
        console.log('inserting..', title);
        this.todoService.addNewTodo( {title, isCompleted} as TODO );
    }
    delete(id) {
        this.todoService.deleteTodo(id);
    }
}
