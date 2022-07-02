import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule],
  declarations: [AppComponent, HelloComponent, HomeComponent],
  bootstrap: [AppComponent],
  exports: [MatCardModule],
})
export class AppModule {}
