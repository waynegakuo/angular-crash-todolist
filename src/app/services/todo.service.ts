import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'; // imported model for use in this services.ts file
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5'; // our limit for the number of todos viewed

  constructor(private http: HttpClient ) { }

  // Get todos
  getTodos(): Observable<Todo[]> {
    // getting an http request & making it a Todo[] item (arrays of type Todo)
    // return this.http.get<Todo[]>(this.todosUrl);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // we add the limit
  }

  // Add todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Deleted todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

}
