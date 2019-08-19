import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id); // UI emmission of selected-deleted todo
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe(); // server-side or service emmission of selected-deleted todo
  }

  /** we are going to first make a POST request to the server through the service
   * & when the observable is gotten back, we add it to our UI here
   */
  addTodo(todo: Todo) {
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
