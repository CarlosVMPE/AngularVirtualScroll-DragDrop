import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragComponent } from './drag/drag.component'

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
