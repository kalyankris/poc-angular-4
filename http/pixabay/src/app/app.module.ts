import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-api/image-list/image-list.component';
import { HttpModule } from '@angular/http';
import { PixaSericeService } from './shared/pixa-serice.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [PixaSericeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
