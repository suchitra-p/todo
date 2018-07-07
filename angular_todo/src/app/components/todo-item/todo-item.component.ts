import { TODO } from './../../models/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TODO;
  @Output() deleteTodoId = new EventEmitter<number>();
  editMode: boolean;
  tempTask;
  todoService;

  constructor(
  ) { }

  ngOnInit() {
    if (this.todoItem) {
      this.tempTask = this.todoItem.title;
    }
  }

  toggleEditMode = () => this.editMode = this.editMode;

  storeUpdate = (char) => {
    this.tempTask = char.key;
  }
      
  sendUpdatedTask = () => {
    this.todoItem.title = this.tempTask;
    this.editMode=false; 

    const title=this.tempTask;
    const id=this.todoItem.id;
    const isCompleted=false

    this.todoService.updateTodo({title, isCompleted, id })
                    .subscribe()
  }
     
  toggleCheckbox() {
    this.editMode = false;
    this.todoItem.isCompleted = this.todoItem.isCompleted;

    const isCompleted = this.todoItem.isCompleted;
    const id = this.todoItem.id;
    const title = this.todoItem.title;;

    this.todoService.updateTodo({ title, isCompleted, id })
                    .subscribe();;
  }
  cancel = () => this.editMode = true;
  deleteTask = () => {
    this.todoService.updateTodo.subscribe();
  }

}
