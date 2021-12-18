import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appStoreProviders } from './app.store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [appStoreProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
