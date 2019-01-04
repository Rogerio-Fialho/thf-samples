import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThfAvatarModule } from '@totvs/thf-ui/components/thf-avatar';
import { AppComponent } from './app.component';

@NgModule({
imports: [
  BrowserModule,
  ThfAvatarModule
],
declarations: [
  AppComponent
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }