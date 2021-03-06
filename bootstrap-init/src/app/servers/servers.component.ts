import { Component, OnInit } from '@angular/core';

@Component({
  /*
  ? selector can be omitted
  */
  // selector: 'app-servers',
  // selector: '[app-servers]', //? select by attribute - use square-brackets
  selector: '.app-servers', //? select by class - put a full-stop before the components name
  /*
  ! templateUrl/template is compulsory
  templateUrl: './servers.component.html',
  can be replaced by
  template: '<app-server></app-server><app-server></app-server>', // to write html code directly in here <- use this for one-line inline htmls
  */
  template: `
  <app-server></app-server>
  <app-server></app-server>`, // <- use backticks for multi-line html inlines (it's JavaScript template expressions)
  /*
  ? styleUrls/styles can be omitted
  */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
