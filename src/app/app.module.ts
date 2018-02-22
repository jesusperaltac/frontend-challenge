import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { SystemComponent } from './systems/system/system.component';


@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
