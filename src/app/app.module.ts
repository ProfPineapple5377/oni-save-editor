import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileInputComponent } from './file-input/file-input.component';
import { HeaderComponent } from './header/header.component';
import { SaveEditorComponent } from './save-editor/save-editor.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    HeaderComponent,
    SaveEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
