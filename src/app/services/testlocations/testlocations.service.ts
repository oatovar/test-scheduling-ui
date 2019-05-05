import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestLocations } from 'src/app/interfaces/testlocations'
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TestlocationsService {
  testLocationsURL = hostname + '/test-locations';
  constructor(
    private httpClient: HttpClient,
  ) { }

  getTestLocations() {
    return this.httpClient.get<TestLocations>(this.testLocationsURL);
  }
}
