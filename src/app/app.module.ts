import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BzgComponentsModule} from "./bzg-components/bzg-components.module";

const customGenomeConfiguration = {
  "color-text-primary": "#555555",
  "color-text-secondary": "#B7B7B7",
  "color-button-primary": "#3e5c72",
  "color-button-secondary": "transparent"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BzgComponentsModule.forRoot(customGenomeConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
