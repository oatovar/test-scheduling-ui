import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestors } from "../../interfaces/requestor";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class RequestorService {
  requestorsURL = hostname + '/requestors';

  constructor(private httpClient: HttpClient) { }

  getRequestors() {
    return this.httpClient.get<Requestors>(this.requestorsURL);
  }
}
