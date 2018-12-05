import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    return this.httpClient.get('https://randomuser.me/api/?results=100').pipe(map((res: { results:any[], info:any }) => {
      const users = res.results.map(user => {
        const mappedUser = {
          gender: user.gender,
          cell: user.cell,
          email: user.email,
          nat: user.nat,
          phone: user.phone
        }
        return mappedUser;
      })
      return users;
    }));
  }
}
