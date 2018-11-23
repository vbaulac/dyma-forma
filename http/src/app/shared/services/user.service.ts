import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private httpService: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>('https://httpangular-7ab1f.firebaseio.com/users.json',
    {
      // observe: 'response' || 'body'
      // params: new HttpParams().set('clef1', 'val1').append('clef2', 'val2'),
      // headers: new HttpHeaders().set('Authorization','blablatoken').append('blabla', 'blabla')
    });
  }

  createUsers(users: User[]) {
    return this.httpService.put('https://httpangular-7ab1f.firebaseio.com/users.json', users);
  }
}
