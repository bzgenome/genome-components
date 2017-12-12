import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BzgComponentsModule} from "./bzg-components/bzg-components.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BzgComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
