import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SystemsComponent } from './systems/systems.component';
import { SystemComponent } from './systems/system/system.component';
import { SystemService } from './services/system.service';


@NgModule({
  declarations: [
    AppComponent,
    SystemsComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, CommonModule
  ],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
