import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'; // imported model for use in this services.ts file
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  todosLimit = '?_limit=5'; // our limit for the number of todos viewed

  constructor(private http: HttpClient ) { }

  // get todos
  getTodos(): Observable<Todo[]> {
    // getting an http request & making it a Todo[] item (arrays of type Todo)
    // return this.http.get<Todo[]>(this.todosUrl);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // we add the limit
  }

  // Toggle completed
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(url, todo, httpOptions);
  }
}
