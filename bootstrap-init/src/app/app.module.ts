import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// register new component here-> (let TypeScript know about it)
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  // register new components here-> (let angular know about it)
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
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
