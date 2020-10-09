import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './search-result.model';
import {
  SearchResultService,
  GOOGLE_API_KEY,
  GOOGLE_API_URL
} from './search-result.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=ingaang')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }
}
