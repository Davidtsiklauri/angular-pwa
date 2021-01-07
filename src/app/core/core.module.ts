import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [BrowserModule, AppRoutingModule],
})
export class CoreModule {}
