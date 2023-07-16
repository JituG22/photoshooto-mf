import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRemoteComponent } from './home-remote/home-remote.component';
import { FolderUploadModule } from './folder-upload/folder-upload.module';
@NgModule({
  declarations: [AppComponent, HomeRemoteComponent],
  imports: [BrowserModule, AppRoutingModule, FolderUploadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
