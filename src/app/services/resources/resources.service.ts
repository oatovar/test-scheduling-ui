import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resources} from "../../interfaces/resources";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  resourcesURL = hostname + '/resources';

  constructor(private httpClient: HttpClient) { }

  getResources() {
    return this.httpClient.get<Resources>(this.resourcesURL);
  }
}
