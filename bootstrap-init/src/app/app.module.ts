import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
