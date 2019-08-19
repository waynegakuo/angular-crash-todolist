import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { splitClasses } from '@angular/compiler';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    // tslint:disable-next-line:no-shadowed-variable
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }
  onDelete(todo) {
    console.log('delete');
  }
}
