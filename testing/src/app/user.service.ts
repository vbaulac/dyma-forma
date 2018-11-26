import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: string = "Vico";

  constructor() { }

  getData() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => { resolve('newData');
      }, 2000)});
  }
}
