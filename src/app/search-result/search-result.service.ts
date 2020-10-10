import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SearchResult } from './search-result.model';

export const GOOGLE_API_KEY =
  '20201007110042';
export const GOOGLE_API_URL =
  'https://www.googleapis.com/books/v1/volumes?q=ingaang';


@Injectable()
export class SearchResultService {
  constructor(
    private http: HttpClient,
    @Inject(GOOGLE_API_KEY) private apiKey: string,
    @Inject(GOOGLE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [

    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl).map(response => {
      return response['items'].map(item => {
         return new SearchResult({
          authors: item.author,
          title: item.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}
