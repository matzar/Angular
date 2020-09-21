import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // styles takes an array of strings; using back-ticks to be able to write multi-line expressions
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'bootstrap-init';
}
