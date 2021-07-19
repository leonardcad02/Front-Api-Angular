import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response as httpResponse} from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
// Metodos para enlazar el fronted con la api-rest
export class EmployeesServiceService {
  private url: String= "http://localhost:3000";
  constructor(private http: HttpClient) {}

// Metodo Get para lsitar los empleados
  public getEmployees(): Observable<httpResponse> {
    const urlPeticion= `${this.url}/user`;
    console.log(urlPeticion);
    return this.http.get<httpResponse>(urlPeticion);
  }

// Metodo POST para guardar los empleados
  public saveEmployees(): Observable<httpResponse> {
    const urlPeticion= `${this.url}/user/id`;
    console.log(urlPeticion);
    return this.http.get<httpResponse>(urlPeticion);
  }

}
