import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestContacts} from "../../interfaces/test-contact";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class TestContactsService {
  testContactsURL = hostname + '/contacts';

  constructor(private httpClient: HttpClient) { }

  getTestContacts() {
    return this.httpClient.get<TestContacts>(this.testContactsURL);
  }
}
