import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribListComponent } from './crib-list/crib-list.component';
import { ComponentSampleComponent } from './component-sample/component-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListComponent,
    ComponentSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
