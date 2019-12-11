import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user';
//import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class LoginserviceService {

    private usersUrl:string;
    constructor(private http: HttpClient) {
        this.usersUrl="";
    }

    

}
