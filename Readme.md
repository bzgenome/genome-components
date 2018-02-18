# Genome components


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


```html
<script src="https://unpkg.com/bzg-components@0.0.4/bzg-components.js"></script>
```
