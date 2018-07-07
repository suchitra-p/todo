import { TODO } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule, MatButtonModule, MatCardModule, MatListModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';


import { TodoItemComponent } from './../todo-item/todo-item.component';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent, TodoItemComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatIconModule],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    todoService = fixture.debugElement.injector.get(TodoService);
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
      spyOn(component, 'getTodos');
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.getTodos).toHaveBeenCalled();
  });
});
