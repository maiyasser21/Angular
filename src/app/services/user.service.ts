import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../Shared Classes and types/IUser';
import { error } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe
    (catchError
      ((err)=>
      {
        return throwError(()=>err.message||"Server Error");

      })
    )
  };


}
