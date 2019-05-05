import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Priorities } from 'src/app/interfaces/priorities';
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class PrioritiesService {
  prioritiesURL = hostname + '/priorities';
  constructor(
    private httpClient: HttpClient,
  ) { }

  getPriorities() {
    return this.httpClient.get<Priorities>(this.prioritiesURL);
  }
}
