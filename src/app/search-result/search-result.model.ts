import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  publisher: string;
  author: string[];

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.author = obj && obj.author || null;
    this.publisher = obj && obj.publisher || null;
    this.description = obj && obj.description || null;
  }
}
