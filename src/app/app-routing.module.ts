import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {path: '', component: TodosComponent}, // we want the TodosComponent to be our root
  {path: 'about', component: AboutComponent } // the AboutComponent is another page route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
