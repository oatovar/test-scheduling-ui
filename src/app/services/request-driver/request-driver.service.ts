import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestDriver} from "../../interfaces/request-driver";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class RequestDriverService {
  driversURL = hostname + '/request-drivers';

  constructor(private httpClient: HttpClient) { }

  getRequestDriver() {
    return this.httpClient.get<RequestDriver>(this.driversURL);
  }
}
