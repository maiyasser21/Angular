import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from '../Shared Classes and types/IComment';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {
  _url:string;

  constructor(private http:HttpClient) { }
  getComments(postId:any):Observable<IComment[]>{
    this._url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    return this.http.get<IComment[]>(this._url).pipe(
      catchError((err)=>{
        return throwError(()=>err.message||"Server Error");
      })
    );
  }
}
