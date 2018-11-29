import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
