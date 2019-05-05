import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Groups } from 'src/app/interfaces/groups';
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  groupsURL = hostname + '/groups';

  constructor(private httpClient: HttpClient) { }

  getGroups() {
    return this.httpClient.get<Groups>(this.groupsURL);
  }
}