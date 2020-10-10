import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styles: ['app.component.css'],
})
export class SearchResultComponent implements OnInit {
  searchResults: SearchResult[];
  userquery: string;
  loading: boolean;
  noofpages: string;
  private apiKey: string;
  private apiUrl: string;


  constructor(private http: HttpClient) {
    this.apiKey = '20201007110042';
    this.apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  }

  ngOnInit() {
  }

  makeRequest(): void {
    console.log(this.noofpages);
    let n = this.noofpages == null || this.noofpages.trim().length === 0 ? '10' : this.noofpages;
    const params: string = [
      `q=${this.userquery}`,
      `maxResults=${n}`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    this.loading = true;
    let getResults = this.http
      .get(queryUrl);
    console.log(' I am printing getResults');
    console.log(getResults);
    console.log(' I have printed getResults');
    getResults.map(response => {
      console.log(' I am printing response');
      console.log(response);
      console.log(' I have printed response');
      return response['items'].map(item => {
          console.log(' I am printing item');
          console.log(item);
          console.log(' I have printed item');
          let result =
            new SearchResult({
              id: item.id,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              publisher: item.volumeInfo.publisher,
              description: item.volumeInfo.description
            });
          if (result.description != null && result.description.length > 50) {
            result.description = result.description.substring(0, 50);
          }
          return result;
        }
      );
    })
      .subscribe(data => {
        this.searchResults = data;
        this.loading = false;
      });
  }

}
