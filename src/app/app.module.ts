import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BzgComponentsModule} from "./bzg-components/bzg-components.module";

const customGenomeConfiguration = {
  "color-text-primary": "#555555",
  "color-text-secondary": "#B7B7B7",
  "color-button-primary": "#3e5c72",
  "color-button-secondary": "transparent",
  "color-header-primary":"#e0e4cb",
  "color-header-secondary":"#f7861e",
  "color-header-fill":"#ffffff",
  "color-icon-header-primary":"#62d2ea",
  "color-icon-header-secondary":"#a4dbd8",
  "color-icon-header-fill":"#ffffff"
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
