# Genome components

[![Build Status](https://travis-ci.org/bzgenome/genome-components.png?branch=master)](https://travis-ci.org/bzgenome/genome-components)
[![NPM](https://nodei.co/npm/bzg-components.png)](https://npmjs.org/package/bzg-components)


### Install

Developers can easily install Bzg Components using NPM.


First install or update your global  angular-cli tools:
```
# First install angular-cli tools:
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
```

Install bzg-components with npm

```
npm install --save bzg-components

```

Include the Module in you project 

```
import { BzgComponentsModule } from 'bzg-components';

```


```
 imports: [
    BrowserModule,
    BzgComponentsModule
  ],

```


The module of your application should look like this

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BzgComponentsModule } from 'bzg-components';

import { AppComponent } from './app.component';


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
```



You can also configure parameters to customize the colors of the components

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BzgComponentsModule} from "./bzg-components/bzg-components.module";

const customGenomeConfiguration = {
  "icons-sprite-path": "assets/sprite.svg",
  "color-text-primary": "#555555",
  "color-text-secondary": "#B7B7B7",
  "color-button-primary": "#3e5c72",
  "color-button-secondary": "transparent",
  "color-header-primary": "#4285f4",
  "color-header-secondary": "#4285f4",
  "color-header-fill": "#ffffff",
  "color-icon-header-primary": "#0039cb",
  "color-icon-header-secondary": "#0039cb",
  "color-icon-header-fill": "#ffffff",
  "color-user-info": "#ffffff",
  "color-avatar": "#dadeda",
  "color-avatar-background": "#ffffff"
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
```



Finally you can use the different components offered by the library

```html


<bzg-header [srcLogo]="'assets/sprite.svg#logo-bzg'"
            [srcIcon]="'assets/sprite.svg#clock'"
            [tagText]="'My App'"
            [styleConfig]="{}">
  <bzg-user [email]="'scott.austin@mail.com'"
            [fullName]="'Scott Austin'"
            [styleConfig]="{}">
  </bzg-user>
</bzg-header>


<bzg-icon [srcIcon]="'assets/sprite.svg#headphones'"
          [size]="100">
</bzg-icon>

<bzg-icon [nameIcon]="'align-middle'"
          [size]="100">  
</bzg-icon>


<bzg-button [text]="'This is my button'"
            [srcIcon]="'assets/sprite.svg#headphones'">
</bzg-button>


 <bzg-combo id="MyCombo"
            formControlName="MyCombo"
            [listData]="myOptions"
            [displayField]="'name'"
            [valueField]="'value'">
 </bzg-combo>

```

```html
<script src="https://unpkg.com/bzg-components@0.0.4/bzg-components.js"></script>
```
