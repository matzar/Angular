import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <hr>
    <h3>WARNING!</h3>
    <hr>
  `,
  styles: [`
    h3 {
      color: red;
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
  `]
})
export class WarningAlert {

}
