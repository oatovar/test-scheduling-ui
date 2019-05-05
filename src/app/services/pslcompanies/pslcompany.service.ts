import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PslCompanies} from "../../interfaces/pslcompanies";
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class PSLCompaniesService {
  pslCompaniesURL = hostname + '/pslcompanies';

  constructor(private httpClient: HttpClient) { }

  getPSLCompanies() {
    return this.httpClient.get<PslCompanies>(this.pslCompaniesURL);
  }
}
