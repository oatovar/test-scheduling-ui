import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChargeCodes } from 'src/app/interfaces/chargecodes';
import hostname from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class ChargeCodesService {
  chargeCodesURL = hostname + '/chargecodes';
  constructor(
    private httpClient: HttpClient
  ) { }

  getChargeCodes() {
    return this.httpClient.get<ChargeCodes>(this.chargeCodesURL);
  }
}
