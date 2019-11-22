import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = 'https://oxgd0vogaj.execute-api.us-east-2.amazonaws.com/test/allusers/addclient';

  constructor(private http: HttpClient) { }
  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
