import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tools} from "../../interfaces/tools";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  toolsURL = hostname + '/tools';

  constructor(private httpClient: HttpClient) { }

  getTools() {
    return this.httpClient.get<Tools>(this.toolsURL);
  }
}
