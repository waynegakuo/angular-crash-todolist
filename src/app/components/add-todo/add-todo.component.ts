import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // we put any because it doesn't have an id and is not formatted as our model

  title: string; // this is a property

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title, // this input is bound to the property title
      completed: false
    };
    this.addTodo.emit(todo); // emmiting upwards since we need to access the direct to dos in the todos component
  }

}
