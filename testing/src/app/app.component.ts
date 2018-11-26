import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'testing2';
  public user: string;
  public data: string;

  constructor(private userService: UserService) {}

  bonjour() {
    console.log("BONJOUR");
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.userService.getData().then(data => { this.data = data });
  }
}
