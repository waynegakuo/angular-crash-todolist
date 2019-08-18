import { Component } from '@angular/core'; // importing compmonent package from angular core

// this is a decorator that includes metadata of the component
// selector is what will be used in the directive/html element in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

  // name = 'Wayne Gakuo';
  // constructor() {
  //   this.changeName( 'John');
  // }
  // changeName(name: string): void {
  //   this.name = name;}
