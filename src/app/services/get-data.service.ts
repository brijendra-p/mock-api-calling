import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

url ='https://db.ezobooks.in/kappa/image/task';

  constructor(private http:HttpClient) { 

  }

  callData(): Observable<any> {
    const limit = 100; // Specify the limit here
  const params = { limit: limit.toString() };
  console.log('params',params)
    return this.http.get(this.url , { params });
  }

  // const url = 'https://api.example.com/data';
  // const limit = 100; // Specify the limit here
  // const params = { limit: limit.toString() }; // Convert limit to string
  // return this.http.get(url, { params });

}
