import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public username: string;
  public users: User[];

  // public users: User[] = [
  //   { id:0, name:"Louis", age:18},
  //   { id:1, name:"Paul", age:45},
  //   { id:2, name:"Jean", age:33},
  // ]
  title = 'http';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => { 
      if (users)
        this.users = users
      else
        this.users = [];
    },
    (error) => {
      // what to do on error
    });
  }

  addUser() {
    this.users.push(new User(this.username, 77));

    this.userService.createUsers(this.users).subscribe( res => {
      console.log('from callback', res);
      this.username = '';
    });
  }
}
