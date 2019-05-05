import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {SearchResults} from "../../interfaces/search-results";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchURL = hostname + '/search?search=';

  constructor(private http: HttpClient) {}

  getSearchResults(searchString: string) {
    return this.http.get<SearchResults>(this.searchURL + searchString);}
}
