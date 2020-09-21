import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  // register new components here
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // which component should you be aware of when the whole application starts, so basically
  // which component should you basically recognise in the index.html file.
  bootstrap: [AppComponent]
})
export class AppModule { }
