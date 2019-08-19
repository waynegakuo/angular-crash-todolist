import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'; // imported model for use in this services.ts file
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient ) { }

  getTodos(): Observable<Todo[]> {
    // getting an http request & making it a Todo[] item (arrays of type Todo)
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
