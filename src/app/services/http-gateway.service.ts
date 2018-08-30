import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpGatewayService {
  host = 'localhost:3000'

  constructor(
    public http: Http,
    public httpClient: HttpClient
  ) { }

  get(url) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`http://${this.host}${url}`).subscribe((res: any) => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`http://${this.host}${url}`, body).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
