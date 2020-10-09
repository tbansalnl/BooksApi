import {
  SearchResultService,
  GOOGLE_API_KEY,
  GOOGLE_API_URL
} from './search-result.service';

export const SearchResultInjectables: Array<any> = [
  {provide: SearchResultService, useClass: SearchResultService},
  {provide: GOOGLE_API_KEY, useValue: GOOGLE_API_KEY},
  {provide: GOOGLE_API_URL, useValue: GOOGLE_API_URL}
];
