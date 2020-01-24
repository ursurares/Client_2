import { NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 

export class UserService {


  constructor(private http: HttpClient) { }

  private urlBase = 'http://localhost:8080/';

  public getUsers(): Observable<User[]>{
    const url = 'allUsers';
    return this.http.get<User[]>(url);
  }

  public getUser(): Observable<User> {
    const url = this.urlBase+'userProfile';
    // const httpOptions = {
    //   headers: new HttpHeaders({'token': this.service.getJwtToken()})
    // };
    return this.http.get<User>(url);
  }

  public saveProfile(user : User): Observable<any> {
    return this.http.put(this.urlBase+'users', user);
  }

}


