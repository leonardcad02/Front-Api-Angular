import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response as httpResponse} from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {
  private url: String= "http://localhost:3000";
  constructor(private http: HttpClient) {}


  public getEmployees(): Observable<httpResponse> {
    const urlPeticion= `${this.url}/user`;
    console.log(urlPeticion);
    return this.http.get<httpResponse>(urlPeticion);
  }

  public saveEmployees(): Observable<httpResponse> {
    const urlPeticion= `${this.url}/user/id`;
    console.log(urlPeticion);
    return this.http.get<httpResponse>(urlPeticion);
  }

}
