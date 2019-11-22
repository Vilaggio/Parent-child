import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  private _url: string = ': https://oxgd0vogaj.execute-api.us-east-2.amazonaws.com/test/allusers/addclient';

  firstName: string = '';
  response: any

  constructor(private http: HttpClient) {
    console.log('test');
  }

  ngOnInit() {
    let http = this.http.get(this._url)
    http.subscribe((response) => console.log(response));
  }

  search() {
    this.http.get(this._url)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

}
